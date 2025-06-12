import { useMutation } from '@apollo/client';
import { deletePersonMutation } from '../mutations';
import {
  DeletePerson,
  DeletePersonVariables,
} from '../types/DeletePerson';

const useDeletePerson = (onCompleted: (data: any) => void) => {
  const [deletePerson, options] = useMutation<
    DeletePerson,
    DeletePersonVariables
  >(deletePersonMutation, {
    onCompleted: async (data) => {
      onCompleted && onCompleted(data);
    },
  });

  return {
    deletePerson,
    options,
  };
};

export default useDeletePerson;