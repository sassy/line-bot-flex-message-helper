import { Action } from './action';

export type ContainerType = 'bubble' | 'carousel';
export type BoxLayout = 'horizontal' | 'vertical' | 'baseline';


type TextJSON = {
    type: string;
    text: string,
    flex?: string,
    margin?: string,
    size?: string,
    align?: string,
    gravity?: string,
    wrap?: boolean,
    maxLines?: number,
    weight?: string,
    color?: string,
    action?: Action,
}

export class TextContent {
    json: TextJSON;

    constructor(text: string) {
        this.json = {
            type: 'text',
            text: text
        }
    }
    set flex(flex:string) {
        this.json['flex'] = flex;
    }
    set margin(margin:string) {
        this.json['margin'] = margin;
    }
    set size(size:string) {
        this.json['size'] = size;
    }
    set align(align:string) {
        this.json['align'] = align;
    }
    set gravity(gravity:string) {
        this.json['gravity'] = gravity;
    }
    set wrap(wrap:boolean) {
        this.json['wrap'] = wrap;
    }
    set maxLines(maxLines:number) {
        this.json['maxLines'] = maxLines;
    }
    set weight(weight:string) {
        this.json['weight'] = weight;
    }
    set color(color:string) {
        this.json['color'] = color;
    }
    set action(action:Action) {
        this.json['action'] = action;
    }
}



type ButtonJson = {
    type: string;
    action: Action;
    flex?: number;
    margin?: string;
    height?: string;
    style?: string;
    color?: string;
    gravity?: string;
}


export class Button {
    json: ButtonJson;

    constructor(action: Action) {
        this.json = {
            type: 'button',
            action: action
        }
    }
}

type BoxJson = {
    type: string;
    layout: string;
    contents: any[];
    flex?: number;
    spacing?: string;
    margin?: string;
    action?: any;
}

export class Box {
    json:BoxJson;

    constructor(boxLayout: BoxLayout) {
        this.json = {
            type: "box",
            layout: boxLayout,
            contents: []
        };
    }

    public addContent(content: Box | TextContent): this {
        this.json['contents'].push(content.json);
        return this;
    }
}

interface ContainerBase {
    json: any
}

type BubbleJson = {
    type: string;
    direction?: string;
    header?: object;
    hero?: object;
    body?: object;
    footer?: object;
    styles?: object;
}

export class BubbleContainer implements ContainerBase {
    public json: BubbleJson;
    constructor() {
        this.json = {
            type: 'bubble'
        }
    }

    public setHeaderBlock(box: Box) {
       this.json['header'] = box.json;
       return this;
    }

    public setHeroBlock() {
        // TODO
    }

    public setBodyBlock(box: Box): this {
        this.json['body'] = box.json;
        return this;
    }

    public setFooterBlock(box: Box) : this {
        this.json['footer'] = box.json;
        return this;
    }

    public setStyles() {
        //TODO
    }
}

type CaroucelJson = {
    type: string;
    contents: BubbleJson[];
}

export class CarouselContainer implements ContainerBase {
    public json: CaroucelJson;

    constructor() {
        this.json = {
            type: 'carousel',
            contents:[]
        }
    }

    public pushBubble(bubble: BubbleContainer): this {
        this.json['contents'].push(bubble.json);
        return this;
    }
}

class Helper {
    json: any;

    constructor() {
        this.json = {};
    }

    public dump() : string {
        return JSON.stringify(this.json);
    }

    public setContainerType(container: BubbleContainer | CarouselContainer): this {
        this.json = container.json;
        return this;
    }

}

export class Client {
    public static Helper(): Helper {
        return new Helper();
    }
}