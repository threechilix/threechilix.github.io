---
title: "Membuat Tema Baru di Hugo"
description: "Belajar membuat tema Higo dari nol"
author: "Threechilix"
date: 2017-09-18T16:00:00
publishdate: 2017-09-18T16:00:00
images: "attachments/blog/2017/09/new_themes/thumbnail.jpg"
tags: ["hugo" , "themes"]
categories: ["tutorial"]
type: "blog"
comments: true
sitemap: true
---
Walaupun Hugo sudah menyediakan themes untuk Anda gunakan tapi tidak ada salahnya kita belejar membuat tema dari nol.

Untuk membuat tema dari nol kita dapat mengunakan perintah
```
hugo new theme [name]
```
sebagai contoh Saya membuat tema dengan nama <kode>tes</kode>
```
hugo new theme tes
```

Maka akan ada direktori baru di dalam direktori <kode>themes</kode> dengan nama folder <kode>tes</kode>
{{<images width="80%" title="new themes" src="/attachments/blog/2017/09/new_themes/1.jpg">}}

Hugo sudah membuatkankan kita struktur direktori temanya dan tinggal dimodifikasi saja. Tapi sebelumnya, kita harus paham dulu dengan struktur direktori tersebut.
#### Struktur Direktori Tema Hugo
```
tes/
├── archetypes
│   └── default.md
├── layouts
│   ├── _default
│   │   ├── list.html
│   │   └── single.html
│   |
│   └── partials
│   |   ├── footer.html
│   |   └── header.html
|   ├── index.html
|   ├── 404.html
├── static
│   ├── css
│   └── js
├── LICENSE.md
└── theme.toml
```

Ada tiga direktori yang dibuatkan oleh Hugo:<ol>
<li><kode>archetype</kode> : direktori yang berisi template konten;</li>
<li><kode>layouts</kode> : direktori yang berisi layout temanya;</li>
<li><kode>static</kode> : direktori untuk menyimpan file statis seperti css, javascript, gambar, dsb.</li>
</ol>

Biar lebih jelas, mari kita bahas satu-satu<ol>
<li><kode>Archetype</kode> ini memiliki beberapa jenis konten, misalnya ada artikel, portofolio, gallery, dll. maka kita harus membuatkan archetype untuk masing-masing jenis konten tersebut.<br />
Di dalam direktori archetype terdapat file default.md yang merupakan archetype default yang akan digunakan ketika kita membuat konten dengan perintah hugo new.
</li>
<li><kode>Layouts</kode> direktori layout menyimpan file-file HTML yang merupakan struktur dasar dari tema.<br />
{{<images width="80%" title="new themes" src="/attachments/blog/2017/09/new_themes/3.jpg">}}
Terdapat beberapa direktori penting di dalamnya:<ul>
<li><kode>default</kode> berisi struktur HTML untuk halaman konten.<br/>
{{<images width="80%" title="new themes" src="/attachments/blog/2017/09/new_themes/2.jpg">}}</li><br/>Ada dua isinya:<ol>
<li>list.html file HTML untuk menampilkan daftar konten.
</li>
<li>single.html file HTML untuk menampilkan satu konten.</li>
</ol>
<li><kode>partials</kode> berisi bagian-bagian kecil dari struktur HTML</li>
</li>
<li><kode>Static</kode> direktori ini menyimpan file-file statis seperti CSS, Javascript, Gambar, dan sebagainya.</li>
<li>Kemudian ada juga file HTML:<ol>
<li><kode>404.html</kode> file HTML untuk halaman error 404 not found.</li>
<li><kode>index.html</kode> file HTML untuk halaman indeks atau homepage.</li>
</ol></li>
</ol>
#### Membuat Halaman Home
Hal pertama yang harus kita lakukan adalah membuat halaman utamanya, yaitu halaman homepage.

Layout untuk halaman homepage ditentukan oleh file <kode>layouts/index.html</kode>.

Silahkan isi file <kode>index.html</kode> dengan kode berikut:
```
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body>
<h1>Hello World!</h1>
<p>Selamat datang</p>
</body>
</html>
```
Ini hanya untuk percobaan saja.

Setelah itu silahkan jalankan server hugo dengan menggunakan tema tersebut.
```
hugo server -t tes
```
Hasilnya:
{{<images width="80%" title="new themes" src="/attachments/blog/2017/09/new_themes/4.jpg">}}
Berhasil…

Selanjutnya kita tinggal modifikasi saja sesuai selera.
