import * as React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export interface AllBlogsProps { }

export interface Blog {
    id: number,
    name: string,
    title: string,
    content: string,
    _created: Date,
    authorid: number
}

const AllBlogs: React.SFC<AllBlogsProps> = () => {

    const [blogs, setBlogs] = useState<Blog[]>([]);

    const getBlogs = async () => {
        try {
            let r = await fetch('api/blogs');
            let blogs = await r.json();
            setBlogs(blogs);
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => { getBlogs() }, [])

    return (
        <>
            <div className="row ">
                {blogs.map(blog => {
                    return (
                        <article className="col-md-4 p-2" key={blog.id}>
                            <div className="card m-2 p-1 border-dark rounded">
                                <div className="card-img-wrapper">
                                        <p className="card-text  h-50 pt-2 blog-title-img">{blog.title}</p>
                                    <img src="images/clipboard.jpg" alt="clipboard" className="card-img-top" />
                                </div>
                                <div className="card-body">
                                    <p className="card-text">{blog.name}</p>
                                    <p className="card-text">{blog._created}</p>
                                    <Link to={`/blogs/${blog.id}`} className="btn btn-warning shadow btn-block mx-auto" >View Blog</Link>
                                </div>
                            </div>
                        </article>
                    )
                })}

            </div>
        </>
    );
}

export default AllBlogs;