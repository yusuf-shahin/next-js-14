import Link from 'next/link';

const links = [
  { href: '/client', level: 'client' },
  { href: '/prisma-example', level: 'prisma-example' },
  { href: '/drink', level: 'drink' },
  { href: '/query', level: 'query' },
];

const Navbar = () => {
  return (
    <nav className='bg-base-300 py-4'>
      <div className='navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row'>
        <Link href='/' className='btn btn-primary'>
          Next js
        </Link>
        <ul>
          <ul className='menu menu-horizontal md:ml-8'>
            {links.map((link) => (
              <li key={link.href}>
                <Link className='capitalize' href={link.href}>
                  {' '}
                  {link.level}{' '}
                </Link>
              </li>
            ))}
          </ul>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
