import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import matter from 'gray-matter';


function BlogView() {
    const { slug } = useParams();
    const [content, setContent] = useState('');
    const [data, setData] = useState({});

    useEffect(() => {
    const loadPost = async () => {
        const res = await fetch(`/content/blogs/${slug}.md`);
        const raw = await res.text();
        const parsed = matter(raw);
        setData(parsed.data);
        setContent(parsed.content);
    };
    loadPost();
    }, [slug]);

  return (
    <>
        <main className='main'>
            <section className='section'>
                <div className='container'>
                    <h1 className='section_title'>{data.title}</h1>
                    <p className='date'>{new Date(data.date).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                    })}</p>
                    <p className='markdown-body'><ReactMarkdown>{content}</ReactMarkdown></p>
                </div>
            </section>
        </main>
    </>
  );
}

export default BlogView;