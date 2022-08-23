let money, time;



function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');   
    
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();

var appData = {
    budget: money,
    expenses: {},
    optionExpenses: {},
    income: [],
    timeDate: time,
    saving: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью  расходов в этом месяце', ''),
            b = prompt('Сколько составил Ваш бюджет?','');
    
        if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            console.log('Все ок!');
            appData.expenses[a] = b;
        } else {
            console.log('Плохой результат');
            i--;
        }
    }
}
chooseExpenses();

// Цикл While

    // while (i < 2) {
    //     i = 0;
    //     i++;
        // if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        //         console.log('Все ок!');
        //         appData.expenses[a] = b;
        // } else {
        //         console.log('Плохой результат');
        //         i--;
        // }
    // }

// Цикл DO ... While

    // let i = 0;

    // do {
    //     let a = prompt('Введите обязательную статью  расходов в этом месяце', ''),
    //         b = prompt('Сколько составил Ваш бюджет?','');

    //     if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
    //         console.log('Все ок!');
    //         appData.expenses[a] = b;
    //     } else {
    //         console.log('Плохой результат');
    //         i--;
    //     } 
    //     i++; 
    // } while (i < 2);
    
function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay + "руб");
}

detectDayBudget();

function detectLevel() {

    if(appData.moneyPerDay < 100) {
        console.log("Минимальный уровень дохода!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень дохода");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень дохода!");
    } else {
        console.log("Произошла какая-то ошибка");
    }
}

detectLevel();


function checkSavings() {
    if (appData.saving == true) {
        let save = +prompt("Какова сумма накоплений?"),
            persent = +prompt("Под какой процент?");
        
        appData.monthIncome = save/100/12*persent;

        alert("Доход с Ваших текущих накоплений в месяц составит: " + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
    let questionsOptExpenses;
    questionsOptExpenses = +prompt("Статья необязательных расходов?");
    for (let i = 1; i <= 3; i++) {
        appData.optionExpenses[i] = questionsOptExpenses;
        console.log(appData.optionExpenses);
    }
}
