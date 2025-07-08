// 'use client'

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Pencil, Trash2, MoreHorizontal } from 'lucide-react';
// import FeedbackModal from '@/components/feedback-modal';
// // import { deleteFleet } from '../services/inventoryService';
// import { useAlert } from '@/app/contexts/alertContext';
// interface ActionProps {
//     row: any; // Should match your FleetInterface type
//     onDelete: () => void; 
// }

// export const actions = ({ row, onDelete }: ActionProps) => {

//     const router = useRouter();
//     const [dangerModalOpen, setDangerModalOpen] = useState(false)
//     const { alert } = useAlert()
//     const customerId = row.node?._id;
//     const handleEdit = () => {
//         router.push(`/accounts/customers/edit/${customerId}`);
//     };

//     const handleDelete = () => {
//         // Implement delete logic here
//         setDangerModalOpen(true)
//     };

//     const handleConfirmDelete = async () => {
//         // try {
//         //     // Assuming you have access to the fleet ID (from state/props)
//         //     const response = await deleteFleet(row.id);

//         //     // Show success feedback
//         //     alert({ text: response.message, type: "success" })
//         //     console.log('Fleet deleted successfully:', response);

//         //     // Close delete modal if needed
//         //     setDangerModalOpen(false);

//         //     // Call the onDelete callback after successful deletion
//         //     if (onDelete) {
//         //         onDelete();
//         //     }


//         // } catch (error) {
//         //     console.error('Delete failed:', error);
//         //     // Show error feedback
//         //     alert({ text: "Failed to delete fleet. Please try again.", type: "error" })
//         // }
//     };

//     const handleMore = () => {
//         // Implement more options logic here
//         console.log('More options for:', row.id);
//     };

//     return (
//         <>
//             <button
//                 className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
//                 onClick={handleEdit}
//             >
//                 <Pencil className="w-4 h-4 text-gray-500" />
//                 <span className="sr-only">Edit</span>
//             </button>
//             <button
//                 className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
//                 onClick={handleDelete}
//             >
//                 <Trash2 className="w-4 h-4 text-red-500" />
//                 <span className="sr-only">Delete</span>
//             </button>
//             <button
//                 className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
//                 onClick={handleMore}
//             >
//                 <MoreHorizontal className="w-4 h-4 text-gray-500" />
//                 <span className="sr-only">More options</span>
//             </button>
//             <FeedbackModal
//                 isOpen={dangerModalOpen}
//                 setIsOpen={setDangerModalOpen}
//                 variant="danger"
//                 title={`Delete Fleet?`}
//                 content="Are you sure you want to delete this fleet?"
//                 confirmButtonLabel="Yes, Delete it"
//                 onConfirm={handleConfirmDelete}
//             />
//         </>
//     );
// };


'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Pencil, Trash2, MoreHorizontal, Settings, Zap } from 'lucide-react';
import FeedbackModal from '@/components/feedback-modal';
import { useAlert } from '@/app/contexts/alertContext';

interface ActionProps {
    row: any;
    onDelete: () => void;
}

export const actions = ({ row, onDelete }: ActionProps) => {
    const router = useRouter();
    const [dangerModalOpen, setDangerModalOpen] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false);
    const { alert } = useAlert()
    
    // Get customer ID - adjust this based on your actual data structure
    const customerId = row.id || row.node?._id;

    const handleEdit = () => {
        router.push(`/clients/customers/edit/${customerId}`);
        setShowDropdown(false);
    };

    const handleProvision = () => {
        console.log('Provisioning customer:', customerId);
        router.push(`/clients/customers/provision/${customerId}`);
        setShowDropdown(false);
    };

    const handleDelete = () => {
        setDangerModalOpen(true);
        setShowDropdown(false);
    };

    const handleConfirmDelete = async () => {
        // Implement your delete logic here
        setDangerModalOpen(false);
        if (onDelete) {
            onDelete();
        }
    };

    return (
        <>
            <div className="relative">
                {/* Quick Actions */}
                <div className="flex items-center space-x-1">
                    <button
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                        onClick={handleEdit}
                        title="Edit Customer"
                    >
                        <Pencil className="w-4 h-4 text-gray-500" />
                        <span className="sr-only">Edit</span>
                    </button>
                    
                    <button
                        className="p-2 hover:bg-blue-100 dark:hover:bg-blue-700/50 rounded-full transition-colors"
                        onClick={handleProvision}
                        title="Provision Customer"
                    >
                        <Zap className="w-4 h-4 text-blue-500" />
                        <span className="sr-only">Provision</span>
                    </button>
                    
                    <button
                        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                        onClick={() => setShowDropdown(!showDropdown)}
                        title="More Options"
                    >
                        <MoreHorizontal className="w-4 h-4 text-gray-500" />
                        <span className="sr-only">More options</span>
                    </button>
                </div>

                {/* Dropdown Menu */}
                {showDropdown && (
                    <>
                        <div 
                            className="fixed inset-0 z-10" 
                            onClick={() => setShowDropdown(false)}
                        />
                        <div className="absolute right-0 mt-1 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-20">
                            <div className="py-1">
                                <button
                                    onClick={() => {
                                        // Add view details logic
                                        setShowDropdown(false);
                                    }}
                                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    <Settings className="w-4 h-4 mr-2" />
                                    View Details
                                </button>
                                
                                <div className="border-t border-gray-200 dark:border-gray-600 my-1" />
                                
                                <button
                                    onClick={handleDelete}
                                    className="flex items-center w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
                                >
                                    <Trash2 className="w-4 h-4 mr-2" />
                                    Delete Customer
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>

            <FeedbackModal
                isOpen={dangerModalOpen}
                setIsOpen={setDangerModalOpen}
                variant="danger"
                title={`Delete Customer?`}
                content="Are you sure you want to delete this customer? This action cannot be undone and will remove all customer data."
                confirmButtonLabel="Yes, Delete Customer"
                onConfirm={handleConfirmDelete}
            />
        </>
    );
};