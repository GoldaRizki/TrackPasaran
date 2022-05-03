
// ini sebagai inputan
tanggal = 18;
bulan = 2;
tahun = 1926;

t = new Date();
//tanggalSekarang = t.getDate();
//bulanSekarang = t.getMonth() + 1;
//tahunSekarang = t.getFullYear();

tanggalSekarang = 29;
bulanSekarang = 2;
tahunSekarang = 2020;

bulanArr = [31,28,31,30,31,30,31,31,30,31,30,31];
hariArr = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
pasaranArr = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"];

document.write(tahunSekarang);

lebih = true;



hitungHari = 0;
selisihTahun = tahunSekarang - tahun;



if(!(tanggalSekarang == 29 && bulanSekarang == 2)){
    alert("javanese hood niggas 12 : Fek gak ril");
    if(tahunSekarang - tahun >= 2){
    
        if((tanggalSekarang >=29 && bulanSekarang == 2) || bulanSekarang > 2){
    
                for(i=1; i<selisihTahun ; i++){
    
                    if(tahunSekarang % 4 == 0){
                        hitungHari += 366%7;
                    }else{
                        hitungHari += 365%7;
                    }
                    tahunSekarang--;
    
                    
    
                }
    
        }else{
    
                for(j=1; j<selisihTahun ; j++){
    
                    if((tahunSekarang-1) % 4 > 0){
                        hitungHari += 365%7;
                       
                    }else{
                        hitungHari += 366%7;
                    }
                    tahunSekarang--;
    
                }
    
    
            }
    
    }
    
    if(tahunSekarang - tahun == 1){
    
        if((tanggalSekarang >= tanggal && bulanSekarang == bulan) || bulanSekarang > bulan){
            if((tanggalSekarang >=29 && bulanSekarang == 2) || bulanSekarang > 2){
                if((tahunSekarang) % 4 == 0){
                    hitungHari += 366%7;
                }else{
                    hitungHari += 365%7;
                }
            }else{
                if((tahunSekarang-1) % 4 > 0){
                    hitungHari += 365%7;
                }else{
                    hitungHari += 366%7;
                   
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
                    hitungHari += 365%7;
                }else{
                    if(tglTemp == 28){
                        hitungHari += 365%7;
                    }else if(tglTemp == 29){
                        hitungHari += 366%7;
                        tglTemp = 28;
                        alert("loopuing ke "+ i);
                    }
                }
                tahunSekarang--;    

            }
    
      
    }
    
    if(tahunSekarang - tahun == 1){
    
        if((tanggalSekarang >= tanggal && bulanSekarang == bulan) || bulanSekarang > bulan){
            if((tahunSekarang-1)%4 == 0){
                tglTemp = 29;
                hitungHari += 365%7;
            }else{
                if(tglTemp == 28){
                    hitungHari += 365%7;
                }else if(tglTemp == 29){
                    hitungHari += 366%7;
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
    document.write("<br>");
    for(k = 0; k < selisihBulan-1 ; k++){
        bulanTemp--;
        if(bulanTemp == 0){
            bulanTemp = 12;
            tahunSekarang--;
   
        }
        
        if((tahunSekarang % 4 == 0) && bulanTemp == 2){
            hitungHari += 29%7;
        }else{
            hitungHari += bulanArr[bulanTemp-1]%7;
           
        }
        document.write(bulanTemp + " ");
    

    }
    selisihBulan = 1;
    

}

if(selisihBulan == 1){
        
        bulanTemp = bulanTemp - 1;
        
        if(bulanTemp == 0){
            bulanTemp = 12;
            tahunSekarang--;
            
        }
        document.write(bulanTemp + " ");
        document.write("<br>");


        if((tahunSekarang % 4 == 0) && bulanTemp == 2){
            hariBulan = 29;
        }else{
            hariBulan = bulanArr[bulanTemp-1];

        }

        hitungHari += (tanggalSekarang + (hariBulan - tanggal)) % 7;
      
    

}

selisihTanggal = 0;

if(selisihBulan == 0){
    if(tanggalSekarang > tanggal){
        selisihTanggal = tanggalSekarang - tanggal;
        hitungHari += selisihTanggal % 7;


    }else if(tanggalSekarang < tanggal){
        if((tahunSekarang % 4 == 0) && bulanTemp == 2){
            hariBulan = 29;
        }else{
            hariBulan = bulanArr[bulanTemp-1];
        }
        selisihTanggal = hariBulan - tanggal;
        hitungHari += (selisihTanggal % 7);
    }

    
    
}


sisaHari = hitungHari % 7;


//hariCounter = t.getDay()+1;
hariCounter = 7;
//hariCounter = 1; // diambil dari perhitungan pasaran dengan tanggal 1 jan 22 sebagai patokan
p = sisaHari;

while (p>0) {
    hariCounter--;
    if (hariCounter == 0) {
        hariCounter = 7;
    }
    p--;
}

document.write("<br>inputan " + tanggal + "/" + bulan + "/" + tahun + "<br>");
document.write("<br>tahun sekarang adalah " + tahunSekarang + "<br>");
document.write("jumlah hari " + hitungHari%7 + "<br>");   
document.write("hari " + hariArr[hariCounter-1] + "<br>"); 
//document.writeln("pasaran: "+ hariCounter +"<br>"); 
//document.writeln("Pasaran: " + pasaranArr[hariCounter-1]);