import React, { useEffect, useState } from 'react';

const Middle = () => {
    const [chefs,setChefs] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:3000/chef')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <h2>Component is comming</h2>
        </div>
    );
};

export default Middle;