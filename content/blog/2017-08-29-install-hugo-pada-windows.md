---
title: "Install Hugo Di Windows"
description: "Cara Mudah Install Hugo Pada Windows 7, 8, dan 10"
author: "Threechilix"
date: 2017-08-29T08:00:00
publishdate: 2017-08-29T08:00:00
images: "attachments/blog/2017/08/install-hugo-windows/thumbnail.jpg"
tags: ["hugo" , "development"]
categories: ["tutorial"]
type: "blog"
comments: true
sitemap: true
---
[Hugo](https://threechilix.github.io/apa-itu-hugo/) adalah static generator tercepat di dunia yang mempu membuat ribuan postingan hanya dengan hitungan detik.
<h3>Install Hugo Di Windows</h3>
Cara install hugo itu mudah dan tidak membutuhkan software pihak ke-3 lainnya seperti (Node.js). Anda hanya perlu memasangnya dengan cara mendownload hugo versi terbaru disini lalu ekstraks hasil download pada folder <kode>C:\Hugo\bin</kode> dan rubah nama menjadi <kode>hugo.exe</kode> jika bawaannya sudah <kode>hugo.exe</kode> maka tidak perlu ada perubahan lagi.

{{<images width="80%" title="Hugo Folder" src="/attachments/blog/2017/08/install-hugo-windows/folder-hugo.jpg">}}

Setelah proses ekstraksi selesai, selanjutnya Anda perlu mengatur Envirnoment Variables dan menambahkan <kode>;C:\Hugo\bin</kode> caranya

<ol>
<li>Klik Tombol Windows > Sistem<br/>
{{<images width="80%" title="Hugo Folder" src="/attachments/blog/2017/08/install-hugo-windows/step_1.jpg">}}
</li>
<li>Klik Advanced systems settings<br/>
{{<images width="80%" title="Hugo Folder" src="/attachments/blog/2017/08/install-hugo-windows/step_2.jpg">}}
</li>
<li>Klik tombol Environment Variables...<br/>
{{<images width="80%" title="Hugo Folder" src="/attachments/blog/2017/08/install-hugo-windows/step_3.jpg">}}
</li>
<li>Klik PATH/Path lalu edit<br/>
{{<images width="80%" title="Hugo Folder" src="/attachments/blog/2017/08/install-hugo-windows/step_4.jpg">}}
</li>
<li>Masukan Direktori Hugo ke dalam Path dengan tambahan tanda "<kode>;</kode>" tanpa kutip seperti ini: <kode>;C:\Hugo\bin</kode> atau bisa Anda lihat pada gambar yang ditandai biru. Jangan lupa untuk menekan tombol Apply dan OK<br/>
{{<images width="80%" title="Hugo Folder" src="/attachments/blog/2017/08/install-hugo-windows/step_5.jpg">}}
</li>
</ol>
<h3>Untuk pengguna Windows 7 dan 8.x:</h3>
Khusus untuk Windows 7 dan 8.1 tidak menyertakan editor untuk Environment Variables yang disertakan di Windows 10, jadi pengguna non-teknis di platform tersebut disarankan untuk memasang editor gratis yang dibuat oleh pihak ketiga seperti [Windows Environment Variables Editor](http://eveditor.com/) atau [Path Editor](https://patheditor2.kodeplex.com/).

Sekarang Hugo telah terpasang. Selanjutnya, Anda dapat membuat situs pertama dengan static site generator Hugo.
