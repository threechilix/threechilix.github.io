/*********************************************************************
 * #### jQuery Disqus Feed / Disqusin.js v0.0.1 ####
 * Coded by Ican Bachors 2016.
 * http://ibacor.com/labs/disqusinjs
 * Updates will be posted to this site.
 *********************************************************************/
 $.fn.disqusin = function(e, f, g, h, j) {
	
    $(this).html('<ul class="disqusin"></ul>' + (h == true ? '<div class="disqusin_load_more"><a href="#" class="btn disqusin_more" data-nexdisqusin="">Load more</a></div>' : ''));
    disqus_feed("");

    function disqus_feed(d) {
        $.ajax({
            url: 'https://disqus.com/api/3.0/forums/listPosts.json?forum=' + e + '&limit=' + g + '&related=thread&api_key=' + j + '&cursor=' + d,
            crossDomain: true,
            dataType: 'json'
        }).done(function(b) {
            var c = '';
            $.each(b.response, function(i, a) {
                c += '<li>';
                c += '	<div class="comment-main-level">';
                c += '		<div class="comment-box">';
                c += '			<div class="comment-top">';
                c += '				<img src="' + b.response[i].author.avatar.small.permalink + '" alt="">';
				c += '              ' + b.response[i].author.name + (b.response[i].author.username == f ? ' <span class="label label-danger">admin</span>' : '');
				c += '				<span class="ago">' + relative_time(b.response[i].createdAt) + '</span>';
				c += '			</div>';
                c += '			<div class="comment-content">';
                if (b.response[i].media[0] != null) {
                    c += '<a href="' + b.response[i].media[0].url + '" target="_BLANK"><img src ="' + b.response[i].media[0].url + '"></a>'
                }
                c += '<pre class="prettyprint">' + htmlEntities(b.response[i].raw_message) + '</pre>';
                c += '			</div>';
                c += '			<div class="comment-bottom">';
				c += '				<a href="' + b.response[i].thread.link + (b.response[i].parent != null ? '#comment-' + b.response[i].parent : '#comment-' + b.response[i].id) + '"><i class="fa fa-external-link"></i> ' + b.response[i].thread.title.replace(' - iBacor', '') + '</a>';
                c += '				<span class="like"><i class="fa fa-thumbs-up"></i> ' + b.response[i].likes + '</span>';
				c += '			</div>';
                c += '		</div>';
                c += '	</div>';
                c += '</li>'
            });
            if (h == true) {
                if (b.cursor.hasNext == true) {
                    $('.disqusin_more').data('nexdisqusin', b.cursor.next)
                } else {
                    $('.disqusin_load_more').remove();
                }
            }
            $('.disqusin').append(c);
            $('.disqusin_more').click(function() {
                var a = $(this).data('nexdisqusin');
                disqus_feed(a);
                return false
            });
        });
    }

    function relative_time(a) {
        if (!a) {
            return
        }
        a = $.trim(a);
        a = a.replace(/\.\d\d\d+/, "");
        a = a.replace(/-/, "/").replace(/-/, "/");
        a = a.replace(/T/, " ").replace(/Z/, " UTC");
        a = a.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2");
        var b = new Date(a);
        var c = (arguments.length > 1) ? arguments[1] : new Date();
        var d = parseInt((c.getTime() - b) / 1000);
        d = (d < 2) ? 2 : d;
        var r = '';
        if (d < 60) {
            r = 'jst now'
        } else if (d < 120) {
            r = 'a min'
        } else if (d < (45 * 60)) {
            r = (parseInt(d / 60, 10)).toString() + ' mins ago'
        } else if (d < (2 * 60 * 60)) {
            r = 'an hr'
        } else if (d < (24 * 60 * 60)) {
            r = (parseInt(d / 3600, 10)).toString() + ' hrs ago'
        } else if (d < (48 * 60 * 60)) {
            r = 'a day'
        } else {
            dd = (parseInt(d / 86400, 10)).toString();
            if (dd <= 30) {
                r = dd + ' dys ago'
            } else {
                mm = (parseInt(dd / 30, 10)).toString();
                if (mm <= 12) {
                    r = mm + ' mon ago'
                } else {
                    r = (parseInt(mm / 12, 10)).toString() + ' yrs ago'
                }
            }
        }
        return r
    }

    function htmlEntities(a) {
        return String(a).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
    }
}