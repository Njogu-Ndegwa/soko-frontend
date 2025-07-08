// 'use client'
// // components/FormCustomer.tsx
// import { useEffect } from 'react';
// import { ChevronLeft } from 'lucide-react';
// import { useRouter } from 'next/navigation';
// import { useState } from 'react';
// import { useCustomerForm } from './useResellerForm';
// import { useAlert } from '@/app/contexts/alertContext';
// // import { PersonInterface } from '../../types';
// // import { Person } from '../types/Person';

// interface FormCustomerProps {
//   editData?: any | null; // Add prop for edit data
// }

//  export default function FormCustomer({ editData }: FormCustomerProps) {
//   const router = useRouter();
//   const [isEditing] = useState(!!editData); // Determine if in edit mode
//   const { alert } = useAlert();

//   const [formData, setFormData] = useState({
//     name: editData?.name || '',
//     email: editData?.contact?.email || '',
//     phone: editData?.contact?.phone || '',
//     social: editData?.contact?.social || '',
//     city: editData?.address?.city || '',
//     country: editData?.address?.country || '',
//     postCode: editData?.address?.postcode || '',
//     srpc: editData?.address?.srpc || '',
//     street: editData?.address?.street || '',
//     unit: editData?.address?.unit || '',
//     longitude: editData?.address?.addressLocation?.addressLongitude?.toString() || '0',
//     latitude: editData?.address?.addressLocation?.addressLongitude?.toString() || '0',
//     description: editData?.description || '',
//   });

//   const { handleSubmit, isLoading, error } = useCustomerForm({
//     isEdit: isEditing,
//     personId: editData?._id,
//     onSuccess: () => {
//       router.back();
//       alert({ text: `Customer ${isEditing ? 'Updated' : 'Created'} Successfully`, type: "success" });
//     },
//     onError: () => {
//       alert({ text: `There was a problem ${isEditing ? 'Updating' : 'Creating'} the Customer`, type: "error" });
//     }
//   });

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
//           {isEditing ? 'Edit Customer' : 'Create a Customer'}
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
//                   Name
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
//                 <label className="block text-sm font-medium mb-1" htmlFor="email">
//                   Email
//                 </label>
//                 <input
//                   id="email"
//                   name="email"
//                   className="form-input w-full"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <div>
//                 <label className="block text-sm font-medium mb-1" htmlFor="phone">
//                   Phone
//                 </label>
//                 <input
//                   id="phone"
//                   name="phone"
//                   className="form-input w-full"
//                   type="text"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <div>
//                 <label className="block text-sm font-medium mb-1" htmlFor="social">
//                   Social
//                 </label>
//                 <input
//                   id="social"
//                   name="social"
//                   className="form-input w-full"
//                   type="text"
//                   value={formData.social}
//                   onChange={handleInputChange}
//                 />
//               </div>
//             </div>

//             <div>
//               <div>
//                 <label className="block text-sm font-medium mb-1" htmlFor="city">
//                   City
//                 </label>
//                 <input
//                   id="city"
//                   name="city"
//                   className="form-input w-full"
//                   type="text"
//                   value={formData.city}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <div>
//                 <label className="block text-sm font-medium mb-1" htmlFor="country">
//                   Country
//                 </label>
//                 <input
//                   id="country"
//                   name="country"
//                   className="form-input w-full"
//                   type="text"
//                   value={formData.country}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <div>
//                 <label className="block text-sm font-medium mb-1" htmlFor="postCode">
//                   Post Code
//                 </label>
//                 <input
//                   id="postCode"
//                   name="postCode"
//                   className="form-input w-full"
//                   type="text"
//                   value={formData.postCode}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <div>
//                 <label className="block text-sm font-medium mb-1" htmlFor="srpc">
//                   SRPC
//                 </label>
//                 <input
//                   id="srpc"
//                   name="srpc"
//                   className="form-input w-full"
//                   type="text"
//                   value={formData.srpc}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <div>
//                 <label className="block text-sm font-medium mb-1" htmlFor="street">
//                   Street
//                 </label>
//                 <input
//                   id="street"
//                   name="street"
//                   className="form-input w-full"
//                   type="text"
//                   value={formData.street}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <div>
//                 <label className="block text-sm font-medium mb-1" htmlFor="unit">
//                   Unit
//                 </label>
//                 <input
//                   id="unit"
//                   name="unit"
//                   className="form-input w-full"
//                   type="text"
//                   value={formData.unit}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <div>
//                 <label className="block text-sm font-medium mb-1" htmlFor="longitude">
//                   Longitude
//                 </label>
//                 <input
//                   id="longitude"
//                   name="longitude"
//                   className="form-input w-full"
//                   type="text"
//                   value={formData.longitude}
//                   onChange={handleInputChange}
//                 />
//               </div>
//             </div>

