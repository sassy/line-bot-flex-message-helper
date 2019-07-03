type PostbackJson = {
    type: string;
    label: string;
    data: string;
    displayText?: string
}

export class PostbackAction {
    json: PostbackJson;

    constructor(label:string, data: string) {
        this.json = {
            type: 'postback',
            label: label,
            data: data,
        }
    }

    set displayText(text: string) {
        if (text.length > 300) {
            throw Error('Over text length');
        }
        this.json.displayText = text;
    }

    public dump(): string {
        return JSON.stringify(this.json);
    }
}
