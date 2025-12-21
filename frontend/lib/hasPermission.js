export const hasPermission = (user, permissionNeeded) =>
  user?.permissions?.includes(permissionNeeded);
