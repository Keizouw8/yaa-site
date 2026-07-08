	<div class="landing">
		<div class="info">
		<h1 class="title bold">Young Author's Anthology</h1>
		<p class="subtitle">A project for Washoe County students by Washoe County students</p>
		<!-- <p style="margin-left: 25px;">Teacher? Click here.</p> -->
		</div>

<div class="logo-band">
    <div class="logo-track">
        <img src="/partners/Bannerbhmd_1.png" alt="Bannerbhmd_1">
        <span class="divider"></span>
        <img src="/partners/Brown.png" alt="Brown">
        <span class="divider"></span>
        <img src="/partners/caughlinranch.png" alt="caughlinranch">
        <span class="divider"></span>
        <img src="/partners/coral.png" alt="coral">
        <span class="divider"></span>
        <img src="/partners/Depoali.png" alt="Depoali">
        <span class="divider"></span>
        <img src="/partners/deserthigh.png" alt="deserthigh">
        <span class="divider"></span>
        <img src="/partners/DesertSkies.png" alt="DesertSkies">
        <span class="divider"></span>
        <img src="/partners/dilworth.png" alt="dilworth">
        <span class="divider"></span>
        <img src="/partners/doral.png" alt="doral">
        <span class="divider"></span>
        <img src="/partners/Hunsberger.png" alt="Hunsberger">
        <span class="divider"></span>
        <img src="/partners/MarceHerz.png" alt="MarceHerz">
        <span class="divider"></span>
        <img src="/partners/mater.png" alt="mater">
        <span class="divider"></span>
        <img src="/partners/Mendive.png" alt="Mendive">
        <span class="divider"></span>
        <img src="/partners/MountRose.png" alt="MountRose">
        <span class="divider"></span>
        <img src="/partners/Peavine.png" alt="Peavine">
        <span class="divider"></span>
        <img src="/partners/SageRidgeSchool.png" alt="SageRidgeSchool">
        <span class="divider"></span>
        <img src="/partners/SkyRanch.png" alt="SkyRanch">
        <span class="divider"></span>
        <img src="/partners/SparksMS.png" alt="SparksMS">
        <span class="divider"></span>
        <img src="/partners/swope.png" alt="swope">
        <span class="divider"></span> 
        
        <div class="logo-track-duplicate" aria-hidden="true" style="display: flex; align-items: center;">
            <img src="/partners/Bannerbhmd_1.png" alt="">
            <span class="divider"></span>
            <img src="/partners/Brown.png" alt="">
            <span class="divider"></span>
            <img src="/partners/caughlinranch.png" alt="">
            <span class="divider"></span>
            <img src="/partners/coral.png" alt="">
            <span class="divider"></span>
            <img src="/partners/Depoali.png" alt="">
            <span class="divider"></span>
            <img src="/partners/deserthigh.png" alt="">
            <span class="divider"></span>
            <img src="/partners/DesertSkies.png" alt="">
            <span class="divider"></span>
            <img src="/partners/dilworth.png" alt="">
            <span class="divider"></span>
            <img src="/partners/doral.png" alt="">
            <span class="divider"></span>
            <img src="/partners/Hunsberger.png" alt="">
            <span class="divider"></span>
            <img src="/partners/MarceHerz.png" alt="">
            <span class="divider"></span>
            <img src="/partners/mater.png" alt="">
            <span class="divider"></span>
            <img src="/partners/Mendive.png" alt="">
            <span class="divider"></span>
            <img src="/partners/MountRose.png" alt="">
            <span class="divider"></span>
            <img src="/partners/Peavine.png" alt="">
            <span class="divider"></span>
            <img src="/partners/SageRidgeSchool.png" alt="">
            <span class="divider"></span>
            <img src="/partners/SkyRanch.png" alt="">
            <span class="divider"></span>
            <img src="/partners/SparksMS.png" alt="">
            <span class="divider"></span>
            <img src="/partners/swope.png" alt="">
        </div>
    </div>
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
		position: relative;
		grid-template-columns: minmax(0, 1fr) minmax(240px, 0.75fr);
		gap: clamp(2rem, 6vw, 5.5rem);
		align-items: center;
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
		margin-top: 3rem;
	}

	.logo-band{
		position: absolute;
		top: -5rem;
		left: 0;
		width: 100%;
		background: var(--white);
		padding: 1rem 0;
		overflow: hidden;
		z-index: -10
	}

	.logo-track{
		display: flex;
		align-items: center;
		animation: scroll-logos 45s linear infinite;
		width: max-content;
	}

	.logo-track img{
		height: 90px;
		width: auto;
		object-fit: contain;
	}

	.divider{
		width: 1px;
		height: 40px;
		background: #ccc;
		margin: 0 1.5rem;
		flex-shrink: 0;
	}

	@keyframes scroll-logos{
		0%{ transform: translate3d(0, 0, 0); }
		100%{ transform: translate3d(-50%, 0, 0); }
	}

	.logo-track:hover{
		animation-play-state: paused;
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
		margin-top: 12rem; 
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
			transform: translateY(-10vh);
		}

		.fire{
			width: 30vw;
			transform: translateY(-10vh);
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
