let age = 8;
let ageGroup;

if (age <= 1) {
  ageGroup = 'Щенки';
  console.log(ageGroup); 
}

elif (age > 1 && age <= 3) {
  ageGroup = 'Молодые собаки';
  console.log(ageGroup); 
}

elif (age > 3 && age <= 7) {
  ageGroup = 'Собаки средних лет';
  console.log(ageGroup); 
}

elif (age > 7) {
  ageGroup = 'Почтенные таксоны';
  console.log(ageGroup); 
}
