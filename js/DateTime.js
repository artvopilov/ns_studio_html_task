setInterval(function () {$(document).ready(function () {
    var dateNow = new Date();
    var month = dateNow.getMonth();
    var dayofweek = dateNow.getDay();
    var date = dateNow.getDate();
    var Nmonth = "", Ndayofweek = "";
    var weekdays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    switch (month) {
        case 0:
            Nmonth = "Январь";
            break;
        case 1:
            Nmonth = "Февраль";
            break;
        case 2:
            Nmonth = "Март";
            break;
        case 3:
            Nmonth = "Апрель";
            break;
        case 4:
            Nmonth = "Май";
            break;
        case 5:
            Nmonth = "Июнь";
            break;
        case 6:
            Nmonth = "Июль";
            break;
        case 7:
            Nmonth = "Август";
            break;
        case 8:
            Nmonth = "Сентябрь";
            break;
        case 9:
            Nmonth = "Октябрь";
            break;
        case 10:
            Nmonth = "Ноябрь";
            break;
        case 11:
            Nmonth = "Декабрь";
            break;
    }
    $(".Month").html(Nmonth);
    $(".Day").html(date);
    $(".DayOfWeek").html(weekdays[dayofweek]);

});
},10);