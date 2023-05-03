import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefsCard = ({chef}) => {
    const {_id,name,picture,experience_years,num_recipes,Likes} = chef;
    // console.log(_id);
    return (
        <Card className="mb-2"style={{ width: '36rem' }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>Experience year:{experience_years}</p>
            <p>Number of Recipes:{num_recipes}</p>
            <p>Likes:{Likes}K</p>
          </Card.Text>
          <Link to={`/chef/${_id}`}><Button variant="primary">View Recipe</Button></Link>
        </Card.Body>
      </Card>
    );
};

export default ChefsCard;