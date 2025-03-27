

// 'use client'
// import { useEffect, useState } from 'react'
// import { useAlert } from '@/app/contexts/alertContext'
// import { 
//   DollarSign, Loader2, Check, Calendar, FileText,
//   ArrowUpRight, ArrowDownRight, X, Plus
// } from 'lucide-react'
// import { SelectedItemsProvider } from '@/app/selected-items-context'
// import { FlyoutProvider } from '@/app/flyout-context'
// import OrdersTable from './orders-table'
// import PaginationClassic from '@/components/pagination-classic'
// // import { generateItemCode } from '../../../services/inventoryService'
// import { GeneratedCodeResponse } from '../../../types'
// import AssetAccountRequired from '../../asset-account-required'

// interface TransactionFormData {
//   amount: string
//   date: string
//   notes: string
// }

// function Transactions({ itemId }: { itemId: string }) {
//   const { alert } = useAlert()
//   const [transactions, setTransactions] = useState<any[]>([])
//   const [isLoading, setIsLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)
  
//   // Transaction form state
//   const [showCreditForm, setShowCreditForm] = useState(false)
//   const [showDebitForm, setShowDebitForm] = useState(false)
//   const [submitting, setSubmitting] = useState(false)
  
//   // Form data for credit and debit
//   const [creditFormData, setCreditFormData] = useState<TransactionFormData>({
//     amount: '',
//     date: new Date().toISOString().split('T')[0], // Today's date as default
//     notes: ''
//   })
  
//   const [debitFormData, setDebitFormData] = useState<TransactionFormData>({
//     amount: '',
//     date: new Date().toISOString().split('T')[0], // Today's date as default
//     notes: ''
//   })
  
  
//   const refreshTransactions = async () => {
//     try {
//       setIsLoading(true)
//       // const codes = await generateItemCode(itemId)
//       setTransactions([])
//     } catch (err) {
//       console.error('Failed to refresh transactions:', err)
//     } finally {
//       setIsLoading(false)
//     }
//   }
  
//   // Handle credit form input changes
//   const handleCreditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setCreditFormData(prev => ({
//       ...prev,
//       [name]: value
//     }))
//   }
  
//   // Handle debit form input changes
//   const handleDebitChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setDebitFormData(prev => ({
//       ...prev,
//       [name]: value
//     }))
//   }
  
//   // Submit credit transaction
//   const handleCreditSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     if (!creditFormData.amount) {
//       alert({ text: 'Please enter an amount', type: 'error' })
//       return
//     }
    
//     setSubmitting(true)
    
//     try {
//       // await createTransaction({
//       //   item_id: parseInt(itemId),
//       //   transaction_type: 'CREDIT',
//       //   amount: parseFloat(creditFormData.amount),
//       //   date: creditFormData.date,
//       //   notes: creditFormData.notes
//       // })
      
//       alert({ text: 'Credit transaction created successfully', type: 'success' })
//       setCreditFormData({
//         amount: '',
//         date: new Date().toISOString().split('T')[0],
//         notes: ''
//       })
//       setShowCreditForm(false)
//       refreshTransactions()
//     } catch (error) {
//       console.error('Credit transaction failed:', error)
//       alert({ text: 'Failed to create credit transaction', type: 'error' })
//     } finally {
//       setSubmitting(false)
//     }
//   }
  
//   // Submit debit transaction
//   const handleDebitSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     if (!debitFormData.amount) {
//       alert({ text: 'Please enter an amount', type: 'error' })
//       return
//     }
    
//     setSubmitting(true)
    
//     try {
//       alert({ text: 'Debit transaction created successfully', type: 'success' })
//       setDebitFormData({
//         amount: '',
//         date: new Date().toISOString().split('T')[0],
//         notes: ''
//       })
//       setShowDebitForm(false)
//       refreshTransactions()
//     } catch (error) {
//       console.error('Debit transaction failed:', error)
//       alert({ text: 'Failed to create debit transaction', type: 'error' })
//     } finally {
//       setSubmitting(false)
//     }
//   }
  
//   // Close any open form
//   const closeAllForms = () => {
//     setShowCreditForm(false)
//     setShowDebitForm(false)
//   }
  
//   if (isLoading && transactions.length === 0) {
//     return (
//       <div className="flex items-center justify-center min-h-[400px]">
//         <div className="animate-pulse flex flex-col items-center">
//           <div className="h-12 w-12 rounded-full bg-blue-200 mb-3"></div>
//           <div className="text-gray-500">Loading transaction history...</div>
//         </div>
//       </div>
//     )
//   }
  
