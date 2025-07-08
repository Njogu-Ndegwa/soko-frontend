

'use client'

import { useQuery, gql } from '@apollo/client';
import EditMenu from '@/components/edit-menu'

// GraphQL Query
const GET_FINANCIAL_SUMMARY = gql`
  query MyQuery {
    financialSummary {
      totalRevenue
      totalCustomers
      monthlyRevenue
      thisMonthCustomers
      lastPaymentDate
      activeCustomers
    }
  }
`;

export default function FinancialSummaryCard() {
  const { data, loading, error } = useQuery(GET_FINANCIAL_SUMMARY);

  const formatLastPayment = (dateString: string) => {
    if (!dateString) return 'No payments';
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return `${diffInDays}d ago`;
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col col-span-full bg-white dark:bg-gray-800 shadow-sm rounded-xl">
        <div className="px-5 pt-5">
          <div className="animate-pulse">
            {/* Header skeleton */}
            <div className="flex justify-between items-start mb-2">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-2"></div>
              <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
            {/* Main metric skeleton */}
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-20 mb-1"></div>
            <div className="flex items-start">
              <div className="h-9 bg-gray-200 dark:bg-gray-700 rounded w-32 mr-2"></div>
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-12"></div>
            </div>
          </div>
        </div>
        
        {/* Metrics grid skeleton */}
        <div className="px-5 pt-4 pb-5">
          <div className="animate-pulse">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600/30 rounded-lg">
                  <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-12 mx-auto mb-2"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-16 mx-auto"></div>
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
      <div className="flex flex-col col-span-full bg-white dark:bg-gray-800 shadow-sm rounded-xl">
        <div className="px-5 pt-5">
          <div className="text-red-600 dark:text-red-400">
            Error loading data
          </div>
        </div>
      </div>
    );
  }

  const summary = data?.financialSummary;

  return(
    <div className="flex flex-col col-span-full bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Financial Summary</h2>
          {/* Menu button */}
          <EditMenu align="right" />
        </header>
        <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">Total Revenue</div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">KES {summary?.totalRevenue?.toLocaleString() || '0'}</div>
          <div className="text-sm font-medium text-green-700 px-1.5 bg-green-500/20 rounded-full">Active</div>
        </div>
      </div>
      
      {/* Financial Metrics */}
      <div className="px-5 pt-4 pb-5">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-700/30 rounded-lg">
            <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">{summary?.totalCustomers || '0'}</div>
            <div className="text-xs text-blue-600 dark:text-blue-400">Total Customers</div>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 border border-emerald-200 dark:border-emerald-700/30 rounded-lg">
            <div className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">{summary?.activeCustomers || '0'}</div>
            <div className="text-xs text-emerald-600 dark:text-emerald-400">Active Customers</div>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-900/20 dark:to-violet-800/20 border border-violet-200 dark:border-violet-700/30 rounded-lg">
            <div className="text-2xl font-bold text-violet-700 dark:text-violet-300">KES {summary?.monthlyRevenue?.toLocaleString() || '0'}</div>
            <div className="text-xs text-violet-600 dark:text-violet-400">Monthly Revenue</div>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 border border-amber-200 dark:border-amber-700/30 rounded-lg">
            <div className="text-2xl font-bold text-amber-700 dark:text-amber-300">{summary?.thisMonthCustomers || '0'}</div>
            <div className="text-xs text-amber-600 dark:text-amber-400">New This Month</div>
          </div>
          
          <div className="text-center p-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/20 dark:to-slate-700/20 border border-slate-200 dark:border-slate-600/30 rounded-lg">
            <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">Last Payment</div>
            <div className="text-lg font-bold text-slate-700 dark:text-slate-300">{formatLastPayment(summary?.lastPaymentDate || '')}</div>
          </div>
        </div>
      </div>
    </div>
  )
}