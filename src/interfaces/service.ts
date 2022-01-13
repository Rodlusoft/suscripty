interface IService {
  totalPrice: number;
  pricePerUser: number;
  service: ServicesType;
}

// this will be an ID ¯\_(ツ)_/¯
export enum ServicesType {
  netflix =  "EMAIL",
  crunchyRoll = "GOOGLE",
  disney = "FACEBOOK",
}

export default IService
