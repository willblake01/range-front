import { format } from 'date-fns';

const formatOrderDate = (createdAt) => {
  if (!createdAt) return '';

  const ms = Number(createdAt);
  
  if (!Number.isFinite(ms)) return '';
  return format(new Date(ms), 'M/d/yyyy');
};

export { formatOrderDate };
