// hooks/useProvisionCustomerForm.ts
import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

export interface ProvisionCustomerFormData {
  customerId: string;
}

interface UseProvisionCustomerFormProps {
  onSuccess?: (result: any) => void;
  onError?: (error: string) => void;
}

const MANUALLY_PROVISION_CUSTOMER_MUTATION = gql`
  mutation ManuallyProvisionCustomer($customerId: Int!) {
    manuallyProvisionCustomer(customerId: $customerId) {
      id
      expiry
    }
  }
`;

export const useProvisionCustomerForm = ({
  onSuccess,
  onError
}: UseProvisionCustomerFormProps = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [manuallyProvisionCustomer] = useMutation(MANUALLY_PROVISION_CUSTOMER_MUTATION, {
    onCompleted: (data) => {
      if (onSuccess) {
        onSuccess(data.manuallyProvisionCustomer);
      }
    },
    onError: (error) => {
      const errorMessage = error.message || 'An unexpected error occurred during provisioning';
      setError(errorMessage);
      if (onError) {
        onError(errorMessage);
      }
    }
  });

  const handleSubmit = async (formData: ProvisionCustomerFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      // Convert customerId to integer
      const customerId = parseInt(formData.customerId);
      
      if (isNaN(customerId) || customerId <= 0) {
        throw new Error('Please enter a valid customer ID');
      }

      await manuallyProvisionCustomer({
        variables: {
          customerId: customerId
        }
      });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(errorMessage);
      if (onError) {
        onError(errorMessage);
      }
      throw err;
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