let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/valhalla-image.png') {
        myImage.setAttribute('src','images/valhalla-header.png')
    } else {
        myImage.setAttribute('src','images/valhalla-image.png')
    }
}

let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')