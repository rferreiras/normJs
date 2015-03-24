var char2Norm={
    "áäãàâAÁÄÃÀÂ":"a",
    "éëẽèêEÉËẼÈÊ":"e",
    "íïĩìîIÍÏĨÌÎ":"i",
    "óöõòôOÓÖÕÒÔ":"o",
    "úüũùûUÚÜŨÙÛ":"u",
    "ñÑńǹ":"n"
};
function normalize(textI){
    var text=textI.toLowerCase();
    var r="";
    for(var i=0;i<text.length;i++){
	var c=text[i];
	var normal=true;
	for(var j in char2Norm){
	    if(j.indexOf(c)>-1){
		normal=false;
		r+=char2Norm[j];
	    }
	}
	if(normal){
	    r+=c;
	}
    }
}
export.normalize=normalize;
