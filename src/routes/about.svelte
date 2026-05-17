<div class="container">
	<div class="gallery controls" style="background-image: url('/photos/{currentImage}.png');">
		<button onclick={decrement}>&lt;</button>
		<button onclick={increment}>&gt;</button>
	</div>
	<center id="content">
		<p>The Young Author's Anthology of Northern Nevada is dedicated to motivating young writers. We want to give something to connect the district together that our team grew up in by generating a lifelong passion for creative writing in students. We allow all 4th through 8th graders interested to write a short story. However, our real secret is working directly with elementary and middle schools alike to push the program towards students. Lower income students might not be able to seek these opportunities themselves and so baking them into the curriculum is where the Young Author's Anthology strives. We hope that this program represents the dedication towards education that we've seen every parent, student, and school faculty member involved with the Young Author's Anthology embody. This program spreads best through word of mouth, and so if you are a school teacher, principal, or simply a parent or student involved at any middle school that does not currently have this program, please reach out to us at our <a href="#contact">contact page.</a> </p>
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
		position: relative;
		width: 100%;
		min-height: 100%;
		display: flex;
		flex-direction: column;
		gap: 2vw;
		align-items: center;
	}
	
	.gallery{
		flex: 1 1 280px;
		min-height: 220px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		background-color: rgba(0, 0, 0, 0.3);
		width: min(80%, 900px);
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

	#content p{
		margin: 0 auto;
		max-width: 950px;
	}

	@media (max-width: 700px), (max-height: 650px){
		div.container{
			align-items: stretch;
			gap: 1rem;
		}

		.gallery{
			width: 100%;
			max-height: 45svh;
		}

		.gallery button{
			height: 64px;
			width: 42px;
			font-size: 28px;
		}
	}

	@media (max-height: 540px){
		.gallery{
			min-height: 160px;
		}

		#content p{
			font-size: 15px;
			line-height: 1.32;
		}
	}
	
	/*#content{
		position: absolute;
		width: calc(100% - 16vw);
		right: 8vw;
		bottom: 8vw;
	}*/
</style>
