<div class="left">
	<div>
		<h1>Let's get in touch!</h1>
		<p>To any Elementary Schools interested in partnership with our program, please email <a href="mailto:info@domain.com">info@domain.com</a>. I will respond within 7 business days.</p>
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
</div>
<div class="right">
	<div class="topbar">
		<input type="text" placeholder="Full name">
		<input type="email" placeholder="Email">
	</div>
	<textarea placeholder={"Hi Ishan!\n\nYou're insanely hot\n\nXOXO,\nYour biggest fan ❤️"}></textarea>
	<button>Send</button>
</div>
<script lang="ts">
	import Fa from "svelte-fa";
	import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
	import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
</script>
<style>
	p a{
		color: var(--orange);
	}

	.topbar{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.topbar input{
		width: calc(50% - 10px);
		padding: 5px 0px;
		outline: none;
		border: none;
		background: none;
		border-bottom: 2px solid var(--black);
		font-size: 20px;
	}

	::placeholder{
		color: var(100, 100, 100);
	}

	.right button{
		position: absolute;
		bottom: 20px;
		right: 20px;
		border: none;
		outline: none;
		background: var(--black);
		color: var(--white);
		padding: 8px;
		font-size: 15px;
		border-radius: 5px;
		cursor: pointer;
	}

	textarea{
		padding: 0;
		height: calc(100% - 57px);
		resize: none;
		outline: none;
		border: none;
		background: none;
		font-family: Inter;
		color: var(--black);
		font-size: 16px;
	}

	.left, .right{
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.left{
		left: 100px;
		height: calc(100vh - 300px);
		width: calc(40vw - 110px);
	}

	.right{
		right: 100px;
		width: calc(60vw - 200px);
		height: calc(100vh - 340px);
		border: 2px solid var(--black);
		padding: 20px;
		border-radius: 5px;
	}

	h1{
		font-size: 60px;
		margin-top: 0;
	}

	p{
		font-size: 20px;
	}

	.contacts{
		font-size: 22px;
	}

	.contact{
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 10px;
		color: var(--black);
		text-decoration: none;
	}

	.contact span{
		margin-left: 10px;
	}
</style>
