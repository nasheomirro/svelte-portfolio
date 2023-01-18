import { WEATHER_API_KEY } from '$env/static/private';
import type { Weather } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const res = await fetch(`
  https://api.openweathermap.org/data/2.5/weather?lat=12.8797&lon=121.7740&units=metric&appid=${WEATHER_API_KEY}
  `);
  const data = await res.json();
  const weather: Weather = {
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    measurements: {
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      temp: data.main.temp,
    },
  }
  
  return { weather };
}) satisfies PageServerLoad;
