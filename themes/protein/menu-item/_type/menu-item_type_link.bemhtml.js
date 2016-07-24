block('menu-item').mod('type', 'link')(
  content()(function() {
    return {
      block: 'link',
      mix: { block: 'menu-item', elem: 'link' },
      mods: {
        theme: this.mods.theme || this._menuMods.theme,
        size: this.mods.size || this._menuMods.size,
        view: this.mods.view,
        pseudo: this.mods.pseudo,
        disabled: this.mods.disabled
      },
      url: this.ctx.url,
      target: this.ctx.target,
      text: this.ctx.text,
      icon: this.ctx.icon
    };
  })
);
