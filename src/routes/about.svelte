<div class="container">
	<div class="gallery controls" style="background-image: url('/photos/{currentImage}.png');">
		<button onclick={decrement}>&lt;</button>
		<button onclick={increment}>&gt;</button>
	</div>
	<center id="content">
		<p>The Young Author’s Anthology of Northern Nevada is dedicated to motivating young writers towards reading and writing, making it a lifelong passion, and becoming future authors.
		We allow all 4th and 5th graders interested to write a short story that follows our Terms and Conditions. There is no discrimination regarding topic or writing style. We only look for school appropriate, original (no AI generated content), and prose based fiction.
		Thirteen stories will be selected from the submission pool to be printed in a physical and digital anthology that will be sent back to the libraries of the winners and the schools listed below! All 4th and 5th graders are allowed to submit and schools interested in joining the partnership can refer to our Contact Us page for more information.</p>
	</center>
</div>
<script lang="ts">
	let currentImage = $state(1);
	let length = 9;
	let currentTimeout: number | undefined = undefined;
	
	increment();
	
	function increment(){
		clearTimeout(currentTimeout);
		currentImage++;
		if(currentImage > length) currentImage = 1;
		currentTimeout = setTimeout(increment, 5000);
	}
	
	function decrement(){
		clearTimeout(currentTimeout);
		currentImage--;
		if(currentImage < 1) currentImage = length;
		currentTimeout = setTimeout(increment, 5000);
	}
</script>
<style>
	.controls{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	div.container{
		position: absolute;
		width: calc(100% - 16vw);
		height: calc(100% - 10vw);
		top: 5vw;
		left: 8vw;
		display: flex;
		flex-direction: column;
		gap: 2vw;
		align-items: center;
	}
	
	.gallery{
		flex: 1;
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		background-color: rgba(0, 0, 0, 0.3);
		width: 80%;
		border: solid black 2px;
	}
	
	.gallery button{
		height: 100px;
		width: 50px;
		font-weight: 900;
		font-size: 40px;
		color: white;
		border: none;
		outline: none;
		background: rgba(0, 0, 0, 0.6);
		cursor: pointer;
	}
	
	/*#content{
		position: absolute;
		width: calc(100% - 16vw);
		right: 8vw;
		bottom: 8vw;
	}*/
</style>
