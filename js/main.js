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

var a1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    a2 = prompt('Сколько составил Ваш бюджет',''),
    a3 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    a4 = prompt('Сколько составил Ваш бюджет?','');

appData.experses.a1 = a2;
appData.experses.a3 = a4;

alert(appData.budget / 30);
