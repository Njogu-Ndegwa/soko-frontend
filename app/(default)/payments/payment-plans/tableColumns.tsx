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
    header: 'Plan ID',
    accessor: 'id' as keyof any,
    cellRenderer: (_value, item: any) => (
      <div className="font-medium text-sky-600 cursor-pointer hover:text-sky-800">
        {item?.id ?? '-'}
      </div>
    ),
  },
  {
    header: 'Plan Details',
    accessor: 'plan_name' as keyof any,
    cellRenderer: (_value, item: any) => (
      <div className="max-w-xs">
        <div className="font-medium text-gray-900 dark:text-gray-100">{item?.plan_name ?? '-'}</div>
        <div className="text-xs text-gray-500 dark:text-gray-400">{item?.description ?? '-'}</div>
      </div>
    ),
  },
  {
    header: 'Service Type',
    accessor: 'service_type' as keyof any,
    cellRenderer: (_value, item: any) => {
      const serviceType = item?.service_type;
      let serviceColor = "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
      
      if (serviceType === "PPPOE") serviceColor = "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      if (serviceType === "STATIC") serviceColor = "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      if (serviceType === "HOTSPOT") serviceColor = "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      if (serviceType === "HYBRID") serviceColor = "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      
      return (
        <div className={`px-2 py-1 rounded text-xs font-medium inline-block ${serviceColor}`}>
          {serviceType ?? '-'}
        </div>
      );
    },
  },
  {
    header: 'Bandwidth',
    accessor: 'bandwidth' as keyof any,
    cellRenderer: (_value, item: any) => (
      <div className="text-sm">
        <div className="font-medium text-gray-900 dark:text-gray-100">
          {item?.download_speed ?? '-'} / {item?.upload_speed ?? '-'}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">Down / Up</div>
      </div>
    ),
  },
  {
    header: 'Data Allowance',
    accessor: 'data_limit' as keyof any,
    cellRenderer: (_value, item: any) => {
      const isUnlimited = item?.data_limit === null || item?.data_limit === 0;
      return (
        <div className="text-sm">
          <div className="font-medium text-gray-900 dark:text-gray-100">
            {isUnlimited ? 'Unlimited' : `${item?.data_limit} GB`}
          </div>
          {!isUnlimited && (
            <div className="text-xs text-gray-500 dark:text-gray-400">Monthly</div>
          )}
        </div>
      );
    },
  },
  {
    header: 'Contract Period',
    accessor: 'contract_period' as keyof any,
    cellRenderer: (_value, item: any) => {
      const period = item?.contract_period;
      let periodColor = "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
      
      if (period === "1 Month") periodColor = "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      if (period === "3 Months") periodColor = "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      if (period === "6 Months") periodColor = "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      if (period === "12 Months") periodColor = "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      if (period === "24 Months") periodColor = "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200";
      
      return (
        <div className={`px-2 py-1 rounded text-xs font-medium inline-block ${periodColor}`}>
          {period ?? '-'}
        </div>
      );
    },
  },
  {
    header: 'Monthly Cost',
    accessor: 'monthly_cost' as keyof any,
    cellRenderer: (_value, item: any) => (
      <div className="text-sm">
        <div className="font-medium text-gray-900 dark:text-gray-100">
          KES {item?.monthly_cost != null ? Number(item.monthly_cost).toLocaleString() : '-'}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">per month</div>
      </div>
    ),
  },
  {
    header: 'Setup Fee',
    accessor: 'setup_fee' as keyof any,
    cellRenderer: (_value, item: any) => {
      const setupFee = item?.setup_fee;
      return (
        <div className="text-sm">
          <div className="font-medium text-gray-900 dark:text-gray-100">
            {setupFee === 0 ? (
              <span className="text-green-600 dark:text-green-400">FREE</span>
            ) : (
              `KES ${setupFee != null ? Number(setupFee).toLocaleString() : '-'}`
            )}
          </div>
        </div>
      );
    },
  },
  {
    header: 'Status',
    accessor: 'status' as keyof any,
    cellRenderer: (_value, item: any) => {
      const status = item?.status;
      let statusColor = "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
      
      if (status === "ACTIVE") statusColor = "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      if (status === "INACTIVE") statusColor = "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      if (status === "PENDING") statusColor = "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      if (status === "DISCONTINUED") statusColor = "bg-gray-200 text-gray-600 dark:bg-gray-600 dark:text-gray-300";
      
      return (
        <div className={`px-2 py-1 rounded-full text-xs font-medium inline-block ${statusColor}`}>
          {status ?? '-'}
        </div>
      );
    },
  }
]
