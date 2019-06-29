export type ContainerType = 'bubble' | 'carousel';
export type BoxLayout = 'horizontal' | 'vertical' | 'baseline';


interface ContentBase {
    type: string;
}

export interface TextContent extends ContentBase {
    text: string,
    size?: string,
    align?: string,
    color?: string,
}

export class Box {
    json:any;

    constructor(boxLayout: BoxLayout) {
        this.json = {
            type: "box",
            layout: boxLayout,
            contents: []
        };
    }

    public addContent(content: TextContent): this {
        this.json['contents'].push(content);
        return this;
    }
}

interface ContainerBase {
    json: any
}

export class BubbleConteiner implements ContainerBase {
    public json: any;
    constructor() {
        this.json = {
            type: 'bubble'
        }
    }

    public setHeaderBlock() {
        // TODO
    }

    public setHeroBlock() {
        // TODO
    }

    public setBodyBlock(box: Box): this {
        this.json['body'] = box.json;
        return this;
    }

    public setFooterBlock() {
        //TODO
    }
}

class CarouselContainer implements ContainerBase {
    public json: any;
}

class Helper {
    json: any;

    constructor() {
        this.json = {};
    }

    public dump() : string {
        return JSON.stringify(this.json);
    }

    public setContainerType(container: BubbleConteiner | CarouselContainer): this {
        this.json = container.json;
        return this;
    }

}

export class Client {
    public static Helper(): Helper {
        return new Helper();
    }
}