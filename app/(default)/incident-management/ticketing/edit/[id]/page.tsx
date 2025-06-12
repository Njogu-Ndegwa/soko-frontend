// @ts-nocheck

import EditCustomerClient from './edit-client';

type Params = {
  id: string;
}

export default function EditCustomerPage({ 
  params 
}: { 
  params: Params 
}) {
  return <EditCustomerClient id={params.id} />;
}