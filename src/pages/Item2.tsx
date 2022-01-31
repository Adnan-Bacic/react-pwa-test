import React from 'react';
import { useParams } from 'react-router-dom';

const Item2 = () => {
  const params = useParams()
  console.log('p2', params)
  return (
    <div>
      <h1 className='text-3xl'>Items</h1>
      <p>id: {params.id}</p>
    </div>
  );
}

export default Item2;
