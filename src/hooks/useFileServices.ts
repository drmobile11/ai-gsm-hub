
import { useQuery, useMutation } from '@tanstack/react-query';
import dhruApi from '@/services/api/dhruApi';
import { toast } from '@/hooks/use-toast';

export function useFileServices() {
  const fetchFileServices = useQuery({
    queryKey: ['fileServices'],
    queryFn: dhruApi.getFileServiceList,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  return {
    isLoading: fetchFileServices.isLoading,
    isError: fetchFileServices.isError,
    services: fetchFileServices.data?.data?.services || [],
    refetch: fetchFileServices.refetch,
  };
}

export function useFileOrder() {
  const placeFileOrderMutation = useMutation({
    mutationFn: (params: { 
      serviceId: string; 
      file: string; 
      filename: string;
      notes?: string;
    }) => {
      return dhruApi.placeFileOrder(
        params.serviceId, 
        params.file, 
        params.filename, 
        params.notes
      );
    },
    onSuccess: (data) => {
      if (data.status === 'success') {
        toast({
          title: 'File Order Placed Successfully',
          description: `Order ID: ${data.data.order_id}`,
        });
      } else {
        toast({
          title: 'Order Failed',
          description: data.message,
          variant: 'destructive',
        });
      }
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: 'Failed to place file order. Please try again.',
        variant: 'destructive',
      });
    }
  });

  return {
    placeFileOrder: placeFileOrderMutation.mutate,
    isPlacingOrder: placeFileOrderMutation.isPending,
    orderData: placeFileOrderMutation.data?.data,
    error: placeFileOrderMutation.error,
  };
}
