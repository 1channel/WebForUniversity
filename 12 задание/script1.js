let age = 8;
let ageGroup;

if (age <= 1) {
  ageGroup = '�����';
  console.log(ageGroup); 
}

if (age > 1 && age <= 3) {
  ageGroup = '������� ������';
  console.log(ageGroup); 
}

if (age > 3 && age <= 7) {
  ageGroup = '������ ������� ���';
  console.log(ageGroup); 
}

if (age > 7) {
  ageGroup = '��������� �������';
  console.log(ageGroup); 
}