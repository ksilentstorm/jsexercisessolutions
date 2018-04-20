
/* ************** EXERCISE 1 ******************* */

function timedate () {

	var today = new Date();
	var day = today.getDay();
	var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	var hour = today.getHours();
	var minute = today.getMinutes();
	var second =  today.getSeconds();
	var prepand = (hour >= 12)? " PM " : " AM ";

	hour = (hour >= 12)? hour - 12 : hour ;

	if (hour === 0 && prepand === ' PM ')
	{
		if (minute === 0 && second === 0) {
			hour = 12;
			prepand = " noon";
		} else
		{
			hour = 12;
			prepand = ' PM ';
		}

	}

	if (hour === 0 && prepand === ' AM')
	{
		if (minute === 0 && second === 0) {
			hour = 12;
			prepand = ' Midnight';
		} else
		{
			hour = 12;
			prepand = ' AM';
		}
	}

	document.getElementById("day").innerHTML = daylist[day];
	document.getElementById("time").innerHTML = hour + prepand + " : " + minute + " : " + second; 
}


/* ************** EXERCISE 2 ******************* */

function printMe () {
	
	window.print();
}

/* ************** EXERCISE 3 ******************* */
function todayDate () {
	var today = new Date();
	var dd = today.getDate();

	var mm = today.getMonth() + 1;
	var yyyy = today.getFullYear();

	if (dd < 10)
	{
		dd = '0' + dd;
	}

	if (mm < 10)
	{
		mm = '0' + mm;
	}

	document.getElementById('todayDate').innerHTML =  '[' + dd + ' - ' + mm + ' - ' + yyyy + ']' + '<br>' + '[' + dd + ' / ' + mm + ' / ' + yyyy + ']' + '<br>' + '[' + mm + ' - ' + dd + ' - ' + yyyy + ']' + '<br>' + '[' + mm + ' / ' + dd + ' / ' + yyyy + ']';

}


/* ************** EXERCISE 4 ******************* */
function areaOfTriangle () {

	var a = 5;
	var b = 6;
	var c = 7;
	var p = ( a + b + c ) / 2;

	var area = Math.sqrt(p * ((p - a) * (p - b) * (p - c)));

	document.getElementById('area').innerHTML = area;

}

/* ************** EXERCISE 5 ******************* */
function reverseMe (id) {

	var element = document.getElementById('target');
	var textNode = element.childNodes[0];
	var text = textNode.data;

	setInterval ( function () 
	{
		text = text[text.length - 1] + text.substring (0, text.length - 1);
		textNode.data = text;
	}, 1000);

}


/* ************** EXERCISE 6 ******************* */
function checkLeapYear () {

	var year = document.getElementById('getYear').value;
	var y = ( year % 100 === 0 ) ? ( year % 400 === 0) : ( year % 4 === 0 );
	document.getElementById('leapYear').innerHTML = y;

}


/* ************** EXERCISE 7 ********************* */
function checkSunday () {

	for (var year = 2014; year <= 2050; year++)
	{
		var d = new Date(year, 0, 1);
		if ( d.getDay() === 0 )
		{
			document.getElementById('January').innerHTML = "1st january is being a sunday in " + year;
		}
	}

}

/* ************** EXERCISE 8 ******************* */
function checkResult () {

	var genNumber = Math.ceil ( Math.random() * 10 );
	document.getElementById('trueResult').innerHTML = "The true result was " + genNumber;
	var gNumber = document.getElementById('guessNumber').value;
	if ( gNumber == genNumber)
	{
		document.getElementById('result').innerHTML = "Good Work!"
	} else
	{
		document.getElementById('result').innerHTML = "Keep Trying!"
	}

}

/* ************** EXERCISE 9 ******************* */
function checkDays () {

	var today = new Date();
	var cmas = new Date(today.getFullYear(), 11, 25);
	if ( today.getMonth() == 11 && today.getDate > 25)
	{
		cmas.setFullYear (cmas.getFullYear + 1);
	}
	var one_day = 1000 * 60 * 60 * 24;
	document.getElementById('days').innerHTML = Math.ceil((cmas.getTime() - today.getTime()) / (one_day)) + " days left for Christmas."

}


/* **************** EXERCISE 10 ***************** */
function doMultiply() {
	var a = document.getElementById('number1').value;
	var b = document.getElementById('number2').value;
	document.getElementById('printMultiply').innerHTML = a * b;

}


