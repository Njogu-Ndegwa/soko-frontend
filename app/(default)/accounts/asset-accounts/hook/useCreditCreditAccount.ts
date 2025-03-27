import { useMutation } from '@apollo/client';
import { creditCreditAccountMutation } from '../mutations';
import { 
  CreditCreditAccount, 
  CreditCreditAccountVariables 
} from '../types/CreditCreditAccount';

const useCreditCreditAccount = (onCompleted?: (data: CreditCreditAccount) => void) => {
  const [creditCreditAccount, options] = useMutation<
    CreditCreditAccount,
    CreditCreditAccountVariables
  >(creditCreditAccountMutation, {
    onCompleted: (data) => {
      onCompleted && onCompleted(data);
    },
  });

  return {
    creditCreditAccount,
    options,
  };
};

export default useCreditCreditAccount;