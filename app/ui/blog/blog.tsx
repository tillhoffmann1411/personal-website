'use client';
import React, { useEffect } from 'react';
import Carousel from './carousel';
import { getBlogPosts } from '../../lib/actions';
import { BlogPost } from '../../lib/definitions';

const BlogFeed = () => {
    const [blogPosts, setBlogPosts] = React.useState<BlogPost[]>([]);

    useEffect(() => {
        const loadBlogPosts = async () => {
            const posts = await getBlogPosts();
            setBlogPosts(posts);
        };

        loadBlogPosts();
    }, []);

    return (
        <section className="mt-20" id="blog">
            <div className="py-6">
                <h2 className="dark:text-white">Blog</h2>
            </div>
            {blogPosts.length > 0
                ? (<Carousel articles={blogPosts} />) : (
                    <a href="https://medium.com/@hoffmann.webdev" className="flex flex-col items-center bg-gray-200 rounded-2xl md:flex-row md:max-w-xl hover:opacity-80 dark:bg-gray-900">
                        <img className="object-cover w-full rounded-2xl h-48 md:h-48 md:w-48" src="https://images.unsplash.com/photo-1626908013351-800ddd734b8a?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Checkout my Blog on medium</h5>
                            <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Here you can find topics I work on and much more.<br />
                                <span className="text-gray-500">https://medium.com/@hoffmann.webdev</span>
                            </div>
                        </div>
                    </a>
                )}
        </section>
    )
};

export default BlogFeed;
