import assert from 'assert';
import Config from '../src/config';
import {
    DEFAULT_GDEMO_SCRIPT_URL,
    DEFAULT_GDEMO_STYLE_URL,
    DEFAULT_PRISMJS_THEME,
    PRISMJS_THEME_STYLE_URL
} from '../src/constants';

describe('Test Config API', () => {

    let testHexoConfig = {};

    beforeEach(() => {
        testHexoConfig.config = {};
    });

    it('create `Config` as constructor with default option', () => {
        const config = new Config(testHexoConfig);

        assert.equal(config.getStyleUrl(), DEFAULT_GDEMO_STYLE_URL);
        assert.equal(config.getScriptUrl(), DEFAULT_GDEMO_SCRIPT_URL);
        assert.equal(config.getPrismjsThemeStyleUrl(),
            String(PRISMJS_THEME_STYLE_URL).replace('%s', DEFAULT_PRISMJS_THEME));
    });

    it('create `Config` as constructor with empty option', () => {
        testHexoConfig.config.gdemo = {};

        const config = new Config(testHexoConfig);

        assert.equal(config.getStyleUrl(), DEFAULT_GDEMO_STYLE_URL);
        assert.equal(config.getScriptUrl(), DEFAULT_GDEMO_SCRIPT_URL);
        assert.equal(config.getPrismjsThemeStyleUrl(),
            String(PRISMJS_THEME_STYLE_URL).replace('%s', DEFAULT_PRISMJS_THEME));
    });

    it('create `Config` as constructor with custom option', () => {
        testHexoConfig.config.gdemo = {
            style_url: 'test_style_url',
            script_url: 'test_script_url',
            prismjs_theme: 'test_theme'
        };

        const config = new Config(testHexoConfig);

        assert.equal(config.getStyleUrl(), 'test_style_url');
        assert.equal(config.getScriptUrl(), 'test_script_url');
        assert.equal(config.getPrismjsThemeStyleUrl(),
            String(PRISMJS_THEME_STYLE_URL).replace('%s', 'test_theme'));
    });

    afterEach(() => {
        testHexoConfig.config = {};
    });
});