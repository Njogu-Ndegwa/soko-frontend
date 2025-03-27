import { useMutation } from '@apollo/client';
import { activateCreditAccountMutation } from '../mutations';
import { 
  ActivateCreditAccount, 
  ActivateCreditAccountVariables 
} from '../types/ActivateCreditAccount';

const useActivateCreditAccount = (onCompleted?: (data: ActivateCreditAccount) => void) => {
  const [activateCreditAccount, options] = useMutation<
    ActivateCreditAccount,
    ActivateCreditAccountVariables
  >(activateCreditAccountMutation, {
    onCompleted: (data) => {
      onCompleted && onCompleted(data);
    },
  });

  return {
    activateCreditAccount,
    options,
  };
};

export default useActivateCreditAccount;