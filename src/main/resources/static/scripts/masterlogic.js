function generator()
	{
		var outnum = Math.floor((9999-999)*Math.random()) + 1000;
		var d1 = outnum.toString().substring(0,1);
		var d2 = outnum.toString().substring(1,2);
		var d3 = outnum.toString().substring(2,3);
		var d4 = outnum.toString().substring(3,4);
		if(d1 == d2 || d1 == d3 || d1 == d4 || d2 == d3 || d2 == d4 || d3 == d4 || d1 == "0"){
			generator();
		}
		else
		answer = outnum.toString();
	}

function bullno(hidnum,guesnum)
	{
		var hd1 = hidnum.toString().substring(0,1);
		var hd2 = hidnum.toString().substring(1,2);
		var hd3 = hidnum.toString().substring(2,3);
		var hd4 = hidnum.toString().substring(3,4);
		var gd1 = guesnum.toString().substring(0,1);
		var gd2 = guesnum.toString().substring(1,2);
		var gd3 = guesnum.toString().substring(2,3);
		var gd4 = guesnum.toString().substring(3,4);
		var num = 0;
		if(hd1 == gd1)num++;
		if(hd2 == gd2)num++;
		if(hd3 == gd3)num++;
		if(hd4 == gd4)num++;
		return num;
	}
	
function cowno(hidnum,guesnum)
	{
		var hd1 = hidnum.toString().substring(0,1);
		var hd2 = hidnum.toString().substring(1,2);
		var hd3 = hidnum.toString().substring(2,3);
		var hd4 = hidnum.toString().substring(3,4);
		var gd1 = guesnum.toString().substring(0,1);
		var gd2 = guesnum.toString().substring(1,2);
		var gd3 = guesnum.toString().substring(2,3);
		var gd4 = guesnum.toString().substring(3,4);
		var num = 0;
		if(hd1 == gd2 || hd1 == gd3 || hd1 == gd4)num++;
		if(hd2 == gd1 || hd2 == gd3 || hd2 == gd4)num++;
		if(hd3 == gd1 || hd3 == gd2 || hd3 == gd4)num++;
		if(hd4 == gd1 || hd4 == gd2 || hd4 == gd3)num++;
		return num;
	}
	
function scoretell(stepno,timetak)
	{
		var out = 60000/(stepno*timetak);
		return Math.floor(out);
	}