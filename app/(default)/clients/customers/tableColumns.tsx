
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
    header: 'Customer ID',
    accessor: 'id' as keyof any,
    cellRenderer: (value: unknown, item: any) => {
      return (
        <div className="font-medium text-sky-600 cursor-pointer hover:text-sky-800">
          {String(item.id)}
        </div>
      );
    }
  },
  {
    header: 'Customer Details',
    accessor: 'name' as keyof any,
    cellRenderer: (value: unknown, item: any) => {
      return (
        <div className="text-sm">
          <div className="font-medium text-gray-900 dark:text-gray-100">{item.name || '-'}</div>
          <div className="text-gray-500 dark:text-gray-400 text-xs">{item.email || '-'}</div>
        </div>
      );
    }
  },
  {
    header: 'Contact Info',
    accessor: 'phone_number' as keyof any,
    cellRenderer: (value: unknown, item: any) => {
      return (
        <div className="text-sm">
          <div className="font-medium text-gray-900 dark:text-gray-100">{item.phone_number || '-'}</div>
          <div className="text-gray-500 dark:text-gray-400 text-xs">{item.location || '-'}</div>
        </div>
      );
    }
  },
  {
    header: 'Current Plan',
    accessor: 'current_plan' as keyof any,
    cellRenderer: (value: unknown, item: any) => {
      const serviceType = item.service_type;
      let serviceColor = "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
      
      if (serviceType === "PPPOE") serviceColor = "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      if (serviceType === "STATIC") serviceColor = "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      
      return (
        <div className="text-sm">
          <div className="font-medium text-gray-900 dark:text-gray-100">{item.current_plan || '-'}</div>
          <div className={`px-1.5 py-0.5 rounded text-xs font-medium inline-block mt-1 ${serviceColor}`}>
            {serviceType || '-'}
          </div>
        </div>
      );
    }
  },
  {
    header: 'Account Balance',
    accessor: 'account_balance' as keyof any,
    cellRenderer: (value: unknown, item: any) => {
      const balance = item.account_balance;
      const isNegative = balance < 0;
      const balanceColor = isNegative ? 'text-red-600 dark:text-red-400' : 'text-gray-900 dark:text-gray-100';
      
      return (
        <div className="text-sm">
          <div className={`font-medium ${balanceColor}`}>
            KES {balance != null ? Number(balance).toLocaleString() : '-'}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {isNegative ? 'Overdue' : 'Credit'}
          </div>
        </div>
      );
    }
  },
  {
    header: 'Connection Status',
    accessor: 'connection_status' as keyof any,
    cellRenderer: (value: unknown, item: any) => {
      const status = item.connection_status;
      let statusColor = "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
      
      if (status === "ONLINE") statusColor = "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      if (status === "OFFLINE") statusColor = "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      if (status === "LIMITED") statusColor = "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      
      return (
        <div className={`px-2 py-1 rounded-full text-xs font-medium inline-block ${statusColor}`}>
          {status || '-'}
        </div>
      );
    }
  },
  {
    header: 'Account Status',
    accessor: 'status' as keyof any,
    cellRenderer: (value: unknown, item: any) => {
      const status = item.status;
      let statusColor = "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
      
      if (status === "ACTIVE") statusColor = "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      if (status === "INACTIVE") statusColor = "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      if (status === "PENDING") statusColor = "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      if (status === "SUSPENDED") statusColor = "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      
      return (
        <div className={`px-2 py-1 rounded-full text-xs font-medium inline-block ${statusColor}`}>
          {status || '-'}
        </div>
      );
    }
  },
  {
    header: 'Last Activity',
    accessor: 'last_login' as keyof any,
    cellRenderer: (value: unknown, item: any) => {
      const lastLogin = item.last_login;
      if (!lastLogin) return <div className="text-sm text-gray-500">Never</div>;
      
      try {
        const loginDate = new Date(lastLogin);
        const now = new Date();
        const diffInHours = Math.floor((now.getTime() - loginDate.getTime()) / (1000 * 60 * 60));
        
        return (
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <div>{format(loginDate, 'MMM dd')}</div>
            <div className="text-xs text-gray-400 dark:text-gray-500">
              {diffInHours < 24 ? `${diffInHours}h ago` : `${Math.floor(diffInHours / 24)}d ago`}
            </div>
          </div>
        );
      } catch {
        return <div className="text-sm text-gray-500">-</div>;
      }
    }
  },
  {
    header: 'Actions',
    accessor: 'actions' as keyof any,
    cellRenderer: (value: unknown, item: any) => {
      return (
        <div className="flex space-x-2">
          <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium">
            View
          </button>
          <button className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 text-sm font-medium">
            Edit
          </button>
          {item.status === 'SUSPENDED' && (
            <button className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 text-sm font-medium">
              Restore
            </button>
          )}
        </div>
      );
    }
  }
]
