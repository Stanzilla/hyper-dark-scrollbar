'use strict'
exports.decorateConfig = (config) => {
   return Object.assign({}, config, {
        css: `
            ${config.css || ''}
            .xterm-viewport::-webkit-scrollbar-thumb {
                background: #f1f1f0;
            }
            `
    })
};
