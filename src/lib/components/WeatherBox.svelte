<script lang="ts">
	import { isAtTop } from '$lib/stores/isAtTop';
	import { weather } from '$lib/stores/weather';
	import { twJoin } from 'tailwind-merge';
</script>

{#if $weather}
	<div
		class={twJoin(
			'transition-all ease-in-out bg-background-100 mt-4 p-4 border-borders border-4 rounded-lg',
			$isAtTop === false ? 'opacity-100 translate-x-0' : '-translate-x-10 opacity-0'
		)}
	>
		<span class="text-lg text-primary-100 font-bold mb-2 inline-block">
			what it's like in my place
		</span>
		<ul>
			<li class="mb-2">
				<span class="flex gap-2 items-center font-bold text-highlight">
					{$weather.description}
					<span class="aspect-square relative inline-block w-6">
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
