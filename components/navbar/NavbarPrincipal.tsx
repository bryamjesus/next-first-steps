import { HomeIcon } from '@primer/octicons-react';
import Link from 'next/link';

const navItems = [
  { path: '/first-steps/', text: 'Firs steps' },
  { path: '/', text: 'Second steps' },
  { path: '/', text: 'etc' },
];

export const NavBarPrincipal = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={'/'} className="flex items-center">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>
      <div className="flex flex-1"></div>
      {navItems.map((navItem) => (
        // TODO: luego cambiar el Key al navItem.path
        <Link key={navItem.text} className="mr-2" href={navItem.path}>
          {navItem.text}
        </Link>
      ))}
    </nav>
  );
};
