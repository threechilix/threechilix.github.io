function addChar(e,t){if(e.value==null||e.value=="0")e.value=t;else e.value+=t}function cos(e){e.display.value=Math.cos(e.display.value)}function sin(e){e.display.value=Math.sin(e.display.value)}function tan(e){e.display.value=Math.tan(e.display.value)}function sqrt(e){e.display.value=Math.sqrt(e.display.value)}function ln(e){e.display.value=Math.log(e.display.value)}function exp(e){e.display.value=Math.exp(e.display.value)}function deleteChar(e){e.value=e.value.substring(0,e.value.length-1)}function changeSign(e){if(e.value.substring(0,1)=="-")e.value=e.value.substring(1,e.value.length);else e.value="-"+e.value}function compute(form){form.display.value=eval(form.display.value)}function square(form){form.display.value=eval(form.display.value)*eval(form.display.value)}function checkNum(e){for(var t=0;t<e.length;t++){var n=e.substring(t,t+1);if(n<"0"||n>"9"){if(n!="/"&&n!="*"&&n!="+"&&n!="-"&&n!="."&&n!="("&&n!=")"){alert("entri yang tidak valid!");return false}}}return true}
	