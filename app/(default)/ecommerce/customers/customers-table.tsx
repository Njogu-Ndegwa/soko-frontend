"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { GET_ALL_CLIENT_CUSTOMERS } from "@/lib/queries";
import { Customer } from "./customers-table-item";

const columnHelper = createColumnHelper<Customer>();

const SkeletonRow = ({ columns }: { columns: number }) => (
  <tr>
    {Array.from({ length: columns }).map((_, index) => (
      <td
        key={index}
        className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"
      >
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
      </td>
    ))}
  </tr>
);

export default function CustomersTable() {
  const { loading, error, data } = useQuery(GET_ALL_CLIENT_CUSTOMERS);
  const [pageIndex, setPageIndex] = React.useState(0);

  console.log("the data is", data);

  // Transform data
  const customers = useMemo(
    () =>
      data?.getAllClientCustomers?.page?.edges.map(
        ({ node }: { node: any }) => ({
          id: node._id,
          name: node.name || "N/A",
          email: node.contact?.email || "N/A",
          phone: node.contact?.phone || "N/A",
          social: node.contact?.social || "N/A",
          type: node.type || "N/A",
          description: node.description || "N/A",
          createdAt: new Date(node.createdAt).toLocaleDateString(),
          distributor: node.distributor?.name || "N/A",
          updatedAt: node.updatedAt
            ? new Date(node.updatedAt).toLocaleDateString()
            : "N/A  ",
          _id: node.distributor?._id || "N/A",
        })
      ) || [],
    [data]
  );

  // Define columns
  const columns = useMemo(
    () => [
      columnHelper.display({
        id: "select",
        header: ({ table }) => (
          <label className="inline-flex">
            <span className="sr-only">Select all</span>
            <input
              type="checkbox"
              checked={table.getIsAllRowsSelected()}
              onChange={table.getToggleAllRowsSelectedHandler()}
            />
          </label>
        ),
        cell: ({ row }) => (
          <label className="inline-flex">
            <span className="sr-only">Select</span>
            <input
              type="checkbox"
              checked={row.getIsSelected()}
              onChange={row.getToggleSelectedHandler()}
            />
          </label>
        ),
      }),
      columnHelper.display({
        id: "favourite",
        header: () => <span className="sr-only">Favourite</span>,
        cell: () => (
          <button>
            <svg width="16" height="16" viewBox="0 0 16 16">
              <path d="M8 0L6 5.934H0l4.89 3.954L2.968 16 8 12.223 13.032 16 11.11 9.888 16 5.934h-6L8 0z" />
            </svg>
          </button>
        ),
      }),
      columnHelper.accessor("name", {
        header: () => "Name",
        cell: (info) => (
          <div className="flex items-center">
            <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
              <Image
                className="rounded-full"
                src={null as unknown as StaticImageData}
                width={40}
                height={40}
                alt=""
              />
            </div>
            <div className="font-medium text-gray-800 dark:text-gray-100">
              {info.getValue()}
            </div>
          </div>
        ),
      }),
      columnHelper.accessor("email", {
        header: () => "Email",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("phone", {
        header: () => "Phone",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("social", {
        header: () => "Social",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("type", {
        header: () => "Type",
        cell: (info) => info.getValue(),
      }),
      columnHelper.accessor("distributor", {
        header: () => "Distributor",
        cell: (info) => (
          <div className="text-left font-medium text-green-600">
            {info.getValue()}
          </div>
        ),
      }),
      columnHelper.accessor("description", {
        header: () => "Description",
        cell: (info) => (
          <div className="text-left font-medium text-green-600">
            {info.getValue()}
          </div>
        ),
      }),
      columnHelper.accessor("createdAt", {
        header: () => "Date Created",
        cell: (info) => <div className="text-left">{info.getValue()}</div>,
      }),
      columnHelper.accessor("updatedAt", {
        header: () => "Last Updated",
        cell: (info) => <div className="text-right">{info.getValue()}</div>,
      }),
      columnHelper.accessor("_id", {
        header: () => "ID",
        cell: (info) => <div className="text-left">{info.getValue()}</div>,
      }),
      columnHelper.display({
        id: "actions",
        header: () => <span className="sr-only">Menu</span>,
        cell: () => (
          <button className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 rounded-full">
            <span className="sr-only">Menu</span>
            <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="2" />
              <circle cx="10" cy="16" r="2" />
              <circle cx="22" cy="16" r="2" />
            </svg>
          </button>
        ),
      }),
    ],
    []
  );

  const table = useReactTable({
    data: customers,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: { pagination: { pageIndex, pageSize: 15 } },
    onPaginationChange: (updater) => {
      setPageIndex((prev) => {
        const newState =
          typeof updater === "function"
            ? updater({
                pageIndex: prev,
                pageSize: table.getState().pagination.pageSize,
              })
            : updater;
        return newState.pageIndex;
      });
    },
  });

  if (error) return <p>Error fetching customers: {error.message}</p>;

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
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header, index) => (
                    <th
                      key={header.id}
                      className={`px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap ${
                        index === 0
                          ? "sticky left-0 bg-gray-50 dark:bg-gray-900/20 z-20"
                          : ""
                      }`}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            {/* Table body */}
            {/* Table body */}
            <tbody className="text-sm divide-y divide-gray-100 dark:divide-gray-700/60">
              {loading
                ? // Show skeleton loading rows
                  Array.from({ length: 5 }).map((_, index) => (
                    <SkeletonRow key={index} columns={columns.length} />
                  ))
                : // Render actual table rows
                  table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                      {row.getVisibleCells().map((cell, index) => (
                        <td
                          key={cell.id}
                          className={`px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap ${
                            index === 0
                              ? "sticky left-0 bg-white dark:bg-gray-800 z-10"
                              : ""
                          }`}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
            </tbody>
          </table>
          <div className="flex justify-center items-center gap-4 my-4">
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span>
              Page {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </span>
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
