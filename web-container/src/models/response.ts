import { IDictionary } from '../utils/dictionary';

export interface ResultItemInterface {
    name: string,
    html: string,
    meta: any,
    duration: number,
    statusCode: number,
    errror?: any
}

export interface ResultInterface extends IDictionary {
    [key: string]: ResultItemInterface;
}

export interface ResponseInterface {
    success: boolean,
    error: any|null,
    results: ResultInterface
}
