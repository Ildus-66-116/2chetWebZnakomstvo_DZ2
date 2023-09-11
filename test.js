function helloName(names = 'Денис'){
    alert(`Приветствую ${names} это рассказ о моем лете!`);
}
let test = prompt("Введите свое имя: ", "Денис");
if (test == '')
   helloName();
else
    helloName(test)