import { TableColumn } from '@/components/table/table'
import { format } from 'date-fns'
import { Pencil, Trash2, Plus, MoreHorizontal } from 'lucide-react'

export const columns: TableColumn<any>[] = [
    // {
    //     header: 'Customer ID',
    //     accessor: 'node._id' as keyof any,
    //     cellRenderer: (value: unknown, item: any) => {
    //         // Handle null node case
    //         if (!item.node) return <div>-</div>;
            
    //         return (
    //             <div className="font-medium text-sky-600">
    //                 {String(item.node._id)}
    //             </div>
    //         );
    //     }
    // },
    {
        header: 'Name',
        accessor: 'node.name' as keyof any,
        cellRenderer: (value: unknown, item: any) => {
            if (!item.node) return <div>-</div>;
            const name = item.node.name || '-';
            const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
            return (
                <div className="font-medium text-gray-800 dark:text-gray-100">
                    {capitalizedName}
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
            
            // Adjust colors based on your actual type values
            if (type === "CUSTOMER") typeColor = "bg-green-100 text-green-800";
            if (type === "AGENT") typeColor = "bg-blue-100 text-blue-800";
            if (type === "ADMIN") typeColor = "bg-purple-100 text-purple-800";
            
            return (
                <div className={`px-2 py-1 rounded-full text-xs font-medium inline-block ${typeColor}`}>
                    {type || '-'}
                </div>
            );
        }
    },
    {
        header: 'Phone',
        accessor: 'node.contact.phone' as keyof any,
        cellRenderer: (value: unknown, item: any) => {
            // Handle null node case
            if (!item.node) return <div>-</div>;
            
            return (
                <div className="max-w-md truncate">
                    {item.node.contact?.phone || '-'}
                </div>
            );
        }
    },
    {
        header: 'Email',
        accessor: 'node.contact.email' as keyof any,
        cellRenderer: (value: unknown, item: any) => {
            // Handle null node case
            if (!item.node) return <div>-</div>;
            
            return (
                <div className="max-w-md truncate">
                    {item.node.contact?.email || '-'}
                </div>
            );
        }
    },
    {
        header: 'Location',
        accessor: 'node.address.city' as keyof any,
        cellRenderer: (value: unknown, item: any) => {
            // Handle null node case
            if (!item.node) return <div>-</div>;
            
            const address = item.node.address;
            return (
                <div className="max-w-md truncate">
                    {address ? `${address.city || ''}, ${address.country || ''}` : '-'}
                </div>
            );
        }
    },
    {
        header: 'Distributor',
        accessor: 'node.distributor.name' as keyof any,
        cellRenderer: (value: unknown, item: any) => {
            // Handle null node case
            if (!item.node) return <div>-</div>;
            
            return (
                <div className="max-w-md truncate">
                    {item.node.distributor?.name || '-'}
                </div>
            );
        }
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
    },
    {
        header: 'Updated At',
        accessor: 'node.updatedAt' as keyof any,
        cellRenderer: (value: unknown, item: any) => {
            // Handle null node case
            if (!item.node) return <div>-</div>;
            
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