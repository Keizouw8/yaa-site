<svelte:window bind:scrollY bind:innerHeight bind:innerWidth />
<div class="ribbon{scrollY > innerHeight / 2 ? " locked": ""}" style="top: {offset}px" bind:contentRect>
	{#each pages.slice(1) as [_, title, link], i}
		<a href="#{link}" class="bold{between(scrollY / innerHeight - i, 0.5, 1.5) ? " active" : ""}">{title}</a>
	{/each}
	<!-- FOR TEACHEERS - ENABLE LATER<a target="_blank" href="/teachers" class="bold">For teachers</a> -->
	<a target="_blank" href="/team" class="bold">Team</a>
</div>
<div class="ribbonbg{scrollY > innerHeight - 100 ? " active" : ""}">
	<a href="#home" aria-label="Back to top"><img src="logo.png" alt="Logo"></a>
</div>
{#each pages as [Page, _, link, color]}
	<section class="fullscreen" style="background: {color || "none"}" id="{link}">
		<div class="section-content">
			<Page />
		</div>
	</section>
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
    let innerWidth = $state(0);
    let contentRect = $state({ height: 0 });
    let compactNav = $derived(innerWidth <= 760 || innerHeight <= 540 || innerWidth / innerHeight <= 0.8);
    let defaultOffset = $derived(Math.max(0, innerHeight * 0.8 - contentRect.height));
    let offset = $derived(compactNav || scrollY > defaultOffset ? 0 : defaultOffset - scrollY);

	let pages: [Component, string, string, string?][] = [
		[Landing, "", "home", "var(--black)"],
		[About, "About", "about"],
		[Winners, "Winners", "winners"],
		[Submit, "Submit Here", "submit"],
		[FAQ, "FAQ", "faq"],
		[Contact, "Contact", "contact"]
	];

	function between(x: number, min: number, max: number): boolean {
		return x >= min && x <= max;
	}
</script>
<style>
	:global(html){
		scroll-behavior: smooth;
		scroll-snap-type: y proximity;
	}

	.fullscreen{
		width: 100%;
		min-height: 100svh;
		overflow-x: hidden;
		scroll-snap-align: start;
		display: flex;
		align-items: stretch;
	}

	.section-content{
		position: relative;
		width: min(75vw, 1200px);
		min-height: calc(100svh - var(--nav-height) - 10vw);
		margin: 0 auto;
		padding: calc(var(--nav-height) + 5vw) 0 5vw;
	}

	.fullscreen:first-of-type .section-content{
		min-height: calc(100svh - 10vw);
		padding-top: 5vw;
	}

	#submit .section-content{
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.ribbon {
		position: fixed;
		z-index: 10;
		left: 8vw;
		display: flex;
		align-items: center;
		align-content: center;
		flex-wrap: wrap;
		gap: 0.5rem 1.5vw;
		transition: left 0.3s;
		max-width: calc(100vw - 160px);
	}

	.ribbon.locked{
		min-height: var(--nav-height);
		left: 30px;
	}

	.ribbonbg{
		position: fixed;
		z-index: 1;
		min-height: var(--nav-height);
		width: 100vw;
		left: 0;
		top: 0;
		content: " ";
		display: flex;
		align-items: center;
		justify-content: right;
	}

	.ribbonbg.active{
		background: var(--black);
	}

	.ribbonbg.active img{
		opacity: 1;
	}

	.ribbonbg a{
		display: flex;
		margin-right: 30px;
	}

	.ribbonbg img{
		height: clamp(42px, 6vw, 60px);
		cursor: pointer;
		opacity: 0;
		transition: opacity 0.2s;
	}

	.ribbon a{
		color: var(--white);
		text-decoration: none;
		font-size: clamp(0.9rem, 2.2vw, 1.65rem);
		transition: border-bottom 0.25s, padding-bottom 0.25s;
		border-bottom: solid transparent 8px;
		cursor: pointer;
	}

	.ribbon a.active, .ribbon:not(:has(.active)) > a:hover{
		border-bottom: solid var(--white) 3px;
		padding-bottom: 5px;
	}

	@media (max-width: 700px){
		.section-content{
			width: calc(100% - 32px);
			min-height: calc(100svh - var(--nav-height) - 32px);
			padding: calc(var(--nav-height) + 24px) 0 24px;
		}

		.fullscreen:first-of-type .section-content{
			min-height: calc(100svh - 32px);
			padding-top: 24px;
		}

		.ribbon, .ribbon.locked{
			left: 16px;
			max-width: calc(100vw - 32px);
			min-height: var(--nav-height);
			gap: 0.25rem 0.75rem;
		}

		.ribbon a{
			border-bottom-width: 3px;
			font-size: clamp(0.78rem, 3.6vw, 0.95rem);
		}

		.ribbonbg{
			justify-content: center;
		}

		.ribbonbg a{
			display: none;
		}
	}

	@media (max-height: 540px){
		.section-content{
			min-height: calc(100svh - var(--nav-height) - 24px);
			padding: calc(var(--nav-height) + 16px) 0 16px;
		}

		.fullscreen:first-of-type .section-content{
			min-height: calc(100svh - 24px);
			padding-top: 16px;
		}
	}
</style>
