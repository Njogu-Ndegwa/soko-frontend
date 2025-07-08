'use client'

import { useQuery, gql } from '@apollo/client';
import EditMenu from '@/components/edit-menu'

// GraphQL Query
const GET_PLAN_METRICS = gql`
  query MyQuery {
    planMetrics {
      customerCount
      planId
      planName
      totalRevenue
    }
  }
`;

export default function PlanMetricsCard() {
  const { data, loading, error } = useQuery(GET_PLAN_METRICS);

  if (loading) {
    return (
      <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
        <div className="px-5 pt-5">
          <div className="animate-pulse">
            <div className="flex justify-between items-start mb-4">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/3"></div>
              <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
            <div className="space-y-3">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-20"></div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-12"></div>
                  </div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
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
      <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
        <div className="px-5 pt-5">
          <div className="text-red-600 dark:text-red-400">
            Error loading plan metrics
          </div>
        </div>
      </div>
    );
  }

  const planMetrics = data?.planMetrics || [];
  const totalCustomers = planMetrics.reduce((sum: number, plan: any) => sum + (plan.customerCount || 0), 0);
  const totalRevenue = planMetrics.reduce((sum: number, plan: any) => sum + (plan.totalRevenue || 0), 0);

  return(
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <header className="px-5 py-4 border-b border-gray-100 dark:border-gray-700/60 flex items-center justify-between">
        <div>
          <h2 className="font-semibold text-gray-800 dark:text-gray-100">Plan Performance</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {totalCustomers} customers • KES {totalRevenue.toLocaleString()} revenue
          </p>
        </div>
        <EditMenu align="right" />
      </header>
      
      <div className="px-5 py-4">
        {planMetrics.length === 0 ? (
          <div className="text-center py-8">
            <div className="text-gray-500 dark:text-gray-400">No plan data available</div>
          </div>
        ) : (
          <div className="space-y-3">
            {planMetrics.map((plan: any, index: number) => {
              const colors = [
                'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-700/30 text-blue-700 dark:text-blue-300',
                'from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 border-emerald-200 dark:border-emerald-700/30 text-emerald-700 dark:text-emerald-300',
                'from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-700/30 text-purple-700 dark:text-purple-300',
                'from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-700/30 text-orange-700 dark:text-orange-300',
                'from-rose-50 to-rose-100 dark:from-rose-900/20 dark:to-rose-800/20 border-rose-200 dark:border-rose-700/30 text-rose-700 dark:text-rose-300'
              ];
              
              const colorClass = colors[index % colors.length];
              const percentage = totalCustomers > 0 ? ((plan.customerCount / totalCustomers) * 100).toFixed(1) : '0';
              
              return (
                <div 
                  key={plan.planId || index} 
                  className={`flex justify-between items-center p-4 bg-gradient-to-r ${colorClass} border rounded-lg`}
                >
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{plan.planName || `Plan ${plan.planId}`}</h3>
                      <div className="text-right">
                        <div className="font-bold">KES {(plan.totalRevenue || 0).toLocaleString()}</div>
                        <div className="text-xs opacity-75">{plan.customerCount || 0} customers</div>
                      </div>
                    </div>
                    <div className="mt-2 bg-white/50 dark:bg-gray-900/50 rounded-full h-2">
                      <div 
                        className="bg-current h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <div className="mt-1 text-xs opacity-75">{percentage}% of total customers</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  )
}