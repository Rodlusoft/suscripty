import { createNewGroup } from "../firebase/documents/groups";
import IGroup, { IGroupResponse } from "../interfaces/groups";
import IService from "../interfaces/service";

class Group implements IGroup {
  creatorId: string;
  nextPay: number;
  suscriptionPrice: number;
  service: IService;
  maxCoSuscriptors: number;
  id?: string;
  coSuscriptorsId?: [string];

  constructor(
    creatorId: string,
    suscriptionPrice: number,
    service: IService,
    maxCoSuscriptors: number
  ) {
    this.creatorId = creatorId;
    this.suscriptionPrice = suscriptionPrice;
    this.service = service;
    this.maxCoSuscriptors = maxCoSuscriptors;
  }
}

export const addNewGroup: (group: Group) => Promise<IGroupResponse> = async (
  group
) => {
  const groupToFirebase = {
    creatorId: group.creatorId,
    service: group.service,
  }
  return await createNewGroup(groupToFirebase);
};

export default Group;
