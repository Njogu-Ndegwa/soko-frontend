import { useMutation } from '@apollo/client';
import { updatePersonMutation } from '../mutations';
import {
  UpdatePerson,
  UpdatePersonVariables,
} from '../types/UpdatePerson';

const useUpdatePerson = (onCompleted: (data: any) => void) => {
  const [updatePerson, options] = useMutation<
    UpdatePerson,
    UpdatePersonVariables
  >(updatePersonMutation, {
    onCompleted: async (data) => {
      onCompleted && onCompleted(data);
    },
  });

  return {
    updatePerson,
    options,
  };
};

export default useUpdatePerson;