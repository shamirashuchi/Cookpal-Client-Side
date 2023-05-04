import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import {useParams } from 'react-router-dom';
import Recipecard from '../Recipecard/Recipecard';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const SpecificCard = () => {
    const {id} = useParams();
    const [user,setUser] = useState({})
    useEffect( () =>{
        fetch(`https://chef-server-shamirashuchi.vercel.app/chef/${id}`)
        .then(res => res.json())
        .then(data => setUser(data))
        .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <Header></Header>
           <div>
           <Card style={{ width: '95rem' }}>
                <Card.Img variant="top" src={user.picture} />
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>
                    {user.bio}
                    </Card.Text>
                        <div className='d-flex'>
                        <p>Experience year:{user.experience_years}y</p>
                        <p className='ms-5'>Number of Recipes:{user.num_recipes}</p>
                        <p className='ms-5'>Likes:{user.Likes}K</p>
                        </div>
                </Card.Body>
            </Card>
           </div>

            <div className='d-flex justify-content-around mt-5 mb-5'>
            {
               user.recipes && user.recipes.map(recipe => <Recipecard
                recipe={recipe}>
               </Recipecard>) 
            }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SpecificCard;
