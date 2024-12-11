import { HomeIcon } from '@primer/octicons-react';
import Link from 'next/link';

const navItems = [
  { path: '/first-steps/about', text: 'About' },
  { path: '/first-steps/pricing', text: 'Pricing' },
  { path: '/first-steps/contact', text: 'Contact' },
];

export const NavBar = () => {
  // este mensje saldra en el servidor
  // a menos que se use 'use cliente'
  console.log('Navbar creado');

  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={'/first-steps'} className="flex items-center">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>
      <div className="flex flex-1"></div>

      {navItems.map((navItem) => (
        <Link key={navItem.path} className="mr-2" href={navItem.path}>
          {navItem.text}
        </Link>
      ))}

      {/* <Link className="mr-2" href="/first-steps/about">
        About
      </Link>
      <Link className="mr-2" href="/first-steps/pricing">
        Pricing
      </Link>
      <Link className="mr-2" href="/first-steps/contact">
        Contact
      </Link> */}
    </nav>
  );
};

// Solo se usara cuando se quiera que se reenderize
// en el navegador
// 'use client'

// const temporalAsync = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(true);
//     }, 51000);
//   });
// };

// export const NavBar = async () => {
// await temporalAsync;
// }
