const hasPermission = (user, permissionNeeded) =>
  user?.permissions?.includes(permissionNeeded);

export { hasPermission };
