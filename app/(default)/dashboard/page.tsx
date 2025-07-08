// 'use-client'

// import FilterButton from '@/components/dropdown-filter'
// import Datepicker from '@/components/datepicker'
// import DashboardCard01 from './dashboard-card-01'
// import DashboardCard02 from './dashboard-card-02'
// import DashboardCard03 from './dashboard-card-03'
// import DashboardCard04 from './dashboard-card-04'
// import DashboardCard05 from './dashboard-card-05'
// import DashboardCard06 from './dashboard-card-06'
// import DashboardCard07 from './dashboard-card-07'
// import DashboardCard08 from './dashboard-card-08'
// import DashboardCard09 from './dashboard-card-09'
// import DashboardCard10 from './dashboard-card-10'
// import DashboardCard11 from './dashboard-card-11'

// export default function Dashboard() {
//   return (
//     <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
//       {/* Dashboard actions */}
//       <div className="sm:flex sm:justify-between sm:items-center mb-8">
//         {/* Left: Title */}
//         <div className="mb-4 sm:mb-0">
//           <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Dashboard</h1>
//         </div>
//         {/* Right: Actions */}
//         <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
//           {/* Filter button */}        
//           <FilterButton align="right" />
//           {/* Datepicker built with React Day Picker */}
//           <Datepicker />
//           {/* Add view button */}
//           <button className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
//             <svg className="fill-current shrink-0 xs:hidden" width="16" height="16" viewBox="0 0 16 16">
//               <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
//             </svg>
//             <span className="max-xs:sr-only">Add View</span>
//           </button>              
//         </div>
//       </div>

//       {/* Cards */}
//       <div className="grid grid-cols-12 gap-6">

   
//         <DashboardCard01 />
        
//       </div>      
//     </div>
//   )
// }


'use client'

import FilterButton from '@/components/dropdown-filter'
import Datepicker from '@/components/datepicker'
import FinancialSummaryCard from './financial-summary-card'
import PaymentSummaryCard from './payment-summary-card'
import DashboardMetricsCard from './dashboard-metrics-card'
import PlanMetricsCard from './plan-metrics-card'

export default function Dashboard() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
      {/* Dashboard actions */}
      <div className="sm:flex sm:justify-between sm:items-center mb-8">
        {/* Left: Title */}
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Dashboard</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Welcome back! Here's what's happening with your business today.
          </p>
        </div>
        
        {/* Right: Actions */}
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          {/* Filter button */}                
          <FilterButton align="right" />
          {/* Datepicker built with React Day Picker */}
          <Datepicker />
          {/* Add view button */}
          <button className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
            <svg className="fill-current shrink-0 xs:hidden" width="16" height="16" viewBox="0 0 16 16">
              <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
            </svg>
            <span className="max-xs:sr-only">Add View</span>
          </button>                     
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-12 gap-6">
        {/* Financial Summary - Full Width */}
        <FinancialSummaryCard />
        
        {/* Row 2: Payment & Customer Metrics */}
        {/* <PaymentSummaryCard />
        <DashboardMetricsCard /> */}
        
        {/* Row 3: Plan Performance - Half Width */}
        {/* <PlanMetricsCard /> */}
        
        {/* Placeholder for future cards */}
        <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-gray-800 shadow-sm rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600">
          <div className="px-5 py-8 text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
              <path d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m-16-4c1.381 0 2.721-.087 4-.252" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">Add More Analytics</h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              This space is ready for additional dashboard cards like revenue trends, customer analytics, or system status.
            </p>
            <div className="mt-6">
              <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700">
                <svg className="-ml-1 mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Add Widget
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}