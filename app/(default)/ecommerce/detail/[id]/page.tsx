"use client";
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_SPECIFIC_ASSET_ACCOUNT } from "@/lib/queries";
import { useParams } from "next/navigation";

export default function AssetAccountDetail() {
  const { id } = useParams();

  console.log("the id is ....", id);

  const { loading, error, data } = useQuery(GET_SPECIFIC_ASSET_ACCOUNT, {
    variables: { id },
  });

  console.log(" the data is", data);

  if (loading) return <div className="text-center p-8">Loading...</div>;
  if (error)
    return (
      <div className="text-center p-8 text-red-500">Error: {error.message}</div>
    );

  const accountData = data?.getSpecificAssetAccount?._id;

  console.log("the id is", accountData);

  return <div className="max-w-7xl mx-auto px-4 py-8"></div>;
}
