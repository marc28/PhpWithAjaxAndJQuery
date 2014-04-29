$('#btn').on('click', returnData);


function returnData()
{
	$.ajax({
		"url":"test.php",
		"success":function(data){
			$('#result').html(data); //data here is a string
		}
	});
}