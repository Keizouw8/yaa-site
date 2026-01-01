<svelte:window bind:scrollY bind:innerHeight />
<div class="ribbon{scrollY > innerHeight / 2 ? " locked": ""}" style="top: {offset}px" bind:contentRect>
	{#each pages.slice(1) as [_, title, link], i}
		<a class="bold{between(scrollY / innerHeight - i, 0.5, 1.5) ? " active" : ""}" onclick={() => document.getElementById(link)?.scrollIntoView({ behavior: "smooth" })}>{title}</a>
	{/each}
	<a target="_blank" href="/teachers" class="bold">For teachers</a>
</div>
<div class="ribbonbg{scrollY > innerHeight - 100 ? " active" : ""}">
	<img src="logo.png" alt="Logo" onclick={() => document.body.scrollIntoView({ behavior: "smooth" })}>
</div>
{#each pages as [Page, _, link, color], i}
	<div class="fullscreen" style="top: {100 * i}vh; background: {color || "none"}" id="{link}">
		<div style="display: block; position: relative; width: 75vw; height: calc(100vh - {!i ? 0 : 100}px - 10vw); padding: 5vw 12.5vw">
			<Page />
		</div>
	</div>
{/each}
<script lang="ts">
    import type { Component } from "svelte";
	import Landing from "./landing.svelte";
	import Winners from "./winners.svelte";
	import About from "./about.svelte";
    import Submit from "./submit.svelte";
    import FAQ from "./faq.svelte";
    import Contact from "./contact.svelte";

    let scrollY = $state(0);
    let innerHeight = $state(0);
    let contentRect = $state({ height: 0 });
    let defaultOffset = $derived(innerHeight * 0.8 - contentRect.height);
    let offset = $derived(scrollY > defaultOffset ? 0 : defaultOffset - scrollY);

	let pages: [Component, string, string, string?][] = [
		[Landing, "", "", "var(--black)"],
		[About, "About", "about"],
		[Submit, "Submit", "submit"],
		[Winners, "Winners", "winners"],
		[FAQ, "FAQ", "faq"],
		[Contact, "Contact", "contact"]
	];

	function between(x: number, min: number, max: number): boolean {
		return x >= min && x <= max;
	}
</script>
<style>
	:global(html){
		scroll-snap-type: y mandatory;
	}

	.fullscreen{
		position: absolute;
		width: 100vw;
		height: 100vh;
		overflow-x: hidden;
		scroll-snap-align: start;
		display: flex;
		align-items: flex-end;
	}

	.ribbon {
		position: fixed;
		z-index: 10;
		left: 8vw;
		display: flex;
		align-items: center;
		transition: left 0.3s;
		height: none;
		width: none;
	}

	.ribbon.locked{
		height: 100px;
		left: 30px;
	}

	.ribbonbg{
		position: fixed;
		z-index: 1;
		height: 100px;
		width: 100vw;
		left: 0;
		top: 0;
		content: " ";
		display: flex;
		align-items: center;
		justify-content: right;
	}

	.ribbonbg.active{
		background: var(--black)
	}

	.ribbonbg.active img{
		opacity: 1;
	}

	.ribbonbg img{
		height: 60px;
		margin-right: 30px;
		cursor: pointer;
		opacity: 0;
		transition: opacity 0.2s;
	}

	.ribbon a{
		color: var(--white);
		text-decoration: none;
		font-size: 2.2vw;
		margin-right: 1.5vw;
		transition: border-bottom 0.25s, padding-bottom 0.25s;
		border-bottom: solid transparent 8px;
		cursor: pointer;
	}

	.ribbon a.active, .ribbon:not(:has(.active)) > a:hover{
		border-bottom: solid var(--white) 3px;
		padding-bottom: 5px;
	}
</style>
