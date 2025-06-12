// import { TableColumn } from '@/components/table/table'
// import { format } from 'date-fns'
// import { Pencil, Trash2, Plus, MoreHorizontal } from 'lucide-react'

// export const columns: TableColumn<any>[] = [
//     // {
//     //     header: 'Customer ID',
//     //     accessor: 'node._id' as keyof any,
//     //     cellRenderer: (value: unknown, item: any) => {
//     //         // Handle null node case
//     //         if (!item.node) return <div>-</div>;
            
//     //         return (
//     //             <div className="font-medium text-sky-600">
//     //                 {String(item.node._id)}
//     //             </div>
//     //         );
//     //     }
//     // },
//     {
//         header: 'User Name',
//         accessor: 'node.name' as keyof any,
//         cellRenderer: (value: unknown, item: any) => {
//             if (!item.node) return <div>-</div>;
//             const name = item.node.name || '-';
//             const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
//             return (
//                 <div className="font-medium text-gray-800 dark:text-gray-100">
//                     {capitalizedName}
//                 </div>
//             );
//         }
//     },
    
//     {
//         header: 'Amount',
//         accessor: 'amount' as keyof any,
//         cellRenderer: (value: unknown, item: any) => {
//             // Handle null node case
//             if (!item.node) return <div>-</div>;
            
//             const type = item.node.type;
//             let typeColor = "bg-gray-100 text-gray-800";
            
//             // Adjust colors based on your actual type values
//             if (type === "CUSTOMER") typeColor = "bg-green-100 text-green-800";
//             if (type === "AGENT") typeColor = "bg-blue-100 text-blue-800";
//             if (type === "ADMIN") typeColor = "bg-purple-100 text-purple-800";
            
//             return (
//                 <div className={`px-2 py-1 rounded-full text-xs font-medium inline-block ${typeColor}`}>
//                     {type || '-'}
//                 </div>
//             );
//         }
//     },
//     {
//         header: 'Phone',
//         accessor: 'node.contact.phone' as keyof any,
//         cellRenderer: (value: unknown, item: any) => {
//             // Handle null node case
//             if (!item.node) return <div>-</div>;
            
//             return (
//                 <div className="max-w-md truncate">
//                     {item.node.contact?.phone || '-'}
//                 </div>
//             );
//         }
//     },
//     {
//         header: 'Email',
//         accessor: 'node.contact.email' as keyof any,
//         cellRenderer: (value: unknown, item: any) => {
//             // Handle null node case
//             if (!item.node) return <div>-</div>;
            
//             return (
//                 <div className="max-w-md truncate">
//                     {item.node.contact?.email || '-'}
//                 </div>
//             );
//         }
//     },
//     {
//         header: 'Location',
//         accessor: 'node.address.city' as keyof any,
//         cellRenderer: (value: unknown, item: any) => {
//             // Handle null node case
//             if (!item.node) return <div>-</div>;
            
//             const address = item.node.address;
//             return (
//                 <div className="max-w-md truncate">
//                     {address ? `${address.city || ''}, ${address.country || ''}` : '-'}
//                 </div>
//             );
//         }
//     },
//     {
//         header: 'Distributor',
//         accessor: 'node.distributor.name' as keyof any,
//         cellRenderer: (value: unknown, item: any) => {
//             // Handle null node case
//             if (!item.node) return <div>-</div>;
            
//             return (
//                 <div className="max-w-md truncate">
//                     {item.node.distributor?.name || '-'}
//                 </div>
//             );
//         }
//     },
//     {
//         header: 'Created At',
//         accessor: 'node.createdAt' as keyof any,
//         cellRenderer: (value: unknown, item: any) => {
//             // Handle null node case
//             if (!item.node) return <div>-</div>;
            
//             try {
//                 const formattedDate = format(new Date(item.node.createdAt), 'MMM dd, yyyy');
//                 return <div className="max-w-md truncate">{formattedDate}</div>;
//             } catch (e) {
//                 return <div className="max-w-md truncate">-</div>;
//             }
//         }
//     },
//     {
//         header: 'Updated At',
//         accessor: 'node.updatedAt' as keyof any,
//         cellRenderer: (value: unknown, item: any) => {
//             // Handle null node case
//             if (!item.node) return <div>-</div>;
            
//             try {
//                 const formattedDate = format(new Date(item.node.updatedAt), 'MMM dd, yyyy');
//                 return <div className="max-w-md truncate">{formattedDate}</div>;
//             } catch (e) {
//                 return <div className="max-w-md truncate">-</div>;
//             }
//         }
//     },
// ]

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

import { TableColumn } from '@/components/table/table'
import { format } from 'date-fns'

