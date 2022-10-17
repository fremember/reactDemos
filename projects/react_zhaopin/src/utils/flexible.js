var tid = null
function refreshRem () {
	var doc = document,
		html = doc.querySelectorAll('html')[0],
		w = doc.body.clientWidth < window.screen.width ? doc.body.clientWidth : window.screen.width;
	html.style.fontSize = `${parseFloat(w) / 10}px`
}
refreshRem()
window.addEventListener('resize', function() {
	clearTimeout(tid);
	tid = setTimeout(refreshRem, 20);
}, false)

window.addEventListener('pageshow', function(e) {
	if (e.persisted) {
		clearTimeout(tid);
		tid = setTimeout(refreshRem, 20);
	}
}, false);