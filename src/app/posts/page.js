import Link from 'next/link';

export default async function Posts() {

    const res = await fetch('https://dummyjson.com/posts');
    const { posts } = await res.json();
    console.log(posts);

    return (
        <div>
            <h1>All Blog Posts With a Change</h1>
            <hr style={{ width: '220px' }} />
            <div style={{ paddingTop: '40px' }}>
                {posts.map(post => (
                    <article key={post.id}>
                        <Link href={`posts/${post.id}`}>
                            <h2>{post.title}</h2>
                        </Link>
                        <p style={{ paddingBottom: '30px' }}>{post.body}</p>
                    </article>
                ))}
            </div>
        </div>
    );
}