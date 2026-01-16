import { Metadata } from 'next';
import { fetchFilteredCustomers } from '@/app/lib/data'
import CustomersTable from '@/app/ui/customers/table'
 
export const metadata: Metadata = {
  title: 'Customers',
  description: 'Manage your customers in the Acme Dashboard.',
  metadataBase: new URL('https://nextjs-dashboard-kappa-coral-54.vercel.app/dashboard/customers'),
};

export default async function Page(props: {
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>;
}) {
  const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const customers = await fetchFilteredCustomers(query);
    return <CustomersTable customers={customers} query={query} currentPage={currentPage} />;
}
