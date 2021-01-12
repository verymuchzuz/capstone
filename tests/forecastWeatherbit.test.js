import { forecastWeatherbit } from '../src/client/js/clientInterface.js'

test('forecastWeatherbit is a function', () => {
    expect(typeof forecastWeatherbit).toBe('function');
});