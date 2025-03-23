export const metadata = {
  title: "Orders - Mosaic",
  description: "Page description",
};

import { SelectedItemsProvider } from "@/app/selected-items-context";
import DeleteButton from "@/components/delete-button";
import DateSelect from "@/components/date-select";
import FilterButton from "@/components/dropdown-filter";
import OrdersTable from "./payments-plan-table";
import PaginationClassic from "@/components/pagination-classic";

import Image01 from "@/public/images/icon-01.svg";
import Image02 from "@/public/images/icon-02.svg";
import Image03 from "@/public/images/icon-03.svg";
import PaymentsPlanTable from "./payments-plan-table";

function PaymentContent() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
      {/* Table */}
      <PaymentsPlanTable />
    </div>
  );
}

export default function Orders() {
  return (
    <SelectedItemsProvider>
      <PaymentContent />
    </SelectedItemsProvider>
  );
}
