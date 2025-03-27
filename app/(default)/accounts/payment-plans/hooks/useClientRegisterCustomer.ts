import { useMutation } from "@apollo/client";
import { createPayPlanMutation } from "../mutations";
import {
  ClientRegisterCustomer,
  ClientRegisterCustomerVariables,
} from "../types/ClientRegisterCustomer";

const useClientRegisterCustomer = (onCompleted: (data: any) => void) => {
  const [registerCustomer, options] = useMutation<
    ClientRegisterCustomer,
    ClientRegisterCustomerVariables
  >(clientRegisterCustomerMutation, {
    onCompleted: async (data) => {
      onCompleted && onCompleted(data);
    },
  });

  return {
    registerCustomer,
    options,
  };
};

export default useClientRegisterCustomer;
