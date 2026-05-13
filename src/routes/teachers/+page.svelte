<h1>For teachers</h1>
<div class="container">
	<iframe id="video" title="Young Authors Anthology teacher video" src="https://www.youtube.com/embed/{primaryVideo}?si=UxmilJ0ZLqMCQWpt&amp" frameborder="0" allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
	<div class="right">
		<p style="margin: 0px;">All 4th and 5th grade students can type and submit fiction short stories below 2000 words to our program! The top thirteen stories are then printed in the Young Authors' anthology book and sent to every elementary school in the district. This means that your friends can read your story and so can students from other schools in their libraries! On top of this, every entrant who submits a valid story, blurb, and first name will also be included in the opening pages of our anthology as appreciation for participating. Writing is powerful, and the ideas can spread like wildfire. We want to get more students interested in writing and aware of its importance by awarding writers with this recognition! </p>
		<p>When you submit a story to our program, you're an official author! Just like J.K Rowling (author of Harry Potter) or Rick Riordan (Author of Percy Jackson)!</p>
		<p>Ask parents for permission and teachers if you need any help with submitting through our Google Form. Please follow our guidelines for story submissions below.</p>
		<p>Students should check out the Young Author’s Anthology books in their school libraries.  If you are selected as a winner, we would kindly ask for a single photo of you and any authors who helped so it can be placed into the anthology.</p>
		<b>
			<p>Submission Requirements</p>
			<ol>
				<li>Under 2000 words</li>
				<li>Original and fictional works</li>
				<li>School Appropriate</li>
				<li>Teamwork is allowed! (Max 5 students per team)</li>
				<li>An "About Me" (50 word max) talking about why you decided to write so students can get to know a bit more about you!</li>
				<li>No AI generated content</li>
				<li>Illustrations are allowed, but should be school appropriate, fit on a 2 x 3 inch piece of paper. (Max 3 illustrations)</li>
			</ol>
		</b>
		<p>Entrants do have to submit a first name and an email to be notified if they have won. Winners will be asked if they want to have their full name and photo of themselves published, however this is not a requirement to being published! If you wish to stay anonymous, that does not affect your application!</p>
		<!-- position: absolute; bottom: 0; right: 43.5vw; transform: translateX(100%); -->
		<br>
		<p style="font-weight: 700;">
		Spring Submission: <a href="https://forms.gle/n4pKV2BzDVMkhEfV7">https://forms.gle/n4pKV2BzDVMkhEfV7</a>
		<br>Fall Submission: <a href="https://forms.gle/oPvN9hZEdjoEcWSt9">https://forms.gle/oPvN9hZEdjoEcWSt9</a>
		</p>
	</div>
</div>
<h2>Flyers</h2>
<div class="container">
	<center>
		<embed src="flyers/bw.pdf" type="application/pdf" id="pdfembed">
		<h3>For parents</h3>
	</center>
	<center>
		<embed src="flyers/fall.pdf" type="application/pdf" id="pdfembed">
		<h3>Fall</h3>
	</center>
	<center>
		<embed src="flyers/spring.pdf" type="application/pdf" id="pdfembed">
		<h3>Spring</h3>
	</center>
</div>
<!-- <h2>More Learning Materials</h2>
<div class="carousel">
	{#each videos as video}
		<iframe src="https://www.youtube.com/embed/{video}?si=UxmilJ0ZLqMCQWpt&amp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
	{/each}
</div> -->
<script lang="ts">
	let primaryVideo = "z73pqtpQRNA";
	let videos: string[] = ["qjiCTVFLrc0", "3vbJbPZpiTs", "hm3mJqJbLEo", "YbFAYk6y384", "ka6WQ-mwFbE", "CMgHRJiJnCw"];
</script>
<style>
	div.right{
		width: 43.5vw;
	}

	#pdfembed{
		width: 28vw;
		min-width: 0;
		height: 600px;
	}

	:global(body){
		padding: clamp(16px, 2vw, 32px) clamp(16px, 5vw, 64px);
	}

	div.container{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		position: relative;
		gap: clamp(16px, 3vw, 32px);
	}

	#video{
		max-height: 80vh;
		max-width: 43.5vw;
		width: 100vw;
		aspect-ratio: 16/9;
	}

	h3{
		margin: 10px;
	}

	@media (max-width: 900px){
		div.container{
			flex-direction: column;
		}

		div.right{
			width: 100%;
		}

		#video{
			width: 100%;
			max-width: 100%;
			max-height: none;
		}

		#pdfembed{
			width: 100%;
			height: 70svh;
			min-height: 420px;
		}
	}

	@media (max-height: 560px){
		#pdfembed{
			height: 80svh;
			min-height: 260px;
		}
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
