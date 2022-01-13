import IGroup from "./groups";

interface IUser {
  id: string;
  username: string;
  email: string;
  avatar: any;
  suscriptionGroups?: [IGroup]
}

export default IUser;
