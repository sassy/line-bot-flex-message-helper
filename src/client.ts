export type ContainerType = 'bubble' | 'carousel'

class Helper {
    json: any;

    constructor() {
        this.json = {};
    }

    public dump() : string {
        return JSON.stringify(this.json);
    }

    public setContainerType(type: ContainerType): this {
        this.json['type'] = type;
        return this;
    }

}

export default class Client {
    public static Helper(): Helper {
        return new Helper();
    }
}