//   if (error && transactions.length === 0) {
//     return <div className="p-6 text-red-500">{error}</div>
//   }
  
//   return (
//     <div className="grow bg-white dark:bg-gray-900 rounded-lg shadow-lg">
//       <div className="p-6 space-y-6">
//         <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
//           <div className="flex justify-between items-center">
//             <div>
//               <h2 className="text-2xl text-gray-800 dark:text-gray-100 font-bold">Transactions</h2>
//               <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">View and manage account transactions</p>
//             </div>
            
//             <div className="flex space-x-2">
//               <button
//                 type="button"
//                 onClick={() => {
//                   closeAllForms()
//                   setShowCreditForm(true)
//                 }}
//                 className="px-4 py-2 bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 text-white font-medium rounded-lg text-sm transition duration-150 ease-in-out flex items-center h-10"
//               >
//                 <ArrowDownRight className="h-4 w-4 mr-1" />
//                 Add Credit
//               </button>
              
//               <button
//                 type="button"
//                 onClick={() => {
//                   closeAllForms()
//                   setShowDebitForm(true)
//                 }}
//                 className="px-4 py-2 bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 text-white font-medium rounded-lg text-sm transition duration-150 ease-in-out flex items-center h-10"
//               >
//                 <ArrowUpRight className="h-4 w-4 mr-1" />
//                 Add Debit
//               </button>
//             </div>
//           </div>
//         </div>
        
//         {/* Credit Transaction Form */}
//         {showCreditForm && (
//           <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 flex items-center">
//                 <ArrowDownRight className="h-5 w-5 text-green-500 mr-2" />
//                 Add Credit Transaction
//               </h3>
//               <button 
//                 type="button"
//                 onClick={() => setShowCreditForm(false)}
//                 className="text-gray-400 hover:text-gray-500"
//               >
//                 <X className="h-5 w-5" />
//               </button>
//             </div>
            
//             <form onSubmit={handleCreditSubmit} className="space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="relative">
//                   <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
//                     Amount
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <DollarSign className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <input 
//                       type="number"
//                       step="0.01"
//                       name="amount"
//                       className="form-input pl-10 w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-green-500 focus:border-green-500"
//                       value={creditFormData.amount}
//                       onChange={handleCreditChange}
//                       placeholder="0.00"
//                       required
//                     />
//                   </div>
//                 </div>
                
//                 <div className="relative">
//                   <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
//                     Date
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <Calendar className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <input 
//                       type="date"
//                       name="date"
//                       className="form-input pl-10 w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-green-500 focus:border-green-500"
//                       value={creditFormData.date}
//                       onChange={handleCreditChange}
//                       required
//                     />
//                   </div>
//                 </div>
//               </div>
              
//               <div className="relative">
//                 <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
//                   Notes
//                 </label>
//                 <div className="relative">
//                   <div className="absolute top-3 left-3 flex items-start pointer-events-none">
//                     <FileText className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <textarea 
//                     name="notes"
//                     className="form-textarea pl-10 w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-green-500 focus:border-green-500"
//                     value={creditFormData.notes}
//                     onChange={handleCreditChange}
//                     placeholder="Add transaction notes (optional)"
//                     rows={3}
//                   ></textarea>
//                 </div>
//               </div>
              
//               <div className="flex justify-end pt-4">
//                 <button
//                   type="button"
//                   onClick={() => setShowCreditForm(false)}
//                   className="mr-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-medium rounded-lg text-sm transition duration-150 ease-in-out flex items-center h-10"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   disabled={submitting}
//                   className={`px-4 py-2 ${submitting ? 'bg-green-500' : 'bg-green-600 hover:bg-green-700'} focus:ring-4 focus:ring-green-300 text-white font-medium rounded-lg text-sm transition duration-150 ease-in-out flex items-center h-10`}
//                 >
//                   {submitting ? (
//                     <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Processing...</>
//                   ) : (
//                     <><Plus className="h-4 w-4 mr-2" /> Add Credit</>
//                   )}
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}
        
//         {/* Debit Transaction Form */}
//         {showDebitForm && (
//           <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6">
//             <div className="flex justify-between items-center mb-4">
//               <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 flex items-center">
//                 <ArrowUpRight className="h-5 w-5 text-red-500 mr-2" />
//                 Add Debit Transaction
//               </h3>
//               <button 
//                 type="button"
//                 onClick={() => setShowDebitForm(false)}
//                 className="text-gray-400 hover:text-gray-500"
//               >
//                 <X className="h-5 w-5" />
//               </button>
//             </div>
            
