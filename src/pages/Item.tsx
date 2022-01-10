import React from 'react';
import { useParams } from 'react-router-dom';
import { items } from '../data';

function Item() {
  const params: any = useParams();
  console.log(params);

  const getItem = (id: any) => items.find(
    (item) => item.id === id,
  );
  const res = getItem(parseInt(params.id));
  console.log(res);

  return (
    <div>
      <h1 className='text-3xl '>Item</h1>
      <p>{res?.id}</p>
      <p>{res?.name}</p>
      <p>{res?.age}</p>
    </div>
  );
}

export default Item;
