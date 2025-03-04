import Image from "next/image";
import { Customer } from "./customers-table";

interface CustomersTableItemProps {
  customer: Customer;
  onCheckboxChange: (id: number, checked: boolean) => void;
  isSelected: boolean;
}

export default function CustomersTableItem({
  customer,
  onCheckboxChange,
  isSelected,
}: CustomersTableItemProps) {
  return <></>;
}