//             <form onSubmit={handleDebitSubmit} className="space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="relative">
//                   <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
//                     Amount
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <DollarSign className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <input 
//                       type="number"
//                       step="0.01"
//                       name="amount"
//                       className="form-input pl-10 w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-red-500 focus:border-red-500"
//                       value={debitFormData.amount}
//                       onChange={handleDebitChange}
//                       placeholder="0.00"
//                       required
//                     />
//                   </div>
//                 </div>
                
//                 <div className="relative">
//                   <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
//                     Date
//                   </label>
//                   <div className="relative">
//                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                       <Calendar className="h-5 w-5 text-gray-400" />
//                     </div>
//                     <input 
//                       type="date"
//                       name="date"
//                       className="form-input pl-10 w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-red-500 focus:border-red-500"
//                       value={debitFormData.date}
//                       onChange={handleDebitChange}
//                       required
//                     />
//                   </div>
//                 </div>
//               </div>
              
//               <div className="relative">
//                 <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
//                   Notes
//                 </label>
//                 <div className="relative">
//                   <div className="absolute top-3 left-3 flex items-start pointer-events-none">
//                     <FileText className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <textarea 
//                     name="notes"
//                     className="form-textarea pl-10 w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-red-500 focus:border-red-500"
//                     value={debitFormData.notes}
//                     onChange={handleDebitChange}
//                     placeholder="Add transaction notes (optional)"
//                     rows={3}
//                   ></textarea>
//                 </div>
//               </div>
              
//               <div className="flex justify-end pt-4">
//                 <button
//                   type="button"
//                   onClick={() => setShowDebitForm(false)}
//                   className="mr-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-medium rounded-lg text-sm transition duration-150 ease-in-out flex items-center h-10"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   disabled={submitting}
//                   className={`px-4 py-2 ${submitting ? 'bg-red-500' : 'bg-red-600 hover:bg-red-700'} focus:ring-4 focus:ring-red-300 text-white font-medium rounded-lg text-sm transition duration-150 ease-in-out flex items-center h-10`}
//                 >
//                   {submitting ? (
//                     <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Processing...</>
//                   ) : (
//                     <><Plus className="h-4 w-4 mr-2" /> Add Debit</>
//                   )}
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}
        
//         {/* Transaction Table */}
//         <OrdersTable transactions={transactions} />
        
//         {/* Pagination */}
//         <div className="mt-8">
//           <PaginationClassic />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default function TransactionsPage({ itemId }: { itemId: string }) {
//     if(itemId === "new") {
//       return <AssetAccountRequired stageName='Payments' />
//     }
//   return (
//     <SelectedItemsProvider>
//       <FlyoutProvider>
//         <Transactions itemId={itemId} />
//       </FlyoutProvider>
//     </SelectedItemsProvider>
//   )
// }



'use client'
import { useEffect, useState } from 'react'
import { useAlert } from '@/app/contexts/alertContext'
import { 
  DollarSign, Loader2, Check, Calendar, FileText,
  ArrowUpRight, ArrowDownRight, X, Plus
} from 'lucide-react'
import { SelectedItemsProvider } from '@/app/selected-items-context'
import { FlyoutProvider } from '@/app/flyout-context'
import OrdersTable from './orders-table'
import PaginationClassic from '@/components/pagination-classic'
import { useLazygetSpecificAssetAccountsForClientQuery } from '../../queries'
import useCreditCreditAccount from '../../hook/useCreditCreditAccount'
import useDebitCreditAccount from '../../hook/useDebitCreditAccount'
import AssetAccountRequired from '../../asset-account-required'
import { AccountActions } from '../../types/globalTypes'
import TransactionSkeleton from '../../table-loading'
interface TransactionFormData {
  amount: string
  date: string
  notes: string
}

