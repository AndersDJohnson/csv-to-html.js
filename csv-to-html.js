$(function() {
	var $templateData = $("#templateData");
	var h = $templateData.html();
	
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
	
	// insert guid links
	h = h.replace(/([a-f0-9]+\-[a-f0-9]+\-[a-f0-9]+\-[a-f0-9]+\-[a-f0-9]+)/g, "<a href='full_demo.jsp?templateId=$1'>$1</a>");
	$templateData.parent().append(h);
	$templateData.remove();
});
