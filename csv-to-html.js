$(function() {
	var $els = $(".csv-to-html");
	$els.each(function () {
		var $el = $(this);
		var h = $el.html();
		// dupe commas
		//while (h.indexOf(",,") > -1) {
		//	h = h.replace(/\,\,/g,',');
		//}
		
		// last comma
		h = h.replace(/\,\n/g,'\n');
		
		// 
		h = h.replace(/\n/g,'</td></tr>\n<tr><td>');
		
		// table elements
		h = h.replace(/\,/g,'</td><td>');
		
		h = "<table><tr><td>" + h + "</td></tr></table>";
		
		$el.parent().append(h);
		$el.remove();
	});
});
