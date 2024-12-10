export const NavBar = () => {
  console.log('Navbar creado');
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <span>Home</span>
      <div className="flex flex-1"></div>
      <a className="mr-2" href="/first-steps/about">
        About
      </a>
      <a className="mr-2" href="/first-steps/pricing">
        Pricing
      </a>
      <a className="mr-2" href="/first-steps/contact">
        Contact
      </a>
    </nav>
  );
};
