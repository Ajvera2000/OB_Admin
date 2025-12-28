// src/features/users/types/user.types.ts

export type UserStatus = 'active' | 'blocked' | 'inactive';

export interface User {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  status: UserStatus;
  createdAt: string;
}
