import {AxiosInstance, AxiosResponse } from 'axios';

import { IResultItem } from './../models/response';

import Request from '../models/request';
import Payload from '../models/payload';
import { IProduct } from '../models/product';

export default class Catalog extends Request {
    constructor(client: AxiosInstance, private url: string) {
        super(client);
    }

    public async getCatalog(): Promise<IResultItem> {
        const products = await this.getProducts();

        return this.do(
            new Payload(
                `${this.url}batch`,
                'Catalog',
                { products }
            )
        );
    }

    private getProducts(): Promise<IProduct[]> {
        return this.client.get(
            `${this.url}getProducts`,
        ).then((data: AxiosResponse) => {
            return data.data as IProduct[];
        }).catch((err: any) => {
            return [];
        });
    }
}
