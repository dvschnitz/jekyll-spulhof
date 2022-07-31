var buttonSendSms = document.querySelector('#button-send-sms');
var buttonSendEmail = document.querySelector('#button-send-email');
var bookForm = document.querySelector('#book-form');

var mailTarget = "spulhof@gmx.at";
var mailSubject = "Buchungsanfrage über Spulhof.at";
var smsTarget = "+436648901297";

if (buttonSendSms) {
    buttonSendSms.onclick = function() {
        var message = getTextForMessage();
        if (message === null) {
            showFillFormAlert();
        } else {
            window.open('sms://' + smsTarget + '?body=' + message);
        }
    }
}

if (buttonSendEmail) {
    buttonSendEmail.onclick = function() {
        var message = getTextForMessage();
        if (message === null) {
            showFillFormAlert();
        } else {
            window.open('mailto:' + mailTarget + '?subject=' + mailSubject + '&body=' + message);
        }
    }
}

showFillFormAlert = function() {
    window.alert('Bitte füllen Sie alle mit * markierten Felder vollständig aus!');
}

getTextForMessage = function() {
    var output = "";
    var formElements = bookForm.elements;

    for (var i = 0; i < formElements.length; i++) {

        if (!formElements[i].value && formElements[i].hasAttribute('required')) {
            return null;
        }

        output += formElements[i].type === 'button' || formElements[i].type === 'reset'
            ? '' 
            : formElements[i].name + ": " + formElements[i].value + "%0D%0A";
    }
    console.log(
        'output', output
    );

    return output;
}