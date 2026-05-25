<style>
#container{
	display: flex;
        width: 100%;
        gap: 20px; 
}
#fall, #spring {
        flex: 1; 
        display: flex;
        flex-direction: column; 
        align-items: center;  
    }
	img {
		transition: .2s; 

		cursor: pointer;
	}
	img:hover{ 
		transition: .2s; 
		scale: 1.1;
		transform: rotate(7deg);
	}
</style>
<div id="container">
<div id="fall">
<h1>Fall - October 31st </h1> 
<img src="/fall.png" onclick= {() => window.open('https://forms.gle/n4pKV2BzDVMkhEfV7', '_blank')}>
</div>
<div id="spring">
<h1>Spring - April 30th </h1> 
<img src="/spring.png" onclick= {() => window.open('https://forms.gle/oPvN9hZEdjoEcWSt9', '_blank')}>
</div>
</div>