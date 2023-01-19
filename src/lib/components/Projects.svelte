<script>
	import { projects } from '$lib/stores/projects';
	import GithubIcon from './icons/GithubIcon.svelte';
</script>

<ul class="grid auto-rows-uniform gap-2 my-8 relative">
	{#each $projects as project}
		<li
			class="px-4 py-2 h-full block bg-background-200 border-4 rounded-lg border-borders no-underline text-white"
		>
			<h3 class="text-lg font-bold text-primary-200">{project.title}</h3>

			<p class="text-sm mb-3">{project.description}</p>
			<div class="flex flex-wrap">
				<ul>
					{#each [...project.techs].sort((a, b) => (a > b ? 1 : -1)) as tag}
						<li class="inline-block p-1 mr-1 text-sm">
							#{tag}
						</li>
					{/each}
				</ul>
				<div class="ml-auto">
					<a
						class="transition-all hover:text-highlight focus-visible:text-highlight"
						href={typeof project.url === 'string' ? project.url : project.url.repo}
						target="_blank"
						rel="noreferrer"
					>
						<GithubIcon />
					</a>
					<!-- TODO: Also do live -->
				</div>
			</div>
		</li>
	{/each}
</ul>
