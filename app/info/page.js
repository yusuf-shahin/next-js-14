import Link from 'next/link';

const aboutPage = () => {
  return (
    <div>
      {' '}
      <h1 className='text-3xl'> About Info page </h1>
      <Link href='/' className='text-xl'>
        home
      </Link>
    </div>
  );
};

export default aboutPage;
