import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Customers | Acme Dashboard',
  },
  description: 'Manage your customers in the Acme Dashboard.',
  metadataBase: new URL('https://nextjs-dashboard-kappa-coral-54.vercel.app/dashboard/customers'),
};
export default function Page(){
    return <p>Customers Page</p>;
}