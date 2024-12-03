


// const slides = document.querySelectorAll(".slide") ;
// let currentSlide = 0 ;
// function showSlide(index) {
//     slides.forEach((slide,i)=>{
//         slide.classList.toggle("active",i===index);
//     });
// }
// function nextSlide(){
//     currentSlide = (currentSlide+1)% slides.length;
//     showSlide(currentSlide);
// }
// setInterval(nextSlide,3000);
// showSlide(currentSlide);

fetch("/home.json")
.then(response=>response.json())
.then(jsObject=>{

let webName = document.querySelector("#tripquest");
webName.textContent = jsObject.navigationBar.title.name;

let logoSpan = document.querySelector("#logo");
let logoImage = document.createElement('img');
logoImage.setAttribute('src',jsObject.navigationBar.title.logo);
logoImage.width = 78 ;
logoImage.height = 88;
logoSpan.appendChild(logoImage);

let notify = document.querySelector(".notify");
let notifyImage = document.createElement('img');
notifyImage.src = jsObject.navigationBar.notifyMe.logo;
notifyImage.height = 22;
notifyImage.width = 22 ;
notify.insertAdjacentElement('afterbegin',notifyImage);
let notifyText = document.querySelector(".notify .text");
notifyText.textContent = jsObject.navigationBar.notifyMe.name;
let ndiv;
notify.addEventListener('click', function() {
    if (!ndiv) {
        ndiv = document.createElement('div');
        ndiv.textContent = "Give me notification when new recommendations arrive";
        ndiv.style.cssText = `
            background-color: black;
            color: #FFFFFF;
            position: fixed;
            width: 300px;
            height: 100px;
            top: 8%;
            right: 5%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            border-radius: 10px;
            text-align: center;
            padding-top: 1px;
            font-family: kameron;
            font-weight: 600;
            font-size: 17px;
        `;

        nbut = document.createElement('button');
        nbut.textContent = "OK";
        nbut.style.cssText = `
            font-family: kameron;
            border-radius: 30px;
            border: 2px solid white;
            position: relative;
            top: 10px;
            left: 33%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 30px;
            width: 100px;
            background-color: black;
            color: white;
        `;

        nbut.addEventListener('click', function() {
            let dont = document.createElement('button');
            dont.textContent = "Don't Send";
            dont.style.cssText = `
                font-family: kameron;
                border-radius: 30px;
                border: 2px solid white;
                position: relative;
                top: 10px;
                left: 33%;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 30px;
                width: 100px;
                background-color: white;
                color: black;
            `;

            ndiv.textContent = "Notifications will be sent on your email for new recommendations.";
            
            dont.addEventListener('click', function() {
                ndiv.textContent = "Give me notification when new recommendations arrive";
                ndiv.appendChild(nbut);
                dont.remove();
            });

            ndiv.appendChild(dont);
        });

        ndiv.appendChild(nbut);
        document.body.appendChild(ndiv);

        ndiv.addEventListener('mouseleave', function() {
            ndiv.remove();
        });
    } else {
        document.body.appendChild(ndiv);
    }
});



let contact = document.querySelector(".contact");
let contactImage = document.createElement('img');
contactImage.src = jsObject.navigationBar.contactUs.logo;
contactImage.width = 27;
contactImage.height = 27 ;
contact.insertAdjacentElement('afterbegin',contactImage);
let contactText = document.querySelector(".contact span");
contactText.textContent = jsObject.navigationBar.contactUs.name;
contact.addEventListener('click',function() {
    location.href="/contact";
})

let home = document.querySelector(".homeSpan");
let homeicon = document.createElement('img');
homeicon.src= jsObject.navigationBar.home.logo;
homeicon.width = 31;
homeicon.height = 30 ;
home.insertAdjacentElement('afterbegin',homeicon);
let hometext = document.querySelector(".home .text");
hometext.textContent = jsObject.navigationBar.home.name;

let adtr = document.querySelector(".advSpan");
let adicon = document.createElement('img');
adicon.src = jsObject.navigationBar.adventure.logo;
adicon.width = 27;
adicon.height = 27;
adtr.insertAdjacentElement('afterbegin',adicon);
document.querySelector(".adText").textContent = jsObject.navigationBar.adventure.name; 


adtr.addEventListener('click',function(){
    let warndiv = document.createElement('div');
    warndiv.textContent="Sign up for travel history"
    warndiv.style.cssText = `
     background-color: #1B1B1B;
        color: #FFFFFF;
        position: fixed;
        width: 270px;
        height: 55px;
        top: 15%;
        right: 51%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        font-family:kameron;
        font-weight:600;
        font-size:17px;
       

    `;
    

    let wimg = document.createElement('img');
    wimg.src = "/assests/warn.png";
    wimg.width=35;
    wimg.height=35;
    wimg.style.cssText=`
    position:relative;
    left:-10px;
    `;
    warndiv.insertAdjacentElement('afterbegin',wimg);
    document.body.appendChild(warndiv);
    setTimeout(() => warndiv.remove(), 1000);


});

let testi = document.querySelector(".testi");
let testiIcon = document.createElement('img');
testiIcon.src = jsObject.navigationBar.testimonial.logo;
testiIcon.width = 30;
testiIcon.height = 30;
testi.insertAdjacentElement('afterbegin',testiIcon);
document.querySelector(".testi .icon-text").textContent = jsObject.navigationBar.testimonial.name;
let testiarrow = document.createElement('img');
testiarrow.src = jsObject.navigationBar.testimonial.arrow;
testiarrow.width=23;
testiarrow.height=23;
testi.insertAdjacentElement('beforeend',testiarrow);

testiarrow.addEventListener('mouseenter', function() {
    let choice = document.createElement('div');
    let read = document.createElement('div');
    read.textContent = jsObject.navigationBar.testimonial.arrowRead;
    choice.appendChild(read);
    let write = document.createElement('div');
    write.textContent = jsObject.navigationBar.testimonial.arrowWrite;
    choice.appendChild(write);
    choice.style.display = "flex";
    choice.style.flexDirection="column";
    choice.style.justifyContent="center";
    choice.style.alignItems = "center";
    choice.style.position = "fixed";
    choice.style.position = "fixed";
    choice.style.top = "150px";
    choice.style.left = "50% ";
    choice.style.transform = "translate(-50%, -50%) translateX(100px) translateY(0px)";
    choice.style.backgroundColor = "white";
    choice.style.padding = "20px";
    choice.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.5)";
    choice.style.zIndex = "1000";
    choice.style.gap = "15px";
    choice.style.borderRadius = "15px"
    choice.style.fontFamily = "kameron";
    choice.style.width="110px";
    choice.style.height = "auto";

    read.style.borderRadius = "5px";
    read.style.color = "#33363F" ;   
    read.style.width= "125px";
    read.style.display="flex";
    read.style.justifyContent="center";
    read.style.alignItems = "center";
    read.style.height = "40px";
    read.style.fontSize = "17px";
    
   read.addEventListener('mouseenter', function(){
    read.style.cssText="background-color:#2D2B26;color:#E2B571;height:40px;width:125px;display:flex;justify-content:center;align-items:center;border-radius:5px;font-size:17px; ";
   });
   read.addEventListener('mouseleave',function(){
    read.style.cssText = "";
   });

    write.style.borderRadius = "5px";
    write.style.color = "#33363F" ;   
    write.style.width= "125px";
    write.style.display="flex";
    write.style.justifyContent="center";
    write.style.alignItems = "center";
    write.style.height = "40px";
    write.style.fontSize = "17px";
    write.addEventListener('mouseenter', function(){
        write.style.cssText="background-color:#2D2B26;color:#E2B571;height:40px;width:125px;display:flex;justify-content:center;align-items:center;border-radius:5px;font-size:17px; ";
       });
       write.addEventListener('mouseleave',function(){
        write.style.cssText = "";
       });


       read.addEventListener('click',function() {
        document.querySelector(".testimonials").scrollIntoView({
            behavior:"smooth",
            block:"start"
        });
        choice.remove();
       });


       write.addEventListener('click',function() {
            let overlay = document.createElement('div');
            overlay.style.position = "fixed";
            overlay.style.top="0";
            overlay.style.left="0";
            overlay.style.width="100%";
            overlay.style.height="100%";
            overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
            overlay.style.display = "flex";
            overlay.style.alignItems = "flex-start";  
            overlay.style.justifyContent = "center";
            overlay.style.zIndex = "1000";
            overlay.style.paddingTop = "20px";
            document.body.style.overflow="hidden";
            
            let reviewpage = document.createElement('div');
            reviewpage.style.backgroundColor="white";
            reviewpage.style.borderRadius="15px";
            reviewpage.style.width="1000px";
            reviewpage.style.height="600px";
            reviewpage.style.position="relative";
            reviewpage.style.top="30px";
            reviewpage.style.display="flex";
            reviewpage.style.flexDirection="column";
            reviewpage.style.justifyContent="center";
            reviewpage.style.alignItems="center";
            let cancel = document.createElement('img');
            cancel.src = "/assests/cancel.png";
            cancel.width="30";
            cancel.height="30";
            cancel.style.cssText = `
            position:relative;
            top:-200px;
            right:-440px;
            `;
            cancel.addEventListener('click',function(){
                overlay.remove();
                document.body.style.overflowY="auto";
            })
            let title = document.createElement('h1');
            title.textContent = "Write Review";
            title.style.cssText=`
            position:relative;
            top:-250px;
            font-weight:700;
            font-family:kameron;
            color:#532810;
            `;
            
            let p = document.createElement('p');
            p.textContent = "Please write overall level of satisfaction with your services.";
            p.style.cssText=`
            position:relative;
            top:-280px;
            font-size:17px;
            font-family:kameron;
            font-weight:500;
            color:#99620F;
            `;
            

            let revimg = document.createElement('img');
            revimg.src="/assests/revvec.png";
            revimg.width=400;
            revimg.height=400;
            revimg.style.cssText=`
            position:relative;
            top:290px;
            left:-250px;
            `;
            reviewpage.appendChild(revimg);
            
            let reviewName = document.createElement('input');
            reviewName.placeholder="Name";
            reviewName.className="revinput";
            reviewName.style.cssText=``;
            let prof =  document.createElement('input');
            prof.placeholder="What is your profession?";
            prof.className="revinput";

            prof.style.cssText=``;
            let rate =  document.createElement('div');
            let l=document.createElement('label');
            l.textContent="Rate Site:"
            
            rate.className="star-rating";
            rate.style.cssText=`
            position:relative;
            top:-12px;
            margin-left:5px;
            `;
            for(let i=1;i<=5;i++){
                let span=document.createElement('span');
                span.className="star";
                span.setAttribute('data-value',i);
                span.innerHTML="&#9733;"
                rate.appendChild(span);

            }


            l.insertAdjacentElement('beforeend',rate);
            l.style.cssText=`
            display:flex;
            position:relative;
            left:8px;
            top:10px;
            font-family:kameron;
            font-weight:600;
            color:#343434;
            font-size:18px;
            `;

            let text = document.createElement('textarea');
            text.className="revinput";
            text.placeholder = "Any experience you want to share?"
           text.style.cssText = `
           height:100px;
           `;
            let button = document.createElement('button');
            button.type="button";
            button.textContent="Share Review";
            button.style.cssText=`
            border:none;
            height:40px;
            border-radius:20px;
            font-family:kameron;
            font-weight:500;
            font-size:15px;
            color:white;
            background-color:#aca104;
            `;

            button.addEventListener('click',function(){
                button.innerHTML="&#10004 Shared";
                button.style.color="white";
            })
            
            let form = document.createElement('form');
            form.appendChild(reviewName);
            form.appendChild(prof);
            form.appendChild(l);
            form.appendChild(text);
            form.appendChild(button);
            form.style.cssText=`
            display:flex;
            flex-direction:column;
            gap:20px;
            position:relative;
            top:-250px;
            right:-210px;

            `;
            
             
            
            reviewpage.appendChild(cancel);
            reviewpage.appendChild(title);
            reviewpage.appendChild(p);
            
            reviewpage.appendChild(form);
            overlay.appendChild(reviewpage);
            document.body.appendChild(overlay);

       });
    
      
    document.body.appendChild(choice);
    

    choice.addEventListener('mouseleave', function removeOverlay() {
        choice.remove();
        testiarrow.removeEventListener('mouseleave', removeOverlay); 
    });



   
});

let join = document.querySelector('.join');
let joinicon = document.createElement('img');
joinicon.src = jsObject.navigationBar.joinGroup.logo;
joinicon.width = 30;
joinicon.height = 30 ;
join.insertAdjacentElement('afterbegin',joinicon);
document.querySelector(".join .text").textContent = jsObject.navigationBar.joinGroup.name;

join.addEventListener('click',function() {
      
let searchdiv = document.createElement('div');
searchdiv.style.position = "fixed";
searchdiv.style.top = "110px";
searchdiv.style.left = "75%";
searchdiv.style.transform = "translateX(-50%)";
searchdiv.style.padding = "10px";
searchdiv.style.paddingLeft = "15px";
searchdiv.style.paddingRight = "15px";
searchdiv.style.backgroundColor = "black";
searchdiv.style.borderRadius = "12px";
searchdiv.style.width = "540px";
searchdiv.style.height = "35px";
searchdiv.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.5)";

let searchBar = document.createElement('div');
searchBar.style.backgroundColor="white";
searchBar.style.borderRadius = "10px"
searchBar.style.height="35px";
let search = document.createElement('img');
search.src="/assests/search.png";
search.width=19;
search.height=21;
search.style.cssText = `
position:relative;
left:5px;
top:5px;
z-index:2000;
`;
let searchinput = document.createElement('input');
searchinput.style.cssText = `
border:none;
position:relative;
left:-70px;
border-bottom:2px solid black;
font-family:kameron;
font-size:15px;
font-weight:600;
width:380px;
margin-left:-25px;
padding-left:20px;
z-index:300;

`;
// searchinput.

let map = document.createElement('img');
map.src= "/assests/map.png";
map.width=17;
map.height=18;
map.style.cssText = `
position:relative;
left:340px;
top:5px;
z-index:1000;
`;


let but = document.createElement('button');
but.textContent = "Check";
but.style.cssText = `
background-color:black;
color:white;
font-family:kameron;
border:none;
border-radius:8px;
height:30px;
width:70px;
position:relative;
left:440px;
z-index:5000;
`;

but.addEventListener('click',function(){
    if(searchinput.value.toLowerCase()=="kerala"){
        location.href="/kerala";
    }
    else{
        let warndiv = document.createElement('div');
        warndiv.innerHTML="&times Place Not found !!!"
        warndiv.style.cssText = `
         background-color: red;
            color: #FFFFFF;
            position: fixed;
            width: 200px;
            height: 40px;
            top: 15%;
            right: 45%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            font-family:kameron;
            font-weight:600;
            font-size:17px;
           
    
        `;
        
    
        
        
        document.body.appendChild(warndiv);
        setTimeout(() => warndiv.remove(), 1000);
    }
})
searchBar.insertAdjacentElement('beforeend',but);
searchBar.insertAdjacentElement('beforeend',map);
searchBar.appendChild(searchinput);
searchBar.insertAdjacentElement('afterbegin',search);

// let check = document.createElement()
searchdiv.appendChild(searchBar);
document.body.appendChild(searchdiv);

// document.body.style.overflow = "hidden";

map.addEventListener('click',function(){
    searchdiv.remove();
    let open = document.createElement('div');
    open.style.position = "fixed";
    open.style.top = "110px";
    open.style.left = "75%";
    open.style.transform = "translateX(-50%)";
    open.style.width = "540px"; 
    open.style.height = "400px"; 
    open.style.backgroundColor = "white"; 
    open.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.5)";
    open.style.borderRadius = "8px"; 
    

    let label = document.createElement('label');
    label.textContent="Choose your location using map.";

    label.style.cssText = `
    font-family:kameron;
    font-size:20px;
    position:relative;
    top:20px;
    left:18px;
    font-weight:500;
    `;

    open.insertAdjacentElement('afterbegin',label);

    
    let frame = document.createElement('iframe');
    frame.src = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14058.156411315551!2d76.81441855!3d28.251665700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1731357666759!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
    frame.width = "500px"; 
    frame.height = "300px"; 
    frame.style.borderRadius="5px";
    frame.style.border = "2px solid black";
    frame.style.position="relative" ;
    frame.style.display="flex";
    frame.style.justifyContent="center";
    frame.style.alignItems = "center";
    frame.style.top = "25px";
    frame.style.left = "18px";
    
   open.appendChild(frame);


   let ok = document.createElement('button');
   ok.textContent = "Check";
   ok.style.cssText=`
   
   position:relative;
   top:32px;
   left:18px;
   width:504px; 
   height:30px;
   font-family:kameron;
   background-color:black;
   color:white;
   font-weight:500;
   font-size:15px;
   border:none;
   border-radius:5px;

   `;

   ok.type="submit";
   open.insertAdjacentElement('beforeend',ok);
   document.body.appendChild(open);
   document.body.style.overflow = "hidden";



   open.addEventListener('mouseleave', function outsideClick(event) {
        open.remove();
        document.body.style.overflowY = "auto";
    });
    // document.body.style.overflowY = "auto";


});

searchdiv.addEventListener('mouseleave',function(){

    setTimeout(()=>searchdiv.remove(),2000);
    
});

});


