import IService from "./service";

interface IGroup {
  coSuscriptors: [string];
  creatorId: string;
  service: IService;
  suscriptionPrice: number;
  nextPay: number;
}

export default IGroup;
