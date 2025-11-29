<div class="container">
	<div>
		<h1>Let's get in touch!</h1>
		<p>To any Elementary Schools interested in partnership with our program, please email <a href="mailto:info@domain.com">info@domain.com</a>. We will respond within 7 business days.</p>
		<p>Any 4th and 5th grader is allowed to submit through our digital form. Partnered schools would have a student arrive at their school introducing the project and handing physical flyers to students. We appreciate all the support we can get for this project! Partnered schools and their students do not get an advantage in the judging process. All submissions will be reviewed equally.</p>
	</div>
	<div class="contacts">
		<a class="contact" href="mailto:info@domain.com">
			<Fa color="var(--black)" size=1.4x icon={faEnvelope} />
			<span>info@domain.com</span>
		</a>
		<a class="contact" href="https://www.instagram.com">
			<Fa color="var(--black)" size=1.5x icon={faInstagramSquare} />
			<span>YoungAuthorsAnthology</span>
		</a>
	</div>
	<button class="sendMemo" onclick={() => showMemo = true}>Send a memo</button>
</div>
<div class="blur{ showMemo ? " active" : "" }" onclick={() => showMemo = false}></div>
<div class="memo{ showMemo ? " active" : "" }">
	<div class="topbar">
		<input class="fullname" type="text" placeholder="Full name">
		<input class="email" type="email" placeholder="Email">
		<button>Send</button>
	</div>
	<textarea placeholder={"Hi Ishan!\n\nYou're insanely hot\n\nXOXO,\nYour biggest fan ❤️"}></textarea>
</div>
<script lang="ts">
	import Fa from "svelte-fa";
	import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
	import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

	let showMemo = $state(false);
</script>
<style>
	.blur{
		opacity: 0;
		pointer-events: none;
		position: absolute;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		background: rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(5px);
		cursor: pointer;
		transition: opacity 0.5s;
	}

	.blur.active{
		opacity: 1;
		pointer-events: all;
	}

	.sendMemo{
		position: absolute;
		bottom: 0;
		right: 0;
	}

	button{
		border: none;
		outline: none;
		background: var(--black);
		color: var(--white);
		padding: 12px;
		font-size: 18px;
		border-radius: 5px;
		cursor: pointer;
	}

	.topbar{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.topbar input{
		padding: 5px 0px;
		outline: none;
		border: none;
		background: none;
		border-bottom: 2px solid var(--black);
		font-size: 20px;
	}

	input.fullname{
		width: calc(30% - 10px);
	}

	input.email{
		width: calc(70% - 100px);
	}

	::placeholder{
		color: var(100, 100, 100);
	}

	textarea{
		padding: 0;
		margin-top: 10px;
		height: calc(100% - 67px);
		width: calc(100%);
		resize: none;
		outline: none;
		border: none;
		background: none;
		font-family: Inter;
		color: var(--black);
		font-size: 16px;
	}

	.container{
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		left: 50%;
		height: calc(100vh - 300px);
		width: 75vw;
	}

	.memo{
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: calc(60vw - 200px);
		height: calc(100vh - 340px);
		border: 2px solid var(--black);
		padding: 20px;
		border-radius: 15px;
		pointer-events: none;
		opacity: 0;
		transition: opacity 0.5s;
		background: var(--white);
		position: absolute;
	}

	.memo.active{
		opacity: 1;
		pointer-events: all;
	}

	h1{
		font-size: 40px;
		margin-top: 0;
	}

	.contacts{
		font-size: 20px;
	}

	.contact{
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 10px;
		color: var(--black);
		text-decoration: none;
		width: fit-content;
	}

	.contact span{
		margin-left: 10px;
		width: fit-content;
		position: relative;
	}

	.contact span::after{
		content: " ";
		position: absolute;
		top: 100%;
		left: 0;
		height: 2px;
		background: var(--black);
		width: 100%;
		opacity: 0;
		transition: opacity 0.25s;
	}

	.contact span:hover::after{
		opacity: 1;
	}

</style>
