import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { items } from '../data';

const ItemsOutlet = () => {
  return (
    <div className='flex'>
    <div className='flex-1'>
      <h1 className='text-3xl'>Items - Outlet</h1>
      {items.map((item) => {
        return(
        <Link
          style={{ display: 'block', margin: '1rem 0' }}
          to={`/itemsOutlet/${item.id}`}
          state={item}
          key={item.id}
        >
          {item.name}
        </Link>
      )})}
      <Outlet />
    </div>
    </div>
  );
}

export default ItemsOutlet;
