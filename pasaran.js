
// Masukkan tanggal lahir kedalam variabel ini...    //

//

inputTanggal = 6;   // Masukkan tanggal lahir disini
inputBulan = 3;     // Masukkan bulan lahir disini (antara 1-12)
inputTahun = 2020;  // Masukkan tahun lahir disini

//

// -------------------------------------------------//

//t = new Date();
//tanggalSekarang = t.getDate();
//bulanSekarang = t.getMonth() + 1;
//tahunSekarang = t.getFullYear();
tanggalSekarang = 1;
bulanSekarang = 1;
tahunSekarang = 2022;

check = false;

if((inputBulan > bulanSekarang && inputTahun == tahunSekarang) || inputTahun > tahunSekarang){
    tanggal = tanggalSekarang;
    bulan = bulanSekarang;
    tahun = tahunSekarang;

    tanggalSekarang = inputTanggal;
    bulanSekarang = inputBulan;
    tahunSekarang = inputTahun;
    check = true;
   
}else{
    tanggal = inputTanggal;
    bulan = inputBulan;
    tahun = inputTahun;
}

bulanArr = [31,28,31,30,31,30,31,31,30,31,30,31];
hariArr = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
pasaranArr = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"];

jumlahHari = 5;




hitungHari = 0;
selisihTahun = tahunSekarang - tahun;



if(!(tanggalSekarang == 29 && bulanSekarang == 2)){

    if(tahunSekarang - tahun >= 2){
    
        if((tanggalSekarang >=29 && bulanSekarang == 2) || bulanSekarang > 2){
    
                for(i=1; i<selisihTahun ; i++){
    
                    if(tahunSekarang % 4 == 0){
                        hitungHari += 366%jumlahHari;
                    }else{
                        hitungHari += 365%jumlahHari;
                    }
                    tahunSekarang--;
    
                    
    
                }
    
        }else{
    
                for(j=1; j<selisihTahun ; j++){
    
                    if((tahunSekarang-1) % 4 > 0){
                        hitungHari += 365%jumlahHari;
                       
                    }else{
                        hitungHari += 366%jumlahHari;
                    }
                    tahunSekarang--;
    
                }
    
    
            }
    
    }
    
    if(tahunSekarang - tahun == 1){
    
        if((tanggalSekarang >= tanggal && bulanSekarang == bulan) || bulanSekarang > bulan){
            if((tanggalSekarang >=29 && bulanSekarang == 2) || bulanSekarang > 2){
                if((tahunSekarang) % 4 == 0){
                    hitungHari += 366%jumlahHari;
                }else{
                    hitungHari += 365%jumlahHari;
                }
            }else{
                if((tahunSekarang-1) % 4 > 0){
                    hitungHari += 365%jumlahHari;
                }else{
                    hitungHari += 366%jumlahHari;
                   
                }
            }
            tahunSekarang--;
           
        }
    
        
        
    }
}else{
   
    tglTemp = tanggalSekarang;

    if(tahunSekarang - tahun >= 2){
    
    
            for(i=1; i<selisihTahun ; i++){

                if((tahunSekarang-1)%4 == 0){
                    tglTemp = 29;
                    hitungHari += 365%jumlahHari;
                }else{
                    if(tglTemp == 28){
                        hitungHari += 365%jumlahHari;
                    }else if(tglTemp == 29){
                        hitungHari += 366%jumlahHari;
                        tglTemp = 28;
                    }
                }
                tahunSekarang--;    

            }
    
      
    }
    
    if(tahunSekarang - tahun == 1){
    
        if((tanggalSekarang >= tanggal && bulanSekarang == bulan) || bulanSekarang > bulan){
            if((tahunSekarang-1)%4 == 0){
                tglTemp = 29;
                hitungHari += 365%jumlahHari;
            }else{
                if(tglTemp == 28){
                    hitungHari += 365%jumlahHari;
                }else if(tglTemp == 29){
                    hitungHari += 366%jumlahHari;
                    tglTemp = 28;
                }
            }
            tahunSekarang--;
           
        }
    
        
        
    }
tanggalSekarang = tglTemp;

}

