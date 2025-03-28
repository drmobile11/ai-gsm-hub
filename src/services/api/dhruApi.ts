
import axios from 'axios';

// Define the base API URL
const API_BASE_URL = 'https://api.example.com/';  // Replace with your actual API URL

// Create API instance
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for authentication
apiClient.interceptors.request.use((config) => {
  // Add API credentials
  config.data = {
    ...config.data,
    username: 'your_username',  // Replace with environment variable or secure storage
    apiaccesskey: 'your-api-access-key',  // Replace with environment variable or secure storage
  };
  
  return config;
});

// API Service functions
export const dhruApi = {
  // Account
  getAccountInfo: async () => {
    const response = await apiClient.post('/api/index.php', {
      action: 'accountinfo',
    });
    return response.data;
  },
  
  // IMEI Services
  getImeiServiceList: async () => {
    const response = await apiClient.post('/api/index.php', {
      action: 'imeiservicelist',
    });
    return response.data;
  },
  
  getImeiServiceDetails: async (serviceId: string) => {
    const response = await apiClient.post('/api/index.php', {
      action: 'imeiservicedetails',
      parameters: { id: serviceId }
    });
    return response.data;
  },
  
  placeImeiOrder: async (serviceId: string, imei: string, model?: string, carrier?: string, notes?: string) => {
    const response = await apiClient.post('/api/index.php', {
      action: 'placeimeiorder',
      parameters: {
        service_id: serviceId,
        imei,
        model,
        carrier,
        notes
      }
    });
    return response.data;
  },
  
  getImeiOrder: async (orderId: string) => {
    const response = await apiClient.post('/api/index.php', {
      action: 'getimeiorder',
      parameters: { id: orderId }
    });
    return response.data;
  },
  
  // File Services
  getFileServiceList: async () => {
    const response = await apiClient.post('/api/index.php', {
      action: 'fileservicelist',
    });
    return response.data;
  },
  
  placeFileOrder: async (serviceId: string, file: string, filename: string, notes?: string) => {
    const response = await apiClient.post('/api/index.php', {
      action: 'placefileorder',
      parameters: {
        service_id: serviceId,
        file,
        filename,
        notes
      }
    });
    return response.data;
  },
  
  getFileOrder: async (orderId: string) => {
    const response = await apiClient.post('/api/index.php', {
      action: 'getfileorder',
      parameters: { id: orderId }
    });
    return response.data;
  },
  
  // Provider Information
  getProviderList: async () => {
    const response = await apiClient.post('/api/index.php', {
      action: 'providerlist',
    });
    return response.data;
  },
  
  getModelList: async () => {
    const response = await apiClient.post('/api/index.php', {
      action: 'modellist',
    });
    return response.data;
  },
};

export default dhruApi;
