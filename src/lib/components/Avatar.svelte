<script lang="ts">
	import { type Expression, avatar } from '$lib/stores/avatar';

	import idle from '$lib/assets/expression/idle.gif';
	import look from '$lib/assets/expression/look.jpg';
	import question from '$lib/assets/expression/question.jpg';

	const imgMap: { [key in Expression]: string } = { idle, look, question };
	let timeout: NodeJS.Timeout | null = null;
	const handleMouseEnter = () => (timeout = setTimeout(() => ($avatar = 'look'), 500));
	const handleMouseLeave = () => {
		if (timeout) clearTimeout(timeout);
		$avatar = 'idle';
	};
</script>

<img
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	src={imgMap[$avatar]}
	alt="A pixel art of me"
	class="w-full rounded-lg overflow-hidden"
/>
