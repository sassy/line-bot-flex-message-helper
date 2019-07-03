import { PostbackAction, MessageAction, URIAction, CameraAction, CameraRollAction, LocationAction } from '../src/action';

describe('test', () => {
    it ('postback action', () => {
        const action = new PostbackAction('Buy', 'action=buy&itemid=111');
        action.displayText = "Buy"
        
        const ret = action.dump();
        expect(ret).toEqual('{' 
        +'"type":"postback",'
        +'"label":"Buy",'
        +'"data":"action=buy&itemid=111",'
        +'"displayText":"Buy"'
        +'}');
    });

    it ('message action', () => {
        const action = new MessageAction('Yes', 'Yes');
        
        const ret = action.dump();
        expect(ret).toEqual('{' 
        +'"type":"message",'
        +'"label":"Yes",'
        +'"text":"Yes"'
        +'}');
    });

    it ('uri action', () => {
        const action = new URIAction('View details', 'http://example.com/page/222');
        action.altUriDesktop = 'http://example.com/pc/page/222';
        
        const ret = action.dump();
        expect(ret).toEqual('{' 
        +'"type":"uri",'
        +'"label":"View details",'
        +'"uri":"http://example.com/page/222",'
        +'"altUri":{"desktop":"http://example.com/pc/page/222"}'
        +'}');
    });

    it ('camera action', () => {
        const action = new CameraAction('Camera');
        
        const ret = action.dump();
        expect(ret).toEqual('{' 
        +'"type":"camera",'
        +'"label":"Camera"'
        +'}');
    });

    it ('cameraRoll action', () => {
        const action = new CameraRollAction('Camera roll');
        
        const ret = action.dump();
        expect(ret).toEqual('{' 
        +'"type":"cameraRoll",'
        +'"label":"Camera roll"'
        +'}');
    });

    it ('location action', () => {
        const action = new LocationAction('Location');
        
        const ret = action.dump();
        expect(ret).toEqual('{' 
        +'"type":"location",'
        +'"label":"Location"'
        +'}');
    });
})