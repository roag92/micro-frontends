import {AxiosInstance } from 'axios';

import { IResultItem } from '../models/response';

import Request from '../models/request';
import Payload from '../models/payload';

export default class Checkout extends Request {
    constructor(client: AxiosInstance, private url: string) {
        super(client);
    }

    public getCheckout(): Promise<IResultItem> {
        return this.do(
            new Payload(
                `${this.url}batch`,
                'Checkout',
                null
            )
        );
    }
}
