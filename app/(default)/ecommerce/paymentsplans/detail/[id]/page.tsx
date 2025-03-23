"use client";
import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_SPECIFIC_PAY_PLAN_TEMPLATE } from "@/lib/queries";
import { UPDATE_PAY_PLAN } from "@/lib/mutations";
import { useRouter, useParams } from "next/navigation";
import LoaderSkeleton from "@/components/utils/loaderSkeleton";

export default function PaymentPlanDetail() {
  const router = useRouter();
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    planName: "",
    planDescription: "",
    useUpfront: false,
    upfrontPrice: 0,
    freecodePrice: 0,
    daysToCutOff: 0,
    minimumPayment: 0,
    upfrontIncludedDays: 0,
    hourPrice: 0,
    expectedPaidAmount: 0,
  });

  const { loading, error, data, refetch } = useQuery(
    GET_SPECIFIC_PAY_PLAN_TEMPLATE,
    { variables: { id } }
  );

  const [updatePayPlan, { loading: updateLoading, error: updateError }] =
    useMutation(UPDATE_PAY_PLAN);

  const plan = data?.getSpecificPayPlanTemplate;

  useEffect(() => {
    if (plan) {
      setFormData({
        planName: plan.planName,
        planDescription: plan.planDescription,
        useUpfront: plan.useUpfront,
        upfrontPrice: plan.planDetails[0]?.pValue || 0,
        freecodePrice: plan.planDetails[1]?.pValue || 0,
        daysToCutOff: plan.planDetails[2]?.pValue || 0,
        minimumPayment: plan.planDetails[3]?.pValue || 0,
        upfrontIncludedDays: plan.planDetails[4]?.pValue || 0,
        hourPrice: plan.planDetails[5]?.pValue || 0,
        expectedPaidAmount: plan.planDetails[6]?.pValue || 0,
      });
    }
  }, [plan]);

  const handleSave = async () => {
    if (!plan) return;

    const planDetailsInput = plan.planDetails.map(
      (detail: any, index: number) => ({
        pName: detail.pName,
        pValue: [
          formData.upfrontPrice,
          formData.freecodePrice,
          formData.daysToCutOff,
          formData.minimumPayment,
          formData.upfrontIncludedDays,
          formData.hourPrice,
          formData.expectedPaidAmount,
        ][index],
      })
    );

    try {
      await updatePayPlan({
        variables: {
          input: {
            payPlanId: id,
            planName: formData.planName,
            planDescription: formData.planDescription,
            useUpfront: formData.useUpfront,
            planDetails: planDetailsInput,
          },
        },
      });
      await refetch();
      setIsEditing(false);
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData({
      planName: plan.planName,
      planDescription: plan.planDescription,
      useUpfront: plan.useUpfront,
      upfrontPrice: plan.planDetails[0]?.pValue || 0,
      freecodePrice: plan.planDetails[1]?.pValue || 0,
      daysToCutOff: plan.planDetails[2]?.pValue || 0,
      minimumPayment: plan.planDetails[3]?.pValue || 0,
      upfrontIncludedDays: plan.planDetails[4]?.pValue || 0,
      hourPrice: plan.planDetails[5]?.pValue || 0,
      expectedPaidAmount: plan.planDetails[6]?.pValue || 0,
    });
  };

  if (loading) return <LoaderSkeleton />;
  if (error) return <div>{error.message}</div>;
  if (!plan) return <div>Plan not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="flex justify-between items-start mb-6">
        {isEditing ? (
          <input
            type="text"
            value={formData.planName}
            onChange={(e) =>
              setFormData({ ...formData, planName: e.target.value })
            }
            className="text-2xl font-bold text-gray-800 dark:text-gray-100 bg-transparent border rounded p-2"
          />
        ) : (
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            {plan.planName}
          </h1>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-4">
          {/* Plan Description */}
          {isEditing ? (
            <div className="border-b border-gray-200 dark:border-gray-700 pb-2">
              <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Plan Description
              </label>
              <input
                type="text"
                value={formData.planDescription}
                onChange={(e) =>
                  setFormData({ ...formData, planDescription: e.target.value })
                }
                className="mt-1 text-lg w-full bg-transparent border rounded p-2"
              />
            </div>
          ) : (
            <DetailItem label="Plan Description" value={plan.planDescription} />
          )}

          {/* Use Upfront */}
          {isEditing ? (
            <div className="border-b border-gray-200 dark:border-gray-700 pb-2">
              <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Use Upfront
              </label>
              <input
                type="checkbox"
                checked={formData.useUpfront}
                onChange={(e) =>
                  setFormData({ ...formData, useUpfront: e.target.checked })
                }
                className="mt-1 ml-2"
              />
            </div>
          ) : (
            <DetailItem
              label="Use Upfront"
              value={plan.useUpfront ? "Yes" : "No"}
            />
          )}

          {/* Editable Fields */}
          {[
            {
              label: "Upfront Price",
              value: formData.upfrontPrice,
              key: "upfrontPrice",
            },
            {
              label: "Upfront Included Days",
              value: formData.upfrontIncludedDays,
              key: "upfrontIncludedDays",
            },
          ].map((field) => (
            <EditableField
              key={field.key}
              isEditing={isEditing}
              label={field.label}
              value={field.value}
              onChange={(value: number) =>
                setFormData({ ...formData, [field.key]: value })
              }
            />
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {[
            {
              label: "Freecode Price",
              value: formData.freecodePrice,
              key: "freecodePrice",
            },
            {
              label: "Hour Price",
              value: formData.hourPrice,
              key: "hourPrice",
            },
            {
              label: "Days to Cut Off",
              value: formData.daysToCutOff,
              key: "daysToCutOff",
            },
            {
              label: "Expected Paid Amount",
              value: formData.expectedPaidAmount,
              key: "expectedPaidAmount",
            },
            {
              label: "Minimum Payment",
              value: formData.minimumPayment,
              key: "minimumPayment",
            },
          ].map((field) => (
            <EditableField
              key={field.key}
              isEditing={isEditing}
              label={field.label}
              value={field.value}
              onChange={(value: number) =>
                setFormData({ ...formData, [field.key]: value })
              }
            />
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-6">
        {!isEditing ? (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => router.back()}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
            >
              Back to List
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleSave}
              disabled={updateLoading}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
            >
              {updateLoading ? "Saving..." : "Save"}
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </>
        )}
      </div>

      {updateError && (
        <div className="text-red-500 mt-4">
          Error updating plan: {updateError.message}
        </div>
      )}
    </div>
  );
}

function DetailItem({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 pb-2">
      <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
        {label}
      </dt>
      <dd className="mt-1 text-lg text-gray-900 dark:text-gray-100">{value}</dd>
    </div>
  );
}

function EditableField({
  isEditing,
  label,
  value,
  onChange,
}: {
  isEditing: boolean;
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return isEditing ? (
    <div className="border-b border-gray-200 dark:border-gray-700 pb-2">
      <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
        {label}
      </label>
      <input
        type="number"
        step="0.01"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-1 text-lg w-full bg-transparent border rounded p-2"
      />
    </div>
  ) : (
    <DetailItem label={label} value={`$${value}`} />
  );
}
