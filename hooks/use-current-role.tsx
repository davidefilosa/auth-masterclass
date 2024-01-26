import { useSession } from "next-auth/react";

export const useCurrentRole = () => {
  const session = useSession();
  const user = session.data?.user.role;
  return user;
};
