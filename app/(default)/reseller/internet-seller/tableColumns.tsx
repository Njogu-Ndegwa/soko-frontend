
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
    header: 'Reseller ID',
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
    header: 'Business Details',
    accessor: 'business_name' as keyof any,
    cellRenderer: (value: unknown, item: any) => {
      return (
        <div className="text-sm">
          <div className="font-medium text-gray-900 dark:text-gray-100">{item.business_name || '-'}</div>
          <div className="text-gray-500 dark:text-gray-400 text-xs">{item.contact_person || '-'}</div>
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
          <div className="text-gray-500 dark:text-gray-400 text-xs">{item.email || '-'}</div>
        </div>
      );
    }
  },
  {
    header: 'Location & Coverage',
    accessor: 'location' as keyof any,
    cellRenderer: (value: unknown, item: any) => {
      return (
        <div className="text-sm">
          <div className="font-medium text-gray-900 dark:text-gray-100">{item.location || '-'}</div>
          <div className="text-gray-500 dark:text-gray-400 text-xs">{item.coverage_area || '-'}</div>
        </div>
      );
    }
  },
  {
    header: 'Client Base',
    accessor: 'total_clients' as keyof any,
    cellRenderer: (value: unknown, item: any) => {
      return (
        <div className="text-sm">
          <div className="font-medium text-gray-900 dark:text-gray-100">
            {item.total_clients != null ? Number(item.total_clients).toLocaleString() : '-'}
          </div>
          <div className="text-gray-500 dark:text-gray-400 text-xs">
            {item.active_clients || 0} active
          </div>
        </div>
      );
    }
  },
  {
    header: 'Bandwidth Pool',
    accessor: 'allocated_bandwidth' as keyof any,
    cellRenderer: (value: unknown, item: any) => {
      const used = item.bandwidth_used || 0;
      const total = item.allocated_bandwidth || 0;
      const usagePercentage = total > 0 ? Math.round((used / total) * 100) : 0;
      
      let usageColor = "text-green-600";
      if (usagePercentage > 80) usageColor = "text-red-600";
      else if (usagePercentage > 60) usageColor = "text-orange-600";
      
      return (
        <div className="text-sm">
          <div className="font-medium text-gray-900 dark:text-gray-100">
            {total} Mbps
          </div>
          <div className={`text-xs ${usageColor}`}>
            {used} Mbps used ({usagePercentage}%)
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
    header: 'Commission Rate',
    accessor: 'commission_rate' as keyof any,
    cellRenderer: (value: unknown, item: any) => {
      const rate = item.commission_rate;
      return (
        <div className="text-sm">
          <div className="font-medium text-gray-900 dark:text-gray-100">
            {rate != null ? `${rate}%` : '-'}
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            Monthly: KES {item.monthly_commission != null ? Number(item.monthly_commission).toLocaleString() : '-'}
          </div>
        </div>
      );
    }
  },
  {
    header: 'Status',
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