// menghitung hari dari sisa bulan

selisihBulan = 0;
bulanTemp = bulanSekarang;
 
if(bulanSekarang > bulan){      

        selisihBulan = bulanSekarang - bulan;  

}else if(bulanSekarang < bulan){    

        selisihBulan = 12 - (bulan - bulanSekarang);
        
}

if(selisihBulan >= 2){
   
    for(k = 0; k < selisihBulan-1 ; k++){
        bulanTemp--;
        if(bulanTemp == 0){
            bulanTemp = 12;
            tahunSekarang--;
   
        }
        
        if((tahunSekarang % 4 == 0) && bulanTemp == 2){
            hitungHari += 29%jumlahHari;
        }else{
            hitungHari += bulanArr[bulanTemp-1]%jumlahHari;
           
        }
      
    

    }
    selisihBulan = 1;
    

}

if(selisihBulan == 1){
        
        bulanTemp = bulanTemp - 1;
        
        if(bulanTemp == 0){
            bulanTemp = 12;
            tahunSekarang--;
            
        }
      


        if((tahunSekarang % 4 == 0) && bulanTemp == 2){
            hariBulan = 29;
        }else{
            hariBulan = bulanArr[bulanTemp-1];

        }

        hitungHari += (tanggalSekarang + (hariBulan - tanggal)) % jumlahHari;
      
    

}

selisihTanggal = 0;

if(selisihBulan == 0){
    if(tanggalSekarang > tanggal){
        selisihTanggal = tanggalSekarang - tanggal;
        hitungHari += selisihTanggal % jumlahHari;


    }else if(tanggalSekarang < tanggal){
        jmlTemp = 0;
        selisihTanggal = tanggal - tanggalSekarang;
        if(tahunSekarang % 4 == 0){
            if((tanggalSekarang >=29 && bulanSekarang == 2) || bulanSekarang > 2){
                jmlTemp = 366;
            }else{
                jmlTemp = 365;
            }
        }else{
            if((tahunSekarang-1) % 4 == 0){
                if((tanggalSekarang >=29 && bulanSekarang == 2) || bulanSekarang > 2){
                    //365
                    jmlTemp = 365;
                    
           
                }else{
                    //366
                    jmlTemp = 366;
                    
                }
            }else{
                jmlTemp = 365;
            }

        
        }
        
        hitungHari += (jmlTemp - selisihTanggal)%jumlahHari;
       tahunSekarang--;
       
    }

    
    
}


sisaHari = hitungHari % jumlahHari;


//hariCounter = t.getDay()+1;
hariCounter = 1;
//hariCounter = 1; // diambil dari perhitungan pasaran dengan tanggal 1 jan 22 sebag ai patokan
p = sisaHari;

if(!check){

 // sek durung rampung
    while (p>0) {
        hariCounter--;
        if (hariCounter == 0) {
            hariCounter = jumlahHari;
        }
        p--;
    }
}else{
    // sek durung rampung
    while (p>0) {
        hariCounter++;
        if (hariCounter == jumlahHari+1) {
            hariCounter = 1;
        }
        p--;
    }
    
}

document.write("<h1>Track Pasaran</h1>")
document.write("<br>inputan " + inputTanggal + "/" + inputBulan + "/" + inputTahun + "<br>");
//document.write("sisa hari " + hitungHari%jumlahHari + "<br>");   
document.write("<br><b>Pasaran :  " + pasaranArr[hariCounter-1] + "</b><br>"); 
document.writeln("<br>");
//document.writeln("*Hanya bisa menghitung tanggal lahir sebelum 1 januari 2022");
//document.writeln("pasaran: "+ hariCounter +"<br>"); 
//document.writeln("<br>");
//document.writeln("<b>Hari :  " + hariArr[hariCounter-1] + "</b><br></br>");