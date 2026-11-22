// // // ==========================================
// // // FRUIT CATCHER GAME
// // // TypeScript + Canvas API
// // // Pola kode mengikuti pembelajaran main_bela.ts
// // // ==========================================


// // ==========================================
// // 1. DATA AWAL PERMAINAN
// // ==========================================

// // Menyimpan posisi dan ukuran keranjang.
// let keranjang = {
//     x: 170,
//     y: 350,
//     width: 60,
//     height: 25
// };

// // Menyimpan posisi dan ukuran buah.
// let buah = {
//     x: 200,
//     y: 30,
//     size: 20
// };


// // ==========================================
// // 2. DEKLARASI VARIABEL PERMAINAN
// // ==========================================

// const namaPemain: string = "Pemain";

// let skor: number = 0;
// let nyawa: number = 3;
// let kecepatanBuah: number = 3;

// let gameOver: boolean = false;
// let sedangPause: boolean = false;
// let permainanDimulai: boolean = false;

// let intervalGame: number | undefined;


// // ==========================================
// // 3. MENGHUBUNGKAN CANVAS
// // ==========================================

// const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
// const ctx = canvas.getContext("2d")!;


// // ==========================================
// // 4. MENGATUR ARAH GERAK KERANJANG
// // ==========================================

// // Variabel arah menyimpan arah gerak keranjang.
// let arah = "";

// window.addEventListener("keydown", (e) => {

//     if (!permainanDimulai || gameOver || sedangPause) return;

//     if (e.key === "ArrowLeft") {
//         arah = "kiri";

//     } else if (e.key === "ArrowRight") {
//         arah = "kanan";
//     }

//     // Mencegah halaman ikut bergulir saat tombol panah ditekan.
//     if (e.key.startsWith("Arrow")) {
//         e.preventDefault();
//     }
// });

// // Menghentikan gerakan ketika tombol panah dilepas.
// window.addEventListener("keyup", (e) => {

//     if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
//         arah = "";
//     }
// });


// // ==========================================
// // 5. FUNGSI MENGGAMBAR PERMAINAN
// // ==========================================

// // Menggambar background.
// function gambarBackground() {

//     ctx.fillStyle = "lightblue";
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
// }

// // Menggambar keranjang.
// function gambarKeranjang() {

//     ctx.fillStyle = "brown";

//     ctx.fillRect(
//         keranjang.x,
//         keranjang.y,
//         keranjang.width,
//         keranjang.height
//     );
// }

// // Menggambar buah.
// function gambarBuah() {

//     ctx.fillStyle = "red";

//     ctx.fillRect(
//         buah.x,
//         buah.y,
//         buah.size,
//         buah.size
//     );
// }

// // Menampilkan skor dan nyawa.
// function tampilkanStatus() {

//     ctx.fillStyle = "black";
//     ctx.font = "16px Arial";
//     ctx.textAlign = "left";

//     ctx.fillText("Pemain: " + namaPemain, 10, 20);
//     ctx.fillText("Skor: " + skor, 10, 40);
//     ctx.fillText("Nyawa: " + nyawa, 10, 60);
// }

// // Menggambar seluruh tampilan permainan.
// function gambarPermainan() {

//     gambarBackground();
//     gambarKeranjang();
//     gambarBuah();
//     tampilkanStatus();
// }


// // ==========================================
// // 6. RESET POSISI PERMAINAN
// // ==========================================

// function resetPosisi() {

//     // Mengembalikan keranjang ke bagian bawah tengah Canvas.
//     keranjang.x = (canvas.width - keranjang.width) / 2;
//     keranjang.y = canvas.height - 50;

//     // Mengembalikan buah ke bagian atas dengan posisi X acak.
//     buah.x = Math.floor(Math.random() * (canvas.width - buah.size));
//     buah.y = 0;

//     arah = "";
// }


// // ==========================================
// // 7. PROSES GAME OVER
// // ==========================================

// function prosesGameOver() {

//     gameOver = true;
//     permainanDimulai = false;

