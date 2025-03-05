import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ArchivePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the WordPress REST API including the featured image
    const fetchPosts = async () => {
      const response = await fetch('https://backend.focusonlinetravel.co.za/wp-json/wp/v2/posts?_embed');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className='container mx-auto px-4 text-center'>
      <h1 className='text-3xl mt-4 mb-9 font-bold'>Blog Archive</h1>
      <div className="posts-list">
        {posts.length === 0 ? (
          <p>Loading posts...</p>
        ) : (
          posts.map(post => {
            // Get the featured image if it exists
            const featuredImage =
              post._embedded['wp:featuredmedia'] &&
              post._embedded['wp:featuredmedia'][0]?.source_url;

            return (
              <article className="content" key={post.id}>
                {/* Display featured image if available */}
                {featuredImage && (
                  <Image
                    src={featuredImage}
                    alt={post.title.rendered}
                    width={800}  // Adjust width as needed
                    height={400} // Adjust height as needed
                    className="featured-image"
                  />
                )}
                <div className="content py-8">
                    <h2 className='text-xl font-bold'>
                        {post.title.rendered}
                    </h2>
                    <div className="content py-2" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                    <Link className="btn" href={`/blog/${post.slug}`}>
                        Read more
                    </Link>
                </div>
              </article>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ArchivePage;
