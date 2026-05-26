<style>
#container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    gap: 20px; 
    box-sizing: border-box;
}
#fall, #spring {
    width: 400px; 
    display: flex;
    flex-direction: column; 
    align-items: center;  
    justify-content: center;
    border: 2px solid black;
    padding: 20px;
	margin: 35px;
	border-radius: 25px; 
    box-sizing: border-box;
}
#leaf, #flower {
    max-height: 300px;
    width: auto;
}
#fall h1, #fall p, #spring h1, #spring p {
    margin: 10px 0 0 0;
}

@media (max-width: 768px) {
    #container {
        flex-direction: column;
        align-items: center;
    }
}
button{ 
	cursor: pointer; 
	padding: 10px; 
	font-size: 20px; 
	border-radius: 12px; 
	background-color: maroon; 
	color: white; 
	border: none; 
	width: 80%; 
	font-weight: bold; 
	margin-top: 10px; 
}
</style>

<div id="container">
    <div id="fall">
        <img src="/fall.png" id="leaf">
        <h1>Fall Term</h1>
        <p>Submission Deadline: October 31st</p> 
		<button onclick={() => window.open('https://forms.gle/oPvN9hZEdjoEcWSt9', '_blank')}>Submit for Fall ↓</button> 
    </div>
    <div id="spring">
        <img src="/spring.png" id="flower">
        <h1>Spring Term</h1>
        <p>Submission Deadline: April 30th</p>
		<button onclick={() =>window.open('https://forms.gle/n4pKV2BzDVMkhEfV7', '_blank')}>Submit for Spring ↓</button> 
    </div>
</div>