//     if (intervalGame !== undefined) {
//         clearInterval(intervalGame);
//         intervalGame = undefined;
//     }

//     tampilkanGameOver();
// }


// // ==========================================
// // 8. FUNGSI GERAK KERANJANG
// // ==========================================

// function gerakKeranjang() {

//     // Menggerakkan keranjang ke kiri.
//     if (arah === "kiri" && keranjang.x > 0) {
//         keranjang.x -= 10;

//     // Menggerakkan keranjang ke kanan.
//     } else if (
//         arah === "kanan" &&
//         keranjang.x + keranjang.width < canvas.width
//     ) {
//         keranjang.x += 10;
//     }
// }


// // ==========================================
// // 9. FUNGSI GERAK BUAH
// // ==========================================

// function gerakBuah() {

//     // Buah bergerak turun dengan menambah koordinat Y.
//     buah.y += kecepatanBuah;

//     // Memeriksa apakah buah tertangkap keranjang.
//     if (
//         buah.x < keranjang.x + keranjang.width &&
//         buah.x + buah.size > keranjang.x &&
//         buah.y < keranjang.y + keranjang.height &&
//         buah.y + buah.size > keranjang.y
//     ) {

//         // Skor bertambah 10 ketika buah tertangkap.
//         skor += 10;

//         console.log("Buah tertangkap!");
//         console.log("Skor:", skor);

//         // Memindahkan buah ke posisi baru secara acak.
//         buah.x = Math.floor(Math.random() * (canvas.width - buah.size));
//         buah.y = 0;

//     } else if (buah.y + buah.size >= canvas.height) {

//         // Nyawa berkurang jika buah jatuh dan tidak tertangkap.
//         nyawa--;

//         console.log("Buah terlewat!");
//         console.log("Nyawa tersisa:", nyawa);

//         // Memindahkan buah kembali ke atas.
//         buah.x = Math.floor(Math.random() * (canvas.width - buah.size));
//         buah.y = 0;

//         // Memeriksa apakah nyawa sudah habis.
//         if (nyawa <= 0) {
//             prosesGameOver();
//         }
//     }
// }


// // ==========================================
// // 10. MENAMPILKAN GAME OVER
// // ==========================================

// function tampilkanGameOver() {

//     ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     ctx.fillStyle = "white";
//     ctx.font = "30px Arial";
//     ctx.textAlign = "center";

//     ctx.fillText(
//         "GAME OVER",
//         canvas.width / 2,
//         canvas.height / 2
//     );

//     ctx.font = "16px Arial";

//     ctx.fillText(
//         "Skor Akhir: " + skor,
//         canvas.width / 2,
//         canvas.height / 2 + 30
//     );

//     ctx.textAlign = "left";
// }


// // ==========================================
// // 11. GAME LOOP
// // ==========================================

// function gameLoop() {

//     if (!permainanDimulai || sedangPause || gameOver) {
//         return;
//     }

//     // Membersihkan tampilan sebelumnya.
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // Memanggil fungsi gerak.
//     gerakKeranjang();
//     gerakBuah();

//     // Menggambar ulang seluruh objek.
//     if (!gameOver) {
//         gambarPermainan();
//     }
// }


// // ==========================================
// // 12. FUNGSI MULAI PERMAINAN
// // ==========================================

// function mulaiPermainan() {

//     // Menghentikan interval sebelumnya jika masih berjalan.
//     if (intervalGame !== undefined) {
//         clearInterval(intervalGame);
//         intervalGame = undefined;
//     }

//     // Mengatur ulang nilai permainan.
//     skor = 0;
//     nyawa = 3;
//     kecepatanBuah = 3;

//     gameOver = false;
//     sedangPause = false;
//     permainanDimulai = true;

//     // Mengembalikan posisi objek.
//     resetPosisi();

//     // Menggambar tampilan awal permainan.
//     gambarPermainan();

//     // Menjalankan Game Loop setiap 50 milidetik.
//     intervalGame = window.setInterval(gameLoop, 50);
// }


// // ==========================================
// // 13. MENGHUBUNGKAN TOMBOL MULAI
// // ==========================================

