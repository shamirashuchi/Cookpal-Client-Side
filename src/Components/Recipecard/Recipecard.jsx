import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import  toast from 'react-hot-toast'

const Recipecard = ({recipe}) => {
    const [disabled, setDisabled] = useState(false)
    const handletoast = (event) =>{
        toast.success('The recipe is your favorite');
        setDisabled(true);
    }
  return (
    <div>
        <Card style={{ width: '18rem' }} className='mt-5 ms-lg-0 ms-5'>
      <Card.Body>
        <Card.Title>{recipe.name}</Card.Title>
        <Card.Text>
          Ingredients:
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </Card.Text>
        <p>Cooking-method{recipe.cooking_method}</p>
        <p>Rating:{recipe.rating}</p>
        <Button disabled={disabled} onClick={handletoast}variant="primary">Favourite</Button>
      </Card.Body>
    </Card>
    </div>
  );
};

export default Recipecard;
