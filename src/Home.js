
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
       fetch('http://localhost:8000/blogs')
        .then(res => {
           return res.json();
        })
        .then(data => {
            console.log(data);
            setBlogs(data);
        });

    }, []);
   
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);     
    }

    return ( 
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="Todos os blogs" handleDelete={handleDelete}/>}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'samuel')} title="Blogs do samuel" handleDelete={handleDelete}/>  */}
       


        </div>
     );
}
 
export default Home;