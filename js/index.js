let div = document.createElement('div');
div.className = 'container w-50 py-5';
let div2 = document.createElement('div');
div2.className = 'row justify-content-center text-center fixed-top bg-header';

let col = document.createElement('div');
col.className = 'col-md-11';
col.innerHTML = '<img src="asset/img/logo.webp" alt="Logo" width="120px" class="img-fluid border-bottom m-2">';

div.append(div2);
div2.append(col);

document.querySelector('#app').append(div);

// ==================================================
let container = document.createElement('div');
container.className = 'container';
let row = document.createElement('div');
row.className = 'row justify-content-center px-2';

let button = document.createElement('div');
button.className = 'd-flex col-md-8 col-lg-9';
button.innerHTML = `<a href="#" target="_blank" class="btn btn-outline-warning rounded-pill w-100 my-1 m-2">Login</a>
<a href="#" class="btn btn-outline-warning rounded-pill w-100 my-1 m-2">Register</a>`;

let colRef = document.createElement('div');
colRef.className = 'col-sm-11 col-md-8 col-lg-9';
colRef.innerHTML = `<a href="https://13.213.113.183/mobile/register" rel="nofollow noreferrer" target="_blank"><button type="login" class="button w-100 text-black fs-5 my-3">
VIP303 Daftar Situs Judi 138 Slot Online Terpercaya Dan Terbaik</button></a>`;

let rowbank = document.createElement('div');
rowbank.className = 'row justify-content-center text-center mb-4';
// let colBom = document.createElement('div');
// colBom.className = 'col-md-8 col-lg-9';
// colBom.innerHTML = '<img src="asset/img/bom.png" alt="Logo" width="150px" class="img-fluid m-2">';

let colBank = document.createElement('div');
colBank.className = 'col-sm-11 col-md-7 col-lg-8';
let borderBank = document.createElement('div');
borderBank.className = 'border-bank p-3';
borderBank.innerHTML = ' <img src="asset/img/bank.webp" alt="Bank Lokal" class="img-fluid" width="792px" height="auto" />';

container.append(row, rowbank);
row.append(button, colRef);

rowbank.append(colBank);
colBank.append(borderBank);

// ==================================================

document.querySelector('#app').append(container);

let containerTable = document.createElement('div');
containerTable.className = 'container';
let rowTable = document.createElement('div');
rowTable.className = 'row justify-content-center text-white px-3';
let divColTable = document.createElement('div');
divColTable.className = 'col-md-8 col-lg-9';
let divTable = document.createElement('div');
divTable.className = 'table';
divTable.id = 'table';


let table = document.createElement('table');
table.className = 'list_table';
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

containerTable.append(rowTable);
rowTable.append(divColTable);
divColTable.append(divTable);
divTable.append(table);
table.append(thead, tbody);

// Creating and adding data to first row of the table
let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Tentang Situs Slot Online VIP303";
heading_1.setAttribute("colspan", "3");

row_1.appendChild(heading_1);
thead.appendChild(row_1);

// Creating and adding data to second row of the table
let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.setAttribute("class", "p-2");
row_2_data_1.innerHTML = "Nama Situs";
let row_2_data_2 = document.createElement('td');
row_2_data_2.setAttribute("class", "p-2");
row_2_data_2.innerHTML = '<a href="https://13.213.113.183/" title="BomSlot" rel="noopener"target="_blank">BomSlot</a>';

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
tbody.appendChild(row_2);

// Creating and adding data to third row of the table
let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.setAttribute("class", "p-2");
row_3_data_1.innerHTML = "Jenis Permainan";
let row_3_data_2 = document.createElement('td');
row_3_data_2.setAttribute("class", "p-2");
row_3_data_2.innerHTML = '<a href="#" title="Slot Online">Slot Online</a></td>';

row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
tbody.appendChild(row_3);

// Creating and adding data to third row of the table
let row_4 = document.createElement('tr');
let row_4_data_1 = document.createElement('td');
row_4_data_1.setAttribute("class", "p-2");
row_4_data_1.innerHTML = "Minimal Deposit";
let row_4_data_2 = document.createElement('td');
row_4_data_2.setAttribute("class", "p-2");
row_4_data_2.innerHTML = 'Rp20.000';

row_4.appendChild(row_4_data_1);
row_4.appendChild(row_4_data_2);
tbody.appendChild(row_4);

