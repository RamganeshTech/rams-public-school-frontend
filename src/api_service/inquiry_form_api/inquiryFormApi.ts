import { useMutation } from '@tanstack/react-query';
import { Api } from "../../lib/api"; 
// Assuming you might want to invalidate an admin dashboard query later
// import { queryClient } from "../../lib/queryClient"; 

export interface IInquiryPayload {
  name: string;
  mobile: string;
  email?: string; // Optional
  grade: string;
  inquiryType: string;
  message: string;
}

export const useSubmitInquiry = () => {
  return useMutation({
    mutationFn: async (payload: IInquiryPayload) => {
      try {
        const { data } = await Api.post('/api/inquiries', payload);
        
        if (!data.ok) throw new Error(data.message || 'Failed to submit inquiry');
        return data;
      } catch (error:any) {
        const errorMessage = error.response?.data?.message || error.message || 'An error occurred while submitting.';
        throw new Error(errorMessage, {cause: error});
      }
    },
    onSuccess: () => {
      // If this is used inside an admin panel later, you can invalidate the list.
    //   queryClient.invalidateQueries({ queryKey: ['inquiries'] });
    },
  });
};