
import { useState } from "react";

const Home = () => {

    // let name = 'samuel';
    const [name, setName] = useState('samuel');

    const handleClick = () => {
        setName('samuel dois');
    }

    return ( 
        <div className="home">
            <h2>HomePage</h2>´
            <p>{name}</p>
            <button onClick={handleClick}>Clicar</button>
           
        </div>
     );
}
 
export default Home;