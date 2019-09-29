export default class Content {

    static default(value) {
        return new DefaultContentDecorator(value).decorate();
    }

    static simple(value) {
        return new SimpleContentDecorator(new DefaultContentDecorator(value)).decorate();
    }

    static highlight(value, language) {
        return new HighlightContentDecorator(new SimpleContentDecorator(new DefaultContentDecorator(value)), language).decorate();
    }
}

class ContentDecorator {

    decorate() {

    }
}

class DefaultContentDecorator extends ContentDecorator {

    constructor(value) {
        super();
        this._value = value;
    }

    decorate() {
        return this._value;
    }
}

class SimpleContentDecorator extends ContentDecorator {

    constructor(contentDecorator) {
        super();
        this._contentDecorator = contentDecorator;
    }

    decorate() {
        let tempValue = this._contentDecorator.decorate();
        tempValue = tempValue.replaceAll('\\', '\\\\');
        tempValue = tempValue.replaceAll('\`', '\\`');
        return tempValue;
    }
}

import Prism from 'prismjs/prism';

class HighlightContentDecorator extends ContentDecorator {

    constructor(contentDecorator, language) {
        super();
        this._contentDecorator = contentDecorator;
        this._language = language;
    }

    decorate() {
        const tempValue = this._contentDecorator.decorate();

        const Prism = require('prismjs');
        const loadLanguages = require('prismjs/components/');
        loadLanguages([this._language]);

        return Prism.highlight(
            tempValue,
            Prism.languages[this._language],
            this._language
        );
    }
}

String.prototype.replaceAll = function (target, replace) {
    return this.split(target).join(replace);
};