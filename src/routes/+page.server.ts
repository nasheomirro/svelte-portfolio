import { WEATHER_API_KEY } from '$env/static/private';
import type { Post, Weather } from '$lib/types';
import type { PageServerLoad } from './$types';

const fetchWeatherData = (async ({ fetch }) => {
	try {
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
				temp: data.main.temp
			}
		};
		return weather;
	} catch (err) {
		return null;
	}
}) satisfies PageServerLoad;

const fetchBlogPosts = (async ({ fetch }) => {
	try {
		const res = await fetch('https://dev.to/api/articles?username=nasheomirro&per_page=3');
		const posts: Post[] = await res.json();
		return posts;
	} catch (err) {
		return null;
	}
}) satisfies PageServerLoad;

export const load = (async (loadEvent) => {
	const results = await Promise.all([fetchWeatherData(loadEvent), fetchBlogPosts(loadEvent)]);
	return { weather: results[0], posts: results[1] };
}) satisfies PageServerLoad;
