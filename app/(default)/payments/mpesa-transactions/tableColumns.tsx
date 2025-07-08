
// export const dropdownOptions = [
//     {
//         id: 0,
//         value: 'Delete'
//     },
//     {
//         id: 1,
//         value: 'Assign to Agent'
//     },
// ]

// import { TableColumn } from '@/components/table/table'
// import { format } from 'date-fns'

// export const columns: TableColumn<any>[] = [
//   {
//     header: 'Transaction ID',
//     accessor: 'id' as keyof any,
//     cellRenderer: (_value, item: any) => (
//       <div className="font-medium text-sky-600 cursor-pointer hover:text-sky-800">
//         {item?.id ?? '-'}
//       </div>
//     ),
//   },
//   {
//     header: 'Customer Details',
//     accessor: 'customer_name' as keyof any,
//     cellRenderer: (_value, item: any) => (
//       <div className="text-sm">
//         <div className="font-medium text-gray-900 dark:text-gray-100">{item?.customer_name ?? '-'}</div>
//         <div className="text-gray-500 dark:text-gray-400 text-xs">{item?.customer_phone ?? '-'}</div>
//       </div>
//     ),
//   },
//   {
//     header: 'Amount',
//     accessor: 'amount' as keyof any,
//     cellRenderer: (_value, item: any) => (
//       <div className="text-sm">
//         <div className="font-medium text-gray-900 dark:text-gray-100">
//           KES {item?.amount != null ? Number(item.amount).toLocaleString() : '-'}
//         </div>
//         <div className="text-xs text-gray-500 dark:text-gray-400">{item?.payment_method ?? '-'}</div>
//       </div>
//     ),
//   },
//   {
//     header: 'Payment Details',
//     accessor: 'mpesa_code' as keyof any,
//     cellRenderer: (_value, item: any) => (
//       <div className="text-sm">
//         <div className="font-medium text-gray-900 dark:text-gray-100">
//           {item?.mpesa_code ?? item?.reference_no ?? '-'}
//         </div>
//         <div className="text-xs text-gray-500 dark:text-gray-400">
//           {item?.payment_method === 'M-PESA' ? 'M-PESA Code' : 'Reference'}
//         </div>
//       </div>
//     ),
//   },
//   {
//     header: 'Service Plan',
//     accessor: 'plan_name' as keyof any,
//     cellRenderer: (_value, item: any) => (
//       <div className="text-sm">
//         <div className="font-medium text-gray-900 dark:text-gray-100">{item?.plan_name ?? '-'}</div>
//         <div className="text-xs text-gray-500 dark:text-gray-400">{item?.billing_period ?? '-'}</div>
//       </div>
//     ),
//   },
//   {
//     header: 'Status',
//     accessor: 'status' as keyof any,
//     cellRenderer: (_value, item: any) => {
//       const status = item?.status;
//       let statusColor = "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
      
//       if (status === "COMPLETED") statusColor = "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
//       if (status === "PENDING") statusColor = "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
//       if (status === "FAILED") statusColor = "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
//       if (status === "PROCESSING") statusColor = "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
//       if (status === "REFUNDED") statusColor = "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      
//       return (
//         <div className={`px-2 py-1 rounded-full text-xs font-medium inline-block ${statusColor}`}>
//           {status ?? '-'}
//         </div>
//       );
//     },
//   },
//   {
//     header: 'Transaction Date',
//     accessor: 'created_at' as keyof any,
//     cellRenderer: (_value, item: any) => {
//       const date = item?.created_at;
//       if (!date) return <div>-</div>;
//       try {
//         const transactionDate = new Date(date);
//         const now = new Date();
//         const diffInHours = Math.floor((now.getTime() - transactionDate.getTime()) / (1000 * 60 * 60));
        
