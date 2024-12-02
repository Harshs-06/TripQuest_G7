let url = "/contactUs/contact.json";
fetch(url)
.then(response => response.json())
.then(jsObject=>{console.log(jsObject);



let navigationBar = document.querySelector("#navItems");
let title = document.querySelector(".title");
let snips = document.querySelector(".snips");
let inputDiv = document.querySelector(".inputDiv");
let imgLook = document.querySelector(".imgLook") ;

// let jsObject = JSON.parse(jsonData);

// Structure of the page : 


let webName = document.createElement('h1');
webName.textContent =jsObject.name ;
navigationBar.appendChild(webName);

let home = document.createElement('span');
let homeImg = document.createElement('img');
homeImg.setAttribute('src','home-icon.png');
homeImg.setAttribute('width','31');
homeImg.setAttribute('height','30');
home.appendChild(homeImg);
home.insertAdjacentText('beforeend',jsObject.navhome);
let homePage = document.createElement('a');
// homePage.setAttribute('href','/beforeloginHome/home.html');
homePage.appendChild(home);


navigationBar.appendChild(homePage);
homePage.addEventListener('click',function(){
    location.href="/beforeloginHome/home.html";
});




let titleChi1 = document.createElement('h1');
titleChi1.textContent = jsObject.titlechild1;
title.appendChild(titleChi1);

let titleChi2 = document.createElement('p'); 
titleChi2.textContent = jsObject.titlechild2;
title.appendChild(titleChi2);

let form = document.createElement('form');

let fb1 = document.createElement('label');
fb1.textContent = jsObject.feedback1;
form.appendChild(fb1);
let fb2 = document.createElement('label');
fb2.textContent = jsObject.feedback2;
form.appendChild(fb2);

let Name = document.createElement('input');
Name.setAttribute('type','text');
Name.setAttribute('placeholder','Your Full Name')
Name.required = true ;
form.appendChild(Name);

let Email = document.createElement('input');
Email.setAttribute('type','email');
Email.setAttribute('placeholder',' Your Email')
Email.required = true ;
form.appendChild(Email) ;

let Message = document.createElement('textarea') ;
Message.setAttribute('maxlength','1000');
Message.setAttribute('placeholder','How we can help you?')
Message.required = true ;
form.appendChild(Message);


let label = document.createElement('label');
label.textContent = jsObject.terms;
form.appendChild(label);

let submit = document.createElement('button');
submit.textContent = jsObject.buttonText;
form.appendChild(submit);

inputDiv.appendChild(form);

let image = document.createElement('img');
image.setAttribute('src',jsObject.imgdesign);
imgLook.appendChild(image);




// Designing of the page :
let style  = document.createElement('style');
style.innerHTML = `
@font-face {
        font-family: 'MaShanZheng';
        src: url('MaShanZheng.ttf');
    }
@font-face {
    font-family: katibeh;
    src: url('katibeh.ttf');
}
@font-face {
    font-family: kameron;
    src: url('kameron.ttf');
} 
body {
    overflow: hidden;
    font-family:'kameron';
}
input,textarea {
width:600px;
height:40px;
// border-radius:15px;
border:none;
border-bottom:1.6px solid #BB7F0F;
background-color: rgba(187, 127, 15, 0.15);
color:#4A4A4A;
font-weight:700;
padding-left: 20px;
padding-right:20px;
font-family:kameron;
font-size:17px;



}
textarea:focus, input:focus {
    outline: none;
}
textarea{resize:none;
height:190px;

padding-top:10px;
// width:600px;
}


button{
height:40px;
color:white;
background-color:#BB7F0F;
font-family:kameron;
font-size:20px;
border-radius:20px;
border:1px solid ;

margin-top:-10px
}
`;
document.head.appendChild(style);

navigationBar.style.cssText=`
position:relative;

top:-40px;
`;
webName.style.cssText = `
font-family:'MaShanZheng';
font-size:53px;
color: #183D4B;
font-weight: 500;
position:relative;
top:15px;
left:20px;
`;

imgLook.style.cssText = `
display:inline-block;
position:relative;
bottom:190px;

right:-760px;
`;
image.style.cssText = `
width:700px;
height:577px;
z-index:2;
`
title.style.cssText=`
display:flex;
justify-content:center;
z-index:1;
align-items:center;
flex-direction:column;
position:relative;
top:-140px;
color:#4A4A4A;
`
titleChi1.style.cssText =`
font-family:'katibeh'; 
font-size:45px; 
`
titleChi2.style.cssText = `
font-size:20px;
margin-top:-30px;
`
inputDiv.style.cssText = `
display:inline-block;
position:absolute;
left:100px;
bottom:30px;

`
form.style.cssText = `
display:flex;
flex-direction:column; 
// justify-content:center
width:400px;
gap:20px;




`;
home.style.cssText=`
color:#33363F;
font-size: 20px;
font-weight: 500;
display:flex;
justify-content:center;
align-items:center;
position:relative;
top:-60px;
`;
homeImg.style.cssText=`
position:relative;
top:-4px;

`;

homePage.style.cssText = `
text-decoration:none;
position:relative;
right:10px;
`;

label.style.cssText =`
display:flex;
justify-content:center;
align-items:center;
color:#BB7F0F;
font-weight:600;
font-size:17px;
margin-right:20px;
`;
fb1.style.cssText =`
display:flex;
justify-content:center;
align-items:center;
color:#4A4A4A ;
font-weight:1000;
font-size:17px;
`;
fb2.style.cssText =`
display:flex;
justify-content:center;
align-items:center;
color:#4A4A4A ;
font-weight:1000;
font-size:17px;
margin-top:-15px;
`;

})
.catch(error=>{console.log("Error fetching JSON data with error: ",error);})
;