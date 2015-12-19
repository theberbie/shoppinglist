$(document).ready(function(){

	var inputelement = $(".add");
			
	$(".enter").click(function(){
			var otherinput = inputelement.val();
		var tableRow = $("<tr>");
		var tableCell1 = $("<td>"); 
		    tableCell1.text(otherinput);
		var tableCell2 = $("<td>"); 
		var tableCell2Link = $("<a href=''>+</a> 4 <a href='#'> - </a>"); 
		tableCell2.append(tableCell2Link);
		var tableCell3 = $("<td>"); 
		var tableCell3Link = $("<input type='checkbox'>"); tableCell3.append(tableCell3Link);
		var tableCell4 = $("<td>"); var tableCell4Link = $(tee); tableCell4.append(tableCell4Link); tableCell4.prepend(tableCell4Link);

		tableRow.append(tableCell1); tableRow.append(tableCell2); tableRow.append(tableCell3); tableRow.append(tableCell4);
		$(".try").append(tableRow);
	});

	var tee = $("<a href=''> X </a>");

	$(tee).click(function() {


		console.log("ASDFASF");
		$(this).closest("tr").fadeToggle();
	});
	 	
});


