'use strict';

import Config from './config';
import StringBuilder from './string-builder';
import Content from './content';

module.exports = function(hexo) {

    const config = new Config(hexo);

    hexo.extend.tag.register('gdemo_terminal', function (args, content) {

        if (!args[0]) {
            console.error('command is empty');
            return;
        }

        const command = args[0];
        const minHeight = args[1] || '0px';
        const windowTitle = args[2] || 'bash';
        const onCompleteDelay = args[3] || 0;
        const promptString = args[4] || '$';
        const id = args[5] || 'demo-terminal';
        const highlightLang = args[6] || 'javascript';

        const commands = command.split(';');

        let sb = new StringBuilder();
        sb.append(`
        new GDemo('#${id}')
          .openApp('terminal', {minHeight: '${minHeight}', windowTitle: '${windowTitle}', promptString: '${promptString}'})
    `);

        for (let i = 0; i < commands.length; i++) {
            let highlightedCode = Content.highlight(commands[i], highlightLang);
            sb.append(`.command(\`${highlightedCode}\`, {onCompleteDelay: ${onCompleteDelay}})`);
        }

        sb.append(`
        .respond(\`${content}\`)
        .end();
    `);

        return `<link rel="stylesheet" href="${config.getStyleUrl()}">
            <link rel="stylesheet" href="${config.getPrismjsThemeStyleUrl()}">
            <script src="${config.getScriptUrl()}"></script>
            <div id='${id}' style='height: ${minHeight}'></div>
            <script>${sb.toString()}</script>`;
    }, {ends: true});

    hexo.extend.tag.register('gdemo_editor', function (args, content) {

        if (!content) {
            console.error('content is empty');
            return;
        }

        const minHeight = args[0] || '0px';
        const windowTitle = args[1] || 'bash';
        const onCompleteDelay = args[2] || 0;
        const id = args[3] || 'demo-editor';
        const highlightLang = args[4] || 'javascript';

        let highlightedCode = Content.highlight(content, highlightLang);

        const demo = `
        new GDemo('#${id}')
          .openApp('editor', {minHeight: '${minHeight}', windowTitle: '${windowTitle}'})
          .write(\`${highlightedCode}\`, {onCompleteDelay: ${onCompleteDelay}})
          .end();
    `;

        return `<link rel="stylesheet" href="${config.getStyleUrl()}">
            <link rel="stylesheet" href="${config.getPrismjsThemeStyleUrl()}">
            <script src="${config.getScriptUrl()}"></script>
            <div id='${id}' style='height: ${minHeight}'></div>
            <script>${demo}</script>`;
    }, {ends: true});
};
