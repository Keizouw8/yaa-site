<svelte:head>
	<link rel="icon" href="logo.png" />
	<title>Young Author's Anthology</title>
</svelte:head>
{@render children?.()}
<script lang="ts">
	let { children } = $props();
	import "$lib/global.css";
</script>
