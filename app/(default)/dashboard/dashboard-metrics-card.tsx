'use client'

import { useQuery, gql } from '@apollo/client';
import EditMenu from '@/components/edit-menu'

// GraphQL Query
const GET_DASHBOARD_METRICS = gql`
  query MyQuery {
    dashboardMetrics {
      activeCustomers
      expiringSoon
      inactiveCustomers
      subscriptionDaysLeft
      totalRevenue
    }
  }
`;

export default function DashboardMetricsCard() {
  const { data, loading, error } = useQuery(GET_DASHBOARD_METRICS);

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
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
            </div>
          </div>
        </div>
        <div className="px-5 pt-4 pb-5">
          <div className="animate-pulse">
            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="text-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-8 mx-auto mb-2"></div>
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
      <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
        <div className="px-5 pt-5">
          <div className="text-red-600 dark:text-red-400">
            Error loading metrics
          </div>
        </div>
      </div>
    );
  }

  const metrics = data?.dashboardMetrics;

  return(
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Customer Metrics</h2>
          <EditMenu align="right" />
        </header>
        <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">Active Customers</div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">{metrics?.activeCustomers?.toLocaleString() || '0'}</div>
          <div className="text-sm font-medium text-amber-700 px-1.5 bg-amber-500/20 rounded-full">
            {metrics?.expiringSoon || 0} expiring
          </div>
        </div>
      </div>
      
      {/* Customer Metrics */}
      <div className="px-5 pt-4 pb-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 border border-emerald-200 dark:border-emerald-700/30 rounded-lg">
            <div className="text-xl font-bold text-emerald-700 dark:text-emerald-300">{metrics?.activeCustomers || '0'}</div>
            <div className="text-xs text-emerald-600 dark:text-emerald-400">Active</div>
          </div>
          
          <div className="text-center p-3 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border border-red-200 dark:border-red-700/30 rounded-lg">
            <div className="text-xl font-bold text-red-700 dark:text-red-300">{metrics?.inactiveCustomers || '0'}</div>
            <div className="text-xs text-red-600 dark:text-red-400">Inactive</div>
          </div>
          
          <div className="text-center p-3 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 border border-amber-200 dark:border-amber-700/30 rounded-lg">
            <div className="text-xl font-bold text-amber-700 dark:text-amber-300">{metrics?.expiringSoon || '0'}</div>
            <div className="text-xs text-amber-600 dark:text-amber-400">Expiring Soon</div>
          </div>
          
          <div className="text-center p-3 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20 border border-indigo-200 dark:border-indigo-700/30 rounded-lg">
            <div className="text-xl font-bold text-indigo-700 dark:text-indigo-300">{metrics?.subscriptionDaysLeft || '0'}</div>
            <div className="text-xs text-indigo-600 dark:text-indigo-400">Avg Days Left</div>
          </div>
        </div>
      </div>
    </div>
  )
}