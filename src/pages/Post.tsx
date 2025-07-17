import { useParams,Link } from "react-router-dom";
import { getPostByslug }  from "../lib/posts";
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm";

export default function Post() {

    const {slug} =useParams<{slug:string}>();
    const post=getPostByslug(slug ?? "");
    if(!post){
        return <main style={{padding:24}}>
        <h1>404-Post Not Found</h1>
        <p>找不到 slug为 <strong>{slug}</strong>的文章</p>
        <Link to="/">返回首页</Link>
        </main>
    };
    return (
        <main style={{padding:24,maxWidth:800}}>
       <h1>{post.title}</h1>
       <small>{post.date}</small>
       <article >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {post.content}   
        </ReactMarkdown>

       </article>
        <Link to="/"> - Back To List</Link>
        </main>
    );
}