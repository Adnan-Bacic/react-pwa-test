import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { items } from '../data';

const Items = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1 className='text-3xl'>Items</h1>
      {items.map((item) => (
        <Link
          style={{ display: 'block', margin: '1rem 0' }}
          to={`/items/${item.id}`}
          state={item}
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
