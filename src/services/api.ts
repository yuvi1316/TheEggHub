const API_URL = 'http://localhost:5000/api';

export const authApi = {
  login: async (email: string, password: string) => {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) throw new Error('Login failed');
    return response.json();
  },

  signup: async (name: string, email: string, password: string) => {
    const response = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });
    if (!response.ok) throw new Error('Signup failed');
    return response.json();
  },

  getUser: async (token: string) => {
    const response = await fetch(`${API_URL}/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) throw new Error('Failed to fetch user');
    return response.json();
  },
};

export const orderApi = {
  createOrder: async (userId: number, total: number, items: any[]) => {
    const response = await fetch(`${API_URL}/create-order`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: userId, total_amount: total, items }),
    });
    if (!response.ok) throw new Error('Failed to create order');
    return response.json();
  },
};