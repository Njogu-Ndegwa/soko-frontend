// import { TableColumn } from '@/components/table/table'
// import { format } from 'date-fns'
// import { Pencil, Trash2, Plus, MoreHorizontal } from 'lucide-react'

// export const columns: TableColumn<any>[] = [
//     // {
//     //     header: 'Customer ID',
//     //     accessor: 'node._id' as keyof any,
//     //     cellRenderer: (value: unknown, item: any) => {
//     //         // Handle null node case
//     //         if (!item.node) return <div>-</div>;
            
//     //         return (
//     //             <div className="font-medium text-sky-600">
//     //                 {String(item.node._id)}
//     //             </div>
//     //         );
//     //     }
//     // },
//     {
//         header: 'User Name',
//         accessor: 'node.name' as keyof any,
//         cellRenderer: (value: unknown, item: any) => {
//             if (!item.node) return <div>-</div>;
//             const name = item.node.name || '-';
//             const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
//             return (
//                 <div className="font-medium text-gray-800 dark:text-gray-100">
//                     {capitalizedName}
//                 </div>
//             );
//         }
//     },
    
//     {
//         header: 'Amount',
//         accessor: 'amount' as keyof any,
//         cellRenderer: (value: unknown, item: any) => {
//             // Handle null node case
//             if (!item.node) return <div>-</div>;
            
//             const type = item.node.type;
//             let typeColor = "bg-gray-100 text-gray-800";
            
//             // Adjust colors based on your actual type values
//             if (type === "CUSTOMER") typeColor = "bg-green-100 text-green-800";
//             if (type === "AGENT") typeColor = "bg-blue-100 text-blue-800";
//             if (type === "ADMIN") typeColor = "bg-purple-100 text-purple-800";
            
//             return (
//                 <div className={`px-2 py-1 rounded-full text-xs font-medium inline-block ${typeColor}`}>
//                     {type || '-'}
//                 </div>
//             );
//         }
//     },
//     {
//         header: 'Phone',
//         accessor: 'node.contact.phone' as keyof any,
//         cellRenderer: (value: unknown, item: any) => {
//             // Handle null node case
//             if (!item.node) return <div>-</div>;
            
//             return (
//                 <div className="max-w-md truncate">
//                     {item.node.contact?.phone || '-'}
//                 </div>
//             );
//         }
//     },
//     {
//         header: 'Email',
//         accessor: 'node.contact.email' as keyof any,
//         cellRenderer: (value: unknown, item: any) => {
//             // Handle null node case
//             if (!item.node) return <div>-</div>;
            
//             return (
//                 <div className="max-w-md truncate">
//                     {item.node.contact?.email || '-'}
//                 </div>
//             );
//         }
//     },
//     {
//         header: 'Location',
//         accessor: 'node.address.city' as keyof any,
//         cellRenderer: (value: unknown, item: any) => {
//             // Handle null node case
//             if (!item.node) return <div>-</div>;
            
//             const address = item.node.address;
//             return (
//                 <div className="max-w-md truncate">
//                     {address ? `${address.city || ''}, ${address.country || ''}` : '-'}
//                 </div>
//             );
//         }
//     },
//     {
//         header: 'Distributor',
//         accessor: 'node.distributor.name' as keyof any,
//         cellRenderer: (value: unknown, item: any) => {
//             // Handle null node case
//             if (!item.node) return <div>-</div>;
            
//             return (
//                 <div className="max-w-md truncate">
//                     {item.node.distributor?.name || '-'}
//                 </div>
//             );
//         }
//     },
//     {
//         header: 'Created At',
//         accessor: 'node.createdAt' as keyof any,
//         cellRenderer: (value: unknown, item: any) => {
//             // Handle null node case
//             if (!item.node) return <div>-</div>;
            
//             try {
//                 const formattedDate = format(new Date(item.node.createdAt), 'MMM dd, yyyy');
//                 return <div className="max-w-md truncate">{formattedDate}</div>;
//             } catch (e) {
//                 return <div className="max-w-md truncate">-</div>;
//             }
//         }
//     },
//     {
//         header: 'Updated At',
//         accessor: 'node.updatedAt' as keyof any,
//         cellRenderer: (value: unknown, item: any) => {
//             // Handle null node case
//             if (!item.node) return <div>-</div>;
            
