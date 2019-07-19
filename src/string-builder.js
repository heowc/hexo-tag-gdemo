export default class StringBuilder {
    constructor(value) {
        this._array = [];
        this.append(value);
    }

    append(value) {
        if (value) {
            this._array.push(value);
        }
    }

    toString() {
        return this._array.join('');
    }

    clear() {
        this._array.length = 0;
    }
}