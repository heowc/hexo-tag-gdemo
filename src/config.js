import {
    DEFAULT_GDEMO_SCRIPT_URL,
    DEFAULT_GDEMO_STYLE_URL,
    DEFAULT_PRISMJS_THEME,
    PRISMJS_THEME_STYLE_URL
} from './constants';

export default class Config {
    constructor(hexo) {
        if (hexo.config.gdemo) {
            this._customize(hexo.config.gdemo);
        } else {
            this._default();
        }
    }

    _customize(gdemoConfig) {
        this._styleUrl = gdemoConfig.style_url || DEFAULT_GDEMO_STYLE_URL;
        this._scriptUrl = gdemoConfig.script_url || DEFAULT_GDEMO_SCRIPT_URL;
        this._prismjsThemeStyleUrl =
            String(PRISMJS_THEME_STYLE_URL).replace('%s', gdemoConfig.prismjs_theme || DEFAULT_PRISMJS_THEME);
    }

    _default() {
        this._styleUrl = DEFAULT_GDEMO_STYLE_URL;
        this._scriptUrl = DEFAULT_GDEMO_SCRIPT_URL;
        this._prismjsThemeStyleUrl = String(PRISMJS_THEME_STYLE_URL).replace('%s', DEFAULT_PRISMJS_THEME);
    }

    getStyleUrl() {
        return this._styleUrl;
    }

    getScriptUrl() {
        return this._scriptUrl;
    }

    getPrismjsThemeStyleUrl() {
        return this._prismjsThemeStyleUrl;
    }
}