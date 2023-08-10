type Role = "Administrator" | "Standard";

type Status = "request" | "pending" | "approved" | "declined" | "invited";

interface UserShortData {
  id: number;
  name: string;
  phone: string;
  email: string;
}

interface TeamMember {
  id: number;
  status: Status;
  user: UserShortData;
  role: Role;
}

interface Invite {
  id: number;
  phone:string;
  role: Role;
}

interface InvitesState {
  invites: Invite[];
  error: string | null;
}

interface UserState {
  users: TeamMember[];
  error: string | null;
}

export type {
  Role,
  Status,
  TeamMember, 
  Invite,
  UserState,
  InvitesState,
}