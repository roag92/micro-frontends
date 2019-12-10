import {AxiosInstance } from 'axios';

import { ResultItemInterface } from './../models/response';

import Request from '../models/request';
import Payload from '../models/payload';

export default class Catalog extends Request {
    constructor(client: AxiosInstance, private url: string) {
        super(client);
    }

    getCatalog(): Promise<ResultItemInterface> {
        return this.do(new Payload(this.url, 'Catalog', null));
    }
}
