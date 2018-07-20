---
title: "CSS Beautifier"
description: "CSS beautifier, pretty print, formatter agar mudah dibaca."
images: "attachments/tools/css-beautifier/thumbnail.jpg"
class: "icon-orange"
icon: "fa-refresh"
date: "2017-09-14"
js: "attachments/tools/css-beautifier/script.js"
---
<input type="hidden" id='output_type' value="cstyle">
<center>
	<div class="form-group">
		<textarea style="padding:10px;background:#263238;color:#fff;min-height:300px" id='input_code' class='form-control' wrap='off'></textarea>
	</div>
		<button type='button' class='btn btn-default btn-info' onclick='javascript:runTabifier();' accesskey='t'>Format Code</button>
		<code id='bar'></code>
		<div class="form-group">
			<textarea style="padding:10px;background:#263238;color:#fff;min-height:300px" id='output_code' readonly='readonly' class='form-control' wrap='off'></textarea>
		</div>
	</center>
