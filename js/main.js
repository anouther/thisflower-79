
    onload = () => {
      const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");

        const titles = ('Happy 3d mensive, Sayangku.').split('');
        const titleElement = document.getElementById('title');
        let index = 0;

 function play() {
          //Link Audio Bisa Diganti
          var audio = new Audio('anchor.mp3');
          audio.play();
        }

        function appendTitle() {
          if (index < titles.length) {
            titleElement.innerHTML += titles[index];
            index++;
            setTimeout(appendTitle, 300); // 300ms delay per huruf
          } else {
            // Setelah teks utama selesai, tambahkan subtitle kecil
            const subtitle = document.createElement('p');
            subtitle.innerText = "Happy 3rd mensive, sayang. Tiga bulan ini sudah ngajarin aku banyak hal tentang kamu, tentang kita, dan gimana caranya saling ngerti. Aku tau, pasti ada masa-masa kita bosan atau bingung mau ngapain lagi, tapi aku percaya itu bagian dari perjalanan kita untuk lebih baik lagi. Kalau selama ini aku pernah bikin kamu kecewa atau nggak nyaman, aku minta maaf. Aku selalu berusaha jadi yang terbaik buat kamu. Terima kasih sudah sabar, selalu ada, dan bikin aku ngerasa dicintai. Ini baru awal, dan aku harap kita terus bertahan dan tumbuh bareng. Aku sayang kamu.";
            subtitle.style.fontSize = '20px'; // Ukuran font lebih kecil
            subtitle.style.marginTop = '2px'; // Spasi antara teks utama dan subtitle
            subtitle.style.color = '#fff'; // Warna abu-abu untuk teks subtitle

            // Menambahkan subtitle di bawah #title
            titleElement.appendChild(subtitle);
          }
        }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
