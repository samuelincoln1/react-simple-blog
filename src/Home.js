
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
               return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsLoading(false);
            });
        }, 1000);
    }, []);
   

    return ( 
        <div className="home">
            {isLoading && <div>Carregando...</div>}
            {blogs && <BlogList blogs={blogs} title="Todos os blogs"/>}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'samuel')} title="Blogs do samuel" handleDelete={handleDelete}/>  */}
       


        </div>
     );
}
 
export default Home;