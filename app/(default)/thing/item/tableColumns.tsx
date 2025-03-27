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
// import { CustomerInterface } from '../types'
import { Pencil, Trash2, Plus, MoreHorizontal } from 'lucide-react'

export const columns: TableColumn<any>[] = [
    {
        header: 'Account Number',
        accessor: 'node.oemItemID' as keyof any,
        cellRenderer: (value: unknown, item: any) => {
            // Handle null node case
            if (!item.node) return <div>-</div>;
            
            return (
                <div className="font-medium text-gray-800 dark:text-gray-100">
                    {item.node.oemItemID || '-'}
                </div>
            );
        }
    },
    {
        header: 'Type',
        accessor: 'node.type' as keyof any,
        cellRenderer: (value: unknown, item: any) => {
            // Handle null node case
            if (!item.node) return <div>-</div>;
            
            const type = item.node.type;
            let typeColor = "bg-gray-100 text-gray-800";
            
            // Adjust colors based on item types
            if (type === "SIMULATOR") typeColor = "bg-purple-100 text-purple-800";
            if (type === "BATTERY") typeColor = "bg-green-100 text-green-800";
            if (type === "CONTROLLER") typeColor = "bg-blue-100 text-blue-800";
            
            return (
                <div className={`px-2 py-1 rounded-full text-xs font-medium inline-block ${typeColor}`}>
                    {type || '-'}
                </div>
            );
        }
    },
    {
        header: 'Batch Number',
        accessor: 'node.itemBatch.batchNumber' as keyof any,
        cellRenderer: (value: unknown, item: any) => (
            <div className="max-w-md truncate">
                {item.node.itemBatch?.batchNumber || '-'}
            </div>
        )
    },
    {
        header: 'Description',
        accessor: 'node.description' as keyof any,
        cellRenderer: (value: unknown, item: any) => (
            <div className="max-w-md truncate">
                {item.node.description || '-'}
            </div>
        )
    },
    {
        header: 'Fleet',
        accessor: 'node.itemFleet.fleetName' as keyof any,
        cellRenderer: (value: unknown, item: any) => (
            <div className="max-w-md truncate">
                {item.node.itemFleet?.fleetName || '-'}
            </div>
        )
    },
    {
        header: 'Life Cycle',
        accessor: 'node.lifeCycle' as keyof any,
        cellRenderer: (value: unknown, item: any) => {
            // Handle null node case
            if (!item.node) return <div>-</div>;
            
            const lifeCycle = item.node.lifeCycle;
            let lifeCycleColor = "bg-gray-100 text-gray-800";
            
            if (lifeCycle === "ACTIVE") lifeCycleColor = "bg-green-100 text-green-800";
            if (lifeCycle === "INACTIVE") lifeCycleColor = "bg-red-100 text-red-800";
            if (lifeCycle === "PENDING") lifeCycleColor = "bg-yellow-100 text-yellow-800";
            
            return (
                <div className={`px-2 py-1 rounded-full text-xs font-medium inline-block ${lifeCycleColor}`}>
                    {lifeCycle || '-'}
                </div>
            );
        }
    },
    {
        header: 'Customer',
        accessor: 'node.assetAccount.credit.owner.name' as keyof any,
        cellRenderer: (value: unknown, item: any) => (
            <div className="max-w-md truncate">
                {item.node.assetAccount?.credit?.owner?.name || '-'}
            </div>
        )
    },
    {
        header: 'Firmware',
        accessor: 'node.itemFirmware.version' as keyof any,
        cellRenderer: (value: unknown, item: any) => (
            <div className="max-w-md truncate">
                {item.node.itemFirmware?.version || '-'}
            </div>
        )
    },
    {
        header: 'Created At',
        accessor: 'node.createdAt' as keyof any,
        cellRenderer: (value: unknown, item: any) => {
            // Handle null node case
            if (!item.node) return <div>-</div>;
            
            try {
                const formattedDate = format(new Date(item.node.createdAt), 'MMM dd, yyyy');
                return <div className="max-w-md truncate">{formattedDate}</div>;
            } catch (e) {
                return <div className="max-w-md truncate">-</div>;
            }
        }
    }
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