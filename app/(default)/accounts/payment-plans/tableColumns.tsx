import { TableColumn } from "@/components/table/table";
import { format } from "date-fns";
import { Pencil, Trash2, Plus, MoreHorizontal } from "lucide-react";

export const columns: TableColumn<any>[] = [
  // {
  //     header: 'Customer ID',
  //     accessor: 'node._id' as keyof any,
  //     cellRenderer: (value: unknown, item: any) => {
  //         // Handle null node case
  //         if (!item.node) return <div>-</div>;

  //         return (
  //             <div className="font-medium text-sky-600">
  //                 {String(item.node._id)}
  //             </div>
  //         );
  //     }
  // },
  {
    header: "Plan Name",
    accessor: "node.planName" as keyof any,
    cellRenderer: (value: unknown, item: any) => {
      // Handle null node case
      if (!item.node) return <div>-</div>;

      return (
        <div className="font-medium text-gray-800 dark:text-gray-100">
          {item.node.planName || "-"}
        </div>
      );
    },
  },
  {
    header: "Plan Description",
    accessor: "node.planDescription" as keyof any,
    cellRenderer: (value: unknown, item: any) => {
      // Handle null node case
      if (!item.node) return <div>-</div>;

      return (
        <div className="max-w-md truncate">
          {item?.node?.planDescription || "-"}
        </div>
      );
    },
  },
  {
    header: "Up front price",
    accessor: "item.node.useUpfront" as keyof any,
    cellRenderer: (value: unknown, item: any) => {
      // Handle null node case
      if (!item.node) return <div>-</div>;

      return (
        <div className="max-w-md truncate">
          {item.node.planDetails?.[0]?.pValue || "-"}
        </div>
      );
    },
  },
  {
    header: "Free Code Price",
    accessor: "node.contact.email" as keyof any,
    cellRenderer: (value: unknown, item: any) => {
      // Handle null node case
      if (!item.node) return <div>-</div>;

      return (
        <div className="max-w-md truncate">
          {item.node.planDetails?.[1]?.pValue || "-"}
        </div>
      );
    },
  },
  {
    header: "Days To Cut Off",
    accessor: "node.address.city" as keyof any,
    cellRenderer: (value: unknown, item: any) => {
      // Handle null node case
      if (!item.node) return <div>-</div>;

      const address = item.node.address;
      return (
        <div className="max-w-md truncate">
          {item.node.planDetails?.[2]?.pValue || "-"}
        </div>
      );
    },
  },
  {
    header: "Minimum Payment",
    accessor: "node.distributor.name" as keyof any,
    cellRenderer: (value: unknown, item: any) => {
      // Handle null node case
      if (!item.node) return <div>-</div>;

      return (
        <div className="max-w-md truncate">
          {item.node.planDetails?.[3]?.pValue || "-"}
        </div>
      );
    },
  },
  {
    header: "Hour price",
    accessor: "node.distributor.name" as keyof any,
    cellRenderer: (value: unknown, item: any) => {
      // Handle null node case
      if (!item.node) return <div>-</div>;

      return (
        <div className="max-w-md truncate">
          {item.node.planDetails?.[5]?.pValue || "-"}
        </div>
      );
    },
  },
  {
    header: "use Upfront",
    accessor: "node.useUpfront" as keyof any,
    cellRenderer: (value: unknown, item: any) => {
      // Handle null node case
      if (!item.node) return <div>-</div>;

      return (
        <div className="max-w-md truncate">{item.node.useUpfront || "-"}</div>
      );
    },
  },
];

export const dropdownOptions = [
  {
    id: 0,
    value: "Delete",
  },
  {
    id: 1,
    value: "Assign to Agent",
  },
];
