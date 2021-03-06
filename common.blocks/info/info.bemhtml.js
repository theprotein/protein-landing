block('info')(
    content()(function() {
        return [
            {
                elem: 'icon',
                content: this.ctx.icon
            },
            {
                elem: 'text',
                content: this.ctx.text
            }
        ];
    }),
    elem('text').content()(function() {
        var content = applyNext(),
            len = content.length;
        return content.map(function(text, index) {
            return [
                text,
                len - 1 > index && { block: 'br' }
            ];
        });
    })
);