let about = document.querySelector(".aboutspan") ;
let abouticon = document.createElement('img');
abouticon.src= jsObject.navigationBar.aboutUs.logo;
abouticon.width=30;
abouticon.height=30;
about.insertAdjacentElement('afterbegin',abouticon);
document.querySelector(".aboutspan .text").textContent = jsObject.navigationBar.aboutUs.name;

// about.addEventListener('click',function() {
//     document.querySelector(".aboutUs").scrollIntoView({
//         behavior:"smooth",
//         block:"start"
//     });
// });


let sign = document.querySelector('#signUp');
let signicon = document.createElement('img');
signicon.src= jsObject.navigationBar.signUpButton.logo;
signicon.width=20;
signicon.height=20;
sign.insertAdjacentElement('afterbegin',signicon);
document.querySelector('#signUp #text').textContent = jsObject.navigationBar.signUpButton.name;

let create = document.querySelector('#creategroup');
let createicon = document.createElement('img');
createicon.width=27;
createicon.height=26;
createicon.src = jsObject.navigationBar.createGroupButton.logo;
create.insertAdjacentElement('afterbegin',createicon);
document.querySelector("#creategroup #text").textContent = jsObject.navigationBar.createGroupButton.name;

create.addEventListener('click',function() {
    window.location.href="/createGroup/create.html";
    // let warndiv = document.createElement('div');
    // warndiv.textContent="Sign up to create group"
    // warndiv.style.cssText = `
    //  background-color: #1B1B1B;
    //     color: #FFFFFF;
    //     position: fixed;
    //     width: 270px;
    //     height: 55px;
    //     top: 15%;
    //     right: 1%;
    //     display: flex;
    //     align-items: center;
    //     justify-content: center;
    //     border-radius: 20px;
    //     font-family:kameron;
    //     font-weight:600;
    //     font-size:17px;
       

    // `;
    

    // let wimg = document.createElement('img');
    // wimg.src = "/beforeloginHome/warn.png";
    // wimg.width=35;
    // wimg.height=35;
    // wimg.style.cssText=`
    // position:relative;
    // left:-10px;
    // `;
    // warndiv.insertAdjacentElement('afterbegin',wimg);
    // document.body.appendChild(warndiv);
    // setTimeout(() => warndiv.remove(), 1000);
})

