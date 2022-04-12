var input = 20;

for(var i=1; i<input+1; i++){
	// ganjil
	if(i%2==1){
		// jika kelipatan 3
		if(i%3==0){
			console.log(i+" - I Love Coding");
		}
		// jika bukan kelipatan 3
		else{
			console.log(i+" - Santai");
		}
	}
	// ggenap
	else{
		console.log(i+" - Berkualitas");
	}
}