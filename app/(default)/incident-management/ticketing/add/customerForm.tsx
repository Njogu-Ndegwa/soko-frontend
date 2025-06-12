'use client'
// components/FormCustomer.tsx
import { useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useCustomerForm } from './useCustomerForm';
import { useAlert } from '@/app/contexts/alertContext';
// import { PersonInterface } from '../../types';
// import { Person } from '../types/Person';

interface FormCustomerProps {
  editData?: any; // Add prop for edit data
}

 export default function FormCustomer({ editData }: FormCustomerProps) {
  const router = useRouter();
  const [isEditing] = useState(!!editData); // Determine if in edit mode
  const { alert } = useAlert();

  const [formData, setFormData] = useState({
    name: editData?.name || '',
    email: editData?.contact?.email || '',
    phone: editData?.contact?.phone || '',
    social: editData?.contact?.social || '',
    city: editData?.address?.city || '',
    country: editData?.address?.country || '',
    postCode: editData?.address?.postcode || '',
    srpc: editData?.address?.srpc || '',
    street: editData?.address?.street || '',
    unit: editData?.address?.unit || '',
    longitude: editData?.address?.addressLocation?.addressLongitude?.toString() || '0',
    latitude: editData?.address?.addressLocation?.addressLongitude?.toString() || '0',
    description: editData?.description || '',
  });

  const { handleSubmit, isLoading, error } = useCustomerForm({
    isEdit: isEditing,
    personId: editData?._id,
    onSuccess: () => {
      router.back();
      alert({ text: `Customer ${isEditing ? 'Updated' : 'Created'} Successfully`, type: "success" });
    },
    onError: () => {
      alert({ text: `There was a problem ${isEditing ? 'Updating' : 'Creating'} the Customer`, type: "error" });
    }
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
          {isEditing ? 'Edit Customer' : 'Create a Customer'}
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
                  Plan Type
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
                <label className="block text-sm font-medium mb-1" htmlFor="email">
                  Time Frame
                </label>
                <input
                  id="email"
                  name="email"
                  className="form-input w-full"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="phone">
                  Amount
                </label>
                <input
                  id="phone"
                  name="phone"
                  className="form-input w-full"
                  type="text"
                  value={formData.phone}
                  onChange={handleInputChange}
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
                    ? `${isEditing ? 'Updating...' : 'Creating...'}`
                    : `${isEditing ? 'Update' : 'Create'} Customer`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}