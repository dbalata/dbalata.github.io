var a = 10;

$("document").ready(function()
{
	$("#b1").on('click', b1Click);
	$("#b2").on('click', b2Click);
});

function b1Click()
{
	runFunc(fact);
}

function b2Click()
{
	runFunc(x => 2 ** x);
}

function runFunc(f)
{
	var input = $("#ta1").val();
	$("#t1").text(f(input));
}

function fact(n)
{
	if(n == 1) return 1;
	else return n * fact(n - 1);
}

