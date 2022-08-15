var money;
var time;

money = prompt('Ваш бюджет на месяц?', '');
timme = prompt('Введите дату в формате YYYY-MM-DD', '');

var appData = {
    budget: money,
    experses: {},
    optionExperses: {},
    income: [],
    timeDate: time,
    saving: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью  расходов в этом месяце', ''),
        b = prompt('Сколько составил Ваш бюджет?','');

    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log('Все ок!');
        appData.experses[a] = b;
    } else {
        console.log('Плохой результат');
        i--;
    }
}

// Цикл While

    // while (i < 2) {
    //     i = 0;
    //     i++;
        // if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        //         console.log('Все ок!');
        //         appData.experses[a] = b;
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
    //         appData.experses[a] = b;
    //     } else {
    //         console.log('Плохой результат');
    //         i--;
    //     } 
    //     i++; 
    // } while (i < 2);
    

appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет: " + appData.moneyPerDay + "руб");

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень дохода!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень дохода");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень дохода!");
} else {
    console.log("Произошла какая-то ошибка");
}