export const columns: TableColumn<any>[] = [
    {
        header: 'Ticket ID',
        accessor: 'ticket_number' as keyof any,
        cellRenderer: (value: unknown, item: any) => {
            return (
                <div className="font-medium text-sky-600 cursor-pointer hover:text-sky-800">
                    {String(item.ticket_number)}
                </div>
            );
        }
    },
    {
        header: 'Title',
        accessor: 'title' as keyof any,
        cellRenderer: (value: unknown, item: any) => {
            return (
                <div className="max-w-xs">
                    <div className="font-medium text-gray-900 truncate">{item.title}</div>
                    <div className="text-xs text-gray-500 truncate">{item.description}</div>
                </div>
            );
        }
    },
    {
        header: 'Requester',
        accessor: 'requester_email' as keyof any,
        cellRenderer: (value: unknown, item: any) => {
            return (
                <div className="text-sm">
                    <div className="text-gray-900">{item.requester_name}</div>
                    <div className="text-gray-500 text-xs">{item.requester_email}</div>
                </div>
            );
        }
    },
    {
        header: 'Assigned To',
        accessor: 'assigned_to' as keyof any,
        cellRenderer: (value: unknown, item: any) => {
            return (
                <div className="text-sm">
                    {item.assigned_to ? (
                        <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                                {item.assigned_to.charAt(0).toUpperCase()}
                            </div>
                            <span className="text-gray-900">{item.assigned_to}</span>
                        </div>
                    ) : (
                        <span className="text-gray-400 italic">Unassigned</span>
                    )}
                </div>
            );
        }
    },
    {
        header: 'Category',
        accessor: 'category' as keyof any,
        cellRenderer: (value: unknown, item: any) => {
            const category = item.category;
            let categoryColor = "bg-gray-100 text-gray-800";
            
            if (category === "BUG") categoryColor = "bg-red-100 text-red-800";
            if (category === "FEATURE") categoryColor = "bg-purple-100 text-purple-800";
            if (category === "SUPPORT") categoryColor = "bg-blue-100 text-blue-800";
            if (category === "HARDWARE") categoryColor = "bg-orange-100 text-orange-800";
            if (category === "ACCESS") categoryColor = "bg-green-100 text-green-800";
            
            return (
                <div className={`px-2 py-1 rounded text-xs font-medium inline-block ${categoryColor}`}>
                    {category || '-'}
                </div>
            );
        }
    },
    {
        header: 'Priority',
        accessor: 'priority' as keyof any,
        cellRenderer: (value: unknown, item: any) => {
            const priority = item.priority;
            let priorityColor = "bg-gray-100 text-gray-800";
            let priorityIcon = "";
            
            if (priority === "LOW") {
                priorityColor = "bg-green-100 text-green-800";
                priorityIcon = "↓";
            }
            if (priority === "MEDIUM") {
                priorityColor = "bg-yellow-100 text-yellow-800";
                priorityIcon = "→";
            }
            if (priority === "HIGH") {
                priorityColor = "bg-orange-100 text-orange-800";
                priorityIcon = "↑";
            }
            if (priority === "CRITICAL") {
                priorityColor = "bg-red-100 text-red-800";
                priorityIcon = "⚠";
            }
            
            return (
                <div className={`px-2 py-1 rounded text-xs font-medium inline-flex items-center space-x-1 ${priorityColor}`}>
                    <span>{priorityIcon}</span>
                    <span>{priority || '-'}</span>
                </div>
            );
        }
    },
    {
        header: 'Status',
        accessor: 'status' as keyof any,
        cellRenderer: (value: unknown, item: any) => {
            const status = item.status;
            let statusColor = "bg-gray-100 text-gray-800";
            
            if (status === "OPEN") statusColor = "bg-blue-100 text-blue-800";
            if (status === "IN_PROGRESS") statusColor = "bg-yellow-100 text-yellow-800";
            if (status === "PENDING") statusColor = "bg-orange-100 text-orange-800";
            if (status === "RESOLVED") statusColor = "bg-green-100 text-green-800";
            if (status === "CLOSED") statusColor = "bg-gray-100 text-gray-800";
            
            return (
                <div className={`px-2 py-1 rounded-full text-xs font-medium inline-block ${statusColor}`}>
                    {status?.replace('_', ' ') || '-'}
                </div>
            );
        }
    },
    {
        header: 'Created',
        accessor: 'created_at' as keyof any,
        cellRenderer: (value: unknown, item: any) => {
            const createdDate = new Date(item.created_at);
            const now = new Date();
            const diffInHours = Math.floor((now.getTime() - createdDate.getTime()) / (1000 * 60 * 60));
            
            return (
                <div className="text-sm text-gray-600">
                    <div>{createdDate.toLocaleDateString()}</div>
                    <div className="text-xs text-gray-400">
                        {diffInHours < 24 ? `${diffInHours}h ago` : `${Math.floor(diffInHours / 24)}d ago`}
                    </div>
                </div>
            );
        }
    }
]