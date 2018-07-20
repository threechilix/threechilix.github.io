---
title: "Cara Menggunakan SSH di Github"
description: "Cara Menggunakan SSH di Github untuk memudahkan dalam melakukan push"
author: "Threechilix"
date: 2017-08-31T08:00:00
publishdate: 2017-08-31T08:00:00
images: "attachments/blog/2017/08/github-ssh/thumbnail.jpg"
tags: ["github", "ssh", "git"]
categories: ["tutorial"]
type: "blog"
comments: true
sitemap: true
---
Setiap kali melakukan push ke repository github kita harus login (memasukan username dan password dulu) hal ini sering membuat kita merasa agat terlalu ribet, kita dapat menghindari hal itu dengan mengunakan SSH yang disediakan oleh Github. Untuk membuat SSH kita harus melakukan :
<ol>
<li>Buka Git Bash atau Command Prompt</li>
<li>Jalankan perintah dibawah ini pada prompt, untuk melihat apakah Anda sudah memiliki Key SSH <br/>
```
ls -al ~/.ssh
```
</li>
<li>Periksa daftar direktori untuk mengetahui apakah Anda sudah memiliki Key SSH.<br />Sebagai contoh milik saya <kode>C:/User/user/.ssh</kode></li>
<li>Jika Anda tidak memiliki Key SSH, maka Anda harus membuat Key SSH baru.</li>
</ol>
<h4>Membuat Key SSH</h4>
<ol>
<li>Jalankan perintah dibawah ini pada prompt, serta ganti alamat email GitHub Anda<br/>
```
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
</li>
<li>Ini proses membuat key ssh baru, dengan menggunakan email yang diberikan sebagai label.<br />
```
Generating public/private rsa key pair.
```
</li>
<li>Saat Anda diminta untuk "Memasukkan nama tempat untuk menyimpan Key". biarkan kosong untuk menyimpan lokasi file secara default <kode>C:/User/youname/.ssh</kode><br />
```
Enter a file in which to save the key (/c/Users/youname/.ssh/id_rsa):[Press enter]
```
</li>
<li>Pada prompt, Anda dapat membuat password agar lebih aman. Atau biarkan kosong kalau tidak ingin membuat password<br />
```
Enter passphrase (empty for no passphrase): [Type a passphrase]
Enter same passphrase again: [Type passphrase again]
```
</li>
</ol>
<h4>Jalankan SSH Angen dan Load SSH Key</h4>
<ol>
<li>Untuk memastikan apakah SSH Agent sudah berajalan atau tidak, gunakan perintah dibawah ini:<br />
```
eval $(ssh-agent -s)
```
Kalau hasilnya maka akan tampil <kode>Agent pid 4456</kode>, berati SSH Agent sudah berjalan.</li>
<li>Berikutnya kita simpan SSH Key. Gunakan perintah dibawah ini:<br />
```
ssh-add ~/.ssh/id_rsa
```
Maka file otomatis tersimpan di <kode>/c/Users/user/.ssh/id_rsa</kode></li>
</ol>
<h4>Tambahkan SSH Key ke Github</h4>
<ol>
<li>Ambil dulu Key publik yang sudah anda buat, gunakan perintah dibawah ini
```
cat ~/.ssh/id_rsa.pub
```
</li>
<li>Copy semua teks yang ditampilkan.
{{<images width="80%" title="Settings SSH" src="/attachments/blog/2017/08/github-ssh/1.jpg">}}</li>
<li>Lalu masuk ke Settings>SSH and GPG Keys, buat key baru dengan klik New SSH Key. Lalu masukkan key yang sudah dibuat.
{{<images width="80%" title="Settings SSH" src="/attachments/blog/2017/08/github-ssh/2.jpg">}}</li>
</ol>
<h4>Uji Konektivitas</h4>
<ol>
<li>Ketik perintah berikut untuk menguji konektivitas SSH ke Github
```
ssh -T git@github.com
```
Jika hasilnya seperti berikut ini, berarti berhasil. Selanjutnya kita tinggal melakukan push dengan SSH.<br/>
{{<images width="80%" title="Settings SSH" src="/attachments/blog/2017/08/github-ssh/3.jpg">}}
</li>
</ol>
Itulah cara menggunakan SSH di Gitub. Kita hanya perlu membuat public key, kemudian mendaftarkannya di akun Github.
