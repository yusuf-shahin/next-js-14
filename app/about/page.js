import Link from 'next/link';

const AboutPage = () => {
  return (
    <div>
      {' '}
      <div>
        <h1 className='text-3xl'> About page </h1>
        <Link href='/' className='text-2xl'>
          Home
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
