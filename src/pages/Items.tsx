import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { items } from '../data';

const Items = () => {
  return (
    <div className='flex'>
    <div className='flex-1'>
      <h1 className='text-3xl'>Items - Outlook</h1>
      {items.map((item) => {
        return(
        <Link
          style={{ display: 'block', margin: '1rem 0' }}
          to={`/items/${item.id}`}
          state={item}
          key={item.id}
        >
          {item.name}
        </Link>
      )})}
      <Outlet />
    </div>
    <div className='flex-1'>
            <h1 className='text-3xl'>Items - Navigate</h1>
      {items.map((item) => {
        return(
        <Link
          style={{ display: 'block', margin: '1rem 0' }}
          to={`../item2/${item.id}`}
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
