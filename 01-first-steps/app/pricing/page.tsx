import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing Page',
  description: 'Esta página de precios',
  keywords: ['Pricing Page', 'Bryam', 'Informacion de la pagina'],
};

export default function PricingPage() {
  return (
    <div className="flex flex-col items-center p-24">
      <span className="text-5xl">Pricing Page</span>
    </div>
  );
}