let carosuel = document.querySelector("#carosuel");
carosuel.style.height = "642px";    
let ul = document.createElement('ul');
ul.style.listStyle = "none";
ul.style.transition = "transform 1s ease-in-out";
let carosuelImages = jsObject.carosuelImages;
carosuelImages.forEach((src)=>{
      let li = document.createElement('li');
      li.className="Slide";

      let img = document.createElement('img');
      img.src = src ;
      img.style.width = "1693px";
      img.style.display="block";

      li.appendChild(img);
      ul.appendChild(li);
});
carosuel.appendChild(ul);

const slides = document.querySelectorAll(".Slide") ;
let currentSlide = 0 ;
function showSlide(index) {
    slides.forEach((slide,i)=>{
        slide.classList.toggle("active",i===index);
        
    });
}
function nextSlide(){
    currentSlide = (currentSlide+1)% slides.length;
    showSlide(currentSlide);
}
setInterval(nextSlide,3000);
showSlide(currentSlide);



let monthTimeline = document.querySelector('#monthName');
let monthTitle = document.querySelector('#monthTitle');
let currentmonth = jsObject.monthTimeline.monthName[0][new Date().getMonth()];
monthTitle.textContent = currentmonth;
monthTimeline.insertAdjacentText('beforeend',jsObject.monthTimeline.monthName[1]);
let b1= document.createElement('button');
b1.className="buttonActivate";
b1.textContent="1";
b1.style.cssText=`
width:30px;
height:30px;
border-radius:15px;
border:none;
font-family:kameron;
font-size:15px;
font-weight:600;
color:white;
background-color:#6F5B4D;
`;