// Creating and adding data to third row of the table
let row_5 = document.createElement('tr');
let row_5_data_1 = document.createElement('td');
row_5_data_1.setAttribute("class", "p-2");
row_5_data_1.innerHTML = "Metode Deposit";
let row_5_data_2 = document.createElement('td');
row_5_data_2.setAttribute("class", "p-2");
row_5_data_2.innerHTML = 'Transfer Bank, E-Wallet/QRIS, Pulsa';

row_5.appendChild(row_5_data_1);
row_5.appendChild(row_5_data_2);
tbody.appendChild(row_5);

// Creating and adding data to third row of the table
let row_6 = document.createElement('tr');
let row_6_data_1 = document.createElement('td');
row_6_data_1.setAttribute("class", "p-2");
row_6_data_1.innerHTML = "Mata Uang";
let row_6_data_2 = document.createElement('td');
row_6_data_2.setAttribute("class", "p-2");
row_6_data_2.innerHTML = 'IDR (Indonesian Rupiah)';

row_6.appendChild(row_6_data_1);
row_6.appendChild(row_6_data_2);
tbody.appendChild(row_6);

// Creating and adding data to third row of the table
let row_7 = document.createElement('tr');
let row_7_data_1 = document.createElement('td');
row_7_data_1.setAttribute("class", "p-2");
row_7_data_1.innerHTML = "Jam Operasional";
let row_7_data_2 = document.createElement('td');
row_7_data_2.setAttribute("class", "p-2");
row_7_data_2.innerHTML = '24 Jam Online';

row_7.appendChild(row_7_data_1);
row_7.appendChild(row_7_data_2);
tbody.appendChild(row_7);

// Creating and adding data to third row of the table
let row_8 = document.createElement('tr');
let row_8_data_1 = document.createElement('td');
row_8_data_1.setAttribute("class", "p-2");
row_8_data_1.innerHTML = "Daftar Sekarang";
let row_8_data_2 = document.createElement('td');
row_8_data_2.setAttribute("class", "p-2");
row_8_data_2.innerHTML = '<a href="https://13.213.113.183/mobile/register" rel="nofollow noopener"target="_blank" title="Daftar Slot Online BomSlot">Klik Disini</a>';

row_8.appendChild(row_8_data_1);
row_8.appendChild(row_8_data_2);
tbody.appendChild(row_8);
// Adding the entire table to the body tag
document.querySelector('#app').appendChild(containerTable);


let containerContent = document.createElement('div');
containerContent.setAttribute("class", "container bg-card py-4");

let rowContent = document.createElement('div');
rowContent.setAttribute("class", "row justify-content-center text-white");

let colBanner = document.createElement('div');
colBanner.setAttribute("class", "col-md-8 col-lg-12 text-center");
let titleBanner = document.createElement('p');
titleBanner.setAttribute("class", "fs-4");
titleBanner.innerHTML = 'Situs Slot Online Terpercaya Indonesia';

let imgBanner = document.createElement('div');
imgBanner.setAttribute("class", "text-center");
imgBanner.innerHTML = '<img src="asset/img/bomslot-3.jpg" class="img-fluid border" alt="banner"><hr style="color: #FFFFFF;">';

let colBody = document.createElement('div');
colBody.setAttribute("class", "col-md-8 col-lg-11");

let titleBody = document.createElement('h1');
titleBody.setAttribute("class", "text-warning text-center");
titleBody.innerHTML = 'VIP303 : Situs Slot Online Gacor Mudah Maxwin & Judi Online Terbaik';

let divBody = document.createElement('div');
divBody.setAttribute("class", "text-white justify");