// const tombolMulai = document.getElementById("mulai");

// tombolMulai?.addEventListener("click", mulaiPermainan);


// // Menampilkan tampilan awal sebelum permainan dimulai.
// gambarPermainan();

// // ===============================ADVANCED FEATURES===============================
// // FRUIT CATCHER - VERSI PENGEMBANGAN
// // Tetap memakai pola: data, variabel, canvas, event, function, if, for, array.

// // let keranjang = { x: 190, y: 440, width: 75, height: 25 };

// // let daftarBuah = [
// //     { x: 80, y: 40, size: 22, speed: 3, color: "red" },
// //     { x: 220, y: 100, size: 22, speed: 4, color: "orange" },
// //     { x: 350, y: 10, size: 22, speed: 3.5, color: "purple" }
// // ];

// // const namaPemain: string = "Irul";
// // let skor: number = 0;
// // let nyawa: number = 3;
// // let levelGame: number = 1;
// // let gameOver: boolean = false;
// // let permainanDimulai: boolean = false;
// // let intervalGame: number | undefined;

// // const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
// // const ctx = canvas.getContext("2d")!;

// // let arah = "";

// // window.addEventListener("keydown", (e) => {
// //     if (!permainanDimulai || gameOver) return;
// //     if (e.key === "ArrowLeft") {
// //         arah = "kiri";
// //     } else if (e.key === "ArrowRight") {
// //         arah = "kanan";
// //     }
// //     if (e.key.startsWith("Arrow")) e.preventDefault();
// // });

// // window.addEventListener("keyup", (e) => {
// //     if (e.key === "ArrowLeft" || e.key === "ArrowRight") arah = "";
// // });

// // // Menggambar latar langit, awan, dan tanah.
// // function gambarBackground() {
// //     const gradasi = ctx.createLinearGradient(0, 0, 0, canvas.height);
// //     gradasi.addColorStop(0, "#83d5ff");
// //     gradasi.addColorStop(1, "#eafaff");
// //     ctx.fillStyle = gradasi;
// //     ctx.fillRect(0, 0, canvas.width, canvas.height);

// //     ctx.fillStyle = "rgba(255,255,255,0.9)";
// //     ctx.beginPath();
// //     ctx.arc(80, 85, 20, 0, Math.PI * 2);
// //     ctx.arc(105, 75, 27, 0, Math.PI * 2);
// //     ctx.arc(132, 87, 19, 0, Math.PI * 2);
// //     ctx.fill();

// //     ctx.beginPath();
// //     ctx.arc(300, 145, 18, 0, Math.PI * 2);
// //     ctx.arc(325, 132, 25, 0, Math.PI * 2);
// //     ctx.arc(350, 145, 18, 0, Math.PI * 2);
// //     ctx.fill();

// //     ctx.fillStyle = "#78bd65";
// //     ctx.fillRect(0, canvas.height - 12, canvas.width, 12);
// // }

// // function gambarKeranjang() {
// //     ctx.fillStyle = "#9b552b";
// //     ctx.fillRect(keranjang.x, keranjang.y, keranjang.width, keranjang.height);
// //     ctx.fillStyle = "#633719";
// //     ctx.fillRect(keranjang.x - 4, keranjang.y, keranjang.width + 8, 6);

// //     ctx.strokeStyle = "#f1c27d";
// //     ctx.lineWidth = 3;
// //     for (let i = 1; i <= 3; i++) {
// //         let posisiGaris = keranjang.x + i * 18;
// //         ctx.beginPath();
// //         ctx.moveTo(posisiGaris, keranjang.y + 7);
// //         ctx.lineTo(posisiGaris, keranjang.y + 22);
// //         ctx.stroke();
// //     }
// // }

// // function gambarBuah(buah: { x: number; y: number; size: number; speed: number; color: string }) {
// //     ctx.fillStyle = buah.color;
// //     ctx.beginPath();
// //     ctx.arc(buah.x, buah.y, buah.size / 2, 0, Math.PI * 2);
// //     ctx.fill();

