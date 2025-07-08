// 'use client'
// // components/FormCustomer.tsx
// import { useEffect } from 'react';
// import { ChevronLeft } from 'lucide-react';
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';
// import { useCustomerForm } from './useCustomerForm';
// import { useAlert } from '@/app/contexts/alertContext';

// interface FormCustomerProps {
//   editData?: any; // Add prop for edit data
// }

// export default function FormCustomer({ editData }: FormCustomerProps) {
//   const router = useRouter();
//   const [isEditing] = useState(!!editData); // Determine if in edit mode
//   const { alert } = useAlert();

//   const [formData, setFormData] = useState({
//     name: editData?.name || '',
//     phone: editData?.phone || '',
//     connectionType: editData?.connectionType || '',
//     connectionDetails: editData?.connectionDetails || '',
//     planId: editData?.planId?.toString() || '',
//     routerId: editData?.routerId?.toString() || '',
//   });

//   const { handleSubmit, isLoading, error } = useCustomerForm({
//     isEdit: isEditing,
//     customerId: editData?.id,
//     onSuccess: () => {
//       router.back();
//       alert({ text: `Customer ${isEditing ? 'Updated' : 'Registered'} Successfully`, type: "success" });
//     },
//     onError: () => {
//       alert({ text: `There was a problem ${isEditing ? 'Updating' : 'Registering'} the Customer`, type: "error" });
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
//           {isEditing ? 'Edit Customer' : 'Register Customer'}
//         </h1>
//       </div>

//       <form onSubmit={onSubmit}>
//         {error && (
//           <div>Error!!</div>
//         )}

//         <div className="space-y-8 mt-8">
//           <div className="grid gap-5 md:grid-cols-2">
//             <div>
//               <div>
//                 <label className="block text-sm font-medium mb-1" htmlFor="name">
//                   Customer Name
//                 </label>
//                 <input
//                   id="name"
//                   name="name"
//                   className="form-input w-full"
//                   type="text"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <div>
//                 <label className="block text-sm font-medium mb-1" htmlFor="phone">
//                   Phone Number
//                 </label>
//                 <input
//                   id="phone"
//                   name="phone"
//                   className="form-input w-full"
//                   type="tel"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   placeholder="254795635365"
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <div>
//                 <label className="block text-sm font-medium mb-1" htmlFor="connectionType">
//                   Connection Type
//                 </label>
//                 <select
//                   id="connectionType"
//                   name="connectionType"
//                   className="form-select w-full"
//                   value={formData.connectionType}
//                   onChange={handleInputChange}
//                   required
//                 >
//                   <option value="">Select Connection Type</option>
//                   <option value="hotspot">Hotspot</option>
//                   <option value="pppoe">PPPoE</option>
//                   <option value="static">Static IP</option>
//                   <option value="dhcp">DHCP</option>
//                 </select>
//               </div>
//             </div>

//             <div>
//               <div>
//                 <label className="block text-sm font-medium mb-1" htmlFor="connectionDetails">
//                   Connection Details
//                 </label>
//                 <input
//                   id="connectionDetails"
//                   name="connectionDetails"
//                   className="form-input w-full"
//                   type="text"
//                   value={formData.connectionDetails}
//                   onChange={handleInputChange}
//                   placeholder="Enter connection details"
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <div>
//                 <label className="block text-sm font-medium mb-1" htmlFor="planId">
//                   Plan ID
//                 </label>
//                 <input
//                   id="planId"
//                   name="planId"
//                   className="form-input w-full"
//                   type="number"
//                   value={formData.planId}
//                   onChange={handleInputChange}
//                   placeholder="11"
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <div>
//                 <label className="block text-sm font-medium mb-1" htmlFor="routerId">
//                   Router ID
//                 </label>
//                 <input
//                   id="routerId"
//                   name="routerId"
//                   className="form-input w-full"
//                   type="number"
//                   value={formData.routerId}
//                   onChange={handleInputChange}
//                   placeholder="8"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="md:col-span-2">
//               <div className="mt-[25px]">
//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className={`btn bg-green-500 hover:bg-green-600 text-white w-full ${isLoading ? 'opacity-50 cursor-not-allowed' : ''
//                     }`}
//                 >
//                   {isLoading
//                     ? `${isEditing ? 'Updating...' : 'Registering...'}`
//                     : `${isEditing ? 'Update' : 'Register'} Customer`}
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
// components/FormCustomer.tsx
import { useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useCustomerForm } from './useCustomerForm';
import { useAlert } from '@/app/contexts/alertContext';

interface FormCustomerProps {
  editData?: any; // Add prop for edit data
}

export default function FormCustomer({ editData }: FormCustomerProps) {
  const router = useRouter();
  const [isEditing] = useState(!!editData); // Determine if in edit mode
  const { alert } = useAlert();

  const [formData, setFormData] = useState({
    name: editData?.name || '',
    phone: editData?.phone || '',
    connectionType: editData?.connectionType || '',
    connectionDetails: editData?.connectionDetails || '',
    planId: editData?.planId?.toString() || '',
    routerId: editData?.routerId?.toString() || '',
  });

  const { handleSubmit, isLoading, error } = useCustomerForm({
    isEdit: isEditing,
    customerId: editData?.id,
    onSuccess: () => {
      router.back();
      alert({ text: `Customer ${isEditing ? 'Updated' : 'Registered'} Successfully`, type: "success" });
    },
    onError: () => {
      alert({ text: `There was a problem ${isEditing ? 'Updating' : 'Registering'} the Customer`, type: "error" });
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
          {isEditing ? 'Edit Customer' : 'Register Customer'}
        </h1>
      </div>

      <form onSubmit={onSubmit}>
        {error && (
          <div>Error!!</div>
        )}

        <div className="space-y-8 mt-8">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="name">
                  Customer Name
                </label>
                <input
                  id="name"
                  name="name"
                  className="form-input w-full"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  className="form-input w-full"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="254795635365"
                  required
                />
              </div>
            </div>

            <div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="connectionType">
                  Connection Type
                </label>
                <select
                  id="connectionType"
                  name="connectionType"
                  className="form-select w-full"
                  value={formData.connectionType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Connection Type</option>
                  <option value="hotspot">Hotspot</option>
                  <option value="pppoe">PPPoE</option>
                  <option value="static">Static IP</option>
                  <option value="dhcp">DHCP</option>
                </select>
              </div>
            </div>

            <div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="connectionDetails">
                  Connection Details
                </label>
                <input
                  id="connectionDetails"
                  name="connectionDetails"
                  className="form-input w-full"
                  type="text"
                  value={formData.connectionDetails}
                  onChange={handleInputChange}
                  placeholder="Enter connection details"
                  required
                />
              </div>
            </div>

            <div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="planId">
                  Plan ID
                </label>
                <input
                  id="planId"
                  name="planId"
                  className="form-input w-full"
                  type="number"
                  value={formData.planId}
                  onChange={handleInputChange}
                  placeholder="11"
                  required
                />
              </div>
            </div>

            <div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="routerId">
                  Router ID
                </label>
                <input
                  id="routerId"
                  name="routerId"
                  className="form-input w-full"
                  type="number"
                  value={formData.routerId}
                  onChange={handleInputChange}
                  placeholder="8"
                  required
                />
              </div>
            </div>

            <div>
              <div className="mt-[25px]">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`btn bg-green-500 hover:bg-green-600 text-white w-full ${isLoading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                >
                  {isLoading
                    ? `${isEditing ? 'Updating...' : 'Registering...'}`
                    : `${isEditing ? 'Update' : 'Register'} Customer`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}