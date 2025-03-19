"use client";
import React from "react";

const tabs = [
  {
    title: "Account Overview",
    fields: [
      { label: "Account Number", key: "accountNumber" },
      { label: "Status", key: "status" },
      { label: "Balance", key: "balance" },
      { label: "Currency", key: "currency" },
    ],
  },
  {
    title: "Customer Details",
    fields: [
      { label: "Customer Name", key: "Customer" },
      { label: "Phone Number", key: "phone" },
      { label: "Street Address", key: "street" },
      { label: "City", key: "city" },
    ],
  },
  {
    title: "Location Information",
    fields: [
      { label: "Country", key: "country" },
      { label: "Postal Code", key: "postalCode" },
      { label: "SRPC", key: "srpc" },
      { label: "Coordinates", key: "coordinates" },
    ],
  },
  {
    title: "Asset Specifications",
    fields: [
      { label: "Unit", key: "unit" },
      { label: "OEM Item ID", key: "oemItemid" },
      { label: "Item ID", key: "itemId" },
      { label: "Fleet ID", key: "fleetId" },
    ],
  },
  {
    title: "Management",
    fields: [
      { label: "Account Manager", key: "manager" },
      { label: "Account Stage", key: "accountStage" },
      { label: "Date Created", key: "dateCreated" },
      { label: "Last Updated", key: "lastUpdated" },
    ],
  },
];

export default function AssetAccountDetail() {
  const [activeTab, setActiveTab] = React.useState(0);

  // Mock data structure
  const mockAccount = {
    accountNumber: "N/A",
    status: "Inactive",
    balance: "N/A",
    currency: "N/A",
    Customer: "N/A",
    phone: "N/A",
    street: "N/A",
    city: "N/A",
    country: "N/A",
    postalCode: "N/A",
    srpc: "N/A",
    latitude: "N/A",
    longitude: "N/A",
    unit: "N/A",
    oemItemid: "N/A",
    itemId: "N/A",
    fleetId: "N/A",
    manager: "N/A",
    accountStage: "N/A",
    dateCreated: "N/A",
    lastUpdated: "N/A",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Vertical Tabs */}
        <div className="w-full md:w-64 space-y-1">
          {tabs.map((tab, index) => (
            <button
              key={tab.title}
              onClick={() => setActiveTab(index)}
              className={`w-full px-4 py-3 text-left rounded-lg transition-colors ${
                activeTab === index
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tabs[activeTab].fields.map((field) => (
              <div key={field.key} className="space-y-1">
                <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {field.label}
                </label>
                {field.key === "coordinates" ? (
                  <p className="text-gray-900 dark:text-gray-100">
                    {mockAccount.latitude}, {mockAccount.longitude}
                  </p>
                ) : field.key === "status" ? (
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                      mockAccount[field.key].toLowerCase() === "active"
                        ? "bg-green-100 text-green-700 dark:bg-green-800/30 dark:text-green-400"
                        : "bg-red-100 text-red-700 dark:bg-red-800/30 dark:text-red-400"
                    }`}
                  >
                    {mockAccount[field.key]}
                  </span>
                ) : (
                  <p className="text-gray-900 dark:text-gray-100">
                    {mockAccount[field.key as keyof typeof mockAccount] ||
                      "N/A"}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex gap-3 justify-end">
        <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
          Edit Account
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
}
