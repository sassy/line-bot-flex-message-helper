import { PostbackAction } from '../src/action';

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
    })
})