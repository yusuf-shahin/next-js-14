import Link from 'next/link';

const ClientPage = () => {
  return (
    <div>
      {' '}
      <div>
        <h1 className='text-3xl'> client page </h1>
        <Link href='/' className='text-2xl'>
          <h1>Home</h1>
        </Link>
      </div>
    </div>
  );
};

export default ClientPage;
