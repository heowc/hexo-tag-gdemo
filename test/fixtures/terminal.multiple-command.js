exports.content = [
    '{% gdemo_terminal \'cd /usr/bin;node ./demo\'%}',
    'hello, hexo-tag-gdemo',
    '{% endgdemo_terminal %}',
].join('\n');

exports.actual = `<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/@glorious/demo@0.11.2/dist/gdemo.min.css">
            <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/prismjs/themes/prism-tomorrow.css">
            <script src="//cdn.jsdelivr.net/npm/@glorious/demo@0.11.2/dist/gdemo.min.js"></script>
            <div id='demo-terminal' style='height: 0px'></div>
            <script>
        new GDemo('#demo-terminal')
          .openApp('terminal', {minHeight: '0px', windowTitle: 'bash', promptString: '$'})
    .command(\`cd <span class="token operator">/</span>usr<span class="token operator">/</span>bin\`, {onCompleteDelay: 0}).command(\`node <span class="token punctuation">.</span><span class="token operator">/</span>demo\`, {onCompleteDelay: 0})
        .respond(\`hello, hexo-tag-gdemo\`)
        .end();
    </script>`;