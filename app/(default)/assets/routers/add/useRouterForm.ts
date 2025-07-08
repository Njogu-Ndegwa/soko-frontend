// // hooks/useCustomerForm.ts
// import { useState } from 'react';
// import { gql, useMutation } from '@apollo/client';

// export interface CustomerFormData {
//   name: string;
//   phone: string;
//   connectionType: string;
//   connectionDetails: string;
//   planId: string;
//   routerId: string;
// }

// interface UseCustomerFormProps {
//   isEdit?: boolean;
//   customerId?: string | null;
//   onSuccess?: (customer: any) => void;
//   onError?: (error: string) => void;
// }

// const REGISTER_CUSTOMER_MUTATION = gql`
//   mutation RegisterCustomer(
//     $name: String!
//     $phone: String!
//     $connectionType: String!
//     $connectionDetails: String!
//     $planId: Int!
//     $routerId: Int!
//   ) {
//     registerCustomer(
//       name: $name
//       phone: $phone
//       connectionType: $connectionType
//       connectionDetails: $connectionDetails
//       planId: $planId
//       routerId: $routerId
//     ) {
//       id
//       expiry
//       macAddress
//       name
//       phone
//     }
//   }
// `;

// const UPDATE_CUSTOMER_MUTATION = gql`
//   mutation UpdateCustomer(
//     $id: ID!
//     $name: String!
//     $phone: String!
//     $connectionType: String!
//     $connectionDetails: String!
//     $planId: Int!
//     $routerId: Int!
//   ) {
//     updateCustomer(
//       id: $id
//       name: $name
//       phone: $phone
//       connectionType: $connectionType
//       connectionDetails: $connectionDetails
//       planId: $planId
//       routerId: $routerId
//     ) {
//       id
//       expiry
//       macAddress
//       name
//       phone
//     }
//   }
// `;

// export const useCustomerForm = ({
//   isEdit = false,
//   customerId = null,
//   onSuccess,
//   onError
// }: UseCustomerFormProps = {}) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const [registerCustomer] = useMutation(REGISTER_CUSTOMER_MUTATION, {
//     onCompleted: (data) => {
//       if (onSuccess) {
//         onSuccess(data.registerCustomer);
//       }
//     },
//     onError: (error) => {
//       const errorMessage = error.message || 'An unexpected error occurred';
//       setError(errorMessage);
//       if (onError) {
//         onError(errorMessage);
//       }
//     }
//   });

//   const [updateCustomer] = useMutation(UPDATE_CUSTOMER_MUTATION, {
//     onCompleted: (data) => {
//       if (onSuccess) {
//         onSuccess(data.updateCustomer);
//       }
//     },
//     onError: (error) => {
//       const errorMessage = error.message || 'An unexpected error occurred';
//       setError(errorMessage);
//       if (onError) {
//         onError(errorMessage);
//       }
//     }
//   });

//   const handleSubmit = async (formData: CustomerFormData) => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       // Convert form data to the correct types
//       const customerData = {
//         name: formData.name,
//         phone: formData.phone,
//         connectionType: formData.connectionType,
//         connectionDetails: formData.connectionDetails,
//         planId: parseInt(formData.planId),
//         routerId: parseInt(formData.routerId)
//       };

//       if (isEdit && customerId) {
//         await updateCustomer({
//           variables: {
//             id: customerId,
//             ...customerData
//           }
//         });
//       } else {
//         await registerCustomer({
//           variables: {
//             ...customerData
//           }
//         });
//       }
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
//       setError(errorMessage);
//       if (onError) {
//         onError(errorMessage);
//       }
//       throw err;
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


// hooks/useRouterForm.ts
import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

export interface RouterFormData {
  name: string;
  ipAddress: string;
  port: string;
  username: string;
  password: string;
}

interface UseRouterFormProps {
  isEdit?: boolean;
  routerId?: string | null;
  onSuccess?: (router: any) => void;
  onError?: (error: string) => void;
}

const CREATE_ROUTER_MUTATION = gql`
  mutation CreateRouter(
    $name: String!
    $ipAddress: String!
    $port: Int!
    $username: String!
    $password: String!
  ) {
    createRouter(
      name: $name
      ipAddress: $ipAddress
      port: $port
      username: $username
      password: $password
    ) {
      id
      ipAddress
    }
  }
`;

const UPDATE_ROUTER_MUTATION = gql`
  mutation UpdateRouter(
    $id: ID!
    $name: String!
    $ipAddress: String!
    $port: Int!
    $username: String!
    $password: String!
  ) {
    updateRouter(
      id: $id
      name: $name
      ipAddress: $ipAddress
      port: $port
      username: $username
      password: $password
    ) {
      id
      ipAddress
    }
  }
`;

export const useRouterForm = ({
  isEdit = false,
  routerId = null,
  onSuccess,
  onError
}: UseRouterFormProps = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [createRouter] = useMutation(CREATE_ROUTER_MUTATION, {
    onCompleted: (data) => {
      if (onSuccess) {
        onSuccess(data.createRouter);
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

  const [updateRouter] = useMutation(UPDATE_ROUTER_MUTATION, {
    onCompleted: (data) => {
      if (onSuccess) {
        onSuccess(data.updateRouter);
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

  const handleSubmit = async (formData: RouterFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      // Convert form data to the correct types
      const routerData = {
        name: formData.name,
        ipAddress: formData.ipAddress,
        port: parseInt(formData.port),
        username: formData.username,
        password: formData.password
      };

      if (isEdit && routerId) {
        await updateRouter({
          variables: {
            id: routerId,
            ...routerData
          }
        });
      } else {
        await createRouter({
          variables: {
            ...routerData
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