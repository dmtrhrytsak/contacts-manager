export const formatUser = (user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
  };
};
