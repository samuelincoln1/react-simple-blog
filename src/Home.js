
import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {
            title: 'Novo website',
            body: 'lorem ipsum...',
            author: 'samuel',
            id: 1
        },
        {
            title: 'Festa de boas vindas!',
            body: 'lorem ipsum...',
            author: 'mario',
            id: 2
        },
        {
            title: 'Novidades de tecnologia',
            body: 'lorem ipsum...',
            author: 'samuel',
            id: 3
        },
    ]);
   
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);     
    }

    return ( 
        <div className="home">
         <BlogList blogs={blogs} title="Todos os blogs" handleDelete={handleDelete}/>
         <BlogList 
            blogs={blogs.filter((blog) => blog.author === 'samuel')} 
            title="Blogs do samuel" 
            handleDelete={handleDelete}/>
           
        </div>
     );
}
 
export default Home;