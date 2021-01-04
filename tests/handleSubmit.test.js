import { handleSubmit } from '../src/client/js/handleSubmit.js'

test('handleSubmit is a function', () => {
    expect(typeof handleSubmit).toBe('function');
});