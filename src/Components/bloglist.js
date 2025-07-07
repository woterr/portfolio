import React, { useEffect, useState } from 'react';
import matter from 'gray-matter';


function BlogList() {
    const [posts, setPosts] = useState([]);
    const stripMarkdown = (text) => text.replace(/\[.*\]\(.*\)\!/, '');
    useEffect(() => {
        const loadPosts = async () => {
            const indexRes = await fetch('/content/blogs/index.json');
            const files = await indexRes.json();

            const loaded = await Promise.all(
            files.map(async (file) => {
                const res = await fetch(`/content/blogs/${file}`);
                const text = await res.text();
                const { data, content } = matter(text);
                const preview = stripMarkdown(content).split(' ').slice(0, 20).join(' ') + '...';
                return {
                ...data,
                slug: file.replace('.md', ''),
                preview
                };
            })
        );

        setPosts(loaded);
    };

    loadPosts();
    }, []);

  return (
    <>
        <main className='main'>
            <section className='section'>
                <div className='container grid'>
                    <h1 className='section_title'>Blog</h1>
                    <div className='blog_list_container'>
                        {posts.map((post, i) => (
                            <a key={i} className='blog_card' href={`/blog/${post.slug}`}>
                                <h2 className="title">{post.title}</h2>
                                <p className='date'>{new Date(post.date).toLocaleDateString("en-GB", {
                                    day: "2-digit",
                                    month: "2-digit",
                                    year: "numeric",
                                })}</p>
                                <p className='tags'>
                                    {post.tags.map((tag, i) => (
                                        <span key={i} className='tag'>{tag}</span>
                                    ))}
                                </p>
                                <p className='blog_preview'>{post.preview}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    </>
  );
}

export default BlogList;