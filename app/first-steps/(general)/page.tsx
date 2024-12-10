import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Page',
  description: 'Page from about',
  keywords: ['About Page', 'Bryam', 'Informacion de la pagina'],
};

export default function AboutPage() {
  return <span className="text-7xl ">First Steps Page</span>;
}
