$(document).ready(function() {

    function outTime() {
        var now = new Date();
        //Часов, минут, секунд, осталось до.
        var hourNow = 23 - now.getHours(); //час
        if (hourNow < 10) {
            hourNow = "0" + hourNow;
        }
        var minutesNow = 59 - now.getMinutes(); //минута
        if (minutesNow < 10) {
            minutesNow = "0" + minutesNow;
        }
        var secondsNow = 60 - now.getSeconds(); //секунда
        if (secondsNow < 10) {
            secondsNow = "0" + secondsNow;
        }

        $('.timeEvent').text(hourNow + " годин, " + minutesNow + " хвилин, " + secondsNow + " секунд.");
    }

    var springIdOne = new Date(2018, 2, 8, 0, 0, 0);
    var springIdTwo = new Date(2018, 3, 8, 0, 0, 0);
    var springIdThree = new Date(2018, 4, 1, 0, 0, 0);
    var springIdFour = new Date(2018, 4, 9, 0, 0, 0);

    var summerIdOne = new Date(2018, 5, 4, 0, 0, 0);
    var summerIdTwo = new Date(2018, 5, 28, 0, 0, 0);
    var summerIdThree = new Date(2018, 6, 7, 0, 0, 0);
    var summerIdFour = new Date(2018, 7, 24, 0, 0, 0);

    var autumnIdOne = new Date(2018, 8, 1, 0, 0, 0);
    var autumnIdTwo = new Date(2018, 9, 14, 0, 0, 0);
    var autumnIdThree = new Date(2018, 10, 17, 0, 0, 0);
    var autumnIdFour = new Date(2018, 10, 21, 0, 0, 0);

    var winterIdOne = new Date(2018, 11, 6, 0, 0, 0);
    var winterIdTwo = new Date(2018, 11, 19, 0, 0, 0);
    var winterIdThree = new Date(2019, 0, 1, 0, 0, 0);
    var winterIdFour = new Date(2019, 0, 7, 0, 0, 0);


    function season(date, One, Two, textInDiv) {
        var now = new Date();
        var idOne = '#' + One;
        var idTwo = '#' + Two;

        var from1970 = (now.getTime() / (1000 * 60 * 60 * 24)); //с 1970 в днях!
        var from1970ToDate = (date.getTime() / (1000 * 60 * 60 * 24)); //дней от 1970 до date

        var resultDate = (Math.round(from1970ToDate) - Math.round(from1970)); //результат
        var myDays = ["Неділю", "Понеділок", "Вівторок", "Середу", "Четверг", "Пятницю", "Суботу"];

        $(idOne).text(textInDiv + " " + myDays[date.getDay()]);
        $(idTwo).text("Через " + resultDate + " днів,");
    }

    season(springIdOne, 'collapse-1-One', 'collapse-1-Two', 'Міжнародний жіночий день, "8 березня" буде в');
    season(springIdTwo, 'collapse-2-One', 'collapse-2-Two', 'Великдень, "8 квітня" буде в');
    season(springIdThree, 'collapse-3-One', 'collapse-3-Two', 'Свято Весни і Праці, "1 травня" буде в');
    season(springIdFour, 'collapse-4-One', 'collapse-4-Two', 'День перемоги, "9 травня" буде буде в');

    season(summerIdOne, 'collapse-5-One', 'collapse-5-Two', 'Трійця, "4 червня" буде в');
    season(summerIdTwo, 'collapse-6-One', 'collapse-6-Two', 'День Конституції України, "28 червня" буде в');
    season(summerIdThree, 'collapse-7-One', 'collapse-7-Two', 'Івана Купала, "7 липня" буде в');
    season(summerIdFour, 'collapse-8-One', 'collapse-8-Two', 'День Незалежності України, "24 серпня" буде в');
	
	season(autumnIdOne, 'collapse-9-One', 'collapse-9-Two', 'День Знань, "1 вересня" буде в');
	season(autumnIdTwo, 'collapse-10-One', 'collapse-10-Two', 'День захисника України, "14 жовтня" буде в');
	season(autumnIdThree, 'collapse-11-One', 'collapse-11-Two', 'Міжнародний день студентів, "17 листопада" буде в');
	season(autumnIdFour, 'collapse-12-One', 'collapse-12-Two', 'День телебачення, "21 листопада" буде буде в');
	
	season(winterIdOne, 'collapse-13-One', 'collapse-13-Two', 'День Збройних сил України, "6 грудня" буде в');
	season(winterIdTwo, 'collapse-14-One', 'collapse-14-Two', 'День святого Миколая, "19 грудня" буде в');
	season(winterIdThree, 'collapse-15-One', 'collapse-15-Two', 'Новий 2018 рік, "1 січня" буде в');
	season(winterIdFour, 'collapse-16-One', 'collapse-16-Two', 'Різдво Христове,7 січня буде буде в');	
	

    setInterval(function() {
        outTime();
    }, 1000); //обновления каждую секунду	

});