function Transactions({ itemId }: { itemId: string }) {
  const { alert } = useAlert()
  const [transactions, setTransactions] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  // Transaction form state
  const [showCreditForm, setShowCreditForm] = useState(false)
  const [showDebitForm, setShowDebitForm] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  
  // Form data for credit and debit
  const [creditFormData, setCreditFormData] = useState<TransactionFormData>({
    amount: '',
    date: new Date().toISOString().split('T')[0], // Today's date as default
    notes: ''
  })
  
  const [debitFormData, setDebitFormData] = useState<TransactionFormData>({
    amount: '',
    date: new Date().toISOString().split('T')[0], // Today's date as default
    notes: ''
  })

  // Apollo queries and mutations
  const [getAssetAccount, { 
    data: assetAccountData, 
    loading: assetAccountLoading 
  }] = useLazygetSpecificAssetAccountsForClientQuery({
    id: itemId
  })

  const { creditCreditAccount } = useCreditCreditAccount(
    (data) => {
      alert({ text: 'Credit transaction created successfully', type: 'success' })
      refreshTransactions()
    }
  )

  const { debitCreditAccount } = useDebitCreditAccount(
    (data) => {
      alert({ text: 'Debit transaction created successfully', type: 'success' })
      refreshTransactions()
    }
  )
  
  // Fetch asset account data on component mount
  useEffect(() => {
    if (itemId && itemId !== 'new') {
      getAssetAccount()
    }
  }, [itemId, getAssetAccount])

  // Extract transactions from asset account data when it changes
  useEffect(() => {
    if (assetAccountData && assetAccountData.getSpecificAssetAccount) {
      const { credit } = assetAccountData.getSpecificAssetAccount
      if (credit && credit.activities) {
        // Format transactions according to your data structure
        setTransactions(credit.activities.map(activity => ({
          ...activity,
          // Ensure consistent field naming for table display
          action: activity.action,
          datetime: activity.datetime,
          notes: activity.notes 
        })))
      } else {
        setTransactions([])
      }
      setIsLoading(false)
    }
  }, [assetAccountData])
  
  const refreshTransactions = async () => {
    try {
      setIsLoading(true)
      await getAssetAccount()
    } catch (err) {
      console.error('Failed to refresh transactions:', err)
      setError('Failed to load transactions. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }
  
  // Handle credit form input changes
  const handleCreditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setCreditFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  // Handle debit form input changes
  const handleDebitChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setDebitFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  // Submit credit transaction
  const handleCreditSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!creditFormData.amount) {
      alert({ text: 'Please enter an amount', type: 'error' })
      return
    }
    
    setSubmitting(true)
    
    try {
      await creditCreditAccount({
        variables: {
          assetAccountId: itemId,
          paymentInput: {
            amount: parseFloat(creditFormData.amount),
            datetime: new Date(creditFormData.date).toISOString(),
            notes: creditFormData.notes,
            action: AccountActions.CREDIT
          }
        }
      })
      
      setCreditFormData({
        amount: '',
        date: new Date().toISOString().split('T')[0],
        notes: ''
      })
      setShowCreditForm(false)
    } catch (error) {
      console.error('Credit transaction failed:', error)
      alert({ text: 'Failed to create credit transaction', type: 'error' })
    } finally {
      setSubmitting(false)
    }
  }
  
  // Submit debit transaction
  const handleDebitSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!debitFormData.amount) {
      alert({ text: 'Please enter an amount', type: 'error' })
      return
    }
    
    setSubmitting(true)
    
    try {
      await debitCreditAccount({
        variables: {
          assetAccountId: itemId,
          paymentInput: {
            amount: parseFloat(debitFormData.amount),
            datetime: new Date(debitFormData.date).toISOString(),
            notes: debitFormData.notes,
            action: AccountActions.DEBIT
          }
        }
      })
      
      setDebitFormData({
        amount: '',
        date: new Date().toISOString().split('T')[0],
        notes: ''
      })
      setShowDebitForm(false)
    } catch (error) {
      console.error('Debit transaction failed:', error)
      alert({ text: 'Failed to create debit transaction', type: 'error' })
    } finally {
      setSubmitting(false)
    }
  }
  
  // Close any open form
  const closeAllForms = () => {
    setShowCreditForm(false)
    setShowDebitForm(false)
  }
  
  if (isLoading && transactions.length === 0) {
    return <TransactionSkeleton/>
  }
  
  if (error && transactions.length === 0) {
    return <div className="p-6 text-red-500">{error}</div>
  }
  
  return (
    <div className="grow bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <div className="p-6 space-y-6">
        <div className="border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl text-gray-800 dark:text-gray-100 font-bold">Transactions</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">View and manage account transactions</p>
            </div>
            
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={() => {
                  closeAllForms()
                  setShowCreditForm(true)
                }}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 text-white font-medium rounded-lg text-sm transition duration-150 ease-in-out flex items-center h-10"
              >
                <ArrowDownRight className="h-4 w-4 mr-1" />
                Add Credit
              </button>
              
              <button
                type="button"
                onClick={() => {
                  closeAllForms()
                  setShowDebitForm(true)
                }}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 text-white font-medium rounded-lg text-sm transition duration-150 ease-in-out flex items-center h-10"
              >
                <ArrowUpRight className="h-4 w-4 mr-1" />
                Add Debit
              </button>
            </div>
          </div>
        </div>
        
        {/* Credit Transaction Form */}
        {showCreditForm && (
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 flex items-center">
                <ArrowDownRight className="h-5 w-5 text-green-500 mr-2" />
                Add Credit Transaction
              </h3>
              <button 
                type="button"
                onClick={() => setShowCreditForm(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <form onSubmit={handleCreditSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Amount
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <DollarSign className="h-5 w-5 text-gray-400" />
                    </div>
                    <input 
                      type="number"
                      step="0.01"
                      name="amount"
                      className="form-input pl-10 w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-green-500 focus:border-green-500"
                      value={creditFormData.amount}
                      onChange={handleCreditChange}
                      placeholder="0.00"
                      required
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input 
                      type="date"
                      name="date"
                      className="form-input pl-10 w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-green-500 focus:border-green-500"
                      value={creditFormData.date}
                      onChange={handleCreditChange}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Notes
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                    <FileText className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea 
                    name="notes"
                    className="form-textarea pl-10 w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-green-500 focus:border-green-500"
                    value={creditFormData.notes}
                    onChange={handleCreditChange}
                    placeholder="Add transaction notes (optional)"
                    rows={3}
                  ></textarea>
                </div>
              </div>
              
              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={() => setShowCreditForm(false)}
                  className="mr-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-medium rounded-lg text-sm transition duration-150 ease-in-out flex items-center h-10"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className={`px-4 py-2 ${submitting ? 'bg-green-500' : 'bg-green-600 hover:bg-green-700'} focus:ring-4 focus:ring-green-300 text-white font-medium rounded-lg text-sm transition duration-150 ease-in-out flex items-center h-10`}
                >
                  {submitting ? (
                    <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Processing...</>
                  ) : (
                    <><Plus className="h-4 w-4 mr-2" /> Add Credit</>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
        
        {/* Debit Transaction Form */}
        {showDebitForm && (
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 flex items-center">
                <ArrowUpRight className="h-5 w-5 text-red-500 mr-2" />
                Add Debit Transaction
              </h3>
              <button 
                type="button"
                onClick={() => setShowDebitForm(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <form onSubmit={handleDebitSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Amount
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <DollarSign className="h-5 w-5 text-gray-400" />
                    </div>
                    <input 
                      type="number"
                      step="0.01"
                      name="amount"
                      className="form-input pl-10 w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-red-500 focus:border-red-500"
                      value={debitFormData.amount}
                      onChange={handleDebitChange}
                      placeholder="0.00"
                      required
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Date
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input 
                      type="date"
                      name="date"
                      className="form-input pl-10 w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-red-500 focus:border-red-500"
                      value={debitFormData.date}
                      onChange={handleDebitChange}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Notes
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                    <FileText className="h-5 w-5 text-gray-400" />
                  </div>
                  <textarea 
                    name="notes"
                    className="form-textarea pl-10 w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-red-500 focus:border-red-500"
                    value={debitFormData.notes}
                    onChange={handleDebitChange}
                    placeholder="Add transaction notes (optional)"
                    rows={3}
                  ></textarea>
                </div>
              </div>
              
              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={() => setShowDebitForm(false)}
                  className="mr-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-medium rounded-lg text-sm transition duration-150 ease-in-out flex items-center h-10"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className={`px-4 py-2 ${submitting ? 'bg-red-500' : 'bg-red-600 hover:bg-red-700'} focus:ring-4 focus:ring-red-300 text-white font-medium rounded-lg text-sm transition duration-150 ease-in-out flex items-center h-10`}
                >
                  {submitting ? (
                    <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Processing...</>
                  ) : (
                    <><Plus className="h-4 w-4 mr-2" /> Add Debit</>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
        
        {/* Transaction Table */}
        <OrdersTable transactions={transactions} />
        
        {/* Pagination */}
        <div className="mt-8">
          <PaginationClassic />
        </div>
      </div>
    </div>
  )
}

export default function TransactionsPage({ itemId }: { itemId: string }) {
  if(itemId === "new") {
    return <AssetAccountRequired stageName='Payments' />
  }
  return (
    <SelectedItemsProvider>
      <FlyoutProvider>
        <Transactions itemId={itemId} />
      </FlyoutProvider>
    </SelectedItemsProvider>
  )
}