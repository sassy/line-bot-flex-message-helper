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

type MessageJson = {
    type: string;
    label: string;
    text: string;
}

export class MessageAction {
    json: MessageJson;

    constructor(label:string, text: string) {
        this.json = {
            type: 'message',
            label: label,
            text: text,
        }
    }

    public dump(): string {
        return JSON.stringify(this.json);
    }
}

type URIJson = {
    type: string;
    label: string;
    uri: string;
    altUri?: {
        desktop: string;
    }
}

export class URIAction {
    json: URIJson;

    constructor(label:string, uri: string) {
        this.json = {
            type: 'uri',
            label: label,
            uri: uri,
        }
    }

    set altUriDesktop(uri: string) {
        this.json.altUri = {desktop : uri};
    }
    
    public dump(): string {
        return JSON.stringify(this.json);
    }
}


type CameraJson = {
    type: string;
    label: string;
}

export class CameraAction {
    json: CameraJson;

    constructor(label:string) {
        this.json = {
            type: 'camera',
            label: label
        }
    }
    
    public dump(): string {
        return JSON.stringify(this.json);
    }
}

export class CameraRollAction {
    json: CameraJson;

    constructor(label:string) {
        this.json = {
            type: 'cameraRoll',
            label: label
        }
    }
    
    public dump(): string {
        return JSON.stringify(this.json);
    }
}

type LocationJson = {
    type: string;
    label: string;
}

export class LocationAction {
    json: LocationJson;

    constructor(label:string) {
        this.json = {
            type: 'location',
            label: label
        }
    }
    
    public dump(): string {
        return JSON.stringify(this.json);
    }
}