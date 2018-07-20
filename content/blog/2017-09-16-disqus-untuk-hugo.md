---
title: "Memasang Komentar Disqus pada Hugo"
description: "Sebagai web statis, blog di Hugo memerlukan sistem komentar dari pihak ketiga seperti Disqus."
author: "Threechilix"
date: 2017-09-16T08:00:00
publishdate: 2017-09-16T08:00:00
images: "attachments/blog/2017/09/comments-disqus/thumbnail.jpg"
tags: ["hugo" , "comments"]
categories: ["tutorial"]
type: "blog"
comments: true
sitemap: true
---
Sebagai web statis, blog berbasis Hugo di Github Pages tidak memiliki sistem komentar sendiri. Untuk itu dibutuhkan sistem komentar pihak ketiga seperti Disqus, Facebook, dan lainnya, selain itu beberapa pengunjung mungkin ingin meninggalkan komentar dipostingngan Anda.

Meskipun Hugo menyediakan template internal untuk Disqus, namun saat Anda menguji situs Anda secara lokal host maka komentar Disqus Anda tidak akan tampil.

Untuk menerapkan template internal_Disqus Anda cukup menerapkan code dibawa ini:
```
{{ template "_internal/disqus.html" . }}
```

Untuk menghindari komentar Disqus tidak tampil saat menguji situs Anda Secara lokal host, gunakan code dibawah ini dan paste di <kode>Themes/layout/partials/</kode> dengan nama disqus.html
```
<div id="disqus_thread"></div>
<script>
/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
var disqus_config = function () {
this.page.url = "{{ .Permalink }}";  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = "{{ .UniqueID }}"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://{{ .Site.DisqusShortname }}.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
```

Template diatas membutuhkan <kode>.Site.DisqusShortname</kode> yang Anda tetapkan di <kode>config.yml</kode> / <kode>config.toml</kode> / <kode>config.json</kode>
```
disqusShortName: yourshortname # whatever you set up on Disqus
```
Silahkan ganti kode <kode>yourshortname</kode> dengan username disqus blog Anda.

Sekarang Anda bisa menggunakan code dibawah ini pada template yang Anda gunakan. Sebagai contoh <kode>_default/single.html</kode>
```
{{ partial "disqus.html" . }}
```
Selesai, silahkan coba buka salah satu postingan blog Anda untuk melihat penampakan komentar Disqus.

Bila ada yang kurang dimengerti silahkan tanyakan di komentar.

Selamat mencoba…