let descBody = document.createElement('p');
descBody.innerHTML = `VIP303 merupakan situs judi slot online mudah maxwin dengan beragam permainan judi online seperti slot, casino online, sbobet online, sabung ayam dengan rtp hingga 96.6%. 
Penggemar permainan mesin slot online saat ini di Indonesia sudah bisa menikmati permainan slot yang bisa anda mainkan dimana saja dan kapan saja. <br><br>
VIP303 memiliki ribuan permainan judi slot online mudah menang di Indonesia, kami hadir untuk membantu para pemain mendapatkan jackpot ketika bergabung bersama kami. Ada begitu banyak keuntungan 
ketika anda bergabung bersama kami mulai dari minimal deposit yang rendah, sistem live chat kami selalu online 24 jam, bonus dan event yang menarik.<br><br>
Cukup dengan 1 user id saja anda sudah bisa memainkan ribuan permainan slot yang tersedia di situs VIP303 kami. Ketika anda sudah bergabung bersama kami tentu tidak akan ada penyesalan karena 
hadiah jackpot serta event yang kami berikan sangat bermanfaat. Dengan hadiah jackpot hingga ratusan juta rupiah VIP303 bisa dikatakan sebagai situs judi slot online mudah menang tentunya.`;

let titleBody_2 = document.createElement('h2');
titleBody_2.setAttribute("class", "text-warning text-center");
titleBody_2.innerHTML = '3 Keuntungan Jika anda Bergabung Dengan Situs Slot Online VIP303';

let divBody_2 = document.createElement('div');
divBody_2.setAttribute("class", "text-white justify");

let descBody_2 = document.createElement('p');
descBody_2.innerHTML = `Vip303 dikenal sebagai situs slot online terpercaya saat ini, ada begitu banyak keuntungan yang bisa anda dapatkan ketika bergabung bersama kami berikut akan kami bahas 
keuntungan yang diberikan oleh situs slot online VIP303 : <br><br>
<ol>
<li><b>System Live Chat Kami Selalu Online 24 Jam</b><br>
Keunggulan yang kami berikan kepada anda jika menjadi member resmi kami adalah Live Chat kami yang dapat online selama 24 jam penuh membantu pemain dalam menjawab setiap permasalahan anda 
seputar deposit, withdraw dan pendaftaran. Customer Service kami sudah sangat terlatih untuk mengetahui segala kondisi permasalahan anda jadi jangan sungkan untuk anda segera bertanya kepada kami.</li><br>
<li><b>Proses Deposit Serta Withdraw Sangat Cepat</b><br>
Salah satu keunggulan lain yang diberikan oleh VIP303 adalah proses deposit serta withdraw sangat cepat sebab banyak sekali situs diluar sana memakan waktu hingga 30 menit untuk melakukan proses deposit serta withdraw. 
Ketika anda bergabung bersama kami tidak sampai 5 menit proses deposit dan withdraw akan langsung diproses. VIP303 selalu mengedepankan para pemain kami sehingga semua proses dan deposit anda dapat diproses tanpa 
ada kendala sama sekali dan tidak perlu menunggu.</li><br>
<li><b>Semua Kemenangan Anda Akan Dibayarkan Tanpa Potongan</b><br>
Mungkin anda sering mendengar bahwa banyak situs diluar sana yang tidak membayarkan kemenangan pemain. Tentu hal tersebut tidak akan terjadi di Vip303 karena tujuan dari para pemain slot online adalah mendapatkan kemenangan, 
oleh sebab itu kami tidak akan memotong segala kemenangan anda ketika bergabung bersama kami. Vip303 akan selalu membayarkan semua kemenangan anda walaupun nominal angkanya ratusan hingga milyaran rupiah sebab itu 
merupakan hak anda.</li><br>`;


let titleBody_3 = document.createElement('h2');
titleBody_3.setAttribute("class", "text-warning text-center justify-content-between");
titleBody_3.innerHTML = 'Cara Daftar Di Situs Slot Online Dengan Mudah Vip303';

let divBody_3 = document.createElement('div');
divBody_3.setAttribute("class", "text-white justify");

let descBody_3 = document.createElement('p');
descBody_3.innerHTML = `Panduan bermain slot online tersedia di situs terbaik dengan fitur nomor satu di dalamnya. Ada banyak sekali tempat bermain slot online yang hadir di dunia internet Indonesia dengan fasilitas yang terjamin. 
Bahkan produk kami sangat lengkap dan memberikan manfaat yang besar. Kami akan hadir dengan fasilitas yang lengkap untuk menghibur anda semua yang sedang merasa jenuh karena kesibukan sehari-hari. Namun dalam memilih situs bermain 
online Indonesia yang sekarang banyak bermunculan di internet bukanlah hal mudah. Anda harus selalu berhati-hati dalam memilih situs online dan mulai mendaftar ketika menemukan website yang tepat. Sangat disarankan bagi anda 
untuk membaca beberapa referensi terlebih dahulu sebelum memutuskan untuk masuk dan mendaftarkan diri di dunia online.<br><br>`;

