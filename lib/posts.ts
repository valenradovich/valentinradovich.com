import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface Post {
  slug: string
  title: string
  date: string
  content: string
  published: boolean
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      slug: fileName.replace(/\.md$/, '')
    }
  })
}

export function getSortedPostsData(includeUnpublished = false): Post[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // remove ".md" from file name to get slug
    const slug = fileName.replace(/\.md$/, '')

    // read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
    
    // default published to true if not specified
    const published = matterResult.data.published !== false

    // combine the data with the slug
    return {
      slug,
      content: matterResult.content,
      published,
      ...(matterResult.data as { title: string; date: string })
    }
  })

  // filter out unpublished posts if needed
  const filteredPosts = includeUnpublished 
    ? allPostsData 
    : allPostsData.filter(post => post.published)

  // sort posts by date
  return filteredPosts.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getPostData(slug: string, includeUnpublished = false): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)
  
  // default published to true if not specified
  const published = matterResult.data.published !== false
  
  // return null if post is not published and includeUnpublished is false
  if (!published && !includeUnpublished) {
    return null
  }

  // combine the data with the id
  return {
    slug,
    content: matterResult.content,
    published,
    ...(matterResult.data as { title: string; date: string })
  }
} 