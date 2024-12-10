import Link from 'next/link';

export const NavBarPrincipal = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <span>Home</span>
      <div className="flex flex-1"></div>
      <Link className="mr-2" href="/first-steps">
        Firs steps
      </Link>
      <Link className="mr-2" href="/">
        Second steps
      </Link>
      <Link className="mr-2" href="/">
        Contact
      </Link>
    </nav>
  );
};
