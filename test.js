var a = 10;

$("document").ready(function()
{
	$("#b1").on('click', b1Click);
	$("#b2").on('click', b2Click);
	$("#b3").on('click', b3Click);
});

function b1Click()
{
	runFunc(fact);
}

function b2Click()
{
	runFunc(x => 2 ** x);
}

function b3Click()
{
	runFunc(hashCode);
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

function hashCode(s) {
  var string = new String(s);
  var hash = 0, i, chr;
  if (string.length === 0) return hash;
  for (i = 0; i < string.length; i++) {
    chr   = string.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};