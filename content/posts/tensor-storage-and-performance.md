---
title: why tensors perform insanely faster than lists?  — an introduction to storage
date: '2024-11-14'
published: true
---

This is how **Tensors**, a way to store and handle data, looks like in **PyTorch**, in this case is just a row (1-dim tensor):

![](https://cdn-images-1.medium.com/max/800/0*y4CqOOkjF-FDH64x)As you may notice, it does not differ that much in how a list or array regularly works in Python, but **under the hood they are completely different**. Let’s focus on how they are designed and implemented.

**Python lists are collections of objects** which are individually allocated in a container of memory, on the other hand **Torch Tensors (and Numpy arrays) are views stored in a contiguos memory blocks** who contains C numeric types.

![](https://cdn-images-1.medium.com/max/800/0*DtAbc507jtrFxxBK)

But let’s see **how much memory** it implies directly in the code:

![](https://cdn-images-1.medium.com/max/800/0*AclWd05fD7CoyDDe)In this example with 4 scalar values in float64 per each data store structure, we found a number of 32 vs 184 bytes, **a 5.75X less in memory for Tensors.**

**Why is this happening?**

_Python List stores (184 bytes):_

- list object itself (with metadata, reference count, type information).
- each value is an object (with header, reference count, type pointer and the actual float64 value).

_Torch Tensor stores (32 bytes):_

- raw data only, so is 8 bytes each float64.

**What is PyTorch doing?** store the values sequentially, managed by `_torch.Storage_`.

![](https://cdn-images-1.medium.com/max/800/0*O-eHroLuFJjsgY3T)

A Storage is a **one-dimensional array of numbers**, so a Tensor is basically a **view of a given storage**, formatted to fit the required structure.

You can see in the image that **multiple tensors can index in the same storage**, even with different indexes. The memory is allocated only once, and **each tensor is a different view of the storage**.

The following code example show it: **a 3x2 tensor, stored in sequentially in one dimension of size 6.**

![](https://cdn-images-1.medium.com/max/800/0*yvyqOb4GEC3ZOOWD)How PyTorch handles the tensor’s storage is really good initial knowledge to understand **how it is possible to perform billions or even trillions of operations** in less than seconds — of course, with the help of GPUs —

_Thank you for reading :)_
