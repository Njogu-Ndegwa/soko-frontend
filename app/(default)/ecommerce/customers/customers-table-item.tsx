import Image, { StaticImageData } from "next/image";

export interface Customer {
  id: string;
  image?: StaticImageData;
  name: string;
  email: string;
  phone: string;
  social: string;
  type: string;
  distributor: string; // Add if necessary
  description: string;
  createdAt: string;
  updatedAt?: string;
  _id: string;
}
