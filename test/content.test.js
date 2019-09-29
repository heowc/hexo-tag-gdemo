import assert from 'assert';
import Content from '../src/content';

describe('Test Content API', () => {

    it('default', () => {
        const str = 'test';
        assert.equal(Content.default(str), str);
    });

    it('simple', () => {
        const str = '\\test\`';
        assert.equal(Content.simple(str), '\\\\test\\`');
    });

    it('highlight for javascript', () => {
        const code = 'let code = "test"';
        assert.equal(Content.highlight(code, 'javascript'),
            '<span class="token keyword">let</span> code <span class="token operator">=</span> <span class="token string">"test"</span>');
    });

    /*
        Requiring prismjs will load the default languages: `markup`, `css`, `clike` and `javascript`.
        You can load more languages with the `loadLanguages()` utility, which will automatically handle any required
        dependencies. (https://prismjs.com/)
    */
    it('highlight for java', () => {
        const code = 'String code = "test"';
        assert.equal(Content.highlight(code, 'java'),
            '<span class="token class-name">String</span> code <span class="token operator">=</span> <span class="token string">"test"</span>');
    });
});