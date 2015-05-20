function dropRequireCache(requireFunc, filename) {
    var module = requireFunc.cache[filename];
    if (module) {
        if (module.parent) {
            if (module.parent.children) {
                var moduleIndex = module.parent.children.indexOf(module);
                if (moduleIndex !== -1) {
                    module.parent.children.splice(moduleIndex, 1);
                }
            }
            delete module.parent;
        }
        delete module.children;
        delete requireFunc.cache[filename];
    }
};
dropRequireCache(require, require.resolve("../../node_modules/bh/lib/bh.js"));
var BH = require("../../node_modules/bh/lib/bh.js");
var bh = new BH();
bh.setOptions({
   jsAttrName: 'data-bem',
   jsAttrScheme: 'json'
});

dropRequireCache(require, require.resolve("../../libs/bem-core/common.blocks/ua/ua.bh.js"));
require("../../libs/bem-core/common.blocks/ua/ua.bh.js")(bh);
dropRequireCache(require, require.resolve("../../libs/bem-core/common.blocks/page/__css/page__css.bh.js"));
require("../../libs/bem-core/common.blocks/page/__css/page__css.bh.js")(bh);
dropRequireCache(require, require.resolve("../../libs/bem-core/desktop.blocks/page/__css/page__css.bh.js"));
require("../../libs/bem-core/desktop.blocks/page/__css/page__css.bh.js")(bh);
dropRequireCache(require, require.resolve("../../libs/bem-core/common.blocks/page/__js/page__js.bh.js"));
require("../../libs/bem-core/common.blocks/page/__js/page__js.bh.js")(bh);
dropRequireCache(require, require.resolve("../../libs/bem-stat-counters/common.blocks/google-analytics/google-analytics.bh.js"));
require("../../libs/bem-stat-counters/common.blocks/google-analytics/google-analytics.bh.js")(bh);
dropRequireCache(require, require.resolve("../../common.blocks/logo/logo.bh.js"));
require("../../common.blocks/logo/logo.bh.js")(bh);
dropRequireCache(require, require.resolve("../../libs/bem-components/common.blocks/icon/icon.bh.js"));
require("../../libs/bem-components/common.blocks/icon/icon.bh.js")(bh);
dropRequireCache(require, require.resolve("../../libs/bem-typography/common.blocks/paragraph/paragraph.bh.js"));
require("../../libs/bem-typography/common.blocks/paragraph/paragraph.bh.js")(bh);
dropRequireCache(require, require.resolve("../../libs/bem-components/common.blocks/link/link.bh.js"));
require("../../libs/bem-components/common.blocks/link/link.bh.js")(bh);
dropRequireCache(require, require.resolve("../../libs/bem-components/common.blocks/menu/menu.bh.js"));
require("../../libs/bem-components/common.blocks/menu/menu.bh.js")(bh);
dropRequireCache(require, require.resolve("../../libs/bem-components/common.blocks/menu-item/menu-item.bh.js"));
require("../../libs/bem-components/common.blocks/menu-item/menu-item.bh.js")(bh);
dropRequireCache(require, require.resolve("../../libs/bem-components/common.blocks/menu/_focused/menu_focused.bh.js"));
require("../../libs/bem-components/common.blocks/menu/_focused/menu_focused.bh.js")(bh);
dropRequireCache(require, require.resolve("../../libs/bem-components/common.blocks/menu/__group/menu__group.bh.js"));
require("../../libs/bem-components/common.blocks/menu/__group/menu__group.bh.js")(bh);
dropRequireCache(require, require.resolve("../../libs/bem-components/common.blocks/menu/__group-title/menu__group-title.bh.js"));
require("../../libs/bem-components/common.blocks/menu/__group-title/menu__group-title.bh.js")(bh);
dropRequireCache(require, require.resolve("../../common.blocks/logo/_view/logo_view_full.bh.js"));
require("../../common.blocks/logo/_view/logo_view_full.bh.js")(bh);
dropRequireCache(require, require.resolve("../../desktop.blocks/promo/promo.bh.js"));
require("../../desktop.blocks/promo/promo.bh.js")(bh);
dropRequireCache(require, require.resolve("../../libs/bem-components/common.blocks/menu-item/_type/menu-item_type_link.bh.js"));
require("../../libs/bem-components/common.blocks/menu-item/_type/menu-item_type_link.bh.js")(bh);
dropRequireCache(require, require.resolve("../../libs/bem-typography/common.blocks/heading/heading.bh.js"));
require("../../libs/bem-typography/common.blocks/heading/heading.bh.js")(bh);
dropRequireCache(require, require.resolve("../../desktop.blocks/footer/footer.bh.js"));
require("../../desktop.blocks/footer/footer.bh.js")(bh);
dropRequireCache(require, require.resolve("../../libs/bem-core/common.blocks/page/page.bh.js"));
require("../../libs/bem-core/common.blocks/page/page.bh.js")(bh);

module.exports = bh;
bh['BEMHTML'] = bh;