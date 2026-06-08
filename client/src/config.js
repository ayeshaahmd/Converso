const getBackendHost = () => {
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    
    // In production builds or on Vercel, use relative paths to let Vercel handle routing
    if (import.meta.env.PROD || (hostname && hostname.includes("vercel.app"))) {
      return "";
    }
    
    // If the client is accessed via a local network IP or custom hostname, use it
    if (hostname && hostname !== "localhost" && hostname !== "127.0.0.1") {
      return `http://${hostname}:5001`;
    }
  }
  return "http://localhost:5001";
};

const isProd = import.meta.env.PROD || (typeof window !== "undefined" && window.location.hostname.includes("vercel.app"));

export const API_URL = isProd
  ? "/api"
  : (import.meta.env.VITE_API_URL || `${backendHost}/api`);

export const SOCKET_URL = isProd
  ? ""
  : (import.meta.env.VITE_SOCKET_URL || backendHost);
