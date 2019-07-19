import assert from 'assert';
import StringBuilder from '../src/string-builder';

const TEST_STRING = 'test';
const EMPTY_STRING = '';

describe('Test StringBuilder API', () => {

    describe('constructor', () => {
        it('create `StringBuilder` as constructor with no-argument', () => {
            const stringBuilder = new StringBuilder();
            assert.equal(stringBuilder.toString(), EMPTY_STRING);
        });

        it('create `StringBuilder` as constructor with argument', () => {
            const stringBuilder = new StringBuilder(TEST_STRING);
            assert.equal(stringBuilder.toString(), TEST_STRING);
        });
    });

    describe('append', () => {
        it('after create `StringBuilder` as constructor with no-argument, append string', () => {
            const stringBuilder = new StringBuilder();

            stringBuilder.append(TEST_STRING);

            assert.equal(stringBuilder.toString(), TEST_STRING);
        });

        it('after create `StringBuilder` as constructor with argument, append string', () => {
            const stringBuilder = new StringBuilder(TEST_STRING);

            stringBuilder.append(TEST_STRING);

            assert.equal(stringBuilder.toString(), TEST_STRING.repeat(2));
        });
    });

    describe('clear', () => {
        it('after clear, append string', () => {
            const stringBuilder = new StringBuilder();
            stringBuilder.clear();

            stringBuilder.append(TEST_STRING);

            assert.equal(stringBuilder.toString(), TEST_STRING);
        });

        it('after append string, clear', () => {
            const stringBuilder = new StringBuilder();
            stringBuilder.append(TEST_STRING);

            stringBuilder.clear();

            assert.equal(stringBuilder.toString(), EMPTY_STRING);
        });
    });

});