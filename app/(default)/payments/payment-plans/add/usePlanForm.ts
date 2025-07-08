// hooks/usePlanForm.ts
import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

export interface PlanFormData {
  name: string;
  connectionType: string;
  price: string;
  speed: string;
  durationDays: string;
}

interface UsePlanFormProps {
  isEdit?: boolean;
  planId?: string | null;
  onSuccess?: (plan: any) => void;
  onError?: (error: string) => void;
}

const CREATE_PLAN_MUTATION = gql`
  mutation CreatePlan($name: String!, $connectionType: String!, $price: Int!, $speed: String!, $durationDays: Int!) {
    createPlan(
      name: $name
      connectionType: $connectionType
      price: $price
      speed: $speed
      durationDays: $durationDays
    ) {
      id
      name
      connectionType
      price
      speed
      durationDays
    }
  }
`;

const UPDATE_PLAN_MUTATION = gql`
  mutation UpdatePlan($id: ID!, $name: String!, $connectionType: String!, $price: Int!, $speed: String!, $durationDays: Int!) {
    updatePlan(
      id: $id
      name: $name
      connectionType: $connectionType
      price: $price
      speed: $speed
      durationDays: $durationDays
    ) {
      id
      name
      connectionType
      price
      speed
      durationDays
    }
  }
`;

export const usePlanForm = ({
  isEdit = false,
  planId = null,
  onSuccess,
  onError
}: UsePlanFormProps = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [createPlan] = useMutation(CREATE_PLAN_MUTATION, {
    onCompleted: (data) => {
      if (onSuccess) {
        onSuccess(data.createPlan);
      }
    },
    onError: (error) => {
      const errorMessage = error.message || 'An unexpected error occurred';
      setError(errorMessage);
      if (onError) {
        onError(errorMessage);
      }
    }
  });

  const [updatePlan] = useMutation(UPDATE_PLAN_MUTATION, {
    onCompleted: (data) => {
      if (onSuccess) {
        onSuccess(data.updatePlan);
      }
    },
    onError: (error) => {
      const errorMessage = error.message || 'An unexpected error occurred';
      setError(errorMessage);
      if (onError) {
        onError(errorMessage);
      }
    }
  });

  const handleSubmit = async (formData: PlanFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      // Convert form data to the correct types
      const planData = {
        name: formData.name,
        connectionType: formData.connectionType,
        price: parseInt(formData.price), // Changed from parseFloat to parseInt
        speed: formData.speed,
        durationDays: parseInt(formData.durationDays)
      };

      if (isEdit && planId) {
        await updatePlan({
          variables: {
            id: planId,
            ...planData
          }
        });
      } else {
        await createPlan({
          variables: {
            ...planData
          }
        });
      }
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