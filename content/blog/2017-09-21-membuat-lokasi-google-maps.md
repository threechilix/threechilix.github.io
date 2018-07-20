---
title: "Membuat Lokasi Di Google Maps"
description: "Membuat Google Maps Dan Menentukan Lokasi Sendiri"
author: "Threechilix"
date: 2017-09-21T00:00:00
publishdate: 2017-09-21T00:00:00
images: "attachments/blog/2017/09/new-map/thumbnail.jpg"
tags: ["maps"]
categories: ["tutorial"]
type: "blog"
comments: true
sitemap: true
---
Membuat lokasi di Google Maps dapat berguna saat Anda membuat web untuk hotel, perumahan, ataupun toko online agar pengunjung dapat mengetahui lokasi Anda dengan tepat, dengan begitu akan memberikan kepercayaan tersendiri terhadap layanan online yang Anda bangun. Karena jika tidak ada kepercayaan, maka usaha online yang Anda bangun akan sia-sia saja.

Nah kali ini saya akan share cara membuat Google Maps dengan menentukan lokasi kita sendiri dan menambahkan link web kita pada lokasi yang kita buat.

Untuk memulainya, silahkan Anda masuk ke webnya https://mapsengine.google.com/map/ dan klik tombol <kode>Create a new map</kode> di bawah ini.
{{<images width="80%" title="Create a new map" src="/attachments/blog/2017/09/new-map/1.jpg">}}

Kemudian setelah terbuka jendela baru, silahkan klik anchor text <kode>Untitled Map</kode> di kotak sebelah kiri untuk memulai membuat map Anda sendiri.
{{<images width="80%" title="Untitled Map" src="/attachments/blog/2017/09/new-map/2.jpg">}}

Kemudian silahkan isi Map Title dan deskripsi untuk map yang Anda buat pada form dialog box yang muncul selanjutnya.
{{<images width="80%" title="Dialog Box" src="/attachments/blog/2017/09/new-map/3.jpg">}}

Kemudian silahkan ketikan nama tempat atau daerah Anda untuk menuju ke daerah Anda dengan mudah pada kotak search di atas.
{{<images width="80%" title="Location" src="/attachments/blog/2017/09/new-map/4.jpg">}}

Setelah peta daerah tempat tinggal Anda terbuka silahkan cari tempat Anda dengan men-zoom petanya agar mudah menemukan tempat kita yang tepat pada peta tersebut. Setelah Anda menemukan titik yang tepat untuk rumah Anda, silahkan klik <kode>ikon Marker</kode> di bawah kotak pencarian di atas kemudian klik pada titik yang tepat sebagai tempat tinggal kita. Kemudian silahkan beri nama dan deskripsi untuk titik tersebut.
{{<images width="80%" title="ikon Marker" src="/attachments/blog/2017/09/new-map/5.jpg">}}

Kemudian silahkan beralih pada kotak putih di sebelah kiri layar, di situ terdapat tab <kode>Style</kode>, <kode>Data</kode>, dan <kode>Label</kode>.

Tab <kode>Style</kode> untuk merubah gaya pointer/marker yang Anda tentukan tadi sebagai ciri titik tempat tinggal Anda.

Tab <kode>Data</kode> untuk menentukan data tempat tinggal Anda yang muncul ketika seseorang mengklik marker tersebut.

Tab <kode>Label</kode> untuk memberikan label pada ikon Marker Anda.

Kemudian silahkan klik tab <kode>Data</kode> untuk menyematkan link web Anda pada data peta kita. Kemudian silahkan klik tanda panah kecil dan klik <kode>Insert Column After</kode>.
{{<images width="80%" title="ikon Marker" src="/attachments/blog/2017/09/new-map/6.jpg">}}

{{<images width="80%" title="ikon Marker" src="/attachments/blog/2017/09/new-map/7.jpg">}}

Kemudian ketikan <kode>URL</kode> pada kolom yang tersedia dan biarkan type-nya pada text.
{{<images width="80%" title="ikon Marker" src="/attachments/blog/2017/09/new-map/8.jpg">}}

Lalu silahkan re-fresh halamannya agar colom URL yang kita buat tadi muncul. Setelah itu silahkan klik kotak kosong di bawah tab URL dan paste URL blog Anda di situ.
{{<images width="80%" title="ikon Marker" src="/attachments/blog/2017/09/new-map/9.jpg">}}

Sekarang coba klik marker titik tempat tinggal Anda. Jika di situ belum muncul URL yang kita buat tadi silahkan klik icon pensil (edit) kemudian centang radio button URL-nya.
{{<images width="80%" title="ikon Marker" src="/attachments/blog/2017/09/new-map/10.jpg">}}

Sehingga ketika marker-nya diklik akan tampak seperti di bawah ini.
{{<images width="80%" title="ikon Marker" src="/attachments/blog/2017/09/new-map/11.jpg">}}

Kemudian silahkan klik tombol Share di pojok kanan atas, lalu klik tulisan Change pada Private dan rubah menjadi Publik on the web.
{{<images width="80%" title="ikon Marker" src="/attachments/blog/2017/09/new-map/12.jpg">}}

{{<images width="80%" title="ikon Marker" src="/attachments/blog/2017/09/new-map/13.jpg">}}

Kemudian silahkan klik icon folder pada kotak di sebelah kiri layar dan klik Embed on my site untuk mendapatkan kode embed untuk dipasang di blog kita.
{{<images width="80%" title="ikon Marker" src="/attachments/blog/2017/09/new-map/14.jpg">}}

Agar widgetnya menjadi responsive, maka Anda perlu memodif sedikit kode frame-nya, biasanya kode frame-nya akan seperti berikut ini.
{{<images width="80%" title="ikon Marker" src="/attachments/blog/2017/09/new-map/15.jpg">}}
```
<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1rXYR4hazkTbp5erowo29TCR-ghY" width="640" height="480"></iframe>
```
Untuk mengubah ukuran silahkan ganti kode <code>width="640"</code> dan <code>height="480"</code> atau Anda bisa gunakan kode ini <code>style="width:100%;height:480px;"</code>

Selesai...!

Sekarang lokasi tempat kita bisa dicari di Google Maps.
