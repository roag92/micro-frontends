import {AxiosInstance, AxiosResponse} from 'axios';

import { ResponseInterface, ResultItemInterface } from './response';
import Payload from './payload';

export default class Request {
    constructor(private client: AxiosInstance) {}

    do(payload: Payload): Promise<ResultItemInterface> {
        return this.client.post(
            payload.getUrl(),
            payload.buildPayload()
        ).then((data: AxiosResponse) => {
            let response = <ResponseInterface>data.data;

            console.log(response.results);

            return response.results[payload.getKey()];
        })
    }
}