monthTimeline.appendChild(b1);
let b2= document.createElement('button');
b2.textContent="2";
b2.className="buttonActivate";
b2.style.cssText=`
width:30px;
height:30px;
color:#6F5B4D;
border-radius:15px;
border:1px solid #6F5B4D;
font-size:12px;
font-family:kameron;
`;

b1.addEventListener('click',function(){
   b1.style.cssText=`
   font-size:15px;
   font-weight:600;
   color:white;
   background-color:#6F5B4D;
   width:30px;
   font-family:kameron;
   height:30px;
   border-radius:15px;
   border:none;
   `;
   b2.style.cssText=`
   font-size:12px;
   color:#6F5B4D;
   background-color:white;
   width:30px;
   height:30px;
   border-radius:15px;
   border:1px solid #6F5B4D;
   font-family:kameron;
   `
   kimg.src = jsObject.monthTimeline.places.kerala.image;
   kname.textContent=jsObject.monthTimeline.places.kerala.title;
   ksub.textContent = jsObject.monthTimeline.places.kerala.subtitle;
   kdes.textContent = jsObject.monthTimeline.places.kerala.description;

   sriimg.src = jsObject.monthTimeline.places.srinagar.image;
   sriname.textContent=jsObject.monthTimeline.places.srinagar.title;
   srisub.textContent = jsObject.monthTimeline.places.srinagar.subtitle;
   srides.textContent = jsObject.monthTimeline.places.srinagar.description;

   chikimg.src = jsObject.monthTimeline.places.chikmangalur.image;
   chikname.textContent=jsObject.monthTimeline.places.chikmangalur.title;
   chiksub.textContent = jsObject.monthTimeline.places.chikmangalur.subtitle;
   chikdes.textContent = jsObject.monthTimeline.places.chikmangalur.description;

   rishiimg.src = jsObject.monthTimeline.places.rishikesh.image;
   rishiname.textContent=jsObject.monthTimeline.places.rishikesh.title;
   rishisub.textContent = jsObject.monthTimeline.places.rishikesh.subtitle;
   rishides.textContent = jsObject.monthTimeline.places.rishikesh.description;

   jaiimg.src = jsObject.monthTimeline.places.jaipur.image;
   jainame.textContent=jsObject.monthTimeline.places.jaipur.title;
   jaisub.textContent = jsObject.monthTimeline.places.jaipur.subtitle;
   jaides.textContent = jsObject.monthTimeline.places.jaipur.description;


});
b2.addEventListener('click',function(){
   b2.style.cssText=`
   font-size:15px;
   font-weight:600;
   color:white;
   background-color:#6F5B4D;
   width:30px;
   height:30px;
   border-radius:15px;
   border:none;
   font-family:kameron;
   `;
   b1.style.cssText=`
   font-size:12px;
   color:#6F5B4D;
   background-color:white;
   width:30px;
   height:30px;
   border-radius:15px;
   border:1px solid #6F5B4D;
   font-family:kameron;
   `
   kimg.src = jsObject.monthTimeline.places.jagannath.image;
   kname.textContent=jsObject.monthTimeline.places.jagannath.title;
   ksub.textContent = jsObject.monthTimeline.places.jagannath.subtitle;
   kdes.textContent = jsObject.monthTimeline.places.jagannath.description;

   sriimg.src = jsObject.monthTimeline.places.sethan.image;
   sriname.textContent=jsObject.monthTimeline.places.sethan.title;
   srisub.textContent = jsObject.monthTimeline.places.sethan.subtitle;
   srides.textContent = jsObject.monthTimeline.places.sethan.description;

   chikimg.src = jsObject.monthTimeline.places.himvalley.image;
   chikname.textContent=jsObject.monthTimeline.places.himvalley.title;
   chiksub.textContent = jsObject.monthTimeline.places.himvalley.subtitle;
   chikdes.textContent = jsObject.monthTimeline.places.himvalley.description;

   rishiimg.src = jsObject.monthTimeline.places.goa.image;
   rishiname.textContent=jsObject.monthTimeline.places.goa.title;
   rishisub.textContent = jsObject.monthTimeline.places.goa.subtitle;
   rishides.textContent = jsObject.monthTimeline.places.goa.description;

   jaiimg.src = jsObject.monthTimeline.places.bk.image;
   jainame.textContent=jsObject.monthTimeline.places.bk.title;
   jaisub.textContent = jsObject.monthTimeline.places.bk.subtitle;
   jaides.textContent = jsObject.monthTimeline.places.bk.description;
});

