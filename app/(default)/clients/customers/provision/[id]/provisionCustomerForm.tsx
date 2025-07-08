// 'use client'
// // components/FormProvisionCustomer.tsx
// import { useEffect } from 'react';
// import { ChevronLeft } from 'lucide-react';
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';
// import { useProvisionCustomerForm } from './useProvisionCustomerForm';
// import { useAlert } from '@/app/contexts/alertContext';

// interface FormProvisionCustomerProps {
//   customerId?: number; // Pass customer ID as prop
// }

// export default function FormProvisionCustomer({ customerId }: FormProvisionCustomerProps) {
//   const router = useRouter();
//   const { alert } = useAlert();

//   const [formData, setFormData] = useState({
//     customerId: customerId?.toString() || '',
//   });

//   const { handleSubmit, isLoading, error } = useProvisionCustomerForm({
//     onSuccess: (data) => {
//       router.back();
//       alert({ 
//         text: `Customer provisioned successfully. Expiry: ${data.expiry ? new Date(data.expiry).toLocaleDateString() : 'N/A'}`, 
//         type: "success" 
//       });
//     },
//     onError: () => {
//       alert({ text: `There was a problem provisioning the customer`, type: "error" });
//     }
//   });

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const onSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     await handleSubmit(formData);
//   };

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
//       <div className="mb-8">
//         <button
//           onClick={() => router.back()}
//           className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 mb-3"
//         >
//           <ChevronLeft className="w-4 h-4 mr-1" />
//           <span>Back</span>
//         </button>
//         <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
//           Manually Provision Customer
//         </h1>
//         <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
//           Provision network access for the selected customer
//         </p>
//       </div>

//       <form onSubmit={onSubmit}>
//         {error && (
//           <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
//             <p className="font-medium">Error!</p>
//             <p className="text-sm">{error}</p>
//           </div>
//         )}

//         <div className="space-y-8 mt-8">
//           <div className="grid gap-5 md:grid-cols-2">
//             <div>
//               <div>
//                 <label className="block text-sm font-medium mb-1" htmlFor="customerId">
//                   Customer ID
//                 </label>
//                 <input
//                   id="customerId"
//                   name="customerId"
//                   className="form-input w-full"
//                   type="number"
//                   value={formData.customerId}
//                   onChange={handleInputChange}
//                   placeholder="10"
//                   required
//                   min="1"
//                 />
//                 <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
//                   Enter the ID of the customer to provision
//                 </p>
//               </div>
//             </div>

//             <div>
//               <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700/30 rounded-lg p-4">
//                 <h3 className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">
//                   Provisioning Information
//                 </h3>
//                 <ul className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
//                   <li>• Network access will be configured automatically</li>
//                   <li>• Customer will receive connection credentials</li>
//                   <li>• Expiry date will be set based on plan duration</li>
//                   <li>• Process may take a few minutes to complete</li>
//                 </ul>
//               </div>
//             </div>

//             <div className="md:col-span-2">
//               <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/30 rounded-lg p-4">
//                 <div className="flex items-start">
//                   <div className="flex-shrink-0">
//                     <svg className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//                     </svg>
//                   </div>
//                   <div className="ml-3">
//                     <h3 className="text-sm font-medium text-amber-800 dark:text-amber-200">
//                       Important Notice
//                     </h3>
//                     <div className="mt-1 text-sm text-amber-700 dark:text-amber-300">
//                       <p>Make sure the customer exists and has a valid plan assigned before provisioning. This action cannot be easily undone.</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <div className="mt-[25px]">
//                 <button
//                   type="submit"
//                   disabled={isLoading || !formData.customerId}
//                   className={`btn bg-blue-500 hover:bg-blue-600 text-white w-full ${
//                     isLoading || !formData.customerId ? 'opacity-50 cursor-not-allowed' : ''
//                   }`}
//                 >
//                   {isLoading ? 'Provisioning Customer...' : 'Provision Customer'}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

'use client'
// components/FormProvisionCustomer.tsx
import { useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useProvisionCustomerForm } from './useProvisionCustomerForm';
import { useAlert } from '@/app/contexts/alertContext';

interface FormProvisionCustomerProps {
  customerId?: number; // Pass customer ID as prop
}

export default function FormProvisionCustomer({ customerId }: FormProvisionCustomerProps) {
    console.log(customerId, "Customer ID in FormProvisionCustomer");
  const router = useRouter();
  const { alert } = useAlert();

  const [formData, setFormData] = useState({
    customerId: customerId?.toString() || '',
  });

  // Update form data when customerId prop changes
  useEffect(() => {
    if (customerId) {
      setFormData(prev => ({
        ...prev,
        customerId: customerId.toString()
      }));
    }
  }, [customerId]);

  const { handleSubmit, isLoading, error } = useProvisionCustomerForm({
    onSuccess: (data) => {
      router.back();
      alert({ 
        text: `Customer provisioned successfully. Expiry: ${data.expiry ? new Date(data.expiry).toLocaleDateString() : 'N/A'}`, 
        type: "success" 
      });
    },
    onError: () => {
      alert({ text: `There was a problem provisioning the customer`, type: "error" });
    }
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleSubmit(formData);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
      <div className="mb-8">
        <button
          onClick={() => router.back()}
          className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 mb-3"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          <span>Back</span>
        </button>
        <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
          Manually Provision Customer
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Provision network access for the selected customer
        </p>
      </div>

      <form onSubmit={onSubmit}>
        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
            <p className="font-medium">Error!</p>
            <p className="text-sm">{error}</p>
          </div>
        )}

        <div className="space-y-8 mt-8">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="customerId">
                  Customer ID
                </label>
                <input
                  id="customerId"
                  name="customerId"
                  className="form-input w-full"
                  type="number"
                  value={formData.customerId}
                  onChange={handleInputChange}
                  placeholder="10"
                  required
                  min="1"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Enter the ID of the customer to provision
                </p>
              </div>
            </div>

            <div>
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700/30 rounded-lg p-4">
                <h3 className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">
                  Provisioning Information
                </h3>
                <ul className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Network access will be configured automatically</li>
                  <li>• Customer will receive connection credentials</li>
                  <li>• Expiry date will be set based on plan duration</li>
                  <li>• Process may take a few minutes to complete</li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/30 rounded-lg p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-amber-800 dark:text-amber-200">
                      Important Notice
                    </h3>
                    <div className="mt-1 text-sm text-amber-700 dark:text-amber-300">
                      <p>Make sure the customer exists and has a valid plan assigned before provisioning. This action cannot be easily undone.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="mt-[25px]">
                <button
                  type="submit"
                  disabled={isLoading || !formData.customerId}
                  className={`btn bg-blue-500 hover:bg-blue-600 text-white w-full ${
                    isLoading || !formData.customerId ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? 'Provisioning Customer...' : 'Provision Customer'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}