<svelte:window onresize={setHeights}></svelte:window>
<div class="wrapper">
	<div class="qas">
		{#each questions as [question, answer], i}
			{#if i}
				<hr>
			{/if}
			<button type="button" class="qa{ active == i ? " active" : "" }" style="--qheight: {heights[i]?.[0]}px; --aheight: {heights[i]?.[1]}px;" onclick={() => active = i} >
				<span class="show">∨</span>
				<span class="q" bind:this={qElems[i]}>{question}</span>
				<span class="a" bind:this={aElems[i]}>{@html answer}</span>
			</button>
		{/each}
</div>
<span class="contactus">If you have any other questions, <a class="contact" href="#contact">contact us</a>!</span>
</div>
<script lang="ts">
	let active = $state(0);
	let qElems: HTMLSpanElement[] = $state([]);
	let aElems: HTMLSpanElement[] = $state([]);
	let heights: [number, number][] = $state([]);

	$effect(setHeights);

	let questions: [string, string][] = [
		["I'm a school faculty member such as a principal, ELA department lead, or counselor who's interested in bringing this program into our Washoe County school, what do I do?", 
			"Part of our mission is to bring this program as close to a student's attention as possible. It allows for conversations to begin opening up between parents and their students or staff and their students about how to pursue their education outside a classroom. We would love to add your school to our list of partnered schools, so please reach out either through our <a href='#contact'>contact us</a> page or at info@yaareno.org."
		],

		["What genres do we submit?",
			"Anything fiction goes! All submissions have to be school-appropriate, under 2000 words, and the author's original work, but genre does not affect the likelihood of selection. We want any story that is complex and shows an understanding of writing. Our rubric grades on strong prose, few grammatical errors, and an imaginative plot. We accept submissions in both Spanish and English, and will make content and grammar changes as needed even for our winning stories."],
		["What if I don’t win? What then?",
			"This program is not simply focused on recognizing creative writers but also to recognize people who want to write. Famous authors have dozens of stories about how their work was rejected by hundreds of publishers and agents before being accepted. To better show our admiration for everyone who participates in this event, all students who submit valid submissions according to our guidelines will have their names produced in the Editor’s Note on our anthology."],
		["Do winners receives a copy of this anthology?",
			" All winners and partnered schools will receive a copy of our anthology when its available."],
		["Do I have to submit a photo if I am selected as a winner?",
			"We want to respect the privacy of any applicant who submits. While we will ask for a first and last name on our form, the photos are only asked of our winning entrants and is completely optional. We use stock pictures for anonymous winners. That being said, we want to give new students entering their elementary or middle school a way to see their alumni from their school and the work they made! Please submit a photo if you are comfortable, but it will not affect your placement into the anthology. "],
		["How is judging conducted?",
			"We have a judging team that works in two rounds. The initial round simply looks at stories and then determines which to pass and which ones to not to pass. Afterwards, we enter some of those stories into a second round where we decide our 13 winners. Most of our judges are high school students, and we make sure to remove any identifying information from stories before giving them to our judges."]
	];

	function setHeights(){
		heights = qElems.map((q, i) => [q.getBoundingClientRect().height, aElems[i].getBoundingClientRect().height]);
	}
</script>
<style>
	.wrapper{
		min-height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 24px;
	}

	.qas{
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.qa{
		position: relative;
		display: block;
		width: 100%;
		height: var(--qheight);
		overflow-y: hidden;
		transition: height 0.2s;
		cursor: pointer;
		border: none;
		padding: 0;
		background: none;
		color: var(--black);
		font: inherit;
		text-align: left;
	}

	.qa.active{
		height: calc(var(--qheight) + var(--aheight) + 15px);
	}

	.show{
		position: absolute;
		right: 20px;
		top: 20px;
		font-size: 30px;
		transform: translate(50%, -50%) rotateZ(90deg);
	}

	.show{
		position: absolute;
		right: 20px;
		top: 20px;
		font-size: 30px;
		transform: translate(50%, -50%) rotateZ(0deg);
		transition: transform 0.2s;
	}

	hr{
		width: 100%;
		color: var(--black);
		margin: 15px 0;
	}

	.qa.active .show{
		transform: translate(50%, -50%) rotateZ(180deg);
	}

	.q{
		font-weight: bold;
		font-size: 25px;
		display: block;
	}

	.a{
		font-size: 18px;
		margin-top: 10px;
		display: block;
		transition: opacity 0.3s 0.2s;
		opacity: 0;
		cursor: text;
	}

	.qa.active .a{
		opacity: 1;
	}

	.contactus{
		font-size: 18px;
	}

	.contact{
		cursor: pointer;
		text-decoration: underline;
	}

	@media (max-width: 700px), (max-height: 650px){
		.wrapper{
			justify-content: flex-start;
			gap: 18px;
		}

		.q{
			font-size: clamp(18px, 5vw, 25px);
			padding-right: 36px;
		}

		.a{
			font-size: 16px;
		}

		.show{
			right: 8px;
		}

		.contactus{
			font-size: 16px;
		}
	}

	@media (max-height: 540px){
		hr{
			margin: 10px 0;
		}

		.a{
			font-size: 15px;
			line-height: 1.32;
		}
	}
</style>
