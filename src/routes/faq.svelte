<svelte:window onresize={setHeights}></svelte:window>
<div class="qas">
	{#each questions as [question, answer], i}
		{#if i}
			<hr>
		{/if}
		<div class="qa{ active == i ? " active" : "" }" style="--qheight: {heights[i]?.[0]}px; --aheight: {heights[i]?.[1]}px;" onclick={() => active = i} >
			<span class="show">∨</span>
			<span class="q" bind:this={qElems[i]}>{question}</span>
			<span class="a" bind:this={aElems[i]}>{answer}</span>
		</div>
	{/each}
</div>
<span class="contactus">If you have any other questions, <a class="contact" onclick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>contact us</a>!</span>
<script lang="ts">
	let active = $state(0);
	let qElems: HTMLSpanElement[] = $state([]);
	let aElems: HTMLSpanElement[] = $state([]);
	let heights: [number, number][] = $state([]);

	$effect(setHeights);
	$inspect(heights);

	let questions: [string, string][] = [
		["Are Partnered Schools Given Preference When Students Submit?",
			"Not at all! Partnered schools are only to help show support for our program. Students from our team will go to their schools at the beginning of each competition year to give a short presentation so more elementary schoolers are aware of who we are. They will not receive judging preference when submitting, everyone is reviewed equally."],
		["What Genres Do We Submit?",
			"Anything goes! All submissions have to be school appropriate with their content but genre does not affect likelihood of selection. We want stories that are complex and show an understanding of writing through strong prose, few grammatical errors, and imaginative plot."],
		["What if I Don’t Win? What then?",
			"This program is not simply focused on recognizing creative writers but also to recognize people who want to write. Famous authors have dozens of stories about how their work was rejected by hundreds of publishers and agents before being accepted. To better show our admiration for everyone who participates in this event, all students who submit valid submissions according to our guidelines will have their names produced in the Editor’s Note on our anthology."],
		["Who Receives A Copy of This Anthology?",
			"All winners will have their school libraries receive a copy. Partnered schools are given special exception where their school library will also be given a copy so more students can be inspired to submit again in the following competition term!"],
		["Are These Copies Only Physical?",
			"Not at all! Physical copies are distributed across schools in Reno as per our policies listed above. However, a digital copy from each term will always be available for viewing on this website in our Winners section."],
		["Do I Have to Submit a Photo if I Am Selected as a Winner?",
			"We want to respect the privacy of any applicants who submit. While we will ask for a first and last name on our form, the photo is completely optional. Any anonymous winners will have a stock photo instead of their own picture. That being said, we want to give new students entering Elementary School the opportunity to see alumni from their school and the work they made! Please submit a photo if you are comfortable, but it will not affect chances of selection."],
		["How is Judging Conducted?",
			"We have a six-member judging team that will review each story and average our scores to determine placement. The name and photo of the student is purposefully omitted before we conduct a review to make sure we are only evaluating the story itself. For this reason, we ask in our Submission Guidelines that the name(s) or photo(s) of the entrant(s) are not placed into the short story document. Thank you."]
	];

	function setHeights(){
		heights = qElems.map((q, i) => [q.getBoundingClientRect().height, aElems[i].getBoundingClientRect().height]);
	}
</script>
<style>
	.qas{
		display: flex;
		flex-direction: column;
	}

	.qa{
		position: relative;
		height: var(--qheight);
		overflow-y: hidden;
		transition: height 0.2s;
		cursor: pointer;
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
		margin: 20px 0;
	}

	.qa.active .show{
		transform: translate(50%, -50%) rotateZ(180deg);
	}

	.q{
		font-weight: bold;
		font-size: 30px;
		display: block;
	}

	.a{
		font-size: 20px;
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
		font-size: 25px;
		position: absolute;
		bottom: 50px;
	}

	.contact{
		font-weight: bold;
		cursor: pointer;
		text-decoration: underline;
	}
</style>