monthTimeline.appendChild(b2);
let placesBatch = document.querySelector('#batch1');
placesBatch.style.cssText =`
display:flex;
gap:20px;
margin-left:-90px;
`;

let kerala = document.createElement('div');
kerala.className = "Places";
kerala.style.cssText=`
background-color:#ccc9c4;
position:relative;
bottom:20px;
width:280px;
height:370px;
border-radius:20px;
display:flex;
flex-direction:column;
`;
let kimg = document.createElement('img');
kimg.style.cssText=`
width:260px;
height:170px;
position:relative;
top:15px;
left:10px;
`;
kimg.src = jsObject.monthTimeline.places.kerala.image;
let kname = document.createElement('h4');
kname.style.cssText=`
font-family:kameron;
font-weight:600;
font-size:20px;
position:relative;
top:-10px;
left:12px;
color:#3E3E3C;
`;
kname.textContent=jsObject.monthTimeline.places.kerala.title;
kerala.appendChild(kimg);
kerala.appendChild(kname);

let ksub = document.createElement('p');
ksub.textContent = jsObject.monthTimeline.places.kerala.subtitle;
ksub.style.cssText = `
font-family:kameron;
font-weight:450;
color:#898989;
position:relative;
top:-55px;
left:10px;
`;
kerala.appendChild(ksub);

