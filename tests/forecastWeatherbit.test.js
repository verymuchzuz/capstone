import { forecastWeatherbit } from '../src/client/js/forecastWeatherbit.js'

test('forecastWeatherbit is a function', () => {
    expect(typeof forecastWeatherbit).toBe('function');
});