<script lang="ts">
	import Avatar from '$lib/components/Avatar.svelte';
	import ContentLayout from '$lib/components/ContentLayout.svelte';
	import WeatherBox from '$lib/components/WeatherBox.svelte';
	import { isAtTop } from '$lib/stores/isAtTop';
	import { weather } from '$lib/stores/weather';
	import { twJoin } from 'tailwind-merge';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	weather.set(data.weather);
</script>

<ContentLayout>
	<svelte:fragment slot="aside">
		<Avatar />
		<WeatherBox />
	</svelte:fragment>
	<svelte:fragment slot="main">
		<header class="mx-auto mt-9 mb-44">
			<h1 class="font-extrabold text-3xl md:text-4xl xl:text-5xl mb-6">
				Hi 👋 I'm Shane, I do programming, specifically for the web.
			</h1>
		</header>
		<main
			class={twJoin(
				'transition-all',
				$isAtTop ? '-translate-x-5 opacity-0' : 'delay-100 opacity-100 translate-x-0'
			)}
		>
			<div class="mb-20">
				<h2 class="text-xl md:text-2xl font-bold text-primary-100 mb-4">Quick Facts</h2>
				<ul class="list-disc flex flex-col gap-2 pl-3">
					<li>
						I'm <strong class="text-highlight">self-taught</strong>, I've been teaching myself for
						almost 3 years now.
					</li>
					<li>
						I'm <strong class="text-highlight">Filipino</strong>, and currently living in the
						mountain ranges of the Philippines.
					</li>
					<li>
						My main programming language is <strong class="text-highlight">Typescript</strong>.
					</li>
					<li>
						I spend most of my time staring at the computer, and then sometimes writing the code.
					</li>
					<li>When I'm not programming, you can usually catch me playing chess or online TCGs.</li>
				</ul>
			</div>
		</main>
	</svelte:fragment>
</ContentLayout>
