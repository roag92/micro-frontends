export default class Payload {
    private url: string;
    private name: string;
    private key: string;
    private data?: any;

    constructor(
        url: string,
        name: string,
        data?: any
    ) {
        this.url = url;
        this.name = name;
        this.key = this.name.toLowerCase();
        this.data = data;
    }

    public getUrl(): string {
        return this.url;
    }

    public getKey(): string {
        return this.key;
    }

    public buildPayload(): any {
        const data: any = {};

        data[this.key] = {
            name: this.name,
            data: this.data || null
        };

        return data
    }
}