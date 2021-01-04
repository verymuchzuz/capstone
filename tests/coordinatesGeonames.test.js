import { coordinatesGeonames} from '../src/client/js/coordinatesGeonames.js'

test('coordinatesGeonames is a function', () => {
    expect(typeof coordinatesGeonames).toBe('function');
});