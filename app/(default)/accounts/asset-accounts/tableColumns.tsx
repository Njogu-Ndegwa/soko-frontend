// import { TableColumn } from '@/components/table/table'
// import { format } from 'date-fns';
// import { CustomerInterface } from '../types'
// import { Pencil, Trash2, Plus, MoreHorizontal } from 'lucide-react'

// export const columns: TableColumn<any>[] = [
//     {
//         header: 'ID',
//         accessor: 'node._id' as keyof any,
//         cellRenderer: (value: unknown, item: any) => (
//             <div className="font-medium text-sky-600">
//                 {String(item.node._id)}
//             </div>
//         )
//     },
//     // {
//     //     header: 'Name',
//     //     accessor: 'name' as keyof any,
//     //     cellRenderer: (value: unknown, item: any) => (
//     //         <div className="font-medium text-gray-800 dark:text-gray-100">
//     //             {String(value)}
//     //         </div>
//     //     )
//     // },
//     // {
//     //     header: 'Email',
//     //     accessor: 'email' as keyof any,
//     //     cellRenderer: (value: unknown, item: any) => (
//     //         <div className="max-w-md truncate">{String(value)}</div>
//     //     )
//     // },
//     // {
//     //     header: 'Phone Number',
//     //     accessor: 'phone_number' as keyof any,
//     //     cellRenderer: (value: unknown, item: any) => (
//     //         <div className="max-w-md truncate">
//     //             {String(value)}
//     //         </div>
//     //     )
//     // },
//     // {
//     //     header: 'Assigned Agent',
//     //     accessor: 'assigned_agent' as keyof any,
//     //     cellRenderer: (value: unknown, item: any) => (
//     //         <div className="max-w-md truncate">
//     //             {String(value)}
//     //         </div>
//     //     )
//     // },
//     // {
//     //     header: 'Created At',
//     //     accessor: 'created_at' as keyof any,
//     //     cellRenderer: (value: unknown, item: any) => {
//     //         const formattedDate = format(new Date(String(value)), 'MMM dd, yyyy HH:mm:ss');
//     //         return <div className="max-w-md truncate">{formattedDate}</div>;
//     //     }
//     // },
//     // {
//     //     header: 'Updated At',
//     //     accessor: 'updated_at' as keyof any,
//     //     cellRenderer: (value: unknown, item: CustomerInterface) => {
//     //         const formattedDate = format(new Date(String(value)), 'MMM dd, yyyy HH:mm:ss');
//     //         return <div className="max-w-md truncate">{formattedDate}</div>;
//     //     }
//     // }
// ]

// export const dropdownOptions = [
//     {
//         id: 0,
//         value: 'Delete'
//     },
//     {
//         id: 1,
//         value: 'Assign to Agent'
//     },
//     {
//         id: 2,
//         value: 'Re-assign Agent'
//     }
// ]

import { TableColumn } from '@/components/table/table'
import { format } from 'date-fns'
import { CustomerInterface } from '../types'
import { Pencil, Trash2, Plus, MoreHorizontal } from 'lucide-react'

export const columns: TableColumn<any>[] = [
    // {
    //     header: 'ID',
    //     accessor: 'node._id' as keyof any,
    //     cellRenderer: (value: unknown, item: any) => (
    //         <div className="font-medium text-sky-600">
    //             {String(item.node._id)}
    //         </div>
    //     )
    // },
    {
        header: 'Asset ID',
        accessor: 'node.asset.sellerItemID' as keyof any,
        cellRenderer: (value: unknown, item: any) => (
            <div className="font-medium text-gray-800 dark:text-gray-100">
                {String(item.node.asset.sellerItemID)}
            </div>
        )
    },
    {
        header: 'Account Stage',
        accessor: 'node.accountStage' as keyof any,
        cellRenderer: (value: unknown, item: any) => {
            const stage = item.node.accountStage;
            let stageColor = "bg-gray-100 text-gray-800";
            
            if (stage === "ACCOUNT_ACTIVATED") stageColor = "bg-green-100 text-green-800";
            if (stage === "PAYPLAN_COMPLETED") stageColor = "bg-blue-100 text-blue-800";
            if (stage === "ASSET_USER_PAIRED") stageColor = "bg-purple-100 text-purple-800";
            if (stage === "ACCOUNT_CLOSED") stageColor = "bg-red-100 text-red-800";
            
            return (
                <div className={`px-2 py-1 rounded-full text-xs font-medium inline-block ${stageColor}`}>
                    {stage.replace(/_/g, ' ')}
                </div>
            );
        }
    },
    {
        header: 'Customer',
        accessor: 'node.credit.owner.name' as keyof any,
        cellRenderer: (value: unknown, item: any) => (
            <div className="font-medium text-gray-800 dark:text-gray-100">
                {item.node.credit?.owner?.name || '-'}
            </div>
        )
    },
    {
        header: 'Contact',
        accessor: 'node.credit.owner.contact.phone' as keyof any,
        cellRenderer: (value: unknown, item: any) => (
            <div className="max-w-md truncate">
                {item.node.credit?.owner?.contact?.phone || '-'}
            </div>
        )
    },
    {
        header: 'Location',
        accessor: 'node.credit.owner.address.city' as keyof any,
        cellRenderer: (value: unknown, item: any) => {
            const address = item.node.credit?.owner?.address;
            return (
                <div className="max-w-md truncate">
                    {address ? `${address.city}, ${address.country}` : '-'}
                </div>
            );
        }
    },
    {
        header: 'Balance',
        accessor: 'node.credit.balance' as keyof any,
        cellRenderer: (value: unknown, item: any) => {
            const balance = item.node.credit?.balance;
            const color = balance < 0 ? 'text-red-600' : 'text-green-600';
            return (
                <div className={`font-medium ${color}`}>
                    ${typeof balance === 'number' ? balance.toFixed(2) : '0.00'}
                </div>
            );
        }
    },
    {
        header: 'Status',
        accessor: 'node.credit.accountStatus' as keyof any,
        cellRenderer: (value: unknown, item: any) => {
            const status = item.node.credit?.accountStatus;
            let statusColor = "bg-gray-100 text-gray-800";
            
            if (status === "ACTIVE") statusColor = "bg-green-100 text-green-800";
            if (status === "INACTIVE") statusColor = "bg-red-100 text-red-800";
            
            return (
                <div className={`px-2 py-1 rounded-full text-xs font-medium inline-block ${statusColor}`}>
                    {status || '-'}
                </div>
            );
        }
    },
    {
        header: 'Created At',
        accessor: 'node.createdAt' as keyof any,
        cellRenderer: (value: unknown, item: any) => {
            try {
                const formattedDate = format(new Date(item.node.createdAt), 'MMM dd, yyyy');
                return <div className="max-w-md truncate">{formattedDate}</div>;
            } catch (e) {
                return <div className="max-w-md truncate">-</div>;
            }
        }
    },
    {
        header: 'Updated At',
        accessor: 'node.updatedAt' as keyof any,
        cellRenderer: (value: unknown, item: any) => {
            try {
                const formattedDate = format(new Date(item.node.updatedAt), 'MMM dd, yyyy');
                return <div className="max-w-md truncate">{formattedDate}</div>;
            } catch (e) {
                return <div className="max-w-md truncate">-</div>;
            }
        }
    },
]

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