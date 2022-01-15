interface IService {
  totalPrice: number;
  pricePerUser: number;
  service: ServicesType;
  maxCoSuscriptors: number;
}

// this will be an ID ¯\_(ツ)_/¯
export enum ServicesType {
  netflix =  "NETFLIX",
  crunchyRoll = "CRUNCHY_ROLL",
  disney = "DISNEY",
}

export default IService
