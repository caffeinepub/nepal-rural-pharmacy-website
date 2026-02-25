import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useSubmitInquiry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      name,
      phone,
      address,
      message,
    }: {
      name: string;
      phone: string;
      address: string;
      message: string;
    }) => {
      if (!actor) throw new Error('Backend not available');
      await actor.submitInquiry(name, phone, address, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['inquiries'] });
    },
  });
}

export function useGetInquiries() {
  const { actor, isFetching } = useActor();

  return useQuery({
    queryKey: ['inquiries'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getInquiries();
    },
    enabled: !!actor && !isFetching,
  });
}
