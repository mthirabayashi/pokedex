import React from 'react';

const ItemDetail = ({item}) => {

 return (
   <div>
     <li>Name: {item.name}</li>
     <li>Happiness: {item.happiness}</li>
     <li>Price: {item.price}</li>
   </div>
 )
}

export default ItemDetail;
