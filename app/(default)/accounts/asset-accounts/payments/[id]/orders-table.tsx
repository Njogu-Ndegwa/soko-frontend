// 'use client'

// import Design2Table from '@/components/table/table2'
// // import { PaymentResponseInterface } from '@/app/(default)/inventory/types'
// import { Design2TableColumn } from '@/components/table/table2'
// import { format } from 'date-fns';

// export default function TransactionsTable({ transactions }: { transactions: any[] }) {

//   const handleTransactionClick = (transaction: any) => {
//     console.log('-items')
//   }

// // Update your columns definition to use proper typing
// const columns: Design2TableColumn<any>[] = [
//   {
//     header: 'Customer',
//     accessor: "email", // Use function accessor for nested properties
//     cellRenderer: (value, item) => (
//       <button 
//         onClick={() => handleTransactionClick(item)}
//         className="font-medium text-gray-800 dark:text-gray-100"
//       >
//         {value}
//       </button>
//     )
//   },
//   {
//     header: 'Amount',
//     accessor: 'amount_paid', // Direct key access works for top-level properties
//     cellRenderer: (value) => (
//       <span className="font-medium text-gray-800 dark:text-gray-100">{value}</span>
//     )
//   },
//   {
//     header: 'note',
//     accessor: 'note',
//     cellRenderer: (value) => (
//       <div className="font-medium text-gray-800 dark:text-gray-100">
//         {value}
//       </div>
//     )
//   },
//   {
//     header: 'Created on',
//     accessor: 'paid_at',
//     align: 'right',
//      cellRenderer: (value) => {
//       const formattedDate = format(new Date(String(value)), 'MMM dd, yyyy HH:mm:ss');
//       return <div className="font-medium text-gray-800 dark:text-gray-100">{formattedDate}</div>;
//       }
//   }
// ];

//   return (
//     <Design2Table
//       data={transactions}
//       columns={columns}
//       selectable
//     />
//   )
// }


'use client'

import Design2Table from '@/components/table/table2'
import { Design2TableColumn } from '@/components/table/table2'
import { format } from 'date-fns';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface TransactionActivity {
  _id?: string;
  action?: 'CREDIT' | 'DEBIT';
  amount?: number;
  notes?: string;
  datetime?: string;
  customer?: {
    name?: string;
    email?: string;
  };
}

export default function OrdersTable({ transactions = [] }: { transactions: any[] }) {
  const handleTransactionClick = (transaction: TransactionActivity) => {
    console.log('transaction details', transaction)
  }

  const columns: Design2TableColumn<TransactionActivity>[] = [
    {
      header: 'Type',
      accessor: 'action',
      cellRenderer: (value, item) => (
        <div className="flex items-center">
          {value === 'CREDIT' ? (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
              <ArrowDownRight className="h-3 w-3 mr-1" />
              Credit
            </span>
          ) : (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100">
              <ArrowUpRight className="h-3 w-3 mr-1" />
              Debit
            </span>
          )}
        </div>
      )
    },
    {
      header: 'Customer',
      accessor: (item) => item.customer?.name || 'System',
      cellRenderer: (value, item) => (
        <button
          onClick={() => handleTransactionClick(item)}
          className="font-medium text-gray-800 dark:text-gray-100"
        >
          {value}
        </button>
      )
    },
    {
      header: 'Amount',
      accessor: 'amount',
      cellRenderer: (value, item) => {
        const formattedAmount = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(value);
        
        return (
          <span className={`font-medium ${item.action === 'CREDIT' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
            {item.action === 'CREDIT' ? '+' : '-'}{formattedAmount}
          </span>
        );
      }
    },
    {
      header: 'Notes',
      accessor: 'notes',
      cellRenderer: (value) => (
        <div className="font-medium text-gray-800 dark:text-gray-100 truncate max-w-xs">
          {value || '-'}
        </div>
      )
    },
    {
      header: 'Date',
      accessor: 'datetime',
      align: 'right',
      cellRenderer: (value) => {
        try {
          const formattedDate = format(new Date(String(value)), 'MMM dd, yyyy HH:mm');
          return <div className="font-medium text-gray-800 dark:text-gray-100">{formattedDate}</div>;
        } catch (error) {
          return <div className="font-medium text-gray-800 dark:text-gray-100">Invalid date</div>;
        }
      }
    }
  ];

  return (
    <div>
      {transactions.length === 0 ? (
        <div className="text-center py-12 border border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
          <p className="text-gray-500 dark:text-gray-400">No transactions found</p>
          <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
            Use the buttons above to add credit or debit transactions
          </p>
        </div>
      ) : (
        <Design2Table
          data={transactions}
          columns={columns}
          selectable
        />
      )}
    </div>
  )
}