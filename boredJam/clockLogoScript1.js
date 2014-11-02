var logo = document.getElementById("logo");
var w = logo.offsetWidth;
var h = logo.offsetHeight;

var date = new Date();

var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
circle.setAttribute("cx", String(w / 2));
circle.setAttribute("cy", String(h / 2));
circle.setAttribute("r", String(Math.min(w, h) * 7/8 * 1/2));
circle.setAttribute("style", "fill:transparent; stroke:white; stroke-width:1;");

var line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
line1.setAttribute("x1", String(w / 2));
line1.setAttribute("y1", String(h / 2));
line1.setAttribute("x2", String(w / 2 + Math.min(w, h) * 3/4 * 1/2 * Math.cos(2 * Math.PI * date.getSeconds() / 60 - 1/2 * Math.PI)));
line1.setAttribute("y2", String(h / 2 + Math.min(w, h) * 3/4 * 1/2 * Math.sin(2 * Math.PI * date.getSeconds() / 60 - 1/2 * Math.PI)));
line1.setAttribute("style", "stroke:white; stroke-width:1;");
var line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
line2.setAttribute("x1", String(w / 2));
line2.setAttribute("y1", String(h / 2));
line2.setAttribute("x2", String(w / 2 + Math.min(w, h) * 1/2 * 1/2 * Math.cos(2 * Math.PI * date.getMinutes() / 60 - 1/2 * Math.PI)));
line2.setAttribute("y2", String(h / 2 + Math.min(w, h) * 1/2 * 1/2 * Math.sin(2 * Math.PI * date.getMinutes() / 60 - 1/2 * Math.PI)));
line2.setAttribute("style", "stroke:white; stroke-width:1;");

logo.appendChild(circle);
logo.appendChild(line1);
logo.appendChild(line2);

window.setInterval(function(){
	var date = new Date();
	line1.setAttribute("x2", String(w / 2 + Math.min(w, h) * 3/4 * 1/2 * Math.cos(2 * Math.PI * date.getSeconds() / 60 - 1/2 * Math.PI)));
	line1.setAttribute("y2", String(h / 2 + Math.min(w, h) * 3/4 * 1/2 * Math.sin(2 * Math.PI * date.getSeconds() / 60 - 1/2 * Math.PI)));
	line2.setAttribute("x2", String(w / 2 + Math.min(w, h) * 1/2 * 1/2 * Math.cos(2 * Math.PI * date.getMinutes() / 60 - 1/2 * Math.PI)));
	line2.setAttribute("y2", String(h / 2 + Math.min(w, h) * 1/2 * 1/2 * Math.sin(2 * Math.PI * date.getMinutes() / 60 - 1/2 * Math.PI)));
}, 1000);