<div class="landing">
	<div class="info">
		<h1 class="title bold">Young Author's Anthology</h1>
		<p class="subtitle">A project for Washoe County students by Washoe County students</p>
		<!-- <p style="margin-left: 25px;">Teacher? Click here.</p> -->
	</div>
	<div class="fire" bind:this={fireContainer}>
		<div class="flame" id="flame1"></div>
		<div class="flame" id="flame2"></div>
		<div class="flame" id="flame3"></div>
		<div class="log" id="log1"></div>
		<div class="log" id="log2"></div>
	</div>
</div>
<script lang="ts">
	import { onMount } from "svelte";

	let fireContainer: HTMLDivElement;

	onMount(spawnSpark);

	function spawnSpark(){
		let color = ["red", "orange", "yellow"][Math.round(Math.random() * 2.98 - 0.49)];
		let position = Math.random() * 86 + 7;
		let size = Math.random() * 20 + 40;
		let lifetime = Math.random() * 10000 + 10000;

		let div = document.createElement("div");
		div.style = `position: absolute; z-index: 0; left: calc(${position}% - ${size / 2}px); width: ${size}px; height: ${size}px; background: var(--${color}); border-radius: 50%; bottom: 42%;`;
		div.animate([{}, { transform: "translateY(-70svh) scale(0.25)" }], lifetime);
		fireContainer.append(div);

		setTimeout(() => div.remove(), lifetime);
		setTimeout(spawnSpark, Math.random() * 1000 + 1000);
	}
</script>
<style>
	*{
		color: var(--white);
	}

	@keyframes cycle1{
		0%,
		100%{
			width: 72%;
		}
		50%{
			width: 69%;
		}
	}

	@keyframes cycle2{
		0%,
		100%{
			width: 49%;
		}
		50%{
			width: 46%;
		}
	}

	@keyframes cycle3{
		0%,
		100%{
			width: 25%;
		}
		50%{
			width: 22%;
		}
	}

	.landing{
		min-height: inherit;
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(240px, 0.75fr);
		gap: clamp(2rem, 6vw, 5.5rem);
		align-items: center;
		overflow: hidden;
		isolation: isolate;
	}

	.flame{
		position: absolute;
		z-index: 1;
		aspect-ratio: 1;
	}

	#flame1{
		background-color: var(--red);
		border-radius: 11%;
		width: 72%;
		transform-origin: bottom left;
		transform: rotateZ(-45deg) translate(0%, 0%);
		animation: ease-in-out cycle1 8s infinite;
		bottom: 7%;
		left: 50%;
	}

	#flame2{
		background-color: var(--orange);
		border-radius: 11%;
		width: 49%;
		transform-origin: bottom left;
		transform: rotateZ(-45deg) translate(0%, 0%);
		animation: ease-in-out cycle2 7s infinite;
		bottom: 13%;
		left: 50%;
	}

	#flame3{
		background-color: var(--yellow);
		border-radius: 12%;
		width: 25%;
		transform-origin: bottom left;
		transform: rotateZ(-45deg) translate(0%, 0%);
		animation: ease-in-out cycle3 5s infinite;
		bottom: 20%;
		left: 50%;
	}

	.log{
		position: absolute;
		z-index: 2;
		width: 78%;
		height: 14%;
		border-radius: 10%;
		background: var(--brown);
		bottom: 9%;
	}

	#log1{
		left: 10%;
		transform: rotateZ(20deg);
	}

	#log2{
		transform: rotateZ(-20deg);
		right: 10%;
	}

	.info{
		position: relative;
		z-index: 2;
		max-width: 640px;
	}

	.title{
		font-size: clamp(3rem, 6vw, 72px);
		line-height: 0.95;
		margin: 0 0 0.35em;
	}

	.subtitle{
		font-size: clamp(1.5rem, 3.5vw, 42px);
		line-height: 1.1;
	}

	.fire{
		position: relative;
		z-index: 1;
		justify-self: center;
		width: clamp(220px, 28vw, 400px);
		aspect-ratio: 10 / 11;
		overflow: visible;
		pointer-events: none;
	}

	@media (min-width: 761px) and (min-height: 541px) and (min-aspect-ratio: 4 / 5){
		.landing{
			width: 100vw;
			margin-left: calc(50% - 50vw);
			padding: 0 8vw;
			grid-template-columns: 50vw 30vw;
			gap: 4vw;
		}

		.info{
			max-width: none;
		}

		.fire{
			width: 30vw;
		}
	}

	@media (max-width: 760px), (max-aspect-ratio: 4 / 5){
		.landing{
			grid-template-columns: 1fr;
			grid-template-rows: auto 1fr;
			gap: clamp(1.5rem, 5svh, 3rem);
			align-items: start;
			padding-top: var(--nav-height);
		}

		.title{
			font-size: clamp(2.2rem, 11vw, 4.5rem);
		}

		.subtitle{
			font-size: clamp(1.15rem, 6vw, 2rem);
			max-width: 14em;
		}

		.fire{
			width: clamp(190px, 62vw, 340px);
			align-self: center;
		}
	}

	@media (max-height: 540px) and (orientation: landscape){
		.landing{
			grid-template-columns: minmax(0, 1fr) minmax(180px, 0.6fr);
			gap: clamp(1.25rem, 4vw, 3rem);
			padding-top: 36px;
		}

		.title{
			font-size: clamp(2.2rem, 5.4vw, 4rem);
		}

		.subtitle{
			font-size: clamp(1.1rem, 2.7vw, 1.9rem);
		}

		.fire{
			width: clamp(180px, 24vw, 260px);
		}
	}
</style>
