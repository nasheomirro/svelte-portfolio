<script lang="ts">
	import { weather } from '$lib/stores/weather';
</script>

{#if $weather}
	<div class="bg-background-200 mt-4 p-4 border-borders border-4 rounded-lg">
		<span class="text-lg font-bold mb-2 inline-block"> Location Status: </span>
		<ul>
			<li class="mb-2">
				<span class="flex gap-2 items-center font-bold text-highlight">
					{$weather.description}
					<span class="aspect-square relative inline-block w-7">
						<img src={`http://openweathermap.org/img/w/${$weather.icon}.png`} alt="weather-icon" />
					</span>
				</span>
			</li>
			<li class="flex justify-between">
				temp:
				<span class="text-highlight font-bold">
					{$weather.measurements.temp}°C
				</span>
			</li>
			<li class="flex justify-between">
				humidity:
				<span class="text-highlight font-bold">
					{$weather.measurements.humidity}%
				</span>
			</li>
			<li class="flex justify-between">
				pressure:
				<span class="text-highlight font-bold">
					{$weather.measurements.pressure}
				</span>
			</li>
		</ul>
	</div>
{:else}
	<div />
{/if}
