import { Client, Box, BubbleContainer, CarouselContainer} from '../src/client';

describe('test', () => {
    it ('bubble', () => {
        const container = new BubbleContainer();
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

    it ('carousel', () => {
        const container = new CarouselContainer();
        const box1 = new Box('vertical').addContent({
            type: 'text',
            text: 'First bubble'
        });
        const box2 = new Box('vertical').addContent({
            type: 'text',
            text: 'Second bubble'
        });
        const bubble1 = new BubbleContainer().setBodyBlock(box1);
        const bubble2 = new BubbleContainer().setBodyBlock(box2);
        const ret = Client.Helper().setContainerType(
            container.pushBubble(bubble1).pushBubble(bubble2)
        ).dump();

        expect(ret).toEqual(
        '{'
        + '"type":"carousel",'
        + '"contents":['
        + '{'
        + '"type":"bubble",'
        + '"body":{'
        + '"type":"box",'
        + '"layout":"vertical",'
        + '"contents":['
        + '{'
        + '"type":"text",'
        + '"text":"First bubble"'
        + '}'
        + ']'
        + '}'
        + '},'
        + '{'
        + '"type":"bubble",'
        + '"body":{'
        + '"type":"box",'
        + '"layout":"vertical",'
        + '"contents":['
        + '{'
        + '"type":"text",'
        + '"text":"Second bubble"'
        + '}'
        + ']'
        + '}'
        + '}'
        + ']'
        + '}'
        );
    })



});