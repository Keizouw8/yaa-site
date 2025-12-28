<svelte:window bind:innerHeight bind:innerWidth></svelte:window>
<svelte:head>
	<link rel="icon" href="logo.png" />
	<title>Young Author's Anthology</title>
</svelte:head>
{#if aspectRatio >= 1 }
	{@render children?.()}
{:else}
	<center class="centered">
		<h1>Mobile Site In-Progress</h1>
		<p>Please visit the site on a desktop</p>
	</center>
{/if}
<script lang="ts">
	let { children } = $props();
	import "$lib/global.css";

	let innerHeight = $state(0);
	let innerWidth = $state(0);
	let aspectRatio = $derived(innerWidth / innerHeight);
</script>
<style>
	.centered{
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
</style>
