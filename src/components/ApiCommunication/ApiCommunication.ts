import { IProductsResponse, IOrderData, IOrderResponse } from "../../types/index"
import { Api } from "../base/Api"
import { IApi, ApiPostMethods } from "../../types/index"


export class ApiCommunication {

    private api: IApi;
    constructor(api: IApi) {
        this.api = api;
    }

    async getApi(): Promise<IProductsResponse> {
        return await this.api.get<IProductsResponse>("/product");
    }
    async postApi(data: IOrderData): Promise<IOrderResponse> {
        return await this.api.post<IOrderResponse>("/order", data, 'POST');
    }

} 
