import { client } from '@/lib/sanity.client'

async function getPosts() {
  const query = `*[_type == "post"] {
    title,
    slug,
    content
  }`
  
  return client.fetch(query)
}

export default async function HomePage() {
  const posts = await getPosts()
  
  return (
    <div>
      {posts.map((post: any) => (
        <div key={post.slug.current}>
          <h2>{post.title}</h2>
        </div>
      ))}
    </div>
  )
} 