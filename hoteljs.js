function tipcal()
{
	console.log("clicked");
	var amount=document.getElementById("bill_amount").value;
	console.log(amount);
	var perc=document.getElementById("tip_perc").value;
	console.log(perc);
	var tip=amount*(perc/100);
	alert(tip);
	var total=tip+Number(amount);
	alert(total);
	document.getElementById("tip_total").value=tip;
	document.getElementById("total_billed").value=total;
}
	