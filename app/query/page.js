import Link from 'next/link';

const query = () => {
  return (
    <div>
      {' '}
      <div>
        <h1 className='text-3xl'> Query page </h1>
        <Link href='/' className='text-2xl'>
          {' '}
          Home{' '}
        </Link>
      </div>
    </div>
  );
};

export default query;
