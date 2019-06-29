import Client from '../src/client';

describe('test', () => {
    it ('test', () => {
        const ret = Client.Helper().setContainerType('bubble').dump();
        expect(ret).toEqual('{"type":"bubble"}');
    })
});