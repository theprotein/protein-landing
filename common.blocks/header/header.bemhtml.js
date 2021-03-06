block('header')(
    js()(true),
    tag()('header'),
    content()(function() {
        var self = this;

        return {
            elem: 'content',
            content: [
                {
                    block: 'menu',
                    mix: { block: this.block, elem: 'menu' },
                    content: [
                        {
                            block: 'menu-item',
                            mods: { type: 'link', 'scroll-to': true },
                            mix: {
                                block: this.block,
                                elem: 'logo'
                            },
                            content: {
                                block: 'link',
                                url: '#protein',
                                content: {
                                    block: 'logo'
                                }
                            }
                        },
                        [
                            {
                                url: '#features',
                                text: 'Features'
                            },
                            {
                                url: '#integrations',
                                text: 'Integrations'
                            },
                            {
                                url: '#workflow',
                                text: 'How it works'
                            }
                        ].map(function(item) {
                            return {
                                block: 'menu-item',
                                mods:  { type: 'link', 'scroll-to': true },
                                content: {
                                    block: 'link',
                                    mods: self.extend(item.mods || {}, { pseudo: true, theme: 'on-color' }),
                                    url: item.url,
                                    content: item.text
                                }
                            };
                        })
                    ]
                }
            ]
        };
    })
);
