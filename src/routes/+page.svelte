<script lang="ts">
	import { twJoin } from 'tailwind-merge';

	import Avatar from '$lib/components/Avatar.svelte';
	import ContentLayout from '$lib/components/ContentLayout.svelte';
	import Posts from '$lib/components/Posts.svelte';
	import WeatherBox from '$lib/components/WeatherBox.svelte';

	import { isAtTop } from '$lib/stores/isAtTop';
	import { posts } from '$lib/stores/posts';
	import { weather } from '$lib/stores/weather';
	import type { PageServerData } from './$types';

	import GithubIcon from '$lib/components/icons/GithubIcon.svelte';
	import DevIcon from '$lib/components/icons/DevIcon.svelte';
	import EmailIcon from '$lib/components/icons/EmailIcon.svelte';
	import Link from '$lib/components/SideLink.svelte';

	export let data: PageServerData;
	$weather = data.weather;
	$posts = data.posts;
</script>

<ContentLayout>
	<svelte:fragment slot="aside">
		<Avatar />
		<div
			class={twJoin(
				'transition-all',
				$isAtTop === false ? 'opacity-100 translate-x-0' : '-translate-x-10 opacity-0'
			)}
		>
			<WeatherBox />
			<ul class="py-4 flex flex-col gap-2">
				<Link href="https://dev.to/nasheomirro">
					<DevIcon />
					<span class="text-sm leading-none">Blog Posts</span>
				</Link>
				<Link href="https://github.com/nasheomirro">
					<GithubIcon />
					<span class="text-sm leading-none">Github</span>
				</Link>
				<Link href="mailto:shanenescarimoro@gmail.com">
					<EmailIcon />
					<span class="text-sm leading-none">Contact me</span>
				</Link>
			</ul>
		</div>
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
				$isAtTop === false ? 'delay-100 opacity-100 translate-x-0' : '-translate-x-5 opacity-0'
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

			<div class="mb-32">
				<h2 class="text-xl md:text-2xl font-bold text-primary-100 mb-4">Recent Posts</h2>
				<p>I like to write about stuff sometimes, all of these are hosted on DEV.to:</p>
				<Posts />
			</div>
		</main>
	</svelte:fragment>
</ContentLayout>