//         return (
//           <div className="text-sm text-gray-600 dark:text-gray-400">
//             <div>{format(transactionDate, 'MMM dd, yyyy')}</div>
//             <div className="text-xs text-gray-400 dark:text-gray-500">
//               {diffInHours < 24 ? `${diffInHours}h ago` : `${Math.floor(diffInHours / 24)}d ago`}
//             </div>
//           </div>
//         );
//       } catch {
//         return <div>-</div>;
//       }
//     },
//   }
// ]

import { TableColumn } from '@/components/table/table'

export const columns: TableColumn<any>[] = [
  {
    header: 'Payment ID',
    accessor: 'id' as keyof any,
    cellRenderer: (_value, item: any) => (
      <div className="font-medium text-sky-600 cursor-pointer hover:text-sky-800">
        {item?.id ?? '-'}
      </div>
    ),
  },
  {
    header: 'Customer Details',
    accessor: 'customerName' as keyof any,
    cellRenderer: (_value, item: any) => (
      <div className="text-sm">
        <div className="font-medium text-gray-900 dark:text-gray-100">
          {item?.customerName ?? '-'}
        </div>
        <div className="text-gray-500 dark:text-gray-400 text-xs">
          ID: {item?.customerId ?? '-'}
        </div>
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
        <div className="text-xs text-gray-500 dark:text-gray-400">
          Payment Amount
        </div>
      </div>
    ),
  },
  {
    header: 'Days Paid For',
    accessor: 'daysPaidFor' as keyof any,
    cellRenderer: (_value, item: any) => {
      const days = item?.daysPaidFor;
      let durationColor = "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
      
      if (days <= 7) durationColor = "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      if (days > 7 && days <= 30) durationColor = "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      if (days > 30 && days <= 90) durationColor = "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      if (days > 90) durationColor = "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      
      return (
        <div className={`px-2 py-1 rounded text-xs font-medium inline-block ${durationColor}`}>
          {days ? `${days} days` : '-'}
        </div>
      );
    },
  },
  {
    header: 'Payment Value',
    accessor: 'paymentValue' as keyof any,
    cellRenderer: (_value, item: any) => {
      const amount = item?.amount;
      const days = item?.daysPaidFor;
      
      if (!amount || !days) {
        return (
          <div className="text-sm text-gray-500">-</div>
        );
      }
      
      const dailyRate = amount / days;
      
      return (
        <div className="text-sm">
          <div className="font-medium text-gray-900 dark:text-gray-100">
            KES {dailyRate.toFixed(2)}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            per day
          </div>
        </div>
      );
    },
  },
  {
    header: 'Notes',
    accessor: 'notes' as keyof any,
    cellRenderer: (_value, item: any) => {
      const notes = item?.notes;
      
      if (!notes) {
        return (
          <div className="text-sm text-gray-500 dark:text-gray-400">
            No notes
          </div>
        );
      }
      
      return (
        <div className="text-sm max-w-xs">
          <div className="font-medium text-gray-900 dark:text-gray-100 truncate">
            {notes}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            Payment notes
          </div>
        </div>
      );
    },
  },
  {
    header: 'Payment Status',
    accessor: 'paymentStatus' as keyof any,
    cellRenderer: (_value, item: any) => {
      // Since status isn't in your query, we'll simulate it or you can add it to your GraphQL query
      const hasNotes = !!item?.notes;
      const amount = item?.amount;
      
      // Simple logic to determine status - you can replace with actual status from API
      let status = 'COMPLETED';
      let statusColor = "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      
      if (!amount || amount === 0) {
        status = 'PENDING';
        statusColor = "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      }
      
      return (
        <div className={`px-2 py-1 rounded-full text-xs font-medium inline-block ${statusColor}`}>
          {status}
        </div>
      );
    },
  }
]

export const dropdownOptions = [
    {
        id: 0,
        value: 'Delete'
    },
    {
        id: 1,
        value: 'Edit'
    },
    {
        id: 2,
        value: 'View Details'
    },
    {
        id: 3,
        value: 'Export'
    },
]