import { useMutation } from '@apollo/client';
import { generateFreeCodeMutation } from '../mutations';
import {
  GenerateFreeCode,
  GenerateFreeCodeVariables
} from '../types/GenerateFreeCode';

const useGenerateFreeCode = (onCompleted?: (data: GenerateFreeCode) => void) => {
  const [generateFreeCode, options] = useMutation<
    GenerateFreeCode,
    GenerateFreeCodeVariables
  >(generateFreeCodeMutation, {
    onCompleted: (data) => {
      onCompleted && onCompleted(data);
    },
  });

  return {
    generateFreeCode,
    options,
  };
};

export default useGenerateFreeCode;