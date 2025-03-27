import { useMutation } from '@apollo/client';
import { updateAssetAccountMutation } from '../mutations';
import { 
  UpdateAssetAccount, 
  UpdateAssetAccountVariables 
} from '../types/UpdateAssetAccount';

const useUpdateAssetAccount = (onCompleted?: (data: UpdateAssetAccount) => void) => {
  const [updateAssetAccount, options] = useMutation<
    UpdateAssetAccount,
    UpdateAssetAccountVariables
  >(updateAssetAccountMutation, {
    onCompleted: (data) => {
      onCompleted && onCompleted(data);
    },
  });

  return {
    updateAssetAccount,
    options,
  };
};

export default useUpdateAssetAccount;