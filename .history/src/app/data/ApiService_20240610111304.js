// API.js - Axios setup for all API calls with common headers.

import axios from 'axios';

class ApiService {
  constructor() {
    const apiKey = "test123"; // Set your API key
    const tenantId = "PYTHONMAN"; // Set your tenant ID

    // Create an Axios instance
    this.client = axios.create({
      baseURL: 'https://api.example.com', // Set the base URL for all requests
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': apiKey,
        'Tenant-ID': tenantId,
      }
    });

    // Set up response and request interceptors if needed
    this.client.interceptors.response.use(this.handleSuccess, this.handleError);
    this.client.interceptors.request.use(request => {
      // You can modify the request here (e.g., append additional headers)
      return request;
    });
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    // Handle errors (e.g., logging or sending error reports to a service)
    return Promise.reject(error);
  }

  fetchData(url) {
    return this.client.get(url);
  }

  postData(url, data) {
    return this.client.post(url, data);
  }
}

export const apiService = new ApiService(); // Export an instance to be used across the application
