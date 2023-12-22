export default async function SinglePost({ params }) {
    
    const res = await fetch(`https://dummyjson.com/posts/${params.id}`);
    const { body } = await res.json();
    console.log(body);
    return (
        <div>{body}</div>
  );
}