let titleBody_4 = document.createElement('h2');
titleBody_4.setAttribute("class", "text-warning text-center");
titleBody_4.innerHTML = 'Bagaimana Cara langkah registrasi di Link Alternatif Slot Online Vip303';

let divBody_4 = document.createElement('div');
divBody_4.setAttribute("class", "text-white justify");

let descBody_4 = document.createElement('p');
descBody_4.innerHTML = `Bagi anda penggemar pendatang baru yang memutuskan untuk bergabung sebagai pemain, anda akan menemukan kemudahan dan kelancaran saat memasang game di sini.<br><br>
<ul>
<li><b>Mulai dengan menemukan situs judi slot Vip303</b><br>
Anda harus terlebih dahulu mengunjungi situs judi slot online Indonesia terpercaya. Untuk melakukan beberapa tahapan menjadi anggota resmi. Pastikan masuk kedalam salah satu situs yang 
menghasilkan banyak hadiah besar, anda bisa memulainya disini. Anda bisa mencari situs judi online menggunakan layanan internet atau membaca referensi tentang tempat judi yang bisa memberikan kepercayaan dan kualitas. 
Jika anda sudah berhasil masuk ke website kami, langkah selanjutnya yakni harus masuk ke halaman pendaftaran.</li><br>
<li><b>Isi formulir pribadi secara lengkap</b><br>
Sebagai calon member Vip303, kalian diminta untuk melakukan registrasi dengan benar. Kalian harus mengisi biodata diri dengan lengkap dan benar tanpa kesalahan. Apabila semua langkahnya sudah selesai, kalian bisa segera 
kirimkan data tersebut kepada admin. Jangan lupa membaca syarat dan ketentuan dalam website tersebut, jika tidak ada masalah lakukan tahapan berikutnya.</li><br>
<li><b>Kirim modal atau deposit</b><br>
Setor dalam jumlah tertentu untuk dapat bermain di Vip303 dengan lancar. Setelah itu anda bisa melanjutkan proses selanjutnya yaitu mengirimkan modal dalam jumlah tertentu. Siapkan saldo di rekening, pastikan total saldo 
melebihi nominal modal yang akan dikirim. Anda juga harus melakukan konfirmasi dengan agen slot online kami mengenai proses deposit yang telah dilakukan. <br><br>
Jika proses sudah selesai, anda bisa mengecek saldo akun yang sudah terdaftar di situs bermain kami. Jika semua proses telah berjalan dengan lancar, sekarang anda dapat menggunakan akun tersebut untuk bermain game dengan 
tujuan mendapatkan keuntungan uang yang diinginkan.<br><br>
Ulasan di atas mencakup cara mendaftar akun slot vip303 dengan kami. Pastikan anda mendaftar di situs web terbaik. Sehingga dapat memasang taruhan dengan aman tanpa kerumitan. Game online akan sangat mudah jika anda 
memasangnya dengan benar. Anda tidak bisa hanya memainkan game dengan keberuntungan saja.
</li>
</ul>
Itulah review game slot hari ini di tempat terpercaya Vip303. Anda harus selalu percaya diri dan mendapatkan berbagai jenis keuntungan secara terus menerus. Terima kasih banyak telah memperhatikan kami, slot online harus segera kalian mainkan.`;

let titleBody_5 = document.createElement('h2');
titleBody_5.setAttribute("class", "text-warning text-center");
titleBody_5.innerHTML = '12 Daftar Provider Situs Slot Online Terpercaya Mudah Menang Hari Ini';

let divBody_5 = document.createElement('div');
divBody_5.setAttribute("class", "text-white justify");

