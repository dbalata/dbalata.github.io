var a = 10;

$("document").ready(function()
{
	$("#b1").on('click', run);
});

function run()
{
	var input = $("#ta1").val();
	$("#t1").text(fact(input));
}

function fact(n)
{
	if(n == 1) return 1;
	else return n * fact(n - 1);
}

