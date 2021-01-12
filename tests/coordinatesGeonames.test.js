import { geoWeatherClient} from '../src/client/js/clientInterface.js'

test('coordinatesGeonames is a function', () => {
    expect(typeof geoWeatherClient).toBe('function');
});