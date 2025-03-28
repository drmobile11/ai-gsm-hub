
import { useQuery, useMutation } from '@tanstack/react-query';
import dhruApi from '@/services/api/dhruApi';
import { toast } from '@/hooks/use-toast';

export function useImeiServices() {
  const fetchImeiServices = useQuery({
    queryKey: ['imeiServices'],
    queryFn: dhruApi.getImeiServiceList,
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  return {
    isLoading: fetchImeiServices.isLoading,
    isError: fetchImeiServices.isError,
    services: fetchImeiServices.data?.data?.services || [],
    refetch: fetchImeiServices.refetch,
  };
}

export function useImeiServiceDetails(serviceId: string | undefined) {
  const fetchServiceDetails = useQuery({
    queryKey: ['imeiService', serviceId],
    queryFn: () => dhruApi.getImeiServiceDetails(serviceId!),
    enabled: !!serviceId,
  });

  return {
    isLoading: fetchServiceDetails.isLoading,
    isError: fetchServiceDetails.isError,
    service: fetchServiceDetails.data?.data,
  };
}

export function useImeiOrder() {
  const placeOrderMutation = useMutation({
    mutationFn: (params: { 
      serviceId: string; 
      imei: string; 
      model?: string; 
      carrier?: string; 
      notes?: string;
    }) => {
      return dhruApi.placeImeiOrder(
        params.serviceId, 
        params.imei, 
        params.model, 
        params.carrier, 
        params.notes
      );
    },
    onSuccess: (data) => {
      if (data.status === 'success') {
        toast({
          title: 'Order Placed Successfully',
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
        description: 'Failed to place order. Please try again.',
        variant: 'destructive',
      });
    }
  });

  return {
    placeOrder: placeOrderMutation.mutate,
    isPlacingOrder: placeOrderMutation.isPending,
    orderData: placeOrderMutation.data?.data,
    error: placeOrderMutation.error,
  };
}
