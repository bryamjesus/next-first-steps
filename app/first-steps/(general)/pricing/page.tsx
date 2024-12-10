import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing Page',
  description: 'Esta página de precios',
  keywords: ['Pricing Page', 'Bryam', 'Informacion de la pagina'],
};

export default function PricingPage() {
  return <span className="text-7xl ">Pricing Page</span>;
}
