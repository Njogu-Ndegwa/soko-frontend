
// import { TableColumn } from '@/components/table/table'
// import { format } from 'date-fns'

// export const columns: TableColumn<any>[] = [
//   {
//     header: 'ID',
//     accessor: 'id' as keyof any,
//     cellRenderer: (_value, item: any) => (
//       <div className="font-medium text-sky-600 cursor-pointer hover:text-sky-800">
//         {item?.id ?? '-'}
//       </div>
//     ),
//   },
//   {
//     header: 'Customer Details',
//     accessor: 'name' as keyof any,
//     cellRenderer: (_value, item: any) => (
//       <div className="max-w-xs">
//         <div className="font-medium text-gray-900 dark:text-gray-100">
//           {item?.name ?? '-'}
//         </div>
//         <div className="text-xs text-gray-500 dark:text-gray-400">
//           {item?.phone ?? '-'}
//         </div>
//       </div>
//     ),
//   },
//   {
//     header: 'Plan',
//     accessor: 'plan.name' as keyof any,
//     cellRenderer: (_value, item: any) => {
//       const plan = item?.plan;
//       if (!plan) return <div className="text-gray-500">No Plan</div>;
      
//       return (
//         <div className="max-w-xs">
//           <div className="font-medium text-gray-900 dark:text-gray-100">
//             {plan.name}
//           </div>
//           <div className="text-xs text-gray-500 dark:text-gray-400">
//             {plan.speed} • KES {plan.price?.toLocaleString()}
//           </div>
//         </div>
//       );
//     },
//   },
//   {
//     header: 'Connection Type',
//     accessor: 'plan.connectionType' as keyof any,
//     cellRenderer: (_value, item: any) => {
//       const connectionType = item?.plan?.connectionType;
//       let typeColor = "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
      
//       if (connectionType === "hotspot") typeColor = "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
//       if (connectionType === "pppoe") typeColor = "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
//       if (connectionType === "static") typeColor = "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
//       if (connectionType === "dhcp") typeColor = "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      
//       return (
//         <div className={`px-2 py-1 rounded text-xs font-medium inline-block ${typeColor}`}>
//           {connectionType ?? '-'}
//         </div>
//       );
//     },
//   },
//   {
//     header: 'Connection Details',
//     accessor: 'pppoeUsername' as keyof any,
//     cellRenderer: (_value, item: any) => {
//       const connectionType = item?.plan?.connectionType;
//       let detail = '-';
      
//       if (connectionType === 'pppoe' && item?.pppoeUsername) {
//         detail = item.pppoeUsername;
//       } else if (connectionType === 'static' && item?.staticIp) {
//         detail = item.staticIp;
//       } else if (item?.macAddress) {
//         detail = item.macAddress;
//       }
      
//       return (
//         <div className="text-sm font-mono">
//           <div className="font-medium text-gray-900 dark:text-gray-100 truncate max-w-[150px]">
//             {detail}
//           </div>
//           <div className="text-xs text-gray-500 dark:text-gray-400">
//             {connectionType === 'pppoe' ? 'PPPoE Username' : 
//              connectionType === 'static' ? 'Static IP' : 'MAC Address'}
//           </div>
//         </div>
//       );
//     },
//   },
//   {
//     header: 'Status',
//     accessor: 'status' as keyof any,
//     cellRenderer: (_value, item: any) => {
//       const status = item?.status;
//       let statusColor = "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
      
//       if (status === "active") statusColor = "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
//       if (status === "inactive") statusColor = "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
//       if (status === "suspended") statusColor = "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
//       if (status === "expired") statusColor = "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      
//       return (
//         <div className={`px-2 py-1 rounded-full text-xs font-medium inline-block ${statusColor}`}>
//           {status ? status.charAt(0).toUpperCase() + status.slice(1) : '-'}
//         </div>
//       );
//     },
//   },
//   {
//     header: 'Expiry',
//     accessor: 'expiry' as keyof any,
//     cellRenderer: (_value, item: any) => {
//       const expiry = item?.expiry;
      
//       if (!expiry) {
//         return (
//           <div className="text-sm">
//             <div className="font-medium text-green-600 dark:text-green-400">
//               No Expiry
//             </div>
//           </div>
//         );
//       }
      
//       try {
//         const expiryDate = new Date(expiry);
//         const now = new Date();
//         const isExpired = expiryDate < now;
//         const isExpiringSoon = !isExpired && (expiryDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24) <= 7;
        
//         const formattedDate = format(expiryDate, 'MMM dd, yyyy');
        
//         let textColor = "text-gray-900 dark:text-gray-100";
//         if (isExpired) textColor = "text-red-600 dark:text-red-400";
//         else if (isExpiringSoon) textColor = "text-yellow-600 dark:text-yellow-400";
        
//         return (
//           <div className="text-sm">
//             <div className={`font-medium ${textColor}`}>
//               {formattedDate}
//             </div>
//             <div className="text-xs text-gray-500 dark:text-gray-400">
//               {isExpired ? 'Expired' : isExpiringSoon ? 'Expiring Soon' : 'Active'}
//             </div>
//           </div>
//         );
//       } catch (e) {
//         return <div className="text-sm text-gray-500">Invalid Date</div>;
//       }
//     },
//   },
//   {
//     header: 'Plan Duration',
//     accessor: 'plan.durationDays' as keyof any,
//     cellRenderer: (_value, item: any) => {
//       const days = item?.plan?.durationDays;
//       let durationColor = "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
      
