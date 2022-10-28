import useFetch from '../../hooks/useFetch';

const Async = () => {
  const [posts, loading, error] = useFetch('https://jsonplaceholder.typicode.com/posts', {})
  console.log(error);
  if (loading) { 
    return <p>Loading ...</p>
  }
  return (
    <div>
      <ul>
        { posts&&posts.map(post => <li key={ post.id }> { post.title}</li>)}
      </ul>
    </div>
   
  )
}

export default Async