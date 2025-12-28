<div class="info">
	<h1 class="title bold">Young Author's Anthology</h1>
	<p class="subtitle">A project for Washoe County Students by Washoe County students</p>
	<!-- <p style="margin-left: 25px;">Teacher? Click here.</p> -->
</div>
<div class="fire" bind:this={fireContainer}>
		<div class="flame" id="flame1"></div>
		<div class="flame" id="flame2"></div>
		<div class="flame" id="flame3"></div>
		<div class="log" id="log1"></div>
		<div class="log" id="log2"></div>
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
		div.style = `position: absolute; z-index: -1; left: calc(${position}% - ${size / 2}px); width: ${size}px; height: ${size}px; background: var(--${color}); border-radius: 50%; bottom: 15.5vw;`;
		div.animate([{}, { transform: "translateY(-100vh) scale(0.25)" }], lifetime);
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
		0%{
			width: 22vw;
		}
		50%{
			width: 21vw;
		}
		0%{
			width: 22vw;
		}
	}

	@keyframes cycle2{
		0%{
			width: 15vw;
		}
		50%{
			width: 14vw;
		}
		0%{
			width: 15vw;
		}
	}

	@keyframes cycle3{
		0%{
			width: 7.5vw;
		}
		50%{
			width: 6.75vw;
		}
		0%{
			width: 7.5vw;
		}
	}

	.flame{
		position: absolute;
		aspect-ratio: 1;
	}

	#flame1{
		background-color: var(--red);
		border-radius: 2.4vw;
		width: 22vw;
		transform-origin: bottom left;
		transform: rotateZ(-45deg) translate(0%, 0%);
		animation: ease-in-out cycle1 8s infinite;
		bottom: 2vw;
		left: 50%;
	}

	#flame2{
		background-color: var(--orange);
		border-radius: 1.6vw;
		width: 15vw;
		transform-origin: bottom left;
		transform: rotateZ(-45deg) translate(0%, 0%);
		animation: ease-in-out cycle2 7s infinite;
		bottom: 4vw;
		left: 50%;
	}

	#flame3{
		background-color: var(--yellow);
		border-radius: 0.8vw;
		width: 7.5vw;
		transform-origin: bottom left;
		transform: rotateZ(-45deg) translate(0%, 0%);
		animation: ease-in-out cycle3 5s infinite;
		bottom: 6vw;
		left: 50%;
	}

	.log{
		position: absolute;
		width: 24vw;
		height: 5vw;
		border-radius: 0.8vw;
		background: var(--brown);
		bottom: 3.6vw;
	}

	#log1{
		transform: rotateZ(20deg);
	}

	#log2{
		transform: rotateZ(-20deg);
		right: 0;
	}

	.info{
		position: absolute;
		width: 50vw;
		height: 60vh;
		left: 8vw;
		top: 50%;
		transform: translateY(-50%);
	}

	.title{
		font-size: 72px;
	}

	.subtitle{
		font-size: 42px;
	}

	.fire{
		position: absolute;
		width: 30vw;
		height: 33vw;
		right: 8vw;
		top: 50%;
		transform: translateY(-50%);
	}
</style>
