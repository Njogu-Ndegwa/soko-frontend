import { useMutation } from '@apollo/client';
import { distributorIncreaseFreeCodeCountForItemMutation } from '../mutations';
import {
  DistributorIncreaseFreeCodeCountForItem,
  DistributorIncreaseFreeCodeCountForItemVariables
} from '../types/DistributorIncreaseFreeCodeCountForItem';

const useDistributorIncreaseFreeCodeCountForItem = (
  onCompleted?: (data: DistributorIncreaseFreeCodeCountForItem) => void
) => {
  const [distributorIncreaseFreeCodeCountForItem, options] = useMutation<
    DistributorIncreaseFreeCodeCountForItem,
    DistributorIncreaseFreeCodeCountForItemVariables
  >(distributorIncreaseFreeCodeCountForItemMutation, {
    onCompleted: (data) => {
      onCompleted && onCompleted(data);
    },
  });

  return {
    distributorIncreaseFreeCodeCountForItem,
    options,
  };
};

export default useDistributorIncreaseFreeCodeCountForItem;