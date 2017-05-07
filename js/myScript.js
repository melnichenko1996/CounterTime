$(document).ready(function() {

//Загрузка сайту
setTimeout(function(){
	
	$('.welcome').fadeOut(1000);
}, 1000);

setTimeout(function(){
	
	$('#mainWindow').fadeIn(1500);
}, 2100);
	
	
//Сьогоднішня дата
function Time(){
	var forTime = new Date();

	var hour = forTime.getHours();//час
	if(hour<10){ hour = "0" + hour; }

	var minutes = forTime.getMinutes();//минута
	if(minutes<10){ minutes = "0" + minutes; }

	var seconds = forTime.getSeconds();//секунда
	if(seconds<10){ seconds = "0" + seconds; }
	
	var dayWeek = forTime.getDay();//день недели
	var myDays =["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
	var dayOFweek = myDays[dayWeek];
	
	var day = forTime.getDate();//сегодняшнее число
	var numberMonth = forTime.getMonth();//месяц по счету!
	var months = ["Січеня", "Лютого", "Березеня", "Квітня", "Травеня", "Червеня", "Липеня", "Серпеня", "Вересеня", "Жовтеня", "Листопада", "Груденя"];
	var months = months[numberMonth];
	var year = forTime.getFullYear();//год

	$('#nowDate').text("Сьогодні "+dayOFweek+", "+day+" "+months+" "+year+" року." + " Точний час: "+hour+":" +minutes+":" +seconds);
}

//До завтра залишилось
function outTime () {
	var now = new Date();
	//Часов, минут, секунд, осталось до.
	var hourNow = 23 - now.getHours();//час
		if(hourNow<10){ hourNow = "0" + hourNow; }
	var minutesNow  = 59 - now.getMinutes();//минута
		if(minutesNow <10){ minutesNow = "0" + minutesNow; }
	var secondsNow  = 60 - now.getSeconds();//секунда
		if(secondsNow<10){ secondsNow = "0" + secondsNow; }
	
	$('#outTime').text("До завтрашнього дня залишилось " + hourNow + ":" + minutesNow+":"+secondsNow);
}

	
//обект типа Date(год,месяць, день, час, секунда);
var spring = new Date(2018,2,1,0,0,0);
var summer = new Date(2017,5,1,0,0,0);
var autumn = new Date(2017,8,1,0,0,0);
var winter = new Date(2017,11,1,0,0,0);

function daysToEnd (date,div,progres,textInDiv){
	var now = new Date();
	var from1970 	   = (now.getTime() / (1000 * 60 * 60 *24));//с 1970 в днях!
	var from1970ToDate = (date.getTime()/ (1000 * 60 *60 *24)); //дней от 1970 до date

	var resultDate	   = (Math.round(from1970ToDate)-Math.round(from1970));//результат
	var myDays = ["Воскресеные", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Субота"];

	var divId = "#" + div;
	$(divId).text(textInDiv + " " +resultDate +" днів. Це буде: "+myDays[date.getDay()]);
	
	//индикатор или progres времени.
	var progresId = "#" + progres;
	var progress = 100-(Math.round(resultDate / 3.65));
	$(progresId).text(progress+"%").css({
		width : progress + '%'
	});
	
	}

daysToEnd(spring,'springDate','progresOne','До наступної Весни залишилось:');
daysToEnd(summer,'summerDate','progresTwo','До Літа залишилось:');
daysToEnd(autumn,'autumnDate','progresThree','До Осіні залишилось:');
daysToEnd(winter,'winterDate','progresFour','До Зими залишилось:');
	

	

setInterval(function(){
	Time();
	outTime();
}, 1000);//обновления каждую секунду

});