function doDivide() {

	var a = document.getElementById('number1').value;
	var b = document.getElementById('number2').value;
	document.getElementById('printDivide').innerHTML = a / b;

}


/* **************** EXERCISE 11 ***************** */
function doCtoF() {
	var c = document.getElementById('fromCelsius').value;
	document.getElementById('toFahrenheit').value = (9*c/5) + 32;
}

function doFtoC() {
	var f = document.getElementById('fromFahrenheit').value;
	document.getElementById('toCelsius').value = (5/9) * (f-32);
}

/* ***************** EXERCISE 12 ****************** */
function getURL() {
	document.getElementById('url').innerHTML = document.URL;
	// var urlString = new Array(100);
	// urlString = document.URL;
	// var stringLength = urlString.length;
	// for (var i = 0; i < stringLength; i++)
	// {
	// 	if ( i = 40 ) {
	// 		var finalString = finalString + "<br>";
	// 	}
	// 	else {
	// 		var finalString = finalString + urlString[i];
	// 	}
	// }
	// document.getElementById('url').innerHTML = finalString;
}

/* ***************** EXERCISE 13 ****************** */
function getVariable() {
	var varvalue = document.getElementById('variable').value;
	var n = 20;
	document.getElementById('text-variable').innerHTML = this[varvalue] = n;
}


/* ***************** EXERCISE 14 ****************** */
function getExtension() {
	var filename = document.getElementById('inputExtension').value;
	document.getElementById('displayExtension').innerHTML = filename.split('.').pop();
}


/* ***************** EXERCISE 15 ****************** */
function getDifference() {
	var inputNumber = document.getElementById('inputNumber').value;
	
	if (inputNumber <= 13) {
		var diff = 13 - inputNumber;
	} else {
		var diff = 2 * (inputNumber - 13);
	}
	document.getElementById('displayDifference').innerHTML = diff;
}

/* ***************** EXERCISE 16 ****************** */
function getSum() {
	var inputNumber1 = parseInt(document.getElementById('inputNumber1').value);
	var inputNumber2 = parseInt(document.getElementById('inputNumber2').value);
	
	if (inputNumber1 == inputNumber2) {
		var sum = 3 * (inputNumber1 + inputNumber2);
	} else {
		var sum = inputNumber1 + inputNumber2;
	}
	document.getElementById('displaySum').innerHTML = sum;
}

/* ***************** EXERCISE 17 ****************** */
function getDifference3() {
	var inputNumber = document.getElementById('inputNumber3').value;
	
	if (inputNumber <= 19) {
		var diff = 19 - inputNumber;
	} else {
		var diff = 3 * (inputNumber - 19);
	}
	
	document.getElementById('displayDifference3').innerHTML = diff;
}


/* ***************** EXERCISE 18 ****************** */
function getCheck50() {
	var inputNumber1 = parseInt(document.getElementById('inputNumber4').value);
	var inputNumber2 = parseInt(document.getElementById('inputNumber5').value);
	var totalNumber = inputNumber1 + inputNumber2;
	if (inputNumber1 == 50 || inputNumber2 == 50 || totalNumber == 50) {
		document.getElementById('displayNumResult').innerHTML = true;
	}
	else {
		document.getElementById('displayNumResult').innerHTML = false;
	}
}

/* ***************** EXERCISE 19 ****************** */
function displayNumberStatus() {
	var number = document.getElementById('inputNumber6').value;
	if (number <= 20) {
		document.getElementById('displayNumberStatus').innerHTML = "Number is less than 20.";
	} else if (number > 20 && number <= 100 ) {
		document.getElementById('displayNumberStatus').innerHTML = "Number is between 20 to 100";
	} else if (number > 100 && number < 400) {
		document.getElementById('displayNumberStatus').innerHTML = "Number is between 100 to 400.";
	} else {
		document.getElementById('displayNumberStatus').innerHTML = "Number is bigger than 400.";
	}
}

/* ***************** EXERCISE 20 ****************** */
function removeChar() {

	
	
}


/* ***************** EXERCISE 21 ****************** */
function displayString() {
	var string1 = document.getElementById('inputString').value;
	if (string1 == null || string1 == undefined || string1.substring(0,2) == "Py" )
	{
		document.getElementById('displayString').innerHTML = string1;
	} else {
		document.getElementById('displayString').innerHTML = "Py" + string1;
	}
}