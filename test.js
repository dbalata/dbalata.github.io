var a = 10;

function run()
{
	document.write(a + " factorial is: ");
	document.write(fact(a) + "<br>");
}

function fact(n)
{
	if(n == 1) return 1;
	else return n * fact(n - 1);
}

