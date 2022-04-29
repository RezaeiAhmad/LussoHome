eventListeners();
function eventListeners() {
  // when submit form 
  document.getElementById("form-id").addEventListener('submit' , sumbitForm);
}




// validating name input ......
function nameValid(event) {
  // const nameValuee = document.getElementById("name-input").value
  // keyboard event
  var theEvent = event || window.event;
  // get key of Letters
  var key = theEvent.keyCode || theEvent.which;
  // return sting of key
  key = String.fromCharCode(key);
  // regex code (persian)
  var regex = /[^\u0600-\u06FF ]/;
  // test regex
  if (regex.test(key)) {
    // users cant type
    theEvent.returnValue = false;
    // show error
    document.getElementById("name--small").innerHTML =
      "فقط حروف فارسی قابل قبول است";
    // add red border to input
    document.getElementById("name-input").style.borderColor = "red";
    // dosent refresh
    if (theEvent.preventDefault) theEvent.preventDefault();
  } else {
    // empty tag p or hidden error
    document.getElementById("name--small").innerHTML = " ";
    // add green border to input
    document.getElementById("name-input").style.borderColor = "#059669";
  }
}

// validating username input ......
function usernameValid(event) {
  // const nameValuee = document.getElementById("name-input").value
  // keyboard event
  var theEvent = event || window.event;
  // get key of Letters
  var key = theEvent.keyCode || theEvent.which;
  // return sting of key
  key = String.fromCharCode(key);
  // regex code (persian)
  var regex = /[^\u0600-\u06FF ]/;
  // test regex
  if (!regex.test(key)) {
    // users cant type
    theEvent.returnValue = false;
    // show error
    document.getElementById("user--small").innerHTML =
      "فقط حروف انگلیسی قابل قبول است";
    // add red border to input
    document.getElementById("user-input").style.borderColor = "red";
    // dosent refresh
    if (theEvent.preventDefault) theEvent.preventDefault();
  } else {
    // empty tag p or hidden error
    document.getElementById("user--small").innerHTML = " ";
    // add green border to input
    document.getElementById("user-input").style.borderColor = "#059669";
  }
}

// password validatnig ......
function passwordValid(event) {
  // access to the password value
  let passwordValue = document.getElementById("password-input").value;
  //access to the event keyboard
  let theEvent = event || window.event;
  theEvent.returnValue = true;
  // get key
  let key = theEvent.keyCode || theEvent.which;

  // exchange key value to string
  key = String.fromCharCode(key);
  // regex code just english
  let regexEnglish = /[a-z A-Z]/;
  // number regex
  let regexNumber = /[0-9]/;
  // symbol regex
  let regexSymbol = /[@#]/;
  // var theEvent = event || window.event;

  if (!regexEnglish.test(passwordValue)) {
    document.getElementById("password--small").innerHTML =
    "  فقط فرمت انگلیسی مورد قبول است";
    // alert("  فقط فرمت انگلیسی مورد قبول است");

    return false;
  } else {
    // hidde error
    document.getElementById("password--small").innerHTML = " ";
  }

  // regex code of check capital letters
  let capitalRegex = /[A-Z]/;
  // check password value for capita regex
  if (!capitalRegex.test(passwordValue)) {
    // show error
    document.getElementById("password--small").innerHTML =
      " پسورد باید دارای حروف بزرگ باشد";
    // add red border to input
    document.getElementById("password-input").style.borderColor = "#DC2626";
  } else if (!regexNumber.test(passwordValue)) {
    // show error
    document.getElementById("password--small").innerHTML =
      " پسورد باید دارای اعداد  باشد";
    // add red border to input
    document.getElementById("password-input").style.borderColor = "#DC2626";
  } else if (!regexSymbol.test(passwordValue)) {
    // show error
    document.getElementById("password--small").innerHTML =
      " پسورد باید دارای @ , #  باشد";
    // add red border to input
    document.getElementById("password-input").style.borderColor = "#DC2626";
  } else if (passwordValue.length < 8) {
    // show error
    document.getElementById("password--small").innerHTML =
      " پسورد باید  هشت رقم  باشد";
    // add red border to input
    document.getElementById("password-input").style.borderColor = "#DC2626";
  } else {
    // hidde error
    document.getElementById("password--small").innerHTML = " ";
    // add green border to input
    document.getElementById("password-input").style.borderColor = "#059669";
  }
}

// validatin phoneNumberValid input .....
function phoneNumberValid (event){
    //access to the phoneNumber-input value
    const phoneNumberValue = document.getElementById("phoneNumber-input").value;
    // keyboard event
    var theEvent = event || window.event;
    // get key of letters or numbers
    var key = theEvent.keyCode || theEvent.which;
    // return string from key
    key = String.fromCharCode(key);
    // regex
    var regex = /[0-9]|\./;
    // check regex on key
    if (!regex.test(key)) {
      // retun value false
      theEvent.returnValue = false;
      // dosnt refresh
      if (theEvent.preventDefault) theEvent.preventDefault();
      // show error
      document.getElementById("phoneNumber--small").innerText =
        " فقط عدد مورد قبول است";
      // add red border to input
      document.getElementById("phoneNumber-input").style.borderColor = "#DC2626";
   
      }
      else if (phoneNumberValue.length > 10 ) {
        theEvent.returnValue = false
      }
      else{
        // hidden error
        document.getElementById("phoneNumber--small").innerText = "";
        document.getElementById("phoneNumber-input").style.borderColor = "#059669";
  
      }
    }
    // email validating .........
function emailValid() {
    // access to the email value
    const emailValue = document.getElementById("email-input").value;
    // regex for check email valid
    const regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    // check email value
    if (!regex.test(emailValue)) {
      // show error
      document.getElementById("email--small").innerHTML = "ایمیل نامعتبر است";
      // add red border to input
      document.getElementById("email-input").style.borderColor = "#DC2626";
    } else {
      // hidde error
      document.getElementById("email--small").innerHTML = " ";
      // add green border to input
      document.getElementById("email-input").style.borderColor = "#059669";
    }
  }



  function sumbitForm (e) {
    e.preventDefault()

    setTimeout(() => {
      document.getElementById("form-id").reset();
      document.getElementById("password-input").style.borderColor = "#e0e0e0";
    }, 3000);
  }


  // .................... header ...........

/// show dashbord when click on hamber icon
function showDashbord() {
  document.getElementById("dashbord").style.display = "flex";
}

/// hide dashbord when click on close icon
function hideDashbord() {
  document.getElementById("dashbord").style.display = "none";
}
/// show menu in mobile when click on profile icon
function showMenu() {
  document.getElementById("menu-mobile").style.display = "flex";
}

/// hide menu in mobile when click on close icon
function hideMenu() {
  document.getElementById("menu-mobile").style.display = "none";
}
/// show dashbord in mobile when click on hamber icon
function showDashbordMobile() {
  document.getElementById("dashbord-mobile").style.display = "flex";
}

/// hide dashbord in mobile when click on close icon
function hideDashbordMobile() {
  document.getElementById("dashbord-mobile").style.display = "none";
}

// ............ end of header ................
  