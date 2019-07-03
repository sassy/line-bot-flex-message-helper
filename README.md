line-bot-flex-message-helper

example
```
        const container = new BubbleConteiner();
        const textBox = new Box('vertical').addContent(new TextContent('Hello,World'));
        container.setBodyBlock(textBox)

        const ret = Client.Helper().setContainerType(container).dump();
```

result
```
{
    "type":"bubble",
    "body":{
        "type":"box",
        "layout":"vertical",
        "contents":[
            {
                "type":"text",
                "text":"Hello,World"
            }
        ]
    }
}
```
