import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { items } from '../data';

const Item = (props) => {
  console.log('props', props)
  //const [test, setTest] = useState<number>('1')
  const params: any = useParams();
  console.log('params', params);

  const location = useLocation()
  console.log('location', location)

  const getItem = (id: any) => items.find(
    (item) => item.id === id,
  );
  const res = getItem(parseInt(params.id));

  //const [test, setTest] = useState<number>("hello");
  //const test;

  return (
    <div>
      <h1 className='text-3xl'>Item</h1>
      <p>{res?.id}</p>
      <p>{res?.name}</p>
      <p>{res?.age}</p>
    </div>
  );
}

export default Item;
