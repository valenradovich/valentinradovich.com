---
title: how a raw genius trained himself to be a reasoning LLM model (almost)
date: '2025-02-01'
published: true
---

Friendly introduction to understand how DeepSeek-R1-Zero reinforcement learning (RL) algorithm (GRPO) almost works by itself and why exactly it is so good and efficient.

**Training phases**: To understand all this RL relation to LLMs and why it's important, we first need to know what's Supervised fine-tuning (SFT), how and why it's used.

Simplistically, the steps to train an LLM could be summarized in the `pre-training` and `post-training` phases.

`pre-training`: when the base model appears, the pretrained base model is the one that has learned general language understanding through self-supervised learning on big (really big) corpus of text.

`post-training`: SFT goes here, it's fine-tuning the pretrained model to learns to predict the desired responses given prompts. But for that, a dataset must be created. Those high-quality and input-output pairs dataset consume a lot of time, effort and money to be created; but they must be done. Why?

Because without SFT, a language model would just be a sophisticated text prediction engine completing text in ways that are grammatically correct and contextually coherent, but not necessarily helpful or aligned with what users or humans actually want.

The base pre-trained model is like having a brilliant but completely unfiltered mind that just wants to predict what text comes next. SFT is like teaching the LLM to put that knowledge in a way to be truly helpful like **"this is how you should respond to questions,"** **"this is how you should explain concepts,"** **"this is how you should help with tasks."**

It's what transforms the model from just predicting "what words are likely to come next" to understanding **"how should I be helpful in this conversation or given this query?"**.

Think of it like taking a person who has read and knows everything in the world but doesn't know how to have a proper conversation, SFT is like teaching them social skills and how to use their knowledge to help rather than just showing off everything they know.

**The RL algorithm: Group Relative Policy Optimization (GRPO)**: This was the Reinforcement learning method used to train, in this case an LLM, without human-labeled data, saving a lot of time and money. As it will be presented here is how it was used to train DeepSeek-R1-Zero on top of DeepSeek-V3-Base, a model without SFT.

**Step 1:** For a question `q`, generate `G` (G is like say N, just a number) candidate answers (a "group") using the current model.

**Step 2:** Score each answer (output) `o_i` using a reward function (eg., checking if the final answer is correct).

**Step 3:** Calculate the advantage $$A_i$$ for each answer: This tells us how much better/worse each answer is compared to the group average.

$$
A_i = \frac{r_i - \mu_G}{\sigma_G}
$$
Where:

- $$r_i$$ is the reward of answer $$o_i$$
- $$\mu_G$$ is the average reward of the group
- $$\sigma_G$$ is the standard deviation of rewards in the group

**Step 4:** Update the model to favor answers with high advantages, but limit drastic changes using:

- Clipping: prevent the model from overreacting to extremely high/low rewards by clipping the policy update ratio.

- KL Penalty: add a penalty if the new model deviates too far from a reference model (to avoid catastrophic forgetting).

**Reward Modeling**:
Basically categorize what output is high-quality, mid-quality and low-quality so the model can prioritize high-quality output. So, we have to types of rewards to balance between correctness and formatting.

**Accuracy reward:** to ensure the answer is correct, a binary output i assume.

$$
r_{acc} = \begin{cases}
1 & \text{if answer is correct} \\[6pt]
0 & \text{otherwise}
\end{cases}
$$

**Format reward:** to enforce the model to follow the desired output structure, which in this case is use the `<think>` and `<answer>` tags correctly.

$$
r_{format} = \begin{cases}
1 & \text{if formatting is perfect} \\[6pt]
0 & \text{otherwise}
\end{cases}
$$

Then we have a total reward for an output $$o_i$$ from each of the output groups.

$$
r_i = r_{acc} + r_{format} = \begin{cases}
2 & \text{for perfect output} \\[6pt]
1 & \text{for partially correct} \\[6pt]
0 & \text{if both aspects are wrong}
\end{cases}
$$

**Training template and "training loop"**:

`A conversation between User and Assistant. The user asks a question, and the Assistant solves it.
The assistant first thinks about the reasoning process in the mind and then provides the user
with the answer. The reasoning process and answer are enclosed within <think> </think> and
<answer> </answer> tags, respectively, i.e., <think> reasoning process here </think>
<answer> answer here </answer>. User: {prompt}. Assistant:`

All the above process runs based on a training template used, that shapes how the output format should be but not limiting or contraining the LLM, to observe the model's natural problem-solving evolution during RL. If content rules are imposed, the results might reflect biases rather than the model's true.

**Step 1:** The model takes the template in training (and inference too) to generate the outputs.

**Step 2:** For each question `q` a group of outputs is created with this fixed template.

**Step 3:** Reward calculation is performed to each output.

**Step 4:** Policy is updated to increase the likelyhood of high-quality outputs.

Hope this little summary -actually my notes- about the first attempt made by
[`@deepseek_ai`](https://x.com/deepseek_ai) to find reasoning will help you to understand it. And, also, I want to encourage you to read the paper that can't be easier to understand and you will find the final technique (which of course GRPO used + some more things) that I didn't make notes yet.

Paper link: [DeepSeek-R1: Incentivizing Reasoning in LLMs via Reinforcement Learning](https://github.com/deepseek-ai/DeepSeek-R1/blob/main/DeepSeek_R1.pdf)
