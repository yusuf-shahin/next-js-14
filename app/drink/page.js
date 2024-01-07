import Link from 'next/link';

const drink = () => {
  return (
    <div>
      <h1 className='text-3xl'> Drink </h1>
      <Link href='/' className='text-xl'>
        home
      </Link>
    </div>
  );
};

export default drink;
