import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'First Steps Page',
  description: 'Page from First Steps',
  keywords: ['First Steps Page', 'Bryam', 'Informacion de la pagina'],
};

export default function AboutPage() {
  return <span className="text-7xl ">First Steps Page</span>;
}
