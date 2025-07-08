'use client'

import { useQuery, gql } from '@apollo/client';
import EditMenu from '@/components/edit-menu'

// GraphQL Query
const GET_PAYMENT_SUMMARY = gql`
  query MyQuery {
    paymentSummary {
      monthCount
      thisMonth
      thisWeek
      today
      todayCount
      total
      weekCount
    }
  }
`;

export default function PaymentSummaryCard() {
  const { data, loading, error } = useQuery(GET_PAYMENT_SUMMARY);

  if (loading) {
    return (
      <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
        <div className="px-5 pt-5">
          <div className="animate-pulse">
            <div className="flex justify-between items-start mb-2">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-2"></div>
              <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-20 mb-1"></div>
            <div className="flex items-start">
              <div className="h-9 bg-gray-200 dark:bg-gray-700 rounded w-32 mr-2"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-12"></div>
            </div>
          </div>
        </div>
        <div className="px-5 pt-4 pb-5">
          <div className="animate-pulse">
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-8 mx-auto mb-2"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-12 mx-auto"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
        <div className="px-5 pt-5">
          <div className="text-red-600 dark:text-red-400">
            Error loading payment data
          </div>
        </div>
      </div>
    );
  }

  const summary = data?.paymentSummary;

  return(
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Payment Activity</h2>
          <EditMenu align="right" />
        </header>
        <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">Total Payments</div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">KES {summary?.total?.toLocaleString() || '0'}</div>
          <div className="text-sm font-medium text-green-700 px-1.5 bg-green-500/20 rounded-full">
            {summary?.todayCount || 0} today
          </div>
        </div>
      </div>
      
      {/* Payment Metrics */}
      <div className="px-5 pt-4 pb-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-700/30 rounded-lg">
            <div className="text-xl font-bold text-green-700 dark:text-green-300">KES {summary?.today?.toLocaleString() || '0'}</div>
            <div className="text-xs text-green-600 dark:text-green-400">Today</div>
          </div>
          
          <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-700/30 rounded-lg">
            <div className="text-xl font-bold text-blue-700 dark:text-blue-300">KES {summary?.thisWeek?.toLocaleString() || '0'}</div>
            <div className="text-xs text-blue-600 dark:text-blue-400">This Week</div>
          </div>
          
          <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-700/30 rounded-lg">
            <div className="text-xl font-bold text-purple-700 dark:text-purple-300">KES {summary?.thisMonth?.toLocaleString() || '0'}</div>
            <div className="text-xs text-purple-600 dark:text-purple-400">This Month</div>
          </div>
          
          <div className="text-center p-3 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-700/30 rounded-lg">
            <div className="text-xl font-bold text-orange-700 dark:text-orange-300">{summary?.monthCount || '0'}</div>
            <div className="text-xs text-orange-600 dark:text-orange-400">Transactions</div>
          </div>
        </div>
      </div>
    </div>
  )
}