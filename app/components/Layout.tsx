import React from 'react'
import { Container } from '@rapid-web/ui';
import Navigation from './Navigation';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <div>
        <Container>
          <Navigation />
          {children}
        </Container>
    </div>
  )
}

export default Layout
