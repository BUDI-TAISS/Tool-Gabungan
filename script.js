// Algoritma game suit jawa
const suitJawa = function() {
    for(lagi = true; lagi == true; lagi = confirm('Main lagi bang?')) {
        // menangkap pilihan player
        var  player = prompt('Silakan pilih gajah, semut, atau orang')
        // alert(player)
        // mengkap pilihan komputer
        // membangkitkan bilangan random
            comp = Math.random()
            if(comp < 0.3) {
                comp = 'gajah'
            } else if(comp <= 0.65 ) {
                comp = 'semut'
            } else {
                comp = 'orang'
            }
        
        // menentukan rules
            if(player != null && player != '') {
                if(player == comp) {
                    hasil = 'SERI'
                } else if(player == 'gajah') {
                    if(comp == 'semut') {
                     hasil = 'KALAH' 
                    } else {
                        hasil = 'MENANG'
                    }
                } else if(player == 'orang') {
                    if(comp == 'gajah') {
                        hasil = 'KALAH'
                    } else {
                        hasil = 'MENANG'
                    } 
                } else if(player == 'semut') {
                    if(comp == 'gajah') {
                        hasil = 'MENANG'
                    }  else {
                        hasil = 'KALAH'
                    }
                   
                    }  else {
                       
                        lainnya = hasil = 'Inputan yang anda masukkan tidak di data kami ' 
                    }
                    
                    hasil
            } else if(player == '') {
                hasil = 'Maaf, anda tidak memilih apapun'
            } 
            // alert(player)
           // menampilkan hasil
           if(player != null && player != '') {
           if( player == 'gajah' || player == 'orang' || player == 'semut') {
            alert('Anda memilih '+ player+' dan komputer memilih '+comp+ '\nmaka anda dinyatakan '+hasil)
           } else {
               alert(hasil)
           }
        
        
            } else if(player == '' ) {
               alert(hasil)
           }
        //    alert(lainnya)
        
            } 
        
            alert('Terima kasih telah bermain')        
}
const tombol1 = document.getElementById('suit-jawa')
tombol1.onclick = suitJawa

// Algoritma game tebak angka
const tebakAngka = function() {
        // Membuat perulangan untuk mereset nilai dari jawaban agar permainan dapat berjalan baik
        for(i = true; i ==true; i = confirm('Mau main lagi kak?')) {
            // Membangkitkan angka random sebagai jawaban permainan
        var jawaban = Math.random()
    
        if(jawaban <= 0.1) {
        jawaban = 1
        } else if(jawaban <= 0.2) {
        jawaban = 2
        } else if(jawaban <= 0.3) {
        jawaban = 3
        } else if(jawaban <= 0.4) {
        jawaban = 4
        } else if(jawaban <= 0.5) {
        jawaban = 5
        } else if(jawaban <= 0.6) {
        jawaban = 6
        } else if(jawaban <= 0.7) {
        jawaban = 7
        } else if(jawaban <= 0.8) {
        jawaban = 8
        } else if(jawaban <= 0.9) {
        jawaban = 9
        } else {
        jawaban = 10
        }
    
         //Membuat popup awal sebagai pembuka permainan
        alert('Coba tebak angka dari 1 - 10\nKamu punya 3 kesempatan')
    
        // Membuat perulangan yang berperan sebagai nyawa atau kesempatan bermain
        for(i = 3; i >= 1; i--) {
            kesempatan = i-1
        //Menangkap jawaban tebakan dari pemain
        tebakan = prompt('Masukkan angka tebakan')
        //Membuat penanganan apabila tebakan pemain tidak sesuai harapan 
        if(tebakan == '') {
            alert('Maaf anda tidak menjawab apapun')
            i = i + 1
        } else if(tebakan == null){
            i = -1
        }
        //Membuat aturan permainan
        if(tebakan != '' && tebakan != null) {
            if(tebakan == jawaban ) {
                alert('Anda benar\nAngka yang dicari adalah '+jawaban)
                i = -1
                } else if(tebakan < jawaban) {
                    if(kesempatan == 0) {
                        alert('Tebakan anda terlalu rendah\nKesempatan anda sudah habis')
                    } else {
                        alert('Tebakan anda terlalu rendah\nAnda masih memiliki kesempatan '+kesempatan+' kali')
                    }
                } else {
                    if(kesempatan == 0) {
                        alert('Tebakan anda terlalu tinggi\nKesempatan anda sudah habis')
                    } else {
                        alert('Tebakan anda terlalu tinggi\nAnda masih memiliki kesempatan '+kesempatan+' kali')
                    }
                
                }
        }
    
        }
        if(i == 0) {
            alert('Maaf anda kalah. Angka yang dicari adalah '+jawaban)
        }
        // alert('Nilai dari i adalah '+i)
        }
    
        alert("Terima kasih telah bermain")
}
const tombol2 = document.getElementById('tebak-angka')
tombol2.addEventListener('click', tebakAngka)

// Algortima untuk  alat cek bilangan prima
let bilPrima = function() {
    var lagi = true
//Menggunakan keyword while
// while(lagi ) {
//     var angka = prompt('Masukkan angka yang mau dicek:');

//     if(angka  != 0 && angka > 1 && angka % 2 != 0 && angka % 3 !=0 && angka % 4 != 0) {
//         alert(angka + ' adalah bilangan prima')
//     } else if(angka == 2 || angka == 3) {
//         alert(angka + ' adalah bilangan prima')
    
//     } else {
//         alert(angka + ' bukan prima')
//     }
//     lagi = confirm("Coba lagi??")
// }

//Mengunakan keyword for



for(i = true; i; i = confirm("Coba lagi??")
) {
    var angka = prompt('Masukkan angka yang mau dicek:')
    var verify = angka / 1 == angka
    
    if(angka  != 0 && angka > 1 && angka % 2 != 0 && angka % 3 !=0 && angka % 4 != 0 && verify) {
        alert(angka + ' adalah bilangan prima')
    } else if(angka == 2 || angka == 3) {
        alert(angka + ' adalah bilangan prima')
    } else if(angka == '') {
        alert('Anda tidak memasukkan apapun')
    } else if(angka === null) {
        i = false
    } else if( !verify) {
        alert('Yang bener dong bang, suruh masukkin angka malah string hadehh')
        // alert(verify)
    } 
    // } else if(typeof(angka) == string) {
    //     alert('Yang bener dong bang, suruh masukkin angka malah string hadehh')
    // } 
    else {
        alert(angka + ' bukan prima')
    }

}

alert('Terimakasih telah menggunakan alat kami:)')
}
const tombol3 = document.querySelector('#bil-prima')
