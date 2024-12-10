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
export const NavBar = () => {
  // este mensje saldra en el servidor
  // a menos que se use 'use cliente'
  console.log('Navbar creado');

  // await temporalAsync;
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
