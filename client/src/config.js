const getBackendHost = () => {
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
const isProd = import.meta.env.PROD || (typeof window !== "undefined" && window.location.hostname.includes("vercel.app"));
export const API_URL = isProd
  ? "/api"
  : (import.meta.env.VITE_API_URL || `${backendHost}/api`);
export const API_URL = import.meta.env.VITE_API_URL || (isProd ? "/api" : `${getBackendHost()}/api`);
export const SOCKET_URL = isProd
  ? ""
  : (import.meta.env.VITE_SOCKET_URL || backendHost);
export const SOCKET_URL = import.meta.env.VITE_SOCKET_URL || (isProd ? "" : getBackendHost());

