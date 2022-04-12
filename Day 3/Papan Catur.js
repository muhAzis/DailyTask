var ppnCatur = "";
var baris = 8;
var kolom = 8;

// baris
for(var i=0; i<baris; i++){
	// kolom
	for(var j=0; j<kolom; j++){
		// baris ganjil
		if(i%2==1){
			// kolom genap
			if(j%2==0){
				ppnCatur += "#";
			}
			// kolom ganjil
			else{
				ppnCatur += " ";
			}
		}
		// baris genap
		else{
			// kolom genap
			if(j%2==0){
				ppnCatur += " ";
			}
			// kolom ganjil
			else{
				ppnCatur += "#";
			}
		}
	}
	// new line
	ppnCatur += "\n";
}

console.log(ppnCatur);