let descBody_5 = document.createElement('p');
descBody_5.innerHTML = `Vip303 saat ini sudah menjalin kerjasama dengan penyedia lisensi Pagcor saat ini hampir seluruh permainan yang disediakan oleh 12 Provider Situs Slot Online tersebut mudah menang karena mereka 
memang selalu menyajikan permainan yang gampang untuk dimainkan saat ini. Ada begitu banyak pilihan provider yang bisa anda kembangkan ketika bergabung menjadi member resmi kami Vip303 dengan perkalian permainan hingga 
500x ini tentu untuk mendapatkan jackpot bukanlah hal yang sulit. <br><br>
Berikut adalah 12 Provider Vip 303 Slot yang bisa anda mainkan ketika bergabung menjadi member resmi kami : <br><br>
<ul>
<li>Vip303 Slot Pragmatic Play</li>
<li>Vip303 Slot Microgaming</li>
<li>Vip303 Slot PGSOFT</li>
<li>Vip303 Slot Playtech</li>
<li>Vip303 Slot Toptrend Gaming</li>
<li>Vip303 Slot Habanero</li>
<li>Vip303 Slot BBIN</li>
<li>Vip303 Slot BBP</li>
<li>Vip303 Slot Spadegaming</li>
<li>Vip303 Slot Joker123</li>
<li>Vip303 Slot Playstar</li>
<li>Vip303 Slot CQ9</li>
<li>Vip303 Slot BNG</li>
<li>Vip303 Slot MMG</li>
<li>Vip303 Slot Slot88</li>
</ul>
Itulah review game slot hari ini di tempat terpercaya Vip303. Anda harus selalu percaya diri dan mendapatkan berbagai jenis keuntungan secara terus menerus. Terima kasih banyak telah memperhatikan kami, slot online harus segera kalian mainkan.`;

let titleBody_6 = document.createElement('h2');
titleBody_6.setAttribute("class", "text-warning text-center");
titleBody_6.innerHTML = '10 Permainan Situs Judi Slot Online Paling Mudah Maxwin 2022';

let divBody_6 = document.createElement('div');
divBody_6.setAttribute("class", "text-white justify");

let descBody_6 = document.createElement('p');
descBody_6.innerHTML = `Vip303 selalu memberikan pemain 10 pilihan permainan slot online yang mudah maxwin saat ini, Admin slot terpercaya kami akan membocorkan permainan apa saja yang bisa mendatangkan kemenangan kepada anda. 
Berikut adalah 10 permainan situs judi slot online paling mudah maxwin saat ini pilihan admin Vip 303 Slot saat ini :<br><br>
<ul>
<li>Slot Vip303 Gates of Olympus</li>
<li>Slot Vip303 Starlight Princess</li>
<li>Slot Vip303 Sweet Bonanza</li>
<li>Slot Vip303 Aztec Gems</li>
<li>Slot Vip303 Wild West Gold</li>
<li>Slot Vip303 Great Rhino Megaways</li>
<li>Slot Vip303 Candy Village</li>
<li>Slot Vip303 Mahjong Ways</li>
<li>Slot Vip303 Koi Gate</li>
<li>Slot Vip303 Aztec Bonanza</li>
<li>Slot Vip303 Pyramid Bonanza</li>
</ul>`;


let titleBody_7 = document.createElement('h2');
titleBody_7.setAttribute("class", "text-warning text-center");
titleBody_7.innerHTML = 'Cara Mencari Situs Judi Slot Link Alternatif VIP 303 Slot';

let divBody_7 = document.createElement('div');
divBody_7.setAttribute("class", "text-white justify");

let descBody_7 = document.createElement('p');
descBody_7.innerHTML = `
Saat ini dalam mencari link alternatif vip 303 slot bukanlah hal yang sulit, kami selalu memberikan serangkaian link alternatif yang bisa anda akses untuk membuka VIP 303 Slot saat ini. 
Link alternatif selalu dapat anda tanyakan kepada customer service kami sehingga anda tidak akan kehilangan kesempatan untuk mengakses situs slot online terpercaya VIP 303. 
Cukup ketik di mesin pencarian google Link alternatif VIP 303 dan anda akan menemukan berbagai pilihan di posisi 1 hingga 10 tersebut.`;

let titleBody_8 = document.createElement('h2');
titleBody_8.setAttribute("class", "text-warning text-center");
titleBody_8.innerHTML = 'FAQ - Pertanyaan Umum Seputar Situs Judi Slot Online Terpercaya VIP303';

let divBody_8 = document.createElement('div');
divBody_8.setAttribute("class", "text-white justify");

