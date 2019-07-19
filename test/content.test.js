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

    it('highlight', () => {
        const code = 'let code = "test"';
        assert.equal(Content.highlight(code, 'javascript'),
            '<span class="token keyword">let</span> code <span class="token operator">=</span> <span class="token string">"test"</span>');
    });
});