<div class="container">
	<div class="left">
		<h1>For teachers</h1>
		<iframe id="video" src="https://www.youtube.com/embed/{primaryVideo}?si=UxmilJ0ZLqMCQWpt&amp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
	</div>
	<div class="right">
			<p>Students should check out the Young Author’s Anthology books in their school libraries. Ask parents for permission and teachers if you need any help with submitting through our Google Form. If you are selected as a winner, we would kindly ask for a photo of all authors so it can be placed into the anthology. We want people to get to know more about you through the photo and blurb even years after you graduate from your elementary school.</p>
			<b>
				<p>Submission Requirements</p>
				<ol>
					<li>Under 2000 words</li>
					<li>Original and fictional works</li>
					<li>School Appropriate</li>
				</ol>
			</b>
	</div>
</div>
<h2>More Learning Materials</h2>
<div class="carousel">
	{#each videos as video}
		<iframe src="https://www.youtube.com/embed/{video}?si=UxmilJ0ZLqMCQWpt&amp" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
	{/each}
</div>
<script lang="ts">
	let primaryVideo = "_vh-0EBqgR0";
	let videos: string[] = ["qjiCTVFLrc0", "3vbJbPZpiTs", "hm3mJqJbLEo", "YbFAYk6y384", "ka6WQ-mwFbE", "CMgHRJiJnCw"];
</script>
<style>
	:global(body){
		padding: 5vw;
	}

	div.container{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	div.right{
		width: 43.5vw;
	}

	#video{
		max-height: 80vh;
		max-width: 43.5vw;
		width: 100vw;
		aspect-ratio: 16/9;
	}

	div.carousel{
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
	}
</style>
