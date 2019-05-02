(function(){
	if(window._fcy_sc) return false;
	window._fcy_sc = true;
	if(window.top != window) return false;
	var s = document.createElement("script");
	s.setAttribute("type","text/javascript");
	s.setAttribute("id","_fcy_s");
	s.setAttribute("t","unknown");
	s.setAttribute("g","test");
	s.setAttribute("defer","defer");
	var metas = document.getElementsByTagName("meta");
	var keywords = "";
	for(var i = 0 ; i < metas.length ;i++){
		if(metas[i].getAttribute("name") == "keywords"){
			keywords += metas[i].getAttribute("content");
		}
		if(metas[i].getAttribute("name") == "description"){
			keywords += metas[i].getAttribute("content");
		}
	}
	keywords +=document.getElementsByTagName("title")[0] ? document.getElementsByTagName("title")[0].text : "";
	s.setAttribute("src","https://news.veryci.com/s?t=unknown&g=test&rz=113&_=" + new Date().getTime()+ "&keywords=" + encodeURIComponent(keywords));
	document.head && document.head.appendChild(s);
})();