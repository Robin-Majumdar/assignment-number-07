import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('Blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));

    }, []);

    return (
        <div className="container mx-auto grid grid-cols-3 gap-4 mt-8 mb-6">
            {
                blogs.map(blog => <Blog key={blog.playerId} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;