let kdes = document.createElement('p');
kdes.textContent = jsObject.monthTimeline.places.kerala.description;
kdes.style.cssText =`
font-family:kameron;
font-weight:450;
color:#3E3E3C;
position:relative;
top:-80px;
left:10px;
text-align:justify;
font-size:15px;
width:255px;
`;
kerala.appendChild(kdes);

kerala.addEventListener('click',function(){
    if(kname.textContent==jsObject.monthTimeline.places.kerala.title){
               location.href="/kerala";
    }
});

placesBatch.appendChild(kerala);


let srinagar = document.createElement('div');
srinagar.className = "Places";
srinagar.style.cssText=`
background-color:#ccc9c4;
position:relative;
bottom:20px;
width:280px;
height:370px;
border-radius:20px;
display:flex;
flex-direction:column;
`;
let sriimg = document.createElement('img');
sriimg.style.cssText=`
width:260px;
height:170px;
position:relative;
top:15px;
left:10px;
`;
sriimg.src = jsObject.monthTimeline.places.srinagar.image;
let sriname = document.createElement('h4');
sriname.style.cssText=`
font-family:kameron;
font-weight:600;
font-size:20px;
position:relative;
top:-10px;
left:12px;
color:#3E3E3C;
`;
sriname.textContent=jsObject.monthTimeline.places.srinagar.title;
srinagar.appendChild(sriimg);
srinagar.appendChild(sriname);

let srisub = document.createElement('p');
srisub.textContent = jsObject.monthTimeline.places.srinagar.subtitle;
srisub.style.cssText = `
font-family:kameron;
font-weight:450;
color:#898989;
position:relative;
top:-55px;
left:10px;
`;
srinagar.appendChild(srisub);

let srides = document.createElement('p');
srides.textContent = jsObject.monthTimeline.places.srinagar.description;
srides.style.cssText =`
font-family:kameron;
font-weight:450;
color:#3E3E3C;
position:relative;
top:-80px;
left:10px;
text-align:justify;
font-size:15px;
width:255px;
`;
srinagar.appendChild(srides);

placesBatch.appendChild(srinagar);

let chik = document.createElement('div');
chik.className = "Places";
chik.style.cssText=`
background-color:#ccc9c4;
position:relative;
bottom:20px;
width:280px;
height:370px;
border-radius:20px;
display:flex;
flex-direction:column;
`;
let chikimg = document.createElement('img');
chikimg.style.cssText=`
width:260px;
height:170px;
position:relative;
top:15px;
left:10px;
`;
chikimg.src = jsObject.monthTimeline.places.chikmangalur.image;
let chikname = document.createElement('h4');
chikname.style.cssText=`
font-family:kameron;
font-weight:600;
font-size:20px;
position:relative;
top:-10px;
left:12px;
color:#3E3E3C;
`;
chikname.textContent=jsObject.monthTimeline.places.chikmangalur.title;
chik.appendChild(chikimg);
chik.appendChild(chikname);

let chiksub = document.createElement('p');
chiksub.textContent = jsObject.monthTimeline.places.chikmangalur.subtitle;
chiksub.style.cssText = `
font-family:kameron;
font-weight:450;
color:#898989;
position:relative;
top:-55px;
left:10px;
`;
chik.appendChild(chiksub);

let chikdes = document.createElement('p');
chikdes.textContent = jsObject.monthTimeline.places.chikmangalur.description;
chikdes.style.cssText =`
font-family:kameron;
font-weight:450;
color:#3E3E3C;
position:relative;
top:-80px;
left:10px;
text-align:justify;
font-size:15px;
width:255px;
`;
chik.appendChild(chikdes);

placesBatch.appendChild(chik);


let rishi = document.createElement('div');
rishi.className = "Places";
rishi.style.cssText=`
background-color:#ccc9c4;
position:relative;
bottom:20px;
width:280px;
height:370px;
border-radius:20px;
display:flex;
flex-direction:column;
`;
let rishiimg = document.createElement('img');
rishiimg.style.cssText=`
width:260px;
height:170px;
position:relative;
top:15px;
left:10px;
`;
rishiimg.src = jsObject.monthTimeline.places.rishikesh.image;
let rishiname = document.createElement('h4');
rishiname.style.cssText=`
font-family:kameron;
font-weight:600;
font-size:20px;
position:relative;
top:-10px;
left:12px;
color:#3E3E3C;
`;
rishiname.textContent=jsObject.monthTimeline.places.rishikesh.title;
rishi.appendChild(rishiimg);
rishi.appendChild(rishiname);

