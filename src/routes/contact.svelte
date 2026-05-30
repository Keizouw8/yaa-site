<div class="container">
	<div>
		<h1>Let's get in touch!</h1>
		<p>For any questions or if you are a school that wants to partner with us, please email <a href="mailto:info@yaareno.org">info@yaareno.org</a>. We will respond within 7 business days.</p>
		<p>Any 4th-8th grader is allowed to submit through our digital submission link. Partnered schools simply help us spread the word of the program and we send students over to give presentations to their students! We appreciate all the support we can get for this project, and hope that it can be one of many movements forward by the students of Washoe county to give back to their district!</p>
	</div>
	<div class="contacts">
		<a class="contact" href="mailto:info@yaareno.org">
			<Fa color="var(--black)" size=1.4x icon={faEnvelope} />
			<span>info@yaareno.org</span>
		</a>
		<a class="contact" href="https://www.instagram.com/yaa_reno/">
			<Fa color="var(--black)" size=1.5x icon={faInstagramSquare} />
			<span>@yaa_reno</span>
		</a>
	</div>
	<button class="sendMemo" onclick={() => showMemo = true}>Send a memo</button>
</div>
<button type="button" aria-label="Close memo" class="blur{ showMemo ? " active" : "" }" onclick={() => showMemo = false}></button>
<div class="memo{ showMemo ? " active" : "" }">
	<div class="topbar">
		<input class="fullname" type="text" placeholder="Full name" bind:value={fullName}>
		<input class="email" type="email" placeholder="Email" bind:value={email}>
		<button onclick={sendMemo}>Send</button>
	</div>
	<textarea placeholder={"Memo"} bind:value={memo}></textarea>
</div>
<script lang="ts">
	import Fa from "svelte-fa";
	import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
	import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

	let showMemo = $state(false);
	let fullName = $state("");
	let email = $state("");
	let memo = $state("");

	function sendMemo() {
		const body = [`Name: ${fullName}`, `Email: ${email}`, "", memo].join("\n");
		window.location.href = `mailto:info@yaareno.org?subject=${encodeURIComponent("Memo from YAA site")}&body=${encodeURIComponent(body)}`;
	}
</script>
<style>
	.blur{
		opacity: 0;
		pointer-events: none;
		position: fixed;
		z-index: 20;
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
		align-self: flex-end;
	}

	button:not(.blur){
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
		color: rgb(100, 100, 100);
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
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 24px;
		min-height: 100%;
		width: min(75vw, 960px);
		margin: 0 auto;
	}

	.memo{
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: min(720px, calc(100vw - 40px));
		height: min(520px, calc(100svh - 40px));
		border: 2px solid var(--black);
		padding: 20px;
		border-radius: 10px;
		pointer-events: none;
		opacity: 0;
		transition: opacity 0.5s;
		background: var(--white);
		position: fixed;
		z-index: 21;
	}

	.memo.active{
		opacity: 1;
		pointer-events: all;
	}

	h1{
		font-size: clamp(2rem, 4vw, 40px);
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
		max-width: 100%;
		width: fit-content;
	}

	.contact span{
		margin-left: 10px;
		width: fit-content;
		position: relative;
		overflow-wrap: anywhere;
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

	@media (max-width: 700px), (max-height: 650px){
		.container{
			width: 100%;
			min-height: auto;
			justify-content: flex-start;
			gap: 18px;
		}

		.contacts{
			font-size: 16px;
		}

		.topbar{
			flex-wrap: wrap;
			gap: 10px;
		}

		input.fullname, input.email{
			width: 100%;
		}

		.topbar input{
			font-size: 16px;
		}

		.topbar button{
			width: 100%;
		}

		textarea{
			height: calc(100% - 150px);
		}
	}

</style>
