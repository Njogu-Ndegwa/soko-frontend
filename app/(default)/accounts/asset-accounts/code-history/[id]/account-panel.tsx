// import { SelectedItemsProvider } from '@/app/selected-items-context'
// import { FlyoutProvider } from '@/app/flyout-context'
// import OrdersTable from './orders-table'
// import PaginationClassic from '@/components/pagination-classic'
// import { useEffect, useState } from 'react';
// import { useLazyGetAllCodeEventForSpecificItemByDistributor, useLazygetSpecificAssetAccountsForClientQuery } from '../../queries';
// import { useAuth } from '@/lib/auth-context';
// import { usePagination } from '@/components/utils/pagination';
// function Transactions({itemId} : {itemId:string}) {

//   const [error, setError] = useState<string | null>(null);
//   const [assetid, setAssetId] = useState<any>("")
//   const[history, setHistory] = useState<any>([])
//   const {distributorId} = useAuth();

//       const {
//         currentCursor,
//         cursorHistory,
//         handleNext,
//         handlePrevious,
//         itemsPerPage,
//         setItemsPerPage,
//         hasPreviousPage, // Use this from hook instead of API
//         currentPage, // Use this from hook instead of calculating
//       } = usePagination();
//   const [getCodeEvents, { loading: assetLoading, error: assetError, data }] = useLazyGetAllCodeEventForSpecificItemByDistributor({
//     distributorId: distributorId,
//     itemId: assetid || "",
//     first: itemsPerPage,
//     after: currentCursor,
//   });

//       const [getAssetAccount, { data: assetAccountData, loading: assetAccountLoading }] = useLazygetSpecificAssetAccountsForClientQuery({
//           id: itemId
//       })
      
//       // Load asset account data when component mounts
//       useEffect(() => {
//           const fetchAssetAccount = async () => {
//               // setPageLoading(true)
//               try {
//                   await getAssetAccount({
//                       variables: { id: itemId }
//                   })
//               } catch (error) {
//                   console.error('Failed to fetch asset account:', error)
//                   alert({ text: 'Failed to load asset information', type: 'error' })
//                   // setPageLoading(false) // Ensure we exit loading state even on error
//               }
//           }
          
//           if (itemId) {
//               fetchAssetAccount()
//           }
//       }, [itemId, getAssetAccount])
      
//       // Extract the asset ID from the response
//       useEffect(() => {
//           if (assetAccountData?.getSpecificAssetAccount?.asset?._id) {
//               setAssetId(assetAccountData.getSpecificAssetAccount.asset._id)
//               // setPageLoading(false)
//           }
//       }, [assetAccountData])


//     useEffect(() => {
//       getCodeEvents();
//     }, [itemsPerPage]);

//      const pageInfo = data?.getAllCodeEventsForSpecificItemByDistributor?.page?.pageInfo || {
//     hasNextPage: false, 
//     hasPreviousPage: false
//   };

//    const totalCount = data?.getAllCodeEventsForSpecificItemByDistributor?.pageData?.count || 0;
  
//   // Handler for next page button
//   const handleNextPage = () => {
//     if (pageInfo.hasNextPage && pageInfo.endCursor) {
//       handleNext(pageInfo.endCursor);
//     }
//   };


//     useEffect(() => {
//       if(data?.getAllCodeEventsForSpecificItemByDistributor?.page?.edges) {
//       setHistory(data?.getAllCodeEventsForSpecificItemByDistributor?.page?.edges || [])
//       }
//     },[data])

//   if (error) {
//     return <div className="p-6 text-red-500">{error}</div>;
//   }

 
  
 
  
//   // Handler for previous page button
//   const handlePreviousPage = () => {
//     handlePrevious();
//   };

//   console.log(history, "Data----3223")

//   return (
//     <div className="grow">
//       <div className="p-6 space-y-6">
//         <h2 className="text-2xl text-gray-800 dark:text-gray-100 font-bold mb-5">Code History</h2>
//         {assetLoading ? (
//         <div>Loading...</div>
//       ) : (
//         <OrdersTable transactions={history} />
//       )}
//         <div className="mt-8">
//                <PaginationClassic 
//              currentPage={currentPage}
//              totalItems={totalCount}
//              itemsPerPage={itemsPerPage}
//              hasNextPage={pageInfo.hasNextPage}
//              hasPreviousPage={hasPreviousPage} // Use the one from hook
//              onNextPage={handleNextPage}
//              onPreviousPage={handlePreviousPage}
//            />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default function Orders({ itemId }: { itemId: any }) {
//   return (
//     <SelectedItemsProvider>
//       <FlyoutProvider>
//           <Transactions itemId={itemId}/>
//       </FlyoutProvider>
//     </SelectedItemsProvider>
//   )
// }