// //     ctx.strokeStyle = "#654321";
// //     ctx.lineWidth = 3;
// //     ctx.beginPath();
// //     ctx.moveTo(buah.x, buah.y - buah.size / 2);
// //     ctx.lineTo(buah.x + 3, buah.y - buah.size / 2 - 7);
// //     ctx.stroke();

// //     ctx.fillStyle = "#238b45";
// //     ctx.beginPath();
// //     ctx.ellipse(buah.x + 7, buah.y - buah.size / 2 - 5, 6, 3, -0.5, 0, Math.PI * 2);
// //     ctx.fill();
// // }

// // function tampilkanStatus() {
// //     // Informasi skor, nyawa, dan level ditampilkan pada kotak HTML di luar Canvas.
// //     const playerName = document.getElementById("playerName");
// //     const scoreValue = document.getElementById("scoreValue");
// //     const lifeValue = document.getElementById("lifeValue");
// //     const levelValue = document.getElementById("levelValue");

// //     if (playerName) playerName.textContent = namaPemain;
// //     if (scoreValue) scoreValue.textContent = String(skor);
// //     if (lifeValue) lifeValue.textContent = "❤️".repeat(nyawa);
// //     if (levelValue) levelValue.textContent = String(levelGame);
// // }

// // function gambarPermainan() {
// //     gambarBackground();
// //     daftarBuah.forEach((buah) => gambarBuah(buah));
// //     gambarKeranjang();
// //     tampilkanStatus();
// // }

// // function resetPosisi() {
// //     keranjang.x = (canvas.width - keranjang.width) / 2;
// //     keranjang.y = canvas.height - 45;
// //     daftarBuah = [
// //         { x: 80, y: 40, size: 22, speed: 3, color: "red" },
// //         { x: 220, y: 100, size: 22, speed: 4, color: "orange" },
// //         { x: 350, y: 10, size: 22, speed: 3.5, color: "purple" }
// //     ];
// //     arah = "";
// // }

// // function gerakKeranjang() {
// //     if (arah === "kiri" && keranjang.x > 0) {
// //         keranjang.x -= 9;
// //     } else if (arah === "kanan" && keranjang.x + keranjang.width < canvas.width) {
// //         keranjang.x += 9;
// //     }
// // }

// // function buatBuahBaru() {
// //     const warnaBuah = ["red", "orange", "purple", "gold"];
// //     let buahBaru = {
// //         x: Math.floor(Math.random() * (canvas.width - 40)) + 20,
// //         y: -20,
// //         size: 22,
// //         speed: 3 + Math.random() * 2 + levelGame * 0.3,
// //         color: warnaBuah[Math.floor(Math.random() * warnaBuah.length)]
// //     };
// //     daftarBuah.push(buahBaru);
// // }

// // function gerakBuah() {
// //     for (let i = daftarBuah.length - 1; i >= 0; i--) {
// //         const buah = daftarBuah[i];
// //         buah.y += buah.speed;

// //         // Mengecek apakah buah bersentuhan dengan keranjang.
// //         if (
// //             buah.x + buah.size / 2 > keranjang.x &&
// //             buah.x - buah.size / 2 < keranjang.x + keranjang.width &&
// //             buah.y + buah.size / 2 > keranjang.y &&
// //             buah.y - buah.size / 2 < keranjang.y + keranjang.height
// //         ) {
// //             skor += 10;
// //             console.log("Buah tertangkap! Skor:", skor);
// //             daftarBuah.splice(i, 1);
// //             buatBuahBaru();

// //             if (skor % 50 === 0) levelGame++;

// //         } else if (buah.y - buah.size / 2 > canvas.height) {
// //             nyawa--;
// //             console.log("Buah terlewat! Nyawa:", nyawa);
// //             daftarBuah.splice(i, 1);
// //             buatBuahBaru();

// //             if (nyawa <= 0) {
// //                 prosesGameOver();
// //                 return;
// //             }
// //         }
// //     }
// // }

