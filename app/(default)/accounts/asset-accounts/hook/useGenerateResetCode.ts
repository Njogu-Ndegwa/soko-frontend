import { useMutation } from '@apollo/client';
import { generateResetCodeMutation } from '../mutations';
import {
  GenerateResetCode,
  GenerateResetCodeVariables
} from '../types/GenerateResetCode';

const useGenerateResetCode = (onCompleted?: (data: GenerateResetCode) => void) => {
  const [generateResetCode, options] = useMutation<
    GenerateResetCode,
    GenerateResetCodeVariables
  >(generateResetCodeMutation, {
    onCompleted: (data) => {
      onCompleted && onCompleted(data);
    },
  });

  return {
    generateResetCode,
    options,
  };
};

export default useGenerateResetCode;