var a = 123;
alert(location.hostname);

document.write(fact(10));

function fact(n)
{
  if(n == 1) return 1;
  else return n * fact(n - 1);
}
