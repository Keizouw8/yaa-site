<h1>For teachers</h1>
<p>Students should check out the Young Author’s Anthology books in their school libraries. Ask parents for permission and teachers if you need any help with submitting through our Google Form. If you are selected as a winner, we would kindly ask for a photo of all authors so it can be placed into the anthology.</p>
<iframe id="video" src="https://www.youtube.com/embed/{primaryVideo}?si=UxmilJ0ZLqMCQWpt&amp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
<h2>Submission</h2>
<div class="container">
	<embed src="flyers/combined.pdf" type="application/pdf" id="pdfembed">
	<div>
		<p>The Young Author’s Anthology of Northern Nevada is dedicated to motivating young writers towards reading and writing, making it a lifelong passion, and becoming future authors. This is an endeavor by a team of local high school students to help get elementary students more interested in pursuing writing.</p>
		<p>We allow all 4th and 5th graders interested to write a short story that follows our Terms and Conditions. There is no discrimination regarding topic or writing style. We only look for school appropriate, original (no AI generated content), and prose based fiction. That is, fiction that reads like a novel. Unfortunately, we cannot accept picture, graphic, or comic novels as winners but would still love to read them!</p>
		<p>Thirteen stories will be selected from the submission pool to be printed in a physical and digital anthology that will be sent back to the libraries of the winners and the schools listed below!</p>
		<p>On the Google Form, students should submit their first name, a short blurb about themself below 50 words, and their short story along with their title to be entered for consideration. Winners will be notified via their email provided on the form and asked to submit an optional photo and their last name if they have not already.</p>
		<b>
			<p>Submission Requirements</p>
			<ol>
				<li>Under 2000 words</li>
				<li>Original and fictional works</li>
				<li>School Appropriate</li>
			</ol>
		</b>
	</div>
	<p style="font-weight: 700; position: absolute; bottom: 0; left: 450px;">
	Spring Submission: <a href="https://forms.gle/n4pKV2BzDVMkhEfV7">https://forms.gle/n4pKV2BzDVMkhEfV7</a>
	<br>Fall Submission: <a href="https://forms.gle/oPvN9hZEdjoEcWSt9">https://forms.gle/oPvN9hZEdjoEcWSt9</a>
	</p>
</div>
<!-- <h2>More Learning Materials</h2>
<div class="carousel">
	{#each videos as video}
		<iframe src="https://www.youtube.com/embed/{video}?si=UxmilJ0ZLqMCQWpt&amp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
	{/each}
</div> -->
<script lang="ts">
	let primaryVideo = "_vh-0EBqgR0";
	let videos: string[] = ["qjiCTVFLrc0", "3vbJbPZpiTs", "hm3mJqJbLEo", "YbFAYk6y384", "ka6WQ-mwFbE", "CMgHRJiJnCw"];
</script>
<style>
	#pdfembed{
		min-width: 400px;
		height: 600px;
		margin-right: 50px;
	}

	:global(body){
		padding: 5vw;
	}

	div.container{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		position: relative;
	}

	#video{
		max-height: 80vh;
		max-width: 43.5vw;
		width: 100vw;
		aspect-ratio: 16/9;
	}

	/*div.carousel{
		position: relative;
		width: 95vw;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		overflow-x: scroll;
	}

	div.carousel iframe{
		height: 250px;
		aspect-ratio: 16/9;
		margin-right: 20px;
	}*/
</style>
