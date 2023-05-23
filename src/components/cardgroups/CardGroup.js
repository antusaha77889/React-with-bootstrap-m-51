import React from 'react';
import Card from '../card/Card';

const CardGroup = () => {
      const products =[
        {id:1, Name:'mac book pair',pair:12500},
        {id:2, Name:'pac book pair',pair:13500},
        {id:3, Name:'gac book pair',pair:16500},
      ]

    return (
        <div className="card-group">
            {
                products.map(product => <Card key={product.id} product={product}></Card>)
            }
        </div>   
        
    );
};

export default CardGroup;