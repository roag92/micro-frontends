import {AxiosInstance, AxiosResponse} from 'axios';

import { ResponseInterface, ResultItemInterface } from './response';
import Payload from './payload';

export default class Request {
    constructor(protected client: AxiosInstance) {}

    do(payload: Payload): Promise<ResultItemInterface> {
        return this.client.post(
            payload.getUrl(),
            payload.buildPayload()
        ).then((data: AxiosResponse) => {
            let response = <ResponseInterface>data.data;

            return response.results[payload.getKey()];
        }).catch((err: any) => {
            return null;
        });
    }
}
