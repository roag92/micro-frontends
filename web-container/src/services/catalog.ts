import {AxiosInstance, AxiosResponse } from 'axios';

import { ResultItemInterface } from './../models/response';

import Request from '../models/request';
import Payload from '../models/payload';
import { ProductInterface } from '../models/product';

export default class Catalog extends Request {
    constructor(client: AxiosInstance, private url: string) {
        super(client);
    }

    async getCatalog(): Promise<ResultItemInterface> {
        let products = await this.getProducts();

        return this.do(
            new Payload(
                `${this.url}batch`,
                'Catalog',
                { products: products }
            )
        );
    }

    private getProducts(): Promise<ProductInterface[]> {
        return this.client.get(
            `${this.url}getProducts`,
        ).then((data: AxiosResponse) => {
            return <ProductInterface[]>data.data;
        }).catch((err: any) => {
            return [];
        });
    }
}
