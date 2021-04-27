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