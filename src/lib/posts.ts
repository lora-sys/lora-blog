export interface PostMeta{
    slug: string;
    title: string;
    date: string;
}

export interface Post extends PostMeta{
    content:string;
}
export function getAllPosts():PostMeta[] {
return (
    [
        {
            slug:"hello-vite",
            title:"hello vite",
            date:"2025-7-16"
        },
        {
            slug:"second-post",
            title:"second post",
            date:"2025-7-17"
        },
        {
            slug:"third-post",
            title:"third-post",
            date:"2025-7-18"
        }
    ]
);
}
export function getPostByslug(slug:string):Post | undefined{
    const map:Record<string,Post>={
        'hello-vite':{
            slug:"hello-vite",
            title:"hello vite",
            date:"2025-7-16",
            content:"# Hello Vite\n\n This is my **first** post.",
        },
        'second-post':{
            slug:"second-post",
            title:"second-post",
            date:"2025-7-17",
            content:"## Second Post\n\nStill no parser,just plain MD.",
        },
        'third-post':{
            slug:"third-post",
            title:"third-post",
            date:"2025-7-18",
            content:'> Third time lucky. \n\nPlain text again.',
        },

    };
    return map[slug];
}