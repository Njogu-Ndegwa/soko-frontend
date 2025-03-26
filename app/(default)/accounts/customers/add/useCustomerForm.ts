

// // hooks/useFleetForm.ts
// import { useState } from 'react';
// import { FleetFormData, FleetInterface } from '../../types';
// // import { createFleet, editFleet } from '../../services/inventoryService';

// interface UseFleetFormProps {
//   isEdit?: boolean;
//   fleetId?: number | null;
//   onSuccess?: (fleet: FleetInterface) => void;
//   onError?: (error: string) => void;
// }

// export const useFleetForm = ({ 
//   isEdit = false, 
//   fleetId = null,
//   onSuccess,
//   onError 
// }: UseFleetFormProps = {}) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleSubmit = async (formData: FleetFormData) => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       let fleet: FleetInterface;
      
//       // if (isEdit && fleetId) {
//       //   fleet = await editFleet(fleetId, formData);
//       // } else {
//       //   fleet = await createFleet(formData);
//       // }

//       // if (onSuccess) {
//       //   onSuccess(fleet);
//       // }
//       // return fleet;
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
//       setError(errorMessage);
//       if (onError) {
//         onError(errorMessage);
//       }
//       throw err; // Re-throw error for component-level handling
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return {
//     handleSubmit,
//     isLoading,
//     error,
//   };
// };

// hooks/useCustomerForm.ts
import { useState } from 'react';
import { CustomerFormData } from '../constants';
import { Person } from '../types/Person';
import useClientRegisterCustomer from '../hooks/useClientRegisterCustomer';
import useUpdatePerson from '../hooks/useUpdatePerson';
import { PersonTypes } from '../../../thing/types/globalTypes';

interface UseCustomerFormProps {
  isEdit?: boolean;
  personId?: string | null;
  onSuccess?: (person: Person) => void;
  onError?: (error: string) => void;
}

export const useCustomerForm = ({
  isEdit = false,
  personId = null,
  onSuccess,
  onError
}: UseCustomerFormProps = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { registerCustomer } = useClientRegisterCustomer((data) => {
    if (onSuccess) {
      onSuccess(data.clientRegisterCustomer);
    }
  });

  const { updatePerson } = useUpdatePerson((data) => {
    if (onSuccess) {
      onSuccess(data.updatePerson);
    }
  });

  const handleSubmit = async (formData: CustomerFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      let person: Person;
      
      if (isEdit && personId) {
        await updatePerson({
          variables: {
            updateClientPersonInput: {
              personId: personId,
              clientContactPerson: {
                email: formData.email,
                phone: formData.phone,
                social: formData.social
              },
              clientPersonAddress: {
                city: formData.city,
                country: formData.country,
                postcode: formData.postCode,
                srpc: formData.srpc,
                street: formData.street,
                unit: formData.unit,
                locationAddressDto: {
                  inputAddressLatitude: parseFloat(formData.latitude) || 0,
                  inputAddressLongitude: parseFloat(formData.longitude) || 0
                }
              },
              clientPersonName: formData.name,
              clientPersonDescription: formData.description
            }
          }
        });
      } else {
        await registerCustomer({
          variables: {
            clientCustomerInput: {
              clientContactPerson: {
                email: formData.email,
                phone: formData.phone,
                social: formData.social
              },
              clientPersonAddress: {
                city: formData.city,
                country: formData.country,
                postcode: formData.postCode,
                srpc: formData.srpc,
                street: formData.street,
                unit: formData.unit,
                locationAddressDto: {
                  inputAddressLatitude: parseFloat(formData.latitude) || 0,
                  inputAddressLongitude: parseFloat(formData.longitude) || 0
                }
              },
              clientPersonName: formData.name,
              clientPersonDescription: formData.description,
              clientPersonType: PersonTypes.CUSTOMER
            }
          }
        });
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(errorMessage);
      if (onError) {
        onError(errorMessage);
      }
      throw err; // Re-throw error for component-level handling
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleSubmit,
    isLoading,
    error,
  };
};