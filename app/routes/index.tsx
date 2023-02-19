import { Button, Heading } from '@rapid-web/ui';
import logo from '../assets/logo.svg';
export default function Index() {
  return (
   <div className='mt-36'>
    <div>
      <div className='flex items-center space-x-1.5'>
        <img src={logo} alt='logo' width={40} />
        <Heading styles='text-white'>Darren Baldwin</Heading>
      </div>
    </div>
   </div>
  );
}
