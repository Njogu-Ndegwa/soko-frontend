import { useMutation } from '@apollo/client';
import { distributorIncreaseResetCodeCountForItemMutation } from '../mutations';
import {
  DistributorIncreaseResetCodeCountForItem,
  DistributorIncreaseResetCodeCountForItemVariables
} from '../types/DistributorIncreaseResetCodeCountForItem';

const useDistributorIncreaseResetCodeCountForItem = (
  onCompleted?: (data: DistributorIncreaseResetCodeCountForItem) => void
) => {
  const [distributorIncreaseResetCodeCountForItem, options] = useMutation<
    DistributorIncreaseResetCodeCountForItem,
    DistributorIncreaseResetCodeCountForItemVariables
  >(distributorIncreaseResetCodeCountForItemMutation, {
    onCompleted: (data) => {
      onCompleted && onCompleted(data);
    },
  });

  return {
    distributorIncreaseResetCodeCountForItem,
    options,
  };
};

export default useDistributorIncreaseResetCodeCountForItem;