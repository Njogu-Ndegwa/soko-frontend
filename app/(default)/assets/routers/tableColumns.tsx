
// import { TableColumn } from '@/components/table/table'

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
//     header: 'Router Name',
//     accessor: 'name' as keyof any,
//     cellRenderer: (_value, item: any) => (
//       <div className="font-medium text-gray-900 dark:text-gray-100">
//         {item?.name ?? '-'}
//       </div>
//     ),
//   },
//   {
//     header: 'IP Address',
//     accessor: 'ipAddress' as keyof any,
//     cellRenderer: (_value, item: any) => (
//       <div className="text-sm font-mono">
//         <div className="font-medium text-gray-900 dark:text-gray-100">
//           {item?.ipAddress ?? '-'}
//         </div>
//         <div className="text-xs text-gray-500 dark:text-gray-400">
//           IPv4 Address
//         </div>
//       </div>
//     ),
//   },
//   {
//     header: 'Port',
//     accessor: 'port' as keyof any,
//     cellRenderer: (_value, item: any) => {
//       const port = item?.port;
//       let portColor = "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
      
//       // Common port color coding
//       if (port === 80 || port === 443) portColor = "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"; // HTTP/HTTPS
//       if (port === 22) portColor = "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"; // SSH
//       if (port === 8080 || port === 8443) portColor = "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"; // Alt HTTP/HTTPS
//       if (port === 21) portColor = "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"; // FTP
      
//       return (
//         <div className={`px-2 py-1 rounded text-xs font-medium inline-block ${portColor}`}>
//           {port ?? '-'}
//         </div>
//       );
//     },
//   },
//   {
//     header: 'Connection Status',
//     accessor: 'connectionStatus' as keyof any,
//     cellRenderer: (_value, item: any) => {
//       // Since status isn't in the query, we'll simulate it or you can add it to your GraphQL query
//       const isOnline = Math.random() > 0.3; // Simulate online status - replace with actual status from API
//       const statusColor = isOnline 
//         ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
//         : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      
//       return (
//         <div className={`px-2 py-1 rounded-full text-xs font-medium inline-block ${statusColor}`}>
//           {isOnline ? 'Online' : 'Offline'}
//         </div>
//       );
//     },
//   },
//   {
//     header: 'Router Details',
//     accessor: 'details' as keyof any,
//     cellRenderer: (_value, item: any) => {
//       const ipAddress = item?.ipAddress;
//       const port = item?.port;
      
//       return (
//         <div className="text-sm">
//           <div className="font-medium text-gray-900 dark:text-gray-100">
//             {ipAddress && port ? `${ipAddress}:${port}` : '-'}
//           </div>
//           <div className="text-xs text-gray-500 dark:text-gray-400">
//             Full Address
//           </div>
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
//         value: 'Test Connection'
//     },
//     {
//         id: 3,
//         value: 'Restart'
//     },
// ]


import { TableColumn } from '@/components/table/table'

export const columns: TableColumn<any>[] = [
  {
    header: 'ID',
    accessor: 'id' as keyof any,
    cellRenderer: (_value, item: any) => (
      <div className="font-medium text-sky-600 cursor-pointer hover:text-sky-800">
        {item?.id ?? '-'}
      </div>
    ),
  },
  {
    header: 'Router Name',
    accessor: 'name' as keyof any,
    cellRenderer: (_value, item: any) => (
      <div className="font-medium text-gray-900 dark:text-gray-100">
        {item?.name ?? '-'}
      </div>
    ),
  },
  {
    header: 'IP Address',
    accessor: 'ipAddress' as keyof any,
    cellRenderer: (_value, item: any) => (
      <div className="text-sm font-mono">
        <div className="font-medium text-gray-900 dark:text-gray-100">
          {item?.ipAddress ?? '-'}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          IPv4 Address
        </div>
      </div>
    ),
  },
  {
    header: 'Port',
    accessor: 'port' as keyof any,
    cellRenderer: (_value, item: any) => {
      const port = item?.port;
      let portColor = "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
      
      // Common port color coding
      if (port === 80 || port === 443) portColor = "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"; // HTTP/HTTPS
      if (port === 22) portColor = "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"; // SSH
      if (port === 8080 || port === 8443) portColor = "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"; // Alt HTTP/HTTPS
      if (port === 21) portColor = "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"; // FTP
      
      return (
        <div className={`px-2 py-1 rounded text-xs font-medium inline-block ${portColor}`}>
          {port ?? '-'}
        </div>
      );
    },
  },
  {
    header: 'Connection Status',
    accessor: 'connectionStatus' as keyof any,
    cellRenderer: (_value, item: any) => {
      // Since status isn't in the query, we'll simulate it or you can add it to your GraphQL query
      const isOnline = Math.random() > 0.3; // Simulate online status - replace with actual status from API
      const statusColor = isOnline 
        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
        : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      
      return (
        <div className={`px-2 py-1 rounded-full text-xs font-medium inline-block ${statusColor}`}>
          {isOnline ? 'Online' : 'Offline'}
        </div>
      );
    },
  },
  {
    header: 'Router Details',
    accessor: 'details' as keyof any,
    cellRenderer: (_value, item: any) => {
      const ipAddress = item?.ipAddress;
      const port = item?.port;
      
      return (
        <div className="text-sm">
          <div className="font-medium text-gray-900 dark:text-gray-100">
            {ipAddress && port ? `${ipAddress}:${port}` : '-'}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            Full Address
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
        value: 'Edit'
    },
    {
        id: 2,
        value: 'Test Connection'
    },
    {
        id: 3,
        value: 'Restart'
    },
]