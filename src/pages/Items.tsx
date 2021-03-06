import React from 'react';
import { Link } from 'react-router-dom';
import { items } from '../data';

const Items = () => {
  return (
    <div className='flex'>
    <div className='flex-1'>
            <h1 className='text-3xl'>Items - Navigate</h1>
      {items.map((item) => {
        return(
        <Link
          style={{ display: 'block', margin: '1rem 0' }}
          to={`/items/${item.id}`}
          key={item.id}
        >
          {item.name}
        </Link>
      )})}
    </div>
    </div>
  );
}

export default Items;
