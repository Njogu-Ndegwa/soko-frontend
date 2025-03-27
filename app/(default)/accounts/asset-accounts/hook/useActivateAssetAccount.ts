import { useMutation } from '@apollo/client';
import { activateAssetAccountMutation } from '../mutations';
import { 
  ActivateAssetAccount, 
  ActivateAssetAccountVariables 
} from '../types/ActivateAssetAccount';

const useActivateAssetAccount = (onCompleted?: (data: ActivateAssetAccount) => void) => {
  const [activateAssetAccount, options] = useMutation<
    ActivateAssetAccount,
    ActivateAssetAccountVariables
  >(activateAssetAccountMutation, {
    onCompleted: (data) => {
      onCompleted && onCompleted(data);
    },
  });

  return {
    activateAssetAccount,
    options,
  };
};

export default useActivateAssetAccount;