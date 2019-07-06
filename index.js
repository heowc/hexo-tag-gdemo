'use strict';

var Prism = require('../../node_modules/prismjs/prism.js');

const GDEMO_VERSION = '0.8.0';
const GDEMO_STYLE_LITERAL = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@glorious/demo@${GDEMO_VERSION}/dist/gdemo.min.css">`;
const GDEMO_SCRIPT_LITERAL = `<script src="https://cdn.jsdelivr.net/npm/@glorious/demo@${GDEMO_VERSION}/dist/gdemo.min.js"></script>`;
const PRISM_STYLE_LITERAL = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs/themes/prism-tomorrow.css">`;

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

    require(`../../node_modules/prismjs/components/prism-${highlightLang}`);

    content = content.replaceAll('\\', '\\\\');
    content = content.replaceAll('\`', '\\`');

    var commands = command.split(';');

    var demo = `
        new GDemo('#${id}')
          .openApp('terminal', {minHeight: '${minHeight}', windowTitle: '${windowTitle}', promptString: '${promptString}'})
    `;

    for (let i = 0; i < commands.length; i++)
    {
        const highlightedCode = Prism.highlight(
            commands[i],
            Prism.languages[highlightLang],
            highlightLang
        );
        demo += `.command(\`${highlightedCode}\`, {onCompleteDelay: ${onCompleteDelay}})\n`;
    }

    demo += `
        .respond(\`${content}\`)
        .end();
    `;

    const script = `<script>${demo}</script>`;

    return `${PRISM_STYLE_LITERAL}${GDEMO_STYLE_LITERAL}${GDEMO_SCRIPT_LITERAL}
            <div id='${id}' style='height: ${minHeight}'></div>
            ${script}`;
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

    require(`../../node_modules/prismjs/components/prism-${highlightLang}`);

    content = content.replaceAll('\\', '\\\\');
    content = content.replaceAll('\`', '\\`');

    const highlightedCode = Prism.highlight(
        content,
        Prism.languages[highlightLang],
        highlightLang
    );

    const demo = `
        new GDemo('#${id}')
          .openApp('editor', {minHeight: '${minHeight}', windowTitle: '${windowTitle}'})
          .write(\`${highlightedCode}\`, {onCompleteDelay: ${onCompleteDelay}})
          .end();
    `;

    const script = `<script>${demo}</script>`;

    return `${PRISM_STYLE_LITERAL}${GDEMO_STYLE_LITERAL}${GDEMO_SCRIPT_LITERAL}
            <div id='${id}' style='height: ${minHeight}'></div>
            ${script}`;
}, {ends: true});

String.prototype.replaceAll = function (target, replace) {
    return this.split(target).join(replace);
};
