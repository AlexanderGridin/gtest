/* -------------------------------- */
/* Задание №19
/* -------------------------------- */
// task19();

function task19(){
  let age = 14;

  let successMessage = 'Вам от 14 до 90 лет';
  let failureMessage = 'Вам либо меньше 14, либо больше 90 лет';
  let errorMessage = 'Возраст не может быть отрицательным числом!';
  
  if(age >= 14 && age <= 90){
    logTaskResults('Задание №19', false, successMessage);
  } else if(age < 0){
    logTaskResults('Задание №19', false, errorMessage);
  } else {
    logTaskResults('Задание №19', false, failureMessage);
  }
}

/* -------------------------------- */
/* Задание №20
/* -------------------------------- */
task20();

function task20(){
  let taskTitle = 'Задание №20';
  let age = 16;

  let successMessage = 'Вам либо 14 лет и меньше, либо 90 лет и больше';
  let failureMessage = 'Вам от 15 до 89 лет';
  let errorMessage = 'Возраст не может быть отрицательным числом!';

  // task20_1();
  // task20_2();

  function task20_1(){
    if(!(age > 14) || !(age < 90)){
      logTaskResults(taskTitle, false, successMessage);
    } else if(age < 0){
      logTaskResults(taskTitle, false, errorMessage);
    } else {
      logTaskResults(taskTitle, false, failureMessage);
    }
  }

  function task20_2(){
    if(age <= 14 || age >= 90 ){
      logTaskResults(taskTitle, false, successMessage);
    } else if(age < 0){
      logTaskResults(taskTitle, false, errorMessage);
    } else {
      logTaskResults(taskTitle, false, failureMessage);
    }
  }
}

/* -------------------------------- */
/* Задание №21
/* -------------------------------- */
task21();

function task21(){
  let taskTitle = 'Задание №21';

  let case1 = 'Ничего не вывелось';
  let case2 = 'Ничего не вывелось';
  let case3 = 'Ничего не вывелось';

  if(-1 || 0){
    case1 = 'first';
  }

  if(-1 && 0){
    case2 = 'second';
  }

  if(null || -1 && 1){
    case3 = 'third';
  }

  logTaskResults(taskTitle, false, case1, case2, case3);
}
