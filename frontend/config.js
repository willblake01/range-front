// Use environment variable in production, fallback to localhost in development
export const endpoint = process.env.NEXT_PUBLIC_BACKEND_URL || `http://localhost:4444`;
export const perPage = 12;
