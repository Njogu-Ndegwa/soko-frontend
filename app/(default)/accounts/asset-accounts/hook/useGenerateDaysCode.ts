import { useMutation } from '@apollo/client';
import { generateDaysCodeMutation } from '../mutations';
import {
  GenerateDaysCode,
  GenerateDaysCodeVariables
} from '../types/GenerateDaysCode';

const useGenerateDaysCode = (onCompleted?: (data: GenerateDaysCode) => void) => {
  const [generateDaysCode, options] = useMutation<
    GenerateDaysCode,
    GenerateDaysCodeVariables
  >(generateDaysCodeMutation, {
    onCompleted: (data) => {
      onCompleted && onCompleted(data);
    },
  });

  return {
    generateDaysCode,
    options,
  };
};

export default useGenerateDaysCode;