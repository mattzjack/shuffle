var totFirst15 = 000230843697339;
var totSecnd15 = 241380472092742;
var totThird15 = 683027581083278;
var totForth15 = 564571807941132;
var totFifth15 = 288000000000000;

var first15 = 0;
var secnd15 = 0;
var third15 = 0;
var forth15 = 0;
var fifth15 = 0;

var leftFirst15 = totFirst15 - first15;
var leftSecnd15 = totSecnd15 - secnd15;
var leftThird15 = totThird15 - third15;
var leftForth15 = totForth15 - forth15;
var leftFifth15 = totFifth15 - fifth15;

function manualMath() {
    if (leftFifth15 < 0) {
        if (leftFifth15 == -1) {
            leftFifth15 = 999999999999999;
            leftForth15--;
        }
    }
}

function submitOne() {
    fifth15++;
    leftFifth15 = totFifth15 - fifth15;
    manualMath();
}

function updateNums() {
    firstNonZero = 0
    counterStr = "";

    switch (true) {
        case first15 != 0:
            console.log("first15 is first non-0")
            firstNonZero = 1;
            break;
        case secnd15 != 0:
            console.log("secnd15 is first non-0");
            firstNonZero = 2;
            break;
        case third15 != 0:
            console.log("third15 is first non-0");
            firstNonZero = 3;
            break;
        case forth15 != 0:
            console.log("forth15 is 0");
            firstNonZero = 4;
            break;
        case fifth15 != 0:
            console.log("fifth15 is 0");
            firstNonZero = 5;
            break;
        default:
            firstNonZero = -1;
    }

    switch (firstNonZero) {
        case 1:
            counterStr += first15.toString();
        case 2:
            counterStr += secnd15.toString();
        case 3:
            counterStr += third15.toString();
        case 4:
            counterStr += forth15.toString();
        case 5:
            counterStr += fifth15.toString();
            break;
        case -1:
            counterStr += "0";
            break;
        case 0:
            console.log("err: firstNonZero == 0;");
            break;
        default:
            console.log("err: firstNonZero not in -1 ~ 5;");
    }

    $("#counter").text(counterStr);
    $("#left").text(leftFirst15.toString() + leftSecnd15.toString() + leftThird15.toString() + leftForth15.toString() + leftFifth15.toString());
}

$(function(){

    switch (true) {
        case 1 == 1:
            console.log("ha! 1 == 1");
            break;
        case 1 == 2:
            console.log("Ho! 1 == 2 and 1 != 1");
            break;
        default:
            console.log("welp 1 != 1 and 1 != 2");
    }

    updateNums();

    $("#jerryButton").click(function(){
        submitOne();
        updateNums();
    });

});
