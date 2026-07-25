import { useMutation } from '@tanstack/react-query';
import { Api } from "../../lib/api";

export interface IApplicationPayload {
  name: string;
  mobile: string;
  email: string;
  position: string;
  qualification: string;
  experience: string;
  coverLetter: string;
  resume: File | null;
}

export const useSubmitApplication = () => {
  return useMutation({
    mutationFn: async (payload: IApplicationPayload) => {
      try {
        // Since we are sending a file, we must use FormData, not standard JSON
        const formData = new FormData();
        // Append text fields and file explicitly
        Object.entries(payload).forEach(([key, value]) => {
          if (value !== null && value !== undefined && key !== 'resume') {
            formData.append(key, value as string);
          }
        });

        // 👈 Explicitly append the resume file using the exact field name multer expects ('resume')
        if (payload.resume instanceof File) {
          formData.append('resume', payload.resume);
        }

        const { data } = await Api.post('/api/careers/apply', formData, {
          headers: { 'Content-Type': undefined }, // let the browser set the correct multipart boundary
        });

        // const { data } = await Api.post('/api/careers/apply', formData, {
        //   headers: { 'Content-Type': 'multipart/form-data' }
        // });

        if (!data.ok) throw new Error(data.message || 'Failed to submit application');
        return data;
      } catch (err: any) {
        const errorMessage = err.response?.data?.message || err.message || 'An error occurred while submitting.';
        throw new Error(errorMessage, { cause: err });
      }
    }
  });
};