import { SelectedItemsProvider } from '@/app/selected-items-context'
import { FlyoutProvider } from '@/app/flyout-context'
import OrdersTable from './orders-table'
import PaginationClassic from '@/components/pagination-classic'
import { useEffect, useState } from 'react';
import { useLazyGetAllCodeEventForSpecificItemByDistributor, useLazygetSpecificAssetAccountsForClientQuery } from '../../queries';
import { useAuth } from '@/lib/auth-context';
import { usePagination } from '@/components/utils/pagination';
import AssetAccountRequired from '../../asset-account-required';
import TransactionSkeleton from '../../table-loading';
function Transactions({itemId} : {itemId:string}) {
  const [error, setError] = useState<string | null>(null);
  const [assetid, setAssetId] = useState<any>("")
  const[history, setHistory] = useState<any>([])
  const {distributorId} = useAuth();

  const {
    currentCursor,
    cursorHistory,
    handleNext,
    handlePrevious,
    itemsPerPage,
    setItemsPerPage,
    hasPreviousPage, // Use this from hook instead of API
    currentPage, // Use this from hook instead of calculating
  } = usePagination();

  const [getCodeEvents, { loading: assetLoading, error: assetError, data }] = useLazyGetAllCodeEventForSpecificItemByDistributor({
    distributorId: distributorId,
    itemId: assetid || "",
    first: itemsPerPage,
    after: currentCursor,
  });

  const [getAssetAccount, { data: assetAccountData, loading: assetAccountLoading }] = useLazygetSpecificAssetAccountsForClientQuery({
    id: itemId
  })
    
  // Load asset account data when component mounts
  useEffect(() => {
    const fetchAssetAccount = async () => {
      // setPageLoading(true)
      try {
        await getAssetAccount({
          variables: { id: itemId }
        })
      } catch (error) {
        console.error('Failed to fetch asset account:', error)
        alert({ text: 'Failed to load asset information', type: 'error' })
        // setPageLoading(false) // Ensure we exit loading state even on error
      }
    }
      
    if (itemId) {
      fetchAssetAccount()
    }
  }, [itemId, getAssetAccount])
    
  // Extract the asset ID from the response
  useEffect(() => {
    if (assetAccountData?.getSpecificAssetAccount?.asset?._id) {
      setAssetId(assetAccountData.getSpecificAssetAccount.asset._id)
      // setPageLoading(false)
    }
  }, [assetAccountData])

  useEffect(() => {
    getCodeEvents();
  }, [itemsPerPage]);

  const pageInfo = data?.getAllCodeEventsForSpecificItemByDistributor?.page?.pageInfo || {
    hasNextPage: false, 
    hasPreviousPage: false
  };

  const totalCount = data?.getAllCodeEventsForSpecificItemByDistributor?.pageData?.count || 0;
  
  // Handler for next page button
  const handleNextPage = () => {
    if (pageInfo.hasNextPage && pageInfo.endCursor) {
      handleNext(pageInfo.endCursor);
    }
  };

  useEffect(() => {
    if(data?.getAllCodeEventsForSpecificItemByDistributor?.page?.edges) {
      setHistory(data?.getAllCodeEventsForSpecificItemByDistributor?.page?.edges || [])
    }
  },[data])

  if (error) {
    return <div className="p-6 text-red-500">{error}</div>;
  }
  
  // Handler for previous page button
  const handlePreviousPage = () => {
    handlePrevious();
  };

  console.log(history, "Data----3223")
if(assetLoading) {
 return <TransactionSkeleton/>
}
  return (
    <div className="grow relative w-full max-w-full">
      <div className="p-6 space-y-6">
        <h2 className="text-2xl text-gray-800 dark:text-gray-100 font-bold mb-5">Code History</h2>
          <div className="w-full">
            <div className="overflow-x-auto" style={{ maxWidth: '100%' }}>
              <OrdersTable transactions={history} />
            </div>
          </div>
        <div className="mt-8">
          <PaginationClassic 
            currentPage={currentPage}
            totalItems={totalCount}
            itemsPerPage={itemsPerPage}
            hasNextPage={pageInfo.hasNextPage}
            hasPreviousPage={hasPreviousPage} // Use the one from hook
            onNextPage={handleNextPage}
            onPreviousPage={handlePreviousPage}
          />
        </div>
      </div>
    </div>
  )
}

export default function Orders({ itemId }: { itemId: any }) {

  if(itemId === "new") {
    return <AssetAccountRequired stageName='Code History' />
  }
  return (
    <SelectedItemsProvider>
      <FlyoutProvider>
        <Transactions itemId={itemId}/>
      </FlyoutProvider>
    </SelectedItemsProvider>
  )
}