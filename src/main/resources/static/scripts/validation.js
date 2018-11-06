function norepeat(gd1,gd2,gd3,gd4)
	{
		if(gd1==gd2||gd1==gd3||gd1==gd4||gd2==gd3||gd2==gd4||gd3==gd4)
		return 0;
		else
		return 1;
	}
function validinpt(gd)
	{
		if(gd=="0"||gd=="1"||gd=="2"||gd=="3"||gd=="4"||gd=="5"||gd=="6"||gd=="7"||gd=="8"||gd=="9")
		return 1;
		else
		return 0;
	}
function totalvalidator(gd1,gd2,gd3,gd4)
	{
		if((gd1!="0")&&validinpt(gd1)&&validinpt(gd2)&&validinpt(gd3)&&validinpt(gd4)&&norepeat(gd1,gd2,gd3,gd4))
		return 1;
		else
		return 0;
	}