//             <div>
//               <div>
//                 <label className="block text-sm font-medium mb-1" htmlFor="latitude">
//                   Latitude
//                 </label>
//                 <input
//                   id="latitude"
//                   name="latitude"
//                   className="form-input w-full"
//                   type="text"
//                   value={formData.latitude}
//                   onChange={handleInputChange}
//                 />
//               </div>
//             </div>

//             <div>
//               <div>
//                 <label className="block text-sm font-medium mb-1" htmlFor="description">
//                   Description
//                 </label>
//                 {/* <textarea
//                   id="description"
//                   name="description"
//                   className="form-input w-full"
//                   rows={3}
//                   value={formData.description}
//                   onChange={handleInputChange}
//                 /> */}
//                 <input
//                   id="description"
//                   name="description"
//                   className="form-input w-full"
//                   type="text"
//                   value={formData.description}
//                   onChange={handleInputChange}
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="mt-[25px]">
//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className={`btn bg-green-500 hover:bg-green-600 text-white w-full ${isLoading ? 'opacity-50 cursor-not-allowed' : ''
//                     }`}
//                 >
//                   {isLoading
//                     ? `${isEditing ? 'Updating...' : 'Creating...'}`
//                     : `${isEditing ? 'Update' : 'Create'} Customer`}
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
// components/FormReseller.tsx
import { useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useResellerForm } from './useResellerForm';
import { useAlert } from '@/app/contexts/alertContext';

interface FormResellerProps {
  editData?: any; // Add prop for edit data
}

export default function FormReseller({ editData }: FormResellerProps) {
  const router = useRouter();
  const [isEditing] = useState(!!editData); // Determine if in edit mode
  const { alert } = useAlert();

  const [formData, setFormData] = useState({
    email: editData?.email || '',
    organizationName: editData?.organizationName || '',
    password: editData?.password || '',
    role: editData?.role || 'reseller',
  });

  const { handleSubmit, isLoading, error } = useResellerForm({
    isEdit: isEditing,
    resellerId: editData?.id,
    onSuccess: () => {
      router.back();
      alert({ text: `Reseller ${isEditing ? 'Updated' : 'Registered'} Successfully`, type: "success" });
    },
    onError: () => {
      alert({ text: `There was a problem ${isEditing ? 'Updating' : 'Registering'} the Reseller`, type: "error" });
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
          {isEditing ? 'Edit Reseller' : 'Register Reseller'}
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
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  className="form-input w-full"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="denno@gmail.com"
                  required
                />
              </div>
            </div>

            <div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="organizationName">
                  Organization Name
                </label>
                <input
                  id="organizationName"
                  name="organizationName"
                  className="form-input w-full"
                  type="text"
                  value={formData.organizationName}
                  onChange={handleInputChange}
                  placeholder="Your Organization"
                  required
                />
              </div>
            </div>

            <div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  className="form-input w-full"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="SecurePassword123!"
                  required
                  minLength={8}
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Password must be at least 8 characters long
                </p>
              </div>
            </div>

            <div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="role">
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  className="form-select w-full"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                >
                  <option value="reseller">Reseller</option>
                  <option value="admin">Admin</option>
                  <option value="agent">Agent</option>
                </select>
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
                    : `${isEditing ? 'Update' : 'Register'} Reseller`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}