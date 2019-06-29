import { Client, Box, BubbleConteiner} from '../src/client';

describe('test', () => {
    it ('test', () => {
        const container = new BubbleConteiner();
        const textBox = new Box('vertical').addContent({
            type: 'text',
            text: 'Hello,World'
        });
        container.setBodyBlock(textBox)

        const ret = Client.Helper().setContainerType(container).dump();
        expect(ret).toEqual(
            '{"type":"bubble",'
            + '"body":{'
            + '"type":"box",'
            + '"layout":"vertical",'
            + '"contents":[{"type":"text","text":"Hello,World"}]}}'
            );
    })


});