let descBody_8 = document.createElement('p');
descBody_8.innerHTML = `
Pasti ada begitu banyak pertanyaan yang ingin anda tanyakan kepada situs slot Vip303, tentu kami sudah merangkap berbagai pertanyaan yang sering ditanyakan oleh para pemain slot saat ini : <br> <br>
<b>Q: Apa itu Slot Online</b><br>
A : Slot Online adalah permainan judi slot yang biasa anda mainkan di casino tetapi saat ini dengan hadirnya VIP303 anda tidak perlu jauh-jauh untuk pergi keluar negeri dan menikmati permainan slot. 
Slot online bisa dikatakan juga permainan slot yang bisa anda mainkan dengan hp dan komputer anda.  <br><br>

<b>Q : Metode Deposit Apa Saja Yang Disediakan VIP303</b><br>
A : Saat ini kami menyajikan berbagai pilihan untuk anda melakukan deposit seperti : <br>
<ul>
<li>Bank Lokal : BCA, Mandiri, CIMB, BRI, BNI</li>
<li>Via Pulsa : Telkomsel dan XL</li>
<li>Via E-Money : Ovo, Gopay dan Dana</li>
</ul>

<b>Q : Berapa Minimal Deposit VIP303</b><br>
A : VIP303 menyediakan minimal deposit sebesar 20.000 Rupiah saja.<br>`;

containerContent.append(rowContent);
rowContent.append(colBanner, colBody);
colBanner.append(titleBanner, imgBanner);
colBody.append(titleBody, divBody, titleBody_2, divBody_2, titleBody_3, divBody_3, titleBody_4, divBody_4, titleBody_5, divBody_5, titleBody_6, divBody_6, titleBody_7, divBody_7, titleBody_8, divBody_8);
divBody.append(descBody);
divBody_2.append(descBody_2);
divBody_3.append(descBody_3);
divBody_4.append(descBody_4);
divBody_5.append(descBody_5);
divBody_6.append(descBody_6);
divBody_7.append(descBody_7);
divBody_8.append(descBody_8);

// TABLE DI CONTENT
// let tableContent = document.createElement('table');
// tableContent.className = 'list_table';
// let theadContent = document.createElement('thead');
// let tbodyContent = document.createElement('tbody');

// containerContent.append(rowContent);
// rowContent.append(colBody);
// colBody.append(tableContent);
// tableContent.append(theadContent, tbodyContent);

// // Creating and adding data to first row of the table
// let row_1_content = document.createElement('tr');
// let heading_1_content = document.createElement('th');
// heading_1_content.innerHTML = "Slot Online Bomslot";
// heading_1_content.setAttribute("colspan", "3");

// row_1_content.appendChild(heading_1_content);
// theadContent.appendChild(row_1_content);

// // Creating and adding data to second row of the table
// let row_2_content = document.createElement('tr');
// let row_2_data_1_content = document.createElement('td');
// row_2_data_1_content.setAttribute("class", "tab-title p-2");
// row_2_data_1_content.innerHTML = "Nama Game:";
// let row_2_data_2_content = document.createElement('td');
// row_2_data_2_content.setAttribute("class", "p-2");
// row_2_data_2_content.innerHTML = 'Slot Online';

// row_2_content.appendChild(row_2_data_1_content);
// row_2_content.appendChild(row_2_data_2_content);
// tbodyContent.appendChild(row_2_content);

// // Creating and adding data to third row of the table
// let row_3_content = document.createElement('tr');
// let row_3_data_1_content = document.createElement('td');
// row_3_data_1_content.setAttribute("class", "p-2");
// row_3_data_1_content.innerHTML = "Platform:";
// let row_3_data_2_content = document.createElement('td');
// row_3_data_2_content.setAttribute("class", "p-2");
// row_3_data_2_content.innerHTML = 'ANDROID, IOS, WINDOWS, OSX, dan WEB';

// row_3_content.appendChild(row_3_data_1_content);
// row_3_content.appendChild(row_3_data_2_content);
// tbodyContent.appendChild(row_3_content);

// // Creating and adding data to third row of the table
// let row_4_content = document.createElement('tr');
// let row_4_data_1_content = document.createElement('td');
// row_4_data_1_content.setAttribute("class", "p-2");
// row_4_data_1_content.innerHTML = "Kategori:";
// let row_4_data_2_content = document.createElement('td');
// row_4_data_2_content.setAttribute("class", "p-2");
// row_4_data_2_content.innerHTML = 'Game';

