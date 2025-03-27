// app/(default)/accounts/customers/edit/[id]/edit-client.tsx (Client Component)
"use client";

import { useEffect, useState } from "react";
import FormCustomer from "../../add/customerForm";
import { useAlert } from "@/app/contexts/alertContext";
import { Person } from "../../types/Person";
import { useRouter, useParams } from "next/navigation";
import { useGetSpecificPayPlanTemplate } from "../../queries";
import { GetSpecificCustomerOrPerson_getSpecificCustomerOrPerson } from "../../types/GetSpecificCustomerOrPerson";

export default function EditCustomerClient({ id }: { id: string }) {
  const [customerData, setCustomerData] =
    useState<GetSpecificCustomerOrPerson_getSpecificCustomerOrPerson | null>(
      null
    );
  const [loading, setLoading] = useState(true);
  const { alert } = useAlert();
  const router = useRouter();

  // Use the lazy query hook to fetch customer data
  const [getCustomer, { data, error, loading: queryLoading }] =
    useGetSpecificPayPlanTemplate({
      personId: id,
    });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Execute the query to get customer data
        await getCustomer({
          variables: {
            personId: id,
          },
        });
      } catch (err) {
        console.error("Error fetching customer:", err);
        alert({ text: "Failed to load customer data", type: "error" });
        router.push("/accounts/customers");
      }
    };

    fetchData();
  }, [id]);

  // Update customer data when query results arrive
  useEffect(() => {
    if (data?.getSpecificCustomerOrPerson) {
      setCustomerData(data.getSpecificCustomerOrPerson);
      setLoading(false);
    }
  }, [data]);

  // Handle errors
  useEffect(() => {
    if (error) {
      console.error("GraphQL error:", error);
      alert({ text: "Failed to load customer data", type: "error" });
      router.push("/accounts/customers");
      setLoading(false);
    }
  }, [error]);

  // Map the GraphQL response to the format expected by FormCustomer
  const mapToFormCustomerData = () => {
    if (!customerData) return null;

    // Convert the GraphQL response structure to match PersonInterface format
    const formattedData: Person = {
      name: customerData.name,
      description: customerData.description || "",
      type: customerData.type,
      contact: {
        __typename: "Contact",
        email: customerData.contact.email,
        phone: customerData.contact.phone,
        social: customerData.contact.social,
      },
      address: {
        city: customerData.address.city,
        country: customerData.address.country,
        postcode: customerData.address.postcode,
        srpc: customerData.address.srpc,
        street: customerData.address.street,
        unit: customerData.address.unit,
        addressLocation: {
          addressLatitude: customerData.address.addressLocation.addressLatitude,
          addressLongitude:
            customerData.address.addressLocation.addressLongitude,
          __typename: "AddressLocation",
        },
        __typename: "Address",
      },
    } as Person; // Use type assertion instead of @ts-ignore

    return formattedData;
  };

  if (loading || queryLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );

  return <FormCustomer editData={mapToFormCustomerData()} />;
}
