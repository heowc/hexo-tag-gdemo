exports.content = [
    '{% gdemo_editor %}',
    'function greet(){',
    '  console.log("Hello World!");',
    '}',
    '',
    'greet();',
    '{% endgdemo_editor %}',
].join('\n');

exports.actual =
`<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/@glorious/demo@0.11.2/dist/gdemo.min.css">
            <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/prismjs/themes/prism-tomorrow.css">
            <script src="//cdn.jsdelivr.net/npm/@glorious/demo@0.11.2/dist/gdemo.min.js"></script>
            <div id='demo-editor' style='height: 0px'></div>
            <script>
        new GDemo('#demo-editor')
          .openApp('editor', {minHeight: '0px', windowTitle: 'bash'})
          .write(\`<span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\`, {onCompleteDelay: 0})
          .end();
    </script>`;