// row_4_content.appendChild(row_4_data_1_content);
// row_4_content.appendChild(row_4_data_2_content);
// tbodyContent.appendChild(row_4_content);

// // Creating and adding data to third row of the table
// let row_5_content = document.createElement('tr');
// let row_5_data_1_content = document.createElement('td');
// row_5_data_1_content.setAttribute("class", "p-2");
// row_5_data_1_content.innerHTML = "Rating:";
// let row_5_data_2_content = document.createElement('td');
// row_5_data_2_content.setAttribute("class", "p-2");
// row_5_data_2_content.innerHTML = '5 (7785188 suara )';

// row_5_content.appendChild(row_5_data_1_content);
// row_5_content.appendChild(row_5_data_2_content);
// tbodyContent.appendChild(row_5_content);

// // Creating and adding data to third row of the table
// let row_6_content = document.createElement('tr');
// let row_6_data_1_content = document.createElement('td');
// row_6_data_1_content.setAttribute("class", "p-2");
// row_6_data_1_content.innerHTML = "Minimal Deposit:";
// let row_6_data_2_content = document.createElement('td');
// row_6_data_2_content.setAttribute("class", "p-2");
// row_6_data_2_content.innerHTML = 'Rp. 10.000';

// row_6_content.appendChild(row_6_data_1_content);
// row_6_content.appendChild(row_6_data_2_content);
// tbodyContent.appendChild(row_6_content);

// Content After Table 
// let divBody_5 = document.createElement('div');
// divBody_5.setAttribute("class", "text-white mt-4");

// let descBody_5 = document.createElement('p');
// descBody_5.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ipsum soluta ver. <ul> <li>Sweet Bonanza</li><li>Gate of Olympus (Slot Zeus)</li><li>Aztec Gems</li><li>Jokers Jewels </li ><li>Starlight Princess </li><li>Wild West Gold </li></ul >  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quas exercitationem non. Cum repudiandae reprehenderit, animi debitis esse iste facere, ratione qui ut itaque deleniti';

// colBody.append(divBody_5);
// divBody_5.append(descBody_5);

// Adding the entire table to the body tag
document.querySelector('#app').appendChild(containerContent);

// FOOTER
let footer = document.createElement('footer');
footer.setAttribute("class", "text-center");

let conFoo = document.createElement('div');
conFoo.setAttribute("class", "container text-white-50 py-2");

let textFoo = document.createElement('h5');
textFoo.setAttribute("class", "fs-6");
textFoo.innerHTML = 'copyright &copy; 2022 by VIP303';

footer.append(conFoo);
conFoo.append(textFoo);
document.querySelector('#app').appendChild(footer);

// FOOTER MENU
let fixedFooter = document.createElement('div');
fixedFooter.className = 'fixed-footer d-lg-none';
fixedFooter.innerHTML = '<a href="https://13.213.113.183/mobile/promotion" rel="nofollow noopener" target="_blank"><img max-height="10" width="25" src="https://res.cloudinary.com/jh88/image/upload/v1636153463/MENANG8/bonus_nrpcrt.webp" alt="Bonus Promo BomSlot"></img> Bonus</a>';

let link1 = document.createElement('a');
link1.setAttribute("href", "#", "rel", "nofollow noopener", "target", "_blank");
link1.className = 'tada';
link1.innerHTML = '<img class="center" height="25" width="25" src="https://res.cloudinary.com/jh88/image/upload/v1636153463/MENANG8/user_mhgeva.svg" alt="Daftar Slot Online BomSlot"></img> Daftar';

let link2 = document.createElement('a');
link2.setAttribute("href", "#", "rel", "nofollow noopener", "target", "_blank");
link2.innerHTML = '<img class="center" height="15" width="15" src="https://res.cloudinary.com/jh88/image/upload/v1636153462/MENANG8/whatsapp_kcggke.svg" alt="Whatsapp"></img> Whatsapp';

let link3 = document.createElement('a');
link3.setAttribute("href", "#", "rel", "nofollow noopener", "target", "_blank");
link3.innerHTML = '<img class="center" height="15" width="15" src="https://res.cloudinary.com/jh88/image/upload/v1636153462/MENANG8/live-chat_qnj9vv.svg" alt="Live Chat"></img> Live Chat';

fixedFooter.append(link1, link2, link3);
document.querySelector('#app').appendChild(fixedFooter);