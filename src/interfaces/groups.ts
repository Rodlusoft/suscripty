import IService from "./service";

interface IGroup {
  creatorId: string;
  service: IService;
  nextPay: number;
  id?: string;
  coSuscriptorsId?: [string];
}

export interface IGroupResponse {
  uid?: string;
  status: boolean
}

export default IGroup;
