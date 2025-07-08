// // ProvisionCustomerPage.tsx
// import FormProvisionCustomer from "./provisionCustomerForm";

// interface ProvisionCustomerPageProps {
//   customerId?: number;
// }

// export default function ProvisionCustomerPage({ customerId }: ProvisionCustomerPageProps) {
//   return <FormProvisionCustomer customerId={customerId} />;
// }

// ProvisionCustomerPage.tsx
'use client'

import { useParams } from 'next/navigation';
import FormProvisionCustomer from "./provisionCustomerForm";

export default function ProvisionCustomerPage() {
  const params = useParams();
  const customerId = params.id ? parseInt(params.id as string) : undefined;
    console.log(customerId, "Customer ID in ProvisionCustomerPage");
  return <FormProvisionCustomer customerId={customerId} />;
}