let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Ilya.jpg') {
        myImage.setAttribute('src','images/tokyo.jpg');
    } else {
        myImage.setAttribute('src','images/Ilya.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('#welcometext');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
  }
  
myButton.onclick = function() {
    setUserName();
}