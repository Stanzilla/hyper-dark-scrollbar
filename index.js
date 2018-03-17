'use strict'
exports.decorateConfig = (config) => {
   return Object.assign({}, config, {
        termCSS: `
            ${config.termCSS || ''}
            ::-webkit-scrollbar-thumb {
                background: #f1f1f0;
            }
            `
    })
};
