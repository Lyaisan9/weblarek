import {IApiGet, IApiPost} from "../../types/index"
import {Api} from "./Api"
import {IApi, ApiPostMethods} from "../../types/index"


export class ApiCommunication {

   api: Api;
     constructor(api: Api){ 
        this.api = api;
     }

    async getApi(): Promise<IApiGet> {
        return await  this.api.get<IApiGet>("/product");
  }
     async postApi(data: IApiPost) {
         return await this.api.post<IApiPost[]>("/order", data, 'POST');
  }

} 
 