type Post = {
  id: number
  title: string
}

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts",{cache:"no-store"})
  const posts: Post[] = await res.json()

  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.id}</p>
          <p>{post.title}</p>
        </div>
      ))}
    </>
  )
}

