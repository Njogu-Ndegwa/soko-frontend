import { useMutation } from '@apollo/client';
import { closeAssetAccountMutation } from '../mutations';
import { 
  CloseAssetAccount, 
  CloseAssetAccountVariables 
} from '../types/CloseAssetAccount';

const useCloseAssetAccount = (onCompleted?: (data: CloseAssetAccount) => void) => {
  const [closeAssetAccount, options] = useMutation<
    CloseAssetAccount,
    CloseAssetAccountVariables
  >(closeAssetAccountMutation, {
    onCompleted: (data) => {
      onCompleted && onCompleted(data);
    },
  });

  return {
    closeAssetAccount,
    options,
  };
};

export default useCloseAssetAccount;