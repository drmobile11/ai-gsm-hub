
// This is a mock API service that can be easily replaced with real API calls in production

// Types
export interface Service {
  id: string;
  name: string;
  category: 'imei' | 'server' | 'remote' | 'file';
  description: string;
  price: number;
  discountPrice?: number;
  processingTime: string;
  compatibility: string[];
  success_rate: number;
  popular: boolean;
}

export interface Order {
  id: string;
  service: string;
  status: 'Pending' | 'Processing' | 'Complete' | 'Failed';
  date: string;
  price: number;
  details: Record<string, string>;
}

export interface User {
  id: string;
  name: string;
  email: string;
  credits: number;
  orders: Order[];
}

export interface Reseller {
  id: string;
  name: string;
  businessName: string;
  username: string;
  email: string;
  credits: number;
  customers: number;
  discountRate: number;
  orders: Order[];
}

// Mock data
const mockServices: Service[] = [
  {
    id: 'imei-1',
    name: 'iPhone Network Unlock',
    category: 'imei',
    description: 'Permanent factory unlock for all iPhone models. Works with all carriers worldwide.',
    price: 29.99,
    discountPrice: 24.99,
    processingTime: '1-3 days',
    compatibility: ['iPhone 14', 'iPhone 13', 'iPhone 12', 'iPhone 11', 'iPhone X', 'iPhone 8'],
    success_rate: 98,
    popular: true
  },
  {
    id: 'imei-2',
    name: 'Samsung Network Unlock',
    category: 'imei',
    description: 'Official carrier unlock for all Samsung Galaxy models.',
    price: 19.99,
    processingTime: '1-2 days',
    compatibility: ['Galaxy S23', 'Galaxy S22', 'Galaxy S21', 'Galaxy Note'],
    success_rate: 95,
    popular: true
  },
  {
    id: 'server-1',
    name: 'iCloud Activation Bypass',
    category: 'server',
    description: 'Bypass iCloud activation lock on locked iOS devices.',
    price: 39.99,
    processingTime: '2-4 days',
    compatibility: ['iPhone', 'iPad', 'iOS 15+'],
    success_rate: 90,
    popular: true
  },
  {
    id: 'remote-1',
    name: 'Android Remote Unlock',
    category: 'remote',
    description: 'Live technician assistance to unlock your Android device remotely.',
    price: 15.99,
    processingTime: 'Same day',
    compatibility: ['All Android devices'],
    success_rate: 99,
    popular: false
  },
  {
    id: 'file-1',
    name: 'Unlock Code Calculator',
    category: 'file',
    description: 'Software to calculate unlock codes for various phone models.',
    price: 9.99,
    processingTime: 'Instant',
    compatibility: ['Windows PC'],
    success_rate: 100,
    popular: false
  }
];

const mockOrders: Order[] = [
  {
    id: 'ORD-1234',
    service: 'iPhone 14 Unlock',
    status: 'Complete',
    date: '2023-12-10',
    price: 12.99,
    details: {
      imei: '123456789012345',
      carrier: 'AT&T'
    }
  },
  {
    id: 'ORD-1235',
    service: 'Samsung S22 Unlock',
    status: 'Processing',
    date: '2023-12-15',
    price: 15.50,
    details: {
      imei: '987654321098765',
      carrier: 'T-Mobile'
    }
  }
];

// Mock API functions
export const getServices = async (): Promise<Service[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockServices;
};

export const getServiceById = async (id: string): Promise<Service | null> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockServices.find(service => service.id === id) || null;
};

export const getServicesByCategory = async (category: string): Promise<Service[]> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockServices.filter(service => service.category === category);
};

export const getUserOrders = async (userId: string): Promise<Order[]> => {
  await new Promise(resolve => setTimeout(resolve, 700));
  return mockOrders;
};

export const placeOrder = async (
  serviceId: string, 
  details: Record<string, string>
): Promise<{ success: boolean; orderId?: string; message?: string }> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simulate successful order
  return {
    success: true,
    orderId: `ORD-${Math.floor(1000 + Math.random() * 9000)}`,
    message: 'Order placed successfully'
  };
};

export const addCredits = async (
  userId: string, 
  amount: number
): Promise<{ success: boolean; newBalance?: number; message?: string }> => {
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Simulate successful credit addition
  return {
    success: true,
    newBalance: 45.50 + amount,
    message: 'Credits added successfully'
  };
};

export const getUserProfile = async (): Promise<User> => {
  await new Promise(resolve => setTimeout(resolve, 600));
  
  return {
    id: 'user-123',
    name: 'John Doe',
    email: 'john.doe@example.com',
    credits: 45.50,
    orders: mockOrders
  };
};

export const getResellerProfile = async (): Promise<Reseller> => {
  await new Promise(resolve => setTimeout(resolve, 600));
  
  return {
    id: 'res-456',
    name: 'TechUnlock Solutions',
    businessName: 'TechUnlock LLC',
    username: 'techunlock',
    email: 'contact@techunlock.com',
    credits: 1850.75,
    customers: 24,
    discountRate: 15,
    orders: mockOrders
  };
};

// In production, replace these functions with actual API calls
// Example real API implementation:
/*
export const getServices = async (): Promise<Service[]> => {
  const response = await fetch('https://api.yourservice.com/services');
  if (!response.ok) {
    throw new Error('Failed to fetch services');
  }
  return response.json();
};
*/
