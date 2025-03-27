import { useMutation } from '@apollo/client';
import { pairAssetAccountMutation } from '../mutations';
import { 
  PairAssetAccount, 
  PairAssetAccountVariables 
} from '../types/PairAssetAccount';

const usePairAssetAccount = (onCompleted: (data: any) => void) => {
  const [pairAssetAccount, options] = useMutation<
    PairAssetAccount,
    PairAssetAccountVariables
  >(pairAssetAccountMutation, {
    onCompleted: async (data) => {
      onCompleted && onCompleted(data);
    },
  });

  return {
    pairAssetAccount,
    options,
  };
};

export default usePairAssetAccount;