// // function tampilkanGameOver() {
// //     ctx.fillStyle = "rgba(15,30,50,0.75)";
// //     ctx.fillRect(0, 0, canvas.width, canvas.height);
// //     ctx.fillStyle = "white";
// //     ctx.font = "bold 32px Arial";
// //     ctx.textAlign = "center";
// //     ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2);
// //     ctx.font = "18px Arial";
// //     ctx.fillText("Skor Akhir: " + skor, canvas.width / 2, canvas.height / 2 + 35);
// //     ctx.font = "14px Arial";
// //     ctx.fillText("Klik Mulai untuk bermain lagi", canvas.width / 2, canvas.height / 2 + 65);
// //     ctx.textAlign = "left";
// // }

// // function prosesGameOver() {
// //     gameOver = true;
// //     permainanDimulai = false;
// //     if (intervalGame !== undefined) {
// //         clearInterval(intervalGame);
// //         intervalGame = undefined;
// //     }
// //     tampilkanGameOver();
// // }

// // function gameLoop() {
// //     if (!permainanDimulai || gameOver) return;
// //     ctx.clearRect(0, 0, canvas.width, canvas.height);
// //     gerakKeranjang();
// //     gerakBuah();
// //     if (!gameOver) gambarPermainan();
// // }

// // function mulaiPermainan() {
// //     if (intervalGame !== undefined) {
// //         clearInterval(intervalGame);
// //         intervalGame = undefined;
// //     }
// //     skor = 0;
// //     nyawa = 3;
// //     levelGame = 1;
// //     gameOver = false;
// //     permainanDimulai = true;
// //     resetPosisi();
// //     gambarPermainan();
// //     intervalGame = window.setInterval(gameLoop, 30);
// // }

// // const tombolMulai = document.getElementById("mulai");
// // tombolMulai?.addEventListener("click", mulaiPermainan);

// // gambarPermainan();
//// LATIHAN SOAL PRAKTIK
const canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

// Variabel keranjang
let basket = {
    x: 200,
    y: 330,
    width: 100,
    height: 30,
    speed: 10
};

// Variabel buah
let fruit = {
    x: 230,
    y: 80,
    size: 20,
    speed: 3
};

// Variabel skor
let score = 0;

// Menggambar keranjang
function drawBasket() {
    ctx.fillStyle = "brown";
    ctx.fillRect(
        basket.x,
        basket.y,
        basket.width,
        basket.height
    );
}

// Menggambar buah
function drawFruit() {
    ctx.fillStyle = "red";

    ctx.beginPath();

    ctx.arc(
        fruit.x,
        fruit.y,
        fruit.size,
        0,
        Math.PI * 2
    );

    ctx.fill();
}

// Menggambar skor
function drawScore() {
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";

    ctx.fillText("Score: " + score, 10, 30);
}

// Mengatur pergerakan keranjang
document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowRight") {
        basket.x += basket.speed;
    }

    if (event.key === "ArrowLeft") {
        basket.x -= basket.speed;
    }

    // Membatasi keranjang agar tidak keluar Canvas
    if (basket.x < 0) {
        basket.x = 0;
    }

    if (basket.x + basket.width > canvas.width) {
        basket.x = canvas.width - basket.width;
    }

});

// Mengatur pergerakan buah
function moveFruit() {

    fruit.y += fruit.speed;

    // Mendeteksi buah tertangkap keranjang
    if (
        fruit.y + fruit.size >= basket.y &&
        fruit.x >= basket.x &&
        fruit.x <= basket.x + basket.width
    ) {

        score++;

        resetFruit();
    }

    // Mengatur ulang buah jika terlewat
    if (fruit.y > canvas.height) {
        resetFruit();
    }

}

// Mengatur posisi awal buah kembali
function resetFruit() {

    fruit.x = Math.random() * (canvas.width - 40) + 20;

    fruit.y = 0;

}

// Menjalankan permainan
function gameLoop() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    drawBasket();

    drawFruit();

    drawScore();

    moveFruit();

    requestAnimationFrame(gameLoop);

}

// Memulai permainan
gameLoop();