//             try {
//                 const formattedDate = format(new Date(item.node.updatedAt), 'MMM dd, yyyy');
//                 return <div className="max-w-md truncate">{formattedDate}</div>;
//             } catch (e) {
//                 return <div className="max-w-md truncate">-</div>;
//             }
//         }
//     },
// ]

export const dropdownOptions = [
    {
        id: 0,
        value: 'Delete'
    },
    {
        id: 1,
        value: 'Assign to Agent'
    },
]

import { TableColumn } from '@/components/table/table'
import { format } from 'date-fns'

export const columns: TableColumn<any>[] = [
  {
    header: 'Transaction ID',
    accessor: 'id' as keyof any,
    cellRenderer: (_value, item: any) => (
      <div className="font-medium text-sky-600 cursor-pointer hover:text-sky-800">
        {item?.id ?? '-'}
      </div>
    ),
  },
  {
    header: 'Customer Details',
    accessor: 'customer_name' as keyof any,
    cellRenderer: (_value, item: any) => (
      <div className="text-sm">
        <div className="font-medium text-gray-900 dark:text-gray-100">{item?.customer_name ?? '-'}</div>
        <div className="text-gray-500 dark:text-gray-400 text-xs">{item?.customer_phone ?? '-'}</div>
      </div>
    ),
  },
  {
    header: 'Amount',
    accessor: 'amount' as keyof any,
    cellRenderer: (_value, item: any) => (
      <div className="text-sm">
        <div className="font-medium text-gray-900 dark:text-gray-100">
          KES {item?.amount != null ? Number(item.amount).toLocaleString() : '-'}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">{item?.payment_method ?? '-'}</div>
      </div>
    ),
  },
  {
    header: 'Payment Details',
    accessor: 'mpesa_code' as keyof any,
    cellRenderer: (_value, item: any) => (
      <div className="text-sm">
        <div className="font-medium text-gray-900 dark:text-gray-100">
          {item?.mpesa_code ?? item?.reference_no ?? '-'}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          {item?.payment_method === 'M-PESA' ? 'M-PESA Code' : 'Reference'}
        </div>
      </div>
    ),
  },
  {
    header: 'Service Plan',
    accessor: 'plan_name' as keyof any,
    cellRenderer: (_value, item: any) => (
      <div className="text-sm">
        <div className="font-medium text-gray-900 dark:text-gray-100">{item?.plan_name ?? '-'}</div>
        <div className="text-xs text-gray-500 dark:text-gray-400">{item?.billing_period ?? '-'}</div>
      </div>
    ),
  },
  {
    header: 'Status',
    accessor: 'status' as keyof any,
    cellRenderer: (_value, item: any) => {
      const status = item?.status;
      let statusColor = "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
      
      if (status === "COMPLETED") statusColor = "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      if (status === "PENDING") statusColor = "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      if (status === "FAILED") statusColor = "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      if (status === "PROCESSING") statusColor = "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      if (status === "REFUNDED") statusColor = "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      
      return (
        <div className={`px-2 py-1 rounded-full text-xs font-medium inline-block ${statusColor}`}>
          {status ?? '-'}
        </div>
      );
    },
  },
  {
    header: 'Transaction Date',
    accessor: 'created_at' as keyof any,
    cellRenderer: (_value, item: any) => {
      const date = item?.created_at;
      if (!date) return <div>-</div>;
      try {
        const transactionDate = new Date(date);
        const now = new Date();
        const diffInHours = Math.floor((now.getTime() - transactionDate.getTime()) / (1000 * 60 * 60));
        
        return (
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <div>{format(transactionDate, 'MMM dd, yyyy')}</div>
            <div className="text-xs text-gray-400 dark:text-gray-500">
              {diffInHours < 24 ? `${diffInHours}h ago` : `${Math.floor(diffInHours / 24)}d ago`}
            </div>
          </div>
        );
      } catch {
        return <div>-</div>;
      }
    },
  }
]