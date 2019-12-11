import {AxiosInstance, AxiosResponse} from 'axios';

import { IResponse, IResultItem } from './response';
import Payload from './payload';

export default class Request {
    constructor(protected client: AxiosInstance) {}

    public do(payload: Payload): Promise<IResultItem> {
        return this.client.post(
            payload.getUrl(),
            payload.buildPayload()
        ).then((data: AxiosResponse) => {
            const response = data.data as IResponse;

            return response.results[payload.getKey()];
        }).catch((err: any) => {
            return null;
        });
    }
}
