import React, { useEffect, useState } from 'react';
import matter from 'gray-matter';


function Home() {
  // dont touch this it finally works
    const [posts, setPosts] = useState([]);
    const stripMarkdown = (text) => text.replace(/\[.*\]\(.*\)\!/, '');
    useEffect(() => {
        const loadPosts = async () => {
            const indexRes = await fetch('/content/blogs/featured.json');
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
      <main className="main">
        <section className="landing section">
          <div className="container landing_container grid">
            <div className="lander">
              <h1 className="section_title">Where Creativity -<br/>Meets <span className="code">Technology</span></h1>
              <div className="cta">
                <a className="button" href="/posts">View Projects</a>
                <a className="button_secondary" href="/contact">Contact Me</a>
              </div>
            </div>
            {posts.map((post) => (
              <a key={post.slug} className="blog_card" href={`/blog/${post.slug}`}>
                <h2 className="title">Featured Blog -</h2>
                <h3>{post.title}</h3>
                <p>{post.preview}</p>
              </a>
            ))}
          </div>
        </section>
        <section className="artwork section">
          <div className="projectscontainer container">
            <h1 className="section_title">Recent Projects</h1>
            <a href='https://github.com/woterr/' className='button_secondary'>Github</a>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
