import { useMutation } from '@apollo/client';
import { debitCreditAccountMutation } from '../mutations';
import { 
  DebitCreditAccount, 
  DebitCreditAccountVariables 
} from '../types/DebitCreditAccount';

const useDebitCreditAccount = (onCompleted?: (data: DebitCreditAccount) => void) => {
  const [debitCreditAccount, options] = useMutation<
    DebitCreditAccount,
    DebitCreditAccountVariables
  >(debitCreditAccountMutation, {
    onCompleted: (data) => {
      onCompleted && onCompleted(data);
    },
  });

  return {
    debitCreditAccount,
    options,
  };
};

export default useDebitCreditAccount;