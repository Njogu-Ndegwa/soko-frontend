
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
        header: 'Customer ID',
        accessor: 'id' as keyof any,
        cellRenderer: (value: unknown, item: any) => {
            return (
                <div className="font-medium text-sky-600">
                    {String(item.id)}
                </div>
            );
        }
    },
    {
        header: 'Phone Number',
        accessor: 'phone_number' as keyof any,
        cellRenderer: (value: unknown, item: any) => {
            return (
                <div className="max-w-md truncate">
                    {item.phone_number || '-'}
                </div>
            );
        }
    },
    {
        header: 'Email',
        accessor: 'email' as keyof any,
        cellRenderer: (value: unknown, item: any) => {
            return (
                <div className="max-w-md truncate">
                    {item.email || '-'}
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
            
            // Adjust colors based on your actual status values
            if (status === "ACTIVE") statusColor = "bg-green-100 text-green-800";
            if (status === "INACTIVE") statusColor = "bg-red-100 text-red-800";
            if (status === "PENDING") statusColor = "bg-yellow-100 text-yellow-800";
            if (status === "SUSPENDED") statusColor = "bg-orange-100 text-orange-800";
            
            return (
                <div className={`px-2 py-1 rounded-full text-xs font-medium inline-block ${statusColor}`}>
                    {status || '-'}
                </div>
            );
        }
    }
]
