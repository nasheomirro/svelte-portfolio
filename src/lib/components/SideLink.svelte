<script lang="ts">
	export let href: string;
</script>

<a
	{href}
	target="_blank"
	rel="noreferrer"
	class="flex items-center gap-3 hover:opacity-90 hover:text-highlight focus-visible:opacity-90 focus-visible:text-highlight bg-background-200 py-2 px-3 rounded-lg transition-all border-4 border-borders"
>
	<slot />
</a>
