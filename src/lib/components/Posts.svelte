<script lang="ts">
	import { posts } from '$lib/stores/posts';
	import { formatDate } from '$lib/utils';
</script>

{#if $posts}
	<ul class="grid auto-rows-uniform gap-2 my-8 relative">
		{#each $posts as post}
			<li>
				<a
					href={post.url}
					rel="noreferrer"
					target="_blank"
					class="px-4 py-2 h-full block bg-background-200 border-4 rounded-lg border-borders no-underline text-white hover:opacity-90 focus-visible:opacity-90 transition-all"
				>
					<h3 class="text-lg font-bold text-primary-200">{post.title}</h3>
					<span class="text-sm inline-block text-highlight">
						{formatDate(new Date(post.published_at))}
					</span>
					<ul>
						{#each [...post.tag_list].sort((a, b) => (a > b ? 1 : -1)) as tag}
							<li class="inline-block p-1 mr-1 text-sm">
								#{tag}
							</li>
						{/each}
					</ul>
				</a>
			</li>
		{/each}
	</ul>
{:else}
	<div />
{/if}