let rishisub = document.createElement('p');
rishisub.textContent = jsObject.monthTimeline.places.rishikesh.subtitle;
rishisub.style.cssText = `
font-family:kameron;
font-weight:450;
color:#898989;
position:relative;
top:-55px;
left:10px;
`;
rishi.appendChild(rishisub);

let rishides = document.createElement('p');
rishides.textContent = jsObject.monthTimeline.places.rishikesh.description;
rishides.style.cssText =`
font-family:kameron;
font-weight:450;
color:#3E3E3C;
position:relative;
top:-80px;
left:10px;
text-align:justify;
font-size:15px;
width:255px;
`;
rishi.appendChild(rishides);

placesBatch.appendChild(rishi);


let jai = document.createElement('div');
jai.className = "Places";
jai.style.cssText=`
background-color:#ccc9c4;
position:relative;
bottom:20px;
width:280px;
height:370px;
border-radius:20px;
display:flex;
flex-direction:column;
`;
let jaiimg = document.createElement('img');
jaiimg.style.cssText=`
width:260px;
height:170px;
position:relative;
top:15px;
left:10px;
`;
jaiimg.src = jsObject.monthTimeline.places.jaipur.image;
let jainame = document.createElement('h4');
jainame.style.cssText=`
font-family:kameron;
font-weight:600;
font-size:20px;
position:relative;
top:-10px;
left:12px;
color:#3E3E3C;
`;
jainame.textContent=jsObject.monthTimeline.places.jaipur.title;
jai.appendChild(jaiimg);
jai.appendChild(jainame);

let jaisub = document.createElement('p');
jaisub.textContent = jsObject.monthTimeline.places.jaipur.subtitle;
jaisub.style.cssText = `
font-family:kameron;
font-weight:450;
color:#898989;
position:relative;
top:-55px;
left:10px;
`;
jai.appendChild(jaisub);

let jaides = document.createElement('p');
jaides.textContent = jsObject.monthTimeline.places.jaipur.description;
jaides.style.cssText =`
font-family:kameron;
font-weight:450;
color:#3E3E3C;
position:relative;
top:-80px;
left:10px;
text-align:justify;
font-size:15px;
width:255px;
`;
jai.appendChild(jaides);

placesBatch.appendChild(jai);
let hoverElements = document.querySelectorAll(".Places");

hoverElements.forEach((hover) => {
    hover.addEventListener("mouseenter", function () {
        // Scale and add box-shadow to the hovered element
        hover.style.transform = "scale(1.1)";
        hover.style.transition = "transform 0.3s ease";
       
        
        // Blur all other elements
        hoverElements.forEach((other) => {
            if (other !== hover) {
                other.style.filter = "blur(4px)";
            }
        });
    });

    hover.addEventListener("mouseleave", function () {
        // Reset scale and box-shadow on the hovered element
        hover.style.transform = "scale(1)";
       
        
        // Remove blur effect from all elements
        hoverElements.forEach((other) => {
            other.style.filter = "none";
        });
    });
});

let explore = document.querySelector(".explore-more");
explore.style.cssText=`
height:642px;
background-color:#E7D4B5;
 display: flex;
    justify-content: flex-end;
`;

let extitle = document.createElement('h1');
extitle.textContent = jsObject.exploreMore.title;
extitle.style.cssText = `
font-family:kameron;
color:#C07830;
font-weight:800;
font-size:50px;
position:relative;
left:-240px;
width:300px;
top:10px;
`;
explore.appendChild(extitle);
let hr=document.createElement('hr');
hr.style.cssText=`

height:10px;
width:200px;
position:relative;
top:400px;
left:-500px;
background:#C07830;
`;
explore.appendChild(hr);
let expic = document.createElement('img');
expic.src = jsObject.exploreMore.image;
expic.height = 642;
expic.width=933;
explore.insertAdjacentElement('beforeend',expic);

let exsub = document.createElement('p');
exsub.textContent=jsObject.exploreMore.subtitle;
exsub.style.cssText=`
z-index:1000;
position:relative;
top:300px;
left:50px;
font-family:kameron;
color:black;
font-weight:500;
font-size:20px;
wi
`;
explore.insertAdjacentElement('afterbegin',exsub);


let exbut = document.querySelector("#exploreButton");
exbut.textContent = jsObject.exploreMore.button.name;
exbut.style.cssText=`
font-family:kameron;
font-weight:500;
font-size:30px;
display:flex;
width:500px;
justify-content:center;
align-items:center;
margin-left:-5px;

`;
let exbutarr = document.createElement('img');
exbutarr.src = jsObject.exploreMore.button.arrow;
exbutarr.width=40;
exbutarr.style.cssText=`
position:relative;
right:-120px;
`;
exbut.insertAdjacentElement('beforeend',exbutarr);

exbut.addEventListener('click',function() {
    location.href="/Explore_more_final";
});

// let aboutdiv = document.querySelector(".aboutUs");
// aboutdiv.style.cssText=`
// height:642px;

// `;
// let abtitle = document.createElement('h1');
// abtitle.textContent = jsObject.aboutUs.title;
// aboutdiv.appendChild(abtitle);

