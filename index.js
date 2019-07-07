'use strict';

var Prism = require('prismjs/prism.js');

const GDEMO_VERSION = '0.8.0';
const GDEMO_STYLE_URL = hexo.config.gdemo.style_url || `//cdn.jsdelivr.net/npm/@glorious/demo@${GDEMO_VERSION}/dist/gdemo.min.css`;
const GDEMO_SCRIPT_URL = hexo.config.gdemo.script_url || `//cdn.jsdelivr.net/npm/@glorious/demo@${GDEMO_VERSION}/dist/gdemo.min.js`;
const PRISM_STYLE_URL = `//cdn.jsdelivr.net/npm/prismjs/themes/prism-tomorrow.css`;

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

    require(`prismjs/components/prism-${highlightLang}`);

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

    return `<link rel="stylesheet" href="${GDEMO_STYLE_URL}">
            <link rel="stylesheet" href="${PRISM_STYLE_URL}">
            <script src="${GDEMO_SCRIPT_URL}"></script>
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

    require(`prismjs/components/prism-${highlightLang}`);

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

    return `<link rel="stylesheet" href="${GDEMO_STYLE_URL}">
            <link rel="stylesheet" href="${PRISM_STYLE_URL}">
            <script src="${GDEMO_SCRIPT_URL}"></script>
            <div id='${id}' style='height: ${minHeight}'></div>
            ${script}`;
}, {ends: true});

String.prototype.replaceAll = function (target, replace) {
    return this.split(target).join(replace);
};
