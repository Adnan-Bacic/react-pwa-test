import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { items } from '../data';

function Items() {
  return (
    <div>
      <h1 className='text-3xl '>Items</h1>
      {items.map((item) => (
        <Link
          style={{ display: 'block', margin: '1rem 0' }}
          to={`/items/${item.id}`}
          key={item.id}
        >
          {item.name}
        </Link>
      ))}
      <Outlet />
    </div>
  );
}

export default Items;
