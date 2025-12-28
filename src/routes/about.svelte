<div id="content">
	<p>The Young Author’s Anthology of Northern Nevada is dedicated to motivating young writers towards reading and writing, making it a lifelong passion, and becoming future authors. This is an endeavor by a team of local high school students to help get elementary students more interested in pursuing writing.
	<br>
	<br>
	We allow all 4th and 5th graders interested to write a short story that follows our Terms and Conditions. There is no discrimination regarding topic or writing style. We only look for school appropriate, original (no AI generated content), and prose based fiction. That is, fiction that reads like a novel. Unfortunately, we cannot accept picture, graphic, or comic novels as winners but would still love to read them!
	<br>
	<br>
	Thirteen stories will be selected from the submission pool to be printed in a physical and digital anthology that will be sent back to the libraries of the winners and the schools listed below! All 4th and 5th graders are allowed to submit and schools interested in joining the partnership can refer to our Contact Us page for more information.</p>
</div>
<embed src="flyers/spring.pdf" type="application/pdf" id="pdfembed">
<button id="reveal" onclick={() => videoActive = true}>Show Video</button>
{#if videoActive}
	<div id="shadow" onclick={() => videoActive = false}></div>
	<iframe id="video" src="https://www.youtube.com/embed/_vh-0EBqgR0?si=UxmilJ0ZLqMCQWpt&amp&autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
{/if}
<script lang="ts">
	let videoActive = $state(true);
</script>
<style>
	#reveal{
		position: absolute;
		bottom: 5vw;
		right: 5vw;
		border: none;
		outline: none;
		background: var(--black);
		color: var(--white);
		padding: 12px;
		font-size: 18px;
		border-radius: 5px;
		cursor: pointer;
	}

	@keyframes blurin{
		from{
			background-color: rgba(0, 0, 0, 0);
			backdrop-filter: blur(0px);
		}
		to{
			background-color: rgba(0, 0, 0, 0.25);
			backdrop-filter: blur(5px);
		}
	}

	#shadow{
		top: 0;
		left: 0;
		position: absolute;
		height: 100%;
		width: 100%;
		animation: blurin forwards 0.25s;
	}

	#video{
		position: absolute;
		top: 50%;
		left: 50%;
		height: 80%;
		width: 80%;
		transform: translate(-50%, -50%);
	}

	#pdfembed{
		position: absolute;
		height: calc(100% - 10vw);
		width: calc(40% - 5vw);
		left: 5vw;
		top: 5vw;
	}

	#content{
		position: absolute;
		width: calc(60% - 10vw);
		right: 5vw;
		top: 5vw;
	}
</style>
