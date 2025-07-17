import {useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import { getAllPosts} from '../lib/posts';
import  type { PostMeta } from '../lib/posts';

export default function Home() {
    const [posts,setPosts]=useState<PostMeta[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        try {
            const postsData = getAllPosts();
            if (postsData.length === 0) {
                setError('No posts found');
            }
            setPosts(postsData);
        } catch (err) {
            setError('Failed to load posts');
            console.error(err);
        }
    },[]);
    return (
        <main style={{padding: 24}}>
        <h1>All Posts</h1>
        {error && <p style={{color: 'red'}}>{error}</p>}
       <ul>
        {posts.map(post=>(
            <li key={post.slug}>
                <Link to={`/post/${post.slug}`}>{post.title}</Link>
                <small>--{post.date}</small>
            </li>
        ))}
       </ul>
        </main>
    )
}