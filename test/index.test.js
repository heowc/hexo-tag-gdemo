import assert from 'assert';

describe('Test Tag API', () => {

    const Hexo = require('hexo');
    const hexo = new Hexo();
    const Post = hexo.model('Post');
    const renderPost = require('hexo/lib/plugins/filter/before_generate/render_post').bind(hexo);
    const plugin = require('../src');

    before(() => hexo.init().then(() => {
        hexo.loadPlugin(require.resolve('hexo-renderer-marked'));
        plugin(hexo);
    }));

    it('render post with tag plugins by gdemo_terminal [default]', () => {
        const fixture = require('./fixtures/terminal.default');
        assertSameContent(fixture['content'], fixture['actual']);
    });

    it('render post with tag plugins by gdemo_terminal [multiple command]', () => {
        const fixture = require('./fixtures/terminal.multiple-command');
        assertSameContent(fixture.content, fixture.actual);
    });

    it('render post with tag plugins by gdemo_editor [default]', () => {
        const fixture = require('./fixtures/editor.default');
        assertSameContent(fixture.content, fixture.actual);
    });

    function assertSameContent(content, actual) {
        let id;
        Post.insert({
            source: 'foo.md',
            slug: 'foo',
            _content: content
        }).then(post => {
            id = post._id;
            return renderPost();
        }).then(() => {
            const post = Post.findById(id);
            assert.equal(post.content, actual);
            return post.remove();
        });
    }
});