function validstrings()
	{
		var gn1 = document.getElementById('guessbox1').value;
		var gn2 = document.getElementById('guessbox2').value;
		var gn3 = document.getElementById('guessbox3').value;
		var gn4 = document.getElementById('guessbox4').value;
		var outstring="0123456789";
		if(gn1!="")
		{
		outstring = outstring.replace(gn1, "");
		}
		if(gn2!="")
		{
		outstring = outstring.replace(gn2, "");
		}
		if(gn3!="")
		{
		outstring = outstring.replace(gn3, "");
		}
		if(gn4!="")
		{
		outstring = outstring.replace(gn4, "");
		}
		return outstring;
	}
	
function findndel(todelnum){
		var gn1 = document.getElementById('guessbox1').value;
		var gn2 = document.getElementById('guessbox2').value;
		var gn3 = document.getElementById('guessbox3').value;
		var gn4 = document.getElementById('guessbox4').value;
		if(gn1==todelnum)
		{
		document.getElementById('guessbox1').value = "";
		}
		if(gn2==todelnum)
		{
		document.getElementById('guessbox2').value = "";
		}
		if(gn3==todelnum)
		{
		document.getElementById('guessbox3').value = "";
		}
		if(gn4==todelnum)
		{
		document.getElementById('guessbox4').value = "";
		}
}

function numbersonly(myfield, e, gboxid)
{
var key;
var keychar;

if (window.event)
   key = window.event.keyCode;
else if (e)
   key = e.which;
else
   return true;
keychar = String.fromCharCode(key);

if ((key==null) || (key==0) || (key==8) || 
    (key==9) || (key==13) || (key==27) )
   return true;

else if (((validstrings()).indexOf(keychar) > -1))
	{
	if(document.getElementById(gboxid).value=="")
	return true;
	else
		{
		document.getElementById(gboxid).value = "";
		return true;
		}
	}
else
	{
	findndel(keychar);
	if (((validstrings()).indexOf(keychar) > -1))
	{
	if(document.getElementById(gboxid).value=="")
	return true;
	else
		{
		document.getElementById(gboxid).value = "";
		return true;
		}
	}
	return false;
	}
}
function numbersonlyfirst(myfield, e)
{
var key;
var keychar;

if (window.event)
   key = window.event.keyCode;
else if (e)
   key = e.which;
else
   return true;
keychar = String.fromCharCode(key);

if ((key==null) || (key==0) || (key==8) || 
    (key==9) || (key==13) || (key==27) )
   return true;

else if (((validstrings().replace("0", "")).indexOf(keychar) > -1))
	{
	if(document.getElementById('guessbox1').value=="")
	return true;
	else
		{
		document.getElementById('guessbox1').value = "";
		return true;
		}
	}

else
	{
	findndel(keychar);
	if (((validstrings().replace("0", "")).indexOf(keychar) > -1))
	{
	if(document.getElementById('guessbox1').value=="")
	return true;
	else
		{
		document.getElementById('guessbox1').value = "";
		return true;
		}
	}
	return false;
	}
}