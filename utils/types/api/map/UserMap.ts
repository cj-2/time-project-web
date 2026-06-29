export type UserMap = {
  userId: number;
  name: string;
  email: string;
  isActive: boolean;
  isAdmin: boolean;
  userRoleLabel: string;
  createdAt: string;

  lastUserAccess: string | null;
  lastUserAccessType: string | null;
  lastUserAccessProvider: string | null;
};
