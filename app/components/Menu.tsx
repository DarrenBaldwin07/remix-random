import React from 'react';
import { NavLink } from '@remix-run/react';

const Menu = () => {
  return (
    <div className='flex flex-col space-y-6'>
      <NavLink className={({isActive}) => isActive ? 'backdrop-blur bg-red-500 p-4' : 'bg-none p-4'} to='/'>About</NavLink>
      <NavLink className={({isActive}) => isActive ? 'backdrop-blur bg-red-500 p-4' : 'bg-none p-4'} to='/projects'>Projects</NavLink>
      <NavLink className={({isActive}) => isActive ? 'backdrop-blur bg-red-500 p-4' : 'bg-none p-4'} to='/blog'>Blog</NavLink>
    </div>
  )
}

export default Menu
