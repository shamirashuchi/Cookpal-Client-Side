import React, { useEffect, useState } from 'react';
import ChefsCard from '../Components/ChefsCard/ChefsCard';

const Middle = () => {
    const [chefss,setChefs] = useState([]);
    useEffect( () =>{
        fetch('https://chef-server-shamirashuchi.vercel.app/chef')
        .then(res => res.json())
        .then(data => setChefs(data.chefs))
        .catch(error => console.error(error))
    }, [])
    return (
        <div>
            {
               chefss.map(chef => <ChefsCard
               key={chef._id}
               chef={chef}
               ></ChefsCard>) 
            }
        </div>
    );
};

export default Middle;