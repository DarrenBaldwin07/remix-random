import React from 'react'
import { Container } from '@rapid-web/ui';
import Navigation from './Navigation';
import logo from '../assets/logo.svg';
import Menu from './Menu';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <div>
        <Container maxWidth='sm'>
          <Navigation />
          <div className='mt-36 flex'>
            <div className='flex flex-col mr-24 space-y-16'>
              <img src={logo} alt='logo' className='w-14 h-14 min-w-max px-4' />
              <Menu />
            </div>
            {children}
          </div>
        </Container>
    </div>
  )
}

export default Layout
