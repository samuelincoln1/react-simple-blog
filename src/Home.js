
import { useState } from "react";

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
            author: 'pedro',
            id: 3
        },
    ]);
   

    return ( 
        <div className="home">
           {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Escrito por {blog.author}</p>
                </div>
           ))}
           
        </div>
     );
}
 
export default Home;