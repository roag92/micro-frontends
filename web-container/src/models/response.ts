import { IDictionary } from '../utils/dictionary';

export interface IResultItem {
    name: string,
    html: string,
    meta: any,
    duration: number,
    statusCode: number,
    errror?: any
}

export interface IResults extends IDictionary {
    [key: string]: IResultItem;
}

export interface IResponse {
    success: boolean,
    error: any|null,
    results: IResults
}
