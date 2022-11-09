import { useState } from 'react';

import {FiSearch} from 'react-icons/fi'
import Search from './Search';
import '../index.css';
import Home from './Home';

const Logo = () =>{
    const [search, setSearch] = useState("");
    const [display, setDisplay] = useState(false);
    
    const  handlSearch = () => {

        if(search === "uber"){
            setDisplay(true);
        }
    }

    const handleSearchChnage = (e) => {
        // console.log(e.target.value);
        setSearch(e.target.value);
        // console.log(e.key)
        
        
    };

    const handleEnter = (e) =>{
    
        if(e.key === "Enter"){
            // console.log(e.target.value)
             handlSearch();
        }
    }

    return( 
        <>
            
                <img class="home-image" src="img/logo.png" alt="Logo"/>
                <div className='container-input'>
                
                    <input 
                    value={search}
                    type='text' 
                    placeholder = 'What do you want to search here?' 
                    onChange={(e) => {handleSearchChnage(e)}}
                    onKeyDown={(e)=>handleEnter(e)}
                    />
                    <button onClick={handlSearch}> <FiSearch/></button>
                
                </div>

            
            

            { !display?
                <Home/>
            :<Search text ={search}/>}

          

            
        </>
    );

}

export default Logo;