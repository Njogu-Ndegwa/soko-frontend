'use client'
// components/FormPlan.tsx
import { useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { usePlanForm } from './usePlanForm';
import { useAlert } from '@/app/contexts/alertContext';

interface FormPlanProps {
  editData?: any; // Add prop for edit data
}

export default function FormPlan({ editData }: FormPlanProps) {
  const router = useRouter();
  const [isEditing] = useState(!!editData); // Determine if in edit mode
  const { alert } = useAlert();

  const [formData, setFormData] = useState({
    name: editData?.name || '',
    connectionType: editData?.connectionType || '',
    price: editData?.price?.toString() || '',
    speed: editData?.speed || '',
    durationDays: editData?.durationDays?.toString() || '',
  });

  const { handleSubmit, isLoading, error } = usePlanForm({
    isEdit: isEditing,
    planId: editData?.id,
    onSuccess: () => {
      router.back();
      alert({ text: `Plan ${isEditing ? 'Updated' : 'Created'} Successfully`, type: "success" });
    },
    onError: () => {
      alert({ text: `There was a problem ${isEditing ? 'Updating' : 'Creating'} the Plan`, type: "error" });
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
          {isEditing ? 'Edit Plan' : 'Create a Plan'}
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
                  Plan Name
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
                <label className="block text-sm font-medium mb-1" htmlFor="connectionType">
                  Connection Type
                </label>
                <input
                  id="connectionType"
                  name="connectionType"
                  className="form-input w-full"
                  type="text"
                  value={formData.connectionType}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="price">
                  Price
                </label>
                <input
                  id="price"
                  name="price"
                  className="form-input w-full"
                  type="number"
                  step="0.01"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="speed">
                  Speed
                </label>
                <input
                  id="speed"
                  name="speed"
                  className="form-input w-full"
                  type="text"
                  value={formData.speed}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="durationDays">
                  Duration (Days)
                </label>
                <input
                  id="durationDays"
                  name="durationDays"
                  className="form-input w-full"
                  type="number"
                  value={formData.durationDays}
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
                    : `${isEditing ? 'Update' : 'Create'} Plan`}
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}