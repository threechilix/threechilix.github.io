---
title: "Custom Domain Blog Github Pages"
description: "Blog di Github Pages dapat dengan mudah menggunakan custom domain."
author: "Threechilix"
date: 2017-09-14T08:00:00
publishdate: 2017-09-14T08:00:00
images: "attachments/blog/2017/09/custom-domain/thumbnail.jpg"
tags: ["github","domain"]
categories: ["tutorial"]
type: "blog"
comments: true
sitemap: true
---
Github Pages adalah platform blogging dengan website statis HTML yang tidak memerlukan update software maupun plugin seperti halnya Wordpress, namun konsepnya sama dengan Wordpress yaitu kode web terpisah-pisah tidak seperti blogger di dalam satu editor HTML, selain itu Github Pages tidak memerlukan database. Selain cepat, Github Pages sangat simple namun ini memerlukan pengetahuan yang lebih tentang HTML.

Seperti platform blogging lainnya, Github Pages juga mendukung pengunaan custom domain dengan domain utama ataupun sub domain.

Setelah berhasil membuat blog di Github Pages, tentunya Anda ingin menjadikan blog Anda lebih personal dengan menggunakan domain Anda sendiri. Nah, tidak perlu khawatir karena blog Github Pages dapat dengan mudah menggunakan custom domain dengan hanya beberapa langkah mudah.
<h4>Custom Domain Blog Github Pages</h4>
Tentunya Anda harus menyewa domain di penyedia domain.
<ol>
<li>Langkah Pertama<br/>
 Setelah domain Anda aktif silahkan lakukan setting DNS dengan A records dengan IP address yang diberikan penyedia layanan dan CNAME record dengan <code>www</code> untuk host-nya dengan IP address menggunakan username.github.io (ganti username dengan username Github Anda).<br />
{{<images width="80%" title="Custom Domain" src="/attachments/blog/2017/09/custom-domain/1.jpg">}}
 </li>

<li>Langkah Kedua<br/>
Setelah beres melakukan record DNS di penyedia layanan custom domain Anda, kini tinggal membuat file CNAME di repository blog Anda.<br />
<br />
Silahkan buat file baru di repository dengan nama CNAME kemudian masukan domain Anda (misalnya seperti <code>www.threechilix.xyz</code>) di editornya lalu commit file tersebut. Hanya itu saja, selanjutnya kita tinggal menunggu proses propagasi, biasanya paling cepat 30 menit atau menunggu 24 jam bahkan lebih tergantung dengan penyedia domain Anda.<br />
<br />
Untuk melihat apakah blog kita sudah online dengan domain kita yang baru, silahkan klik menu setting di repository dan lihat pada kotak Github Pages akan tampak seperti di bawah ini.<br />
{{<images width="80%" title="Custom Domain" src="/attachments/blog/2017/09/custom-domain/2.jpg">}}
</li>
</ol>
Selamat mencoba dan semoga bermanfaat
