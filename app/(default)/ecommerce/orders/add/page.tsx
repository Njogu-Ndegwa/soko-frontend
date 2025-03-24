"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

function formatLabel(label: string): string {
  return label
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
}

export default function AddAsset() {
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState(0);
  const [selectedPlanId, setSelectedPlanId] = React.useState<string | null>(
    "1"
  );

  // Dummy data for UI demonstration
  const paymentPlans = [
    {
      node: {
        _id: "1",
        planName: "Basic Plan",
        planDescription: "A simple payment plan",
        useUpfront: true,
        planDetails: [
          { pName: "downPayment", pValue: "20" },
          { pName: "installment", pValue: "12" },
        ],
      },
    },
    {
      node: {
        _id: "2",
        planName: "Premium Plan",
        planDescription: "Advanced payment schedule",
        useUpfront: false,
        planDetails: [
          { pName: "downPayment", pValue: "30" },
          { pName: "installment", pValue: "24" },
        ],
      },
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI-only submission handling
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6">
      <div
        className="mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden"
        style={{ maxWidth: "90%", marginTop: "5vh" }}
      >
        <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 flex items-center space-x-4">
          <button
            onClick={() => router.back()}
            className="p-2 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg transition-colors text-blue-600 dark:text-blue-400"
          >
            <FaArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
            Asset Account Details
          </h1>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-64 bg-blue-50 dark:bg-gray-700 p-4 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-600">
            <nav className="flex md:flex-col gap-2 overflow-x-auto">
              {[
                "Pair User With Asset",
                "Payment Schedule",
                "Payment and Codes",
                "Review Completion Plan",
                "activate account",
              ].map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(index)}
                  className={`min-w-max md:w-full px-4 py-3 text-left rounded-lg transition-colors duration-200 ${
                    activeTab === index
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex-1 p-4 sm:p-6 md:p-8">
            {activeTab === 0 && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="pb-4 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
                      Basic Information
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <DetailItem label="OEM Item ID" value="ABC-123" />
                    <DetailItem label="Owner Name" value="John Doe" />
                    <DetailItem label="Balance" value="$10,000" />
                    <DetailItem label="Currency" value="USD" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 1 && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="pb-4 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
                      Payment Schedule Configuration
                    </h2>
                  </div>
                  <div className="space-y-1 sm:col-span-2">
                    <label className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      Select Payment Plan
                    </label>
                    <select
                      className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                      onChange={(e) => setSelectedPlanId(e.target.value)}
                      value={selectedPlanId || ""}
                    >
                      {paymentPlans.map(({ node }) => (
                        <option key={node._id} value={node._id}>
                          {node.planName}
                        </option>
                      ))}
                    </select>
                  </div>

                  <form
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                    onSubmit={handleSubmit}
                  >
                    <div className="space-y-1">
                      <label className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        Plan Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Basic Plan"
                        className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>

                    <div className="space-y-1 sm:col-span-2">
                      <label className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        Plan Description
                      </label>
                      <textarea
                        defaultValue="A simple payment plan"
                        className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                        rows={3}
                      />
                    </div>

                    <div className="space-y-1 sm:col-span-2">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="form-checkbox h-4 w-4"
                        />
                        <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                          Use Upfront Payment
                        </span>
                      </label>
                    </div>

                    {paymentPlans[0].node.planDetails.map((detail) => (
                      <div className="space-y-1" key={detail.pName}>
                        <label className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                          {formatLabel(detail.pName)}
                        </label>
                        <input
                          type="number"
                          defaultValue={detail.pValue}
                          className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                        />
                      </div>
                    ))}

                    <div className="sm:col-span-2 pt-6 flex gap-4">
                      <button
                        type="submit"
                        className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {activeTab !== 0 && activeTab !== 1 && (
              <div className="h-full flex items-center justify-center min-h-[200px]">
                <div className="text-center p-4">
                  <p className="text-gray-400 dark:text-gray-500 text-base sm:text-lg">
                    {
                      [
                        "Technical Details",
                        "Management Information",
                        "Metadata Content",
                      ][activeTab - 1]
                    }
                    <br />
                    <span className="text-sm">(Coming Soon)</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const DetailItem = ({ label, value }: { label: string; value: string }) => (
  <div className="space-y-1">
    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
      {label}
    </p>
    <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200 font-semibold break-words">
      {value}
    </p>
  </div>
);
