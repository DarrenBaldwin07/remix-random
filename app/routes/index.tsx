import { Button, Heading, Text } from '@rapid-web/ui';
import logo from '../assets/logo.svg';
// TODO
// - Show stats for github and wakatime
// - Link to twitter and LinkedIn
// About
// Projects
// Blog from medium
export default function Index() {
  return (
    <div>
      <Heading styles='text-white text-3xl'>Darren Baldwin</Heading>
      <Text styles='text-white mt-2 font-light w-2/3'>
        Hey, I'm Darren. I am the Co-founder of {' '}
        <Text as='span' styles='font-bold'>
          <a rel="noreferrer" className='hover:underline decoration-solid' href='https://cincinnati.ventures' target='_blank'>Cincinnati Ventures</a>
        </Text>
        {' '}
        where we build MVPs and turn them into rocket ships 🚀
      </Text>
    </div>
  );
}
