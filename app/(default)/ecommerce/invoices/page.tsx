export const metadata = {
  title: "Invoices - Mosaic",
  description: "Page description",
};

import { SelectedItemsProvider } from "@/app/selected-items-context";

import ItemsTable from "./invoices-table";

function InvoicesContent() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-[96rem] mx-auto">
      {/* Table */}
      <ItemsTable />
    </div>
  );
}

export default function Invoices() {
  return (
    <SelectedItemsProvider>
      <InvoicesContent />
    </SelectedItemsProvider>
  );
}
