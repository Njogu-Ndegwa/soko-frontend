"use client";

import Image, { StaticImageData } from "next/image";
import { useItemSelection } from "@/components/utils/use-item-selection";
import { GET_ALL_CLIENT_CUSTOMERS } from "@/lib/queries";
import { useQuery } from "@apollo/client";

export interface Customer {
  id: string;
  image?: StaticImageData; // Optional, as it's missing in the provided data
  name: string;
  email: string;
  phone: string;
  social: string;
  type: string;
  distributor?: string; // Add if necessary
  description: string;
  createdAt: string;
}

export default function CustomersTable() {
  const { loading, error, data } = useQuery(GET_ALL_CLIENT_CUSTOMERS);

  if (loading) return <p>Loading customers...</p>;
  if (error) return <p>Error fetching customers: {error.message}</p>;

  const customers =
    data?.getAllClientCustomers?.page?.edges.map(({ node }: { node: any }) => ({
      id: node._id,
      name: node.name || "N/A",
      email: node.contact?.email || "N/A",
      phone: node.contact?.phone || "N/A",
      social: node.contact?.social || "N/A",
      type: node.type || "N/A",
      description: node.description || "N/A",
      createdAt: new Date(node.createdAt).toLocaleDateString(),
    })) || [];

  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm rounded-xl relative overflow-scroll">
      <header className="px-5 py-4">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          All Customers{" "}
          <span className="text-gray-400 dark:text-gray-500 font-medium">
            ({customers.length})
          </span>
        </h2>
      </header>
      <div>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-gray-300">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/20 border-t border-b border-gray-100 dark:border-gray-700/60">
              <tr>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                  <div className="flex items-center">
                    <label className="inline-flex">
                      <span className="sr-only">Select all</span>
                      <input className="form-checkbox" type="checkbox" />
                    </label>
                  </div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                  <span className="sr-only">Favourite</span>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Email</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Phone</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold">Social</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Type</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Distributor</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold">Description</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <span className="sr-only">Date Created</span>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-gray-100 dark:divide-gray-700/60">
              {customers.map((customer: Customer) => {
                return (
                  <tr key={customer.id}>
                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                      <div className="flex items-center">
                        <label className="inline-flex">
                          <span className="sr-only">Select</span>
                          <input className="form-checkbox" type="checkbox" />
                        </label>
                      </div>
                    </td>
                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                      <div className="flex items-center relative">
                        <button>
                          <svg width="16" height="16" viewBox="0 0 16 16">
                            <path d="M8 0L6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934h-6L8 0z" />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                          <Image
                            className="rounded-full"
                            src=""
                            width={40}
                            height={40}
                            alt=""
                          />
                        </div>
                        <div className="font-medium text-gray-800 dark:text-gray-100">
                          {customer.name}
                        </div>
                      </div>
                    </td>
                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="text-left">{customer.email}</div>
                    </td>
                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="text-left">{customer.phone}</div>
                    </td>
                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="text-center">{customer.social}</div>
                    </td>
                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="text-left font-medium text-sky-600">
                        {customer.type}
                      </div>
                    </td>
                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <div className="text-left font-medium text-green-600">
                        {customer.description}
                      </div>
                    </td>
                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                      <td className="px-2 py-3">{customer.createdAt}</td>
                    </td>
                    <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                      {/* Menu button */}
                      <button className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 rounded-full">
                        <span className="sr-only">Menu</span>
                        <svg
                          className="w-8 h-8 fill-current"
                          viewBox="0 0 32 32"
                        >
                          <circle cx="16" cy="16" r="2" />
                          <circle cx="10" cy="16" r="2" />
                          <circle cx="22" cy="16" r="2" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
