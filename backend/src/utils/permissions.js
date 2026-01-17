export const hasPermission = (user, permissionsNeeded = []) => {
  if (!user?.permissions?.length) return false;

  return permissionsNeeded.some((permission) =>
    user.permissions.includes(permission)
  );
}

export const assertPermission = (user, permissionsNeeded = []) => {
  if (!hasPermission(user, permissionsNeeded)) {
    throw new Error(
      `You do not have sufficient permissions.

Required:
${permissionsNeeded.join(', ')}

You have:
${user?.permissions?.join(', ') ?? 'none'}`
    );
  }
}