//       if (days <= 7) durationColor = "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
//       if (days > 7 && days <= 30) durationColor = "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
//       if (days > 30) durationColor = "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      
//       return (
//         <div className={`px-2 py-1 rounded text-xs font-medium inline-block ${durationColor}`}>
//           {days ? `${days} days` : '-'}
//         </div>
//       );
//     },
//   }
// ]

// export const dropdownOptions = [
//     {
//         id: 0,
//         value: 'Delete'
//     },
//     {
//         id: 1,
//         value: 'Edit'
//     },
//     {
//         id: 2,
//         value: 'Suspend'
//     },
//     {
//         id: 3,
//         value: 'Activate'
//     },
// ]


import { TableColumn } from '@/components/table/table'
import { format } from 'date-fns'

export const columns: TableColumn<any>[] = [
  {
    header: 'Log ID',
    accessor: 'id' as keyof any,
    cellRenderer: (_value, item: any) => (
      <div className="font-medium text-sky-600 cursor-pointer hover:text-sky-800">
        {item?.id ?? '-'}
      </div>
    ),
  },
  {
    header: 'Action & Status',
    accessor: 'action' as keyof any,
    cellRenderer: (_value, item: any) => {
      const action = item?.action;
      const status = item?.status;
      
      let actionColor = "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
      if (action === "PROVISION") actionColor = "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      if (action === "DEPROVISION") actionColor = "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      if (action === "UPDATE") actionColor = "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      if (action === "RESTART") actionColor = "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      
      let statusColor = "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
      if (status === "SUCCESS") statusColor = "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      if (status === "FAILED") statusColor = "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      if (status === "PENDING") statusColor = "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      if (status === "IN_PROGRESS") statusColor = "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      
      return (
        <div className="space-y-1">
          <div className={`px-2 py-1 rounded text-xs font-medium inline-block ${actionColor}`}>
            {action ?? '-'}
          </div>
          <div className={`px-2 py-1 rounded-full text-xs font-medium inline-block ${statusColor} ml-1`}>
            {status ?? '-'}
          </div>
        </div>
      );
    },
  },
  {
    header: 'Customer Details',
    accessor: 'customerId' as keyof any,
    cellRenderer: (_value, item: any) => {
      const customerId = item?.customerId;
      const macAddress = item?.macAddress;
      
      return (
        <div className="text-sm">
          <div className="font-medium text-gray-900 dark:text-gray-100">
            Customer ID: {customerId ?? '-'}
          </div>
          <div className="text-gray-500 dark:text-gray-400 text-xs font-mono">
            {macAddress ?? 'No MAC Address'}
          </div>
        </div>
      );
    },
  },
  {
    header: 'Router ID',
    accessor: 'routerId' as keyof any,
    cellRenderer: (_value, item: any) => {
      const routerId = item?.routerId;
      
      if (!routerId) {
        return (
          <div className="text-sm text-gray-500 dark:text-gray-400">
            No Router
          </div>
        );
      }
      
      return (
        <div className="text-sm">
          <div className="font-medium text-gray-900 dark:text-gray-100">
            Router #{routerId}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            Network Device
          </div>
        </div>
      );
    },
  },
  {
    header: 'Details',
    accessor: 'details' as keyof any,
    cellRenderer: (_value, item: any) => {
      const details = item?.details;
      
      if (!details) {
        return (
          <div className="text-sm text-gray-500 dark:text-gray-400">
            No details
          </div>
        );
      }
      
      return (
        <div className="text-sm max-w-xs">
          <div className="font-medium text-gray-900 dark:text-gray-100 truncate">
            {details}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            Log details
          </div>
        </div>
      );
    },
  },
  {
    header: 'Log Date',
    accessor: 'logDate' as keyof any,
    cellRenderer: (_value, item: any) => {
      const logDate = item?.logDate;
      
      if (!logDate) {
        return <div className="text-sm text-gray-500">No date</div>;
      }
      
      try {
        const date = new Date(logDate);
        const now = new Date();
        const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
        
        const formattedDate = format(date, 'MMM dd, yyyy');
        const formattedTime = format(date, 'HH:mm');
        
        return (
          <div className="text-sm">
            <div className="font-medium text-gray-900 dark:text-gray-100">
              {formattedDate}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {formattedTime} • {diffInHours < 24 ? `${diffInHours}h ago` : `${Math.floor(diffInHours / 24)}d ago`}
            </div>
          </div>
        );
      } catch (e) {
        return <div className="text-sm text-gray-500">Invalid Date</div>;
      }
    },
  },
  {
    header: 'MAC Address',
    accessor: 'macAddress' as keyof any,
    cellRenderer: (_value, item: any) => {
      const macAddress = item?.macAddress;
      
      if (!macAddress) {
        return (
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Not available
          </div>
        );
      }
      
      return (
        <div className="text-sm font-mono">
          <div className="font-medium text-gray-900 dark:text-gray-100">
            {macAddress}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            Device MAC
          </div>
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
        value: 'View Details'
    },
    {
        id: 2,
        value: 'Export'
    },
    {
        id: 3,
        value: 'Retry Action'
    },
]