let lastNumber = 15;
let multiplication_result = 1;

for (i = 2; i <= lastNumber; i = i + 2 )
{
  if (i % 2 === 0)
  {
    multiplication_result = multiplication_result * i;
  }
}
alert(multiplication_result)
