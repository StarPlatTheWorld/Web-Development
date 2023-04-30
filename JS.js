var i = 0; //start point
var images = [];
var time = 3000;

//image list
images[0] = '\images/sugar.png';
images[1] = '\images/jaeroar.png';
images[2] = '\images/cap.png';
images[3] = '\images/amanda.png';

//change image

function changeImg(){
	document.slide.src = images[i];
	
	if(i<images.length - 1){
	 i++;
	 }else {
	 i = 0;
	}
	
	setTimeout("changeImg()", time);
	
}

window.onload = changeImg;

//Start of Form

	 function validEmail()
{
    if (!document.userSurvey.eMail.value)
    {
        alert("E-mail Address missing. Please enter a valid E-mail address to continue.");
        document.userSurvey.eMail.focus();
        return false;
    }
    else
    {
        var emailAddress = document.userSurvey.eMail.value;
        var atLoc = emailAddress.indexOf("@",1);
        var dotLoc = emailAddress.indexOf(".",atLoc+2);
        var len = emailAddress.length;

        if (atLoc > 0 && dotLoc > 0 && len > dotLoc+2)
        {
            return true;
        }
        else
        {
            alert("Invalid E-mail address! Please enter your e-mail address again.");
            document.userSurvey.eMail.focus();
            return false;
        }
    }
}


//Phone Number Section
function validNo()
{
    if (!document.userSurvey.phone.value)
    {
		//Sends an alert if no phone number is entered or is invalid
        alert("Phone number missing. Please enter a valid phone number to continue.");
        document.userSurvey.phone.focus();
        return false;                
    }
    else
    {
        var phoneNo = document.userSurvey.phone.value;

                if (phoneNo.length < 11)
        {
			//Sends an alert if phone format is incorrect
            alert("Incorrect phone number format.You must enter 11 numbers.");
            document.userSurvey.phone.focus();
            return false;
        }
        else
        {
            var areacode = phoneNo.substring(0,3);
            var ext1 = phoneNo.substring(3,7);
            var ext2 = phoneNo.substring(7);
            var phoneNo =( "(" + areacode + ") " + ext1 + "-" + ext2);
            document.userSurvey.phone.value = phoneNo;
            return true;
        }
    }
}  

// Name Section
function validName()
{
    if (!document.userSurvey.userName.value)
    {
		//Sends an alert if name isn't entered
        alert("Name not entered. Please enter your name to continue.");
        document.userSurvey.userName.focus();
        return false;
    }
    else
    {
        return true;
    }
}

//Commission Choice Section
function validChoice()
{
    var commissionChoice = "";
    var x= "";

    for (i=0;i< 3;i++)
    {
        if (document.userSurvey['commissionChoice'+i].checked)
        {
            commissionChoice = document.userSurvey['commissionChoice'+i].value;
            x = x +"\n"+ commissionChoice;                            
        }
    }

    if (x == "")
    {
		//Sends an alert if a commission option isn't selected
        alert("You must select at least one commission choice.");
        return false;
    }
    else
    {
        var userName = document.userSurvey.userName.value;
        var eMail = document.userSurvey.eMail.value;
        var phoneNo = document.userSurvey.phone.value;
		//Shows the results of all values in a textbox
        document.userSurvey.surveyResults.value = ("Name: " + userName + "\nE-mail: " + eMail + "\nPhone: " + phoneNo + "\nCommission Choice:" + commissionChoice + x);
        return true;
    }
}


//Checks Input
function validInput()
{
    if((validName())&&(validEmail())&&(validNo())&&(validChoice()))
    {
        return true;
    }
    else
    {
        return false;
    }
}


var quotes = ["Be yourself. Don't take anything from anyone. Never let them take you alive. - Gerard Way","If I cannot do great things, I can do small things in a great way. - Martin Luther King Jr.", 
 "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. - Steve Jobs", 
 "There are no limits to what you can accomplish, except the limits you place on your own thinking. - Brian Tracy"];
 
 function newQuote() {
 var randomNumber = Math.floor(Math.random() * (quotes.length));
 document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
 }
 
 
//Date 
 
//gets the date from the browser via HTML
var qs = new Date();
document.getElementById("quotes").innerHTML = qs;