// let innerdiv = document.createElement('div');
// innerdiv.style.cssText=`
// background-color:#BB9C70;
// display:flex;
// width:851px;
// `;
// let ides = document.createElement('h2');
// ides.textContent = jsObject.aboutUs.description;

// innerdiv.appendChild(ides);
// let iidiv = document.createElement('div');
// let iitit = document.createElement('h5');
// iitit.textContent = jsObject.aboutUs.contributors.title;
// iidiv.appendChild(iitit);

// (jsObject.aboutUs.contributors.names).forEach((Name)=>{
//     let iiname = document.createElement('p');
//     iiname.textContent=Name;
//     iidiv.appendChild(iiname);
// });
// innerdiv.appendChild(iidiv);
// aboutdiv.appendChild(innerdiv);










document.querySelector("#q1").textContent = jsObject.footer.signing.title;
document.querySelector("#q2").textContent = jsObject.footer.signing.subtitle;

document.querySelector("#sm1").src = jsObject.footer.socialMedia.facebook;
document.querySelector("#sm2").src = jsObject.footer.socialMedia.x;
document.querySelector("#sm3").src = jsObject.footer.socialMedia.in;
document.querySelector("#sm4").src = jsObject.footer.socialMedia.instagram;
document.querySelector("#sm5").src = jsObject.footer.socialMedia.youtube;

document.querySelector("#call img").src=jsObject.footer.phone.icon;
document.querySelector("#call h4").src=jsObject.footer.phone.number;

document.querySelector("#copyright").textContent=jsObject.footer.copyright;


document.querySelector("#location img").src=jsObject.footer.location.mapPoint;
document.querySelector("#location h4").textContent=jsObject.footer.location.place;
document.querySelector(".footer #tripquest").textContent=jsObject.footer.title;

let fr = document.querySelector('.footer #footer-right');
(jsObject.footer.more).forEach((more)=>{
    let span = document.createElement('span');
    span.textContent = more;
    fr.appendChild(span);
});



document.querySelector("#name span img").src = jsObject.footer.signing.input.name.image;
document.querySelector("#email span img").src = jsObject.footer.signing.input.email.image;
let sbutton= document.querySelector("#submit button");
sbutton.textContent=jsObject.footer.signing.buttonText;
let fname = document.querySelector("#name input");
fname.placeholder="Your Name";
let ename = document.querySelector("#email input");
ename.placeholder="Your Email";






document.querySelector("#testTitle").textContent = jsObject.testimonials.title;

let people = document.querySelector(".testimonials #people");
for(let i=0;i<100;i++){
   (jsObject.testimonials.people).forEach((person)=>{
       let span = document.createElement('span');
       span.className="review";
       let simg = document.createElement('img');
       simg.src=person;
       simg.height=600;
       span.appendChild(simg);
       people.appendChild(span);

   });
}

function showCustomAlert(message) {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "flex-start";  
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = "1000";
    overlay.style.paddingTop = "20px"; 

    const alertBox = document.createElement("div");
    alertBox.style.backgroundColor = "#ffffff"; 
    alertBox.style.color = "#50362A"; 
    alertBox.style.padding = "20px";
    alertBox.style.borderRadius = "8px";
    alertBox.style.width = "50%"; 
    alertBox.style.maxWidth = "500px"; 
    alertBox.style.textAlign = "center";
    alertBox.style.fontFamily = "Poppins";
    const logo = document.createElement('img');
    logo.src = "/beforeloginHome/logo.png"
    logo.width=70;
    logo.height=80;
    const title = document.createElement("div");
    title.innerText = "TripQuest says";
    title.style.fontWeight = "700";
    title.style.marginBottom = "10px";
    title.style.fontSize = "30px";

    const messageText = document.createElement("p");
    messageText.innerText = message;
    messageText.style.cssText = `
    font-family:kameron;
    font-weight:500;
    font-size:20px;
    color:black;
    `;

    const closeButton = document.createElement("button");
    closeButton.innerText = "OK";
    closeButton.style.backgroundColor = "#50362A";
    closeButton.style.color = "#ffffff";
    closeButton.style.padding = "10px 20px";
    closeButton.style.border = "none";
    closeButton.style.borderRadius = "20px";
    closeButton.style.cursor = "pointer";
    closeButton.style.marginTop = "10px";
    closeButton.style.width="150px";
    closeButton.style.fontFamily="kameron";
    closeButton.style.fontSize="20px";

    closeButton.addEventListener("click", function() {
        document.body.removeChild(overlay);
        document.body.style.overflowY = "auto";
    });
    alertBox.appendChild(logo);
    alertBox.appendChild(title);
    alertBox.appendChild(messageText);
    alertBox.appendChild(closeButton);

    overlay.appendChild(alertBox);
    document.body.appendChild(overlay);
}

sbutton.addEventListener("click", function(event) {
    document.body.style.overflow="hidden";
    event.preventDefault(); 
    const email = ename.value.trim();
    const validDomains = ["@gmail.com", "@yahoo.in", "@outlook.in", "@bmu.edu.in"];
    const isValidEmail = validDomains.some(domain => email.endsWith(domain));

    if (email && isValidEmail) {
        showCustomAlert("Thank you for Signing Up!! Email: " + email);
        ename.value = ""; 
    } else {
        showCustomAlert("Please enter a valid email address.");
    }
});





})

.catch(error => console.error("Error loading JSON:", error));




