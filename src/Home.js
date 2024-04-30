
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
            author: 'pedro',
            id: 3
        },
    ]);
   

    return ( 
        <div className="home">
         <BlogList blogs={blogs}/>
           
        </div>
     );
}
 
export default Home;