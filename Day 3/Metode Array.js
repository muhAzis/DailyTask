var input = ["0001","Roman Alamsyah","Bandar Lampung","21/05/1998","Membaca"];

function dataHandling2(a) {
	var arr = a;

	// memodifikasi data dengan splice()
	arr.splice(1,1, arr[1]+" Elsharawy");
	arr.splice(2,1, "Provinsi "+arr[2]);
	arr.splice(4,1, "SMA Internasional Metro");
	console.log(arr);

	var formatTgl = arr[3];
	var arrTgl = formatTgl.split("/");
	var tanggal = arrTgl[0];
	var bulan = arrTgl[1];
	var tahun = arrTgl[2];
	switch(bulan){
		case "01" :
			console.log("Januari");
			break;
		case "02" :
			console.log("Februari");
			break;
		case "03" :
			console.log("Maret");
			break;
		case "04" :
			console.log("April");
			break;
		case "05" :
			console.log("Mei");
			break;
		case "06" :
			console.log("Juni");
			break;
		case "07" :
			console.log("Juli");
			break;
		case "08" :
			console.log("Agustus");
			break;
		case "09" :
			console.log("September");
			break;
		case "10" :
			console.log("Oktober");
			break;
		case "11" :
			console.log("November");
			break;
		case "12" :
			console.log("Desember");
			break;
		default :
			console.log("Bulan yang anda masukkan salah!");
	}

	var newTgl = arrTgl.join("-");
	var sortTgl = arrTgl.sort(function(a,b){return a - b;});
	console.log(sortTgl.reverse());
	console.log(newTgl);

	var nama = arr[1];
	console.log(nama.slice(0,15));
}

dataHandling2(input);