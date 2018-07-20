---
title: "Mailto: Link Solusi Untuk Yang Kesulitan Membuat Contact Form"
description: "cara membuat Mailto Untuk Yang Kesulitan Membuat Contact Form"
author: "Threechilix"
date: 2017-11-07T08:00:00
publishdate: 2017-11-07T08:00:00
images: "attachments/blog/2017/11/membuat-mailto/thumbnail.jpg"
tags: ["tutorial" , "site", "Hugo"]
categories: ["tutorial"]
type: "blog"
comments: true
sitemap: true
---
Hugo adalah static website generator untuk blog, dokumen, dan portofolio. Karena dibangun di Go Programming Language, hal ini yang membuat situs statis yang menggunakan Hugo dapat diakses lebih cepat. Selain itu Ada banyak pilihan hosting yang dapat Anda pilih dari Amazon S3, Cloudfront, Heroku, Github Pages, Dropbox. Kelemahan dari situs statis ini, adalah bahwa tidak mendukung Contact form. Sehingga kita harus membuat sendiri Contact form. membuat contact form masih merupakan pekerjaan yang sulit bagi sebagian orang.<br/>
<br/>
Namun sebenarnya ada cara yang mudah untuk memberikan contact email kita ke pelanggan atau pengunjung Wet Kita dengan syarat pelanggan atau pengunjung blog sudah memiliki app untuk menangani pengiriman email.<br/>
<br/>
Kita bisa menggunakan mailto: untuk membuat link kontak email seperti berikut:
````
 <a href="mailto:email_address@domain.com" target="_blank" title="Mail To Us">Mail To Us</a>
````
Dengan link tersebut, pengunjung tinggal klik link dan app yang mereka miliki akan terbuka untuk mulai menulis pesan untuk tujuan email pada link tersebut.<br/>
Contoh demo link dengan mailto: ini Anda bisa kirim pesan ke inbox saya.<br/>
<center>
<a href=mailto:threechilix@gmail.com" target="_blank" title="Mail To Us">
<button class="btn btn-primary btn-round">Demo</button></center>
</a>
<br/>
App yang bisa digunakan untuk menangani pengiriman email pada klik link mailto: salah satunya dengan Microsoft Outlook untuk pengguna Windows yang bisa dihubungkan dengan Gmail.<br/>
<br/>
Jika Anda mengunakan Microsoft Outlook, Anda harus setting dulu Microsoft Outlook khususnya untuk Gmail yang menggunakan 2-step Authentication agar bisa mudah mengirimkan email.<br/>
<br/>Namun jika Anda merasa kesulitan untuk setting Outlook, ada ekstensi Google Chrome yang bisa Anda gunakan. Adalah Mailto: for Gmail sebuah ekstensi Google Chrome untuk membuka link mailto: dan masuk ke editor kirim pesan sama persis seperti editor pesan Gmail.<br/>
<br/>Silahkan unduh dan pasang ekstensi Mailto: for Gmail di browser Google Chrome Anda di tombol di bawah ini.<br/><center>
<a href=https://chrome.google.com/webstore/detail/mailto-for-gmail/dgkkmcknielgdhebimdnfahpipajcpjn?hl=en-GB" target="_blank" title="Mail To Us">
<button class="btn btn-primary btn-round">Download</button>
</a><center>
