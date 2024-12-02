fetch("/TripQuest_G7/tripquest/explore_more_final_data.json")
.then(response=>response.json())
.then(obj=>{
    let nav = document.querySelector(".navigation");
    nav.style.cssText=`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        margin: 20px;
        `;
    let logonav = document.querySelector(".logo");
    logonav.style.cssText=`
        display: flex;
        align-items: center;              
        `;
    let logoimg = document.createElement('img');
    logoimg.setAttribute('src',obj.navigation.logo.src);
    logoimg.setAttribute('alt',obj.navigation.logo.alt);
    logoimg.style.width = "50px";
    logoimg.style.marginRight = "10px";
    logonav.appendChild(logoimg);
    let head1 = document.querySelector("h1");
    head1.textContent = obj.navigation.title;
    head1.style.fontSize="30px";
    head1.style.color="white";

    let navi = document.querySelector(".nav");
    let anchor = navi.querySelector("a");
    anchor.style.cssText=`
        text-decoration: none;
        font-size: 18px;
        color: white;
        padding: 10px;
        `;

    let horirule = document.querySelector("hr");
    horirule.style.color="white";

    let firstly = document.querySelector(".first");
    firstly.style.cssText=`
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        flex-wrap: wrap;    
        `;
    let imgsec = document.querySelector(".image-wrapper");
    imgsec.style.cssText = `
        position: relative;
        width: 320px;
        height: 420px;
        margin-right: 30px; 
        `;
    let imgback = document.querySelector(".white-rectangle");
    imgback.style.cssText = `
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #FFFFFF;
        border-radius: 10px;
        transform: rotate(-10deg);
        margin-top: 30px;
        z-index: 1; 
        `;
    let peepsimg = document.createElement('img');
    peepsimg.setAttribute('src',obj.mainContent.image.src);
    peepsimg.setAttribute('alt',obj.mainContent.image.alt);
    peepsimg.style.cssText = `
        position: absolute;
        top: 10px;
        left: 10px;
        width: 300px;
        height: auto;
        border-radius: 10px;
        z-index: 2; 
        `;
    imgback.appendChild(peepsimg)
    let cont = document.querySelector(".container");
    cont.style.cssText = `
        text-align: center;
        color: white;
        `;
    let fix1 = document.getElementById("fixed-text1");
    fix1.style.cssText = `
        font-size: 30px;
        margin-bottom: 10px;
        line-height: 0.2;
        `;
    fix1.textContent = obj.mainContent.container.fixedText1;
    let irrshape = document.querySelector(".irregular-shape");
    irrshape.style.cssText = `
        background-image: url('ellipse.png');
        background-repeat: no-repeat;
        background-position: center;
        width: 220px;
        height: 150px;
        position: relative;
        background-size: contain;
        margin: 5px auto;
        `;

    let carou =  document.querySelector(".carousel-text");
    carou.textContent = obj.mainContent.container.carouselTexts[0];
    carou.style.cssText = `
        font-size: 24px;
        font-weight: bold;
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        white-space: nowrap;    
        `;

    const carouselTextElement = document.getElementById("carouselText");
    const carouselTexts = obj.mainContent.container.carouselTexts;
    let currentIndex = 0;

    function updateCarouselText() {
        currentIndex = (currentIndex + 1) % carouselTexts.length;
        carouselTextElement.textContent = carouselTexts[currentIndex];
     }
    setInterval(updateCarouselText, 3000);

    let fix2 = document.getElementById("fixed-text2");
    fix2.textContent = obj.mainContent.container.fixedText2;
    fix2.style.cssText = `
        font-size: 30px;
        margin-bottom: 10px;
        line-height: 0.2;
        `;

    let divsearch = document.querySelector(".search-bar");
    divsearch.style.cssText = `
        margin: 0 auto;
        width: fit-content;
        display: flex;
        gap: 2px;
        align-items: center;
        background-color: white;
        padding: 1.5%;
        border-radius: 25px;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
        margin-top: 100px;
    
        border: 1px solid #b55428;
        `;

    let locicon = document.querySelector(".location-icon");
    let button1 = document.createElement('button');
    button1.id = "showMapButton";
    button1.style.cssText = `
        background-color: #8c8282;
        color: rgb(237, 231, 231);
        border: none;
        padding: 1px 2px;
        border-radius: 25px;
        cursor: pointer;
        font-size: 15px;
        margin-left: 20px; 
    `;
    // button1.style.cssText = `
    //     height: 45px;
    //     width: 45px;
    //     background-color: #8c8282;
    //     color: rgb(237, 231, 231);
    //     border: none;
    //     border-radius: 25px;
    //     cursor: pointer;
    //     font-size: 16px;
    //     margin-left: 5px;
    //     `;
    
    
    let pin = document.createElement('img');
    pin.src = obj.searchBar.locationIcon;
    pin.style.cssText = `
        height: 35px;
        width: 35px;
        object-fit: cover;
        `;
    button1.appendChild(pin);
    locicon.appendChild(button1);
    
    let list1 = document.createElement('input');
    list1.className = "search-input"
    list1.style.cssText = `
        padding: 15px;
        font-size: 15px;
        border-radius: 25px;
        width: 400px;
        border: 1px solid #211e1e;
        margin-left: 20px;
        margin-top: 0px;
        `;
    list1.setAttribute('type',"text")
    list1.setAttribute('placeholder', obj.searchBar.placeholder);
    list1.setAttribute('list', "state-list");
    let dtlist = document.createElement('datalist');
    dtlist.id = "state-list";
    (obj.States).forEach((state)=>{
        let option = document.createElement('option');
        option.value = state;
        option.className="optionState";
        dtlist.appendChild(option);
        });

    locicon.appendChild(list1);
    locicon.appendChild(dtlist);
    let find1 = document.createElement('button');
    find1.textContent = obj.searchBar.buttonText;
    find1.style.cssText = `
        background-color: #8c8282;
        color: rgb(237, 231, 231);
        border: none;
        padding: 10px 20px;
        border-radius: 25px;
        cursor: pointer;
        font-size: 16px;
        margin-left: 20px;  
    `;
    divsearch.appendChild(find1)
    find1.addEventListener('click',function(){
        if(dtlist.value==="Kerala"){
            location.href="/beforeloginHome/kerala.html";
        }
    })
    let mapover = document.getElementById("mapOverlay");
    mapover.style.cssText = `
        display: none;
        top: 0;
        left: 0;
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        justify-content: center;
        align-items: center;
        z-index: 1000;
        `;

   

    let mapb = document.querySelector(".close-btn");
    
    mapb.style.cssText=`
        position: absolute;
        top: 20px;
        right: 20px;
        background-color: #fff;
        border: none;
        font-size: 24px;
        cursor: pointer;
        padding: 10px;
        border-radius: 5px;
        `;
    let frame = document.createElement('iframe');
    frame.src = obj.mapOverlay.iframe1.src;
    frame.allowFullscreen = true;
    frame.loading = "lazy";
    frame.referrerPolicy = "no-referrer-when-downgrade";
    frame.style.cssText = `
        width: 90%;
        height: 90%;
        border: none;
    `;

    mapover.appendChild(frame);

    button1.addEventListener('click', function() {
        mapover.style.display = 'flex';
    });
    mapb.addEventListener('click', function() {
        mapover.style.display = 'none';
    });

    let pack = document.querySelector(".packages")
    let resptxt = document.querySelector(".responsive-text");
    resptxt.style.fontSize = "20px";
    let headb  = document.querySelector(".heading-box");
    let head3 = document.querySelector(".label");
    head3.textContent = obj.packages.label;
    head3.style.color = "brown";
    let head2  = document.querySelector(".heading");
    head2.textContent = obj.packages.heading;
    head2.style.color = "brown";
    let txt = document.querySelector(".text-box");
    let par = document.createElement('p');
    par.textContent = obj.packages.text;
    txt.appendChild(par);

    let fcont = document.querySelector(".filter-container");
    fcont.style.cssText = `
        position: relative;
        display: inline-block;
        margin-top:30px;
        `;

    let fwrap = document.querySelector(".filter-wrapper");
    fwrap.style.cssText = `
        display: flex;
        align-items: center;
        gap: 10px;
    `;

    let filbutton = document.querySelector(".filter-button");
    filbutton.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #8c8282;  
        border: 1px solid #b55428;
        padding: 10px;
        border-radius: 25px;
        cursor: pointer;
        height: 45px;
        width: 45px;
        flex-shrink: 0;
        `;

    

    let fimg = document.createElement('img');
    fimg.src = obj.filter.image;
    fimg.style.cssText = `
        width: 20px;
        height: 20px;
        `;
    filbutton.appendChild(fimg);

    // let fform = document.createElement('form');
    // fform.className = "filter-form";
    // fform.id = "filterForm";
    // fform.style.cssText = `
    // display: flex;
    // position:fixed;
    // align-items: center;
    // background-color: white;
    // border-radius: 25px;
    // border: 1px solid #b55428;
    // overflow: hidden;
    // width: 0;
    // opacity: 0;
    // transition: all 0.3s ease-in-out;
    // white-space: nowrap;
    // `;

    // fwrap.appendChild(fform);

    //no// let fform = document.querySelector(".filter-form");
    // fform.style.cssText = `
    //     display: flex;
    //     align-items: center;
    //     background-color: white;
    //     border-radius: 25px;
    //     border: 1px solid #b55428;
    //     overflow: hidden;
    //     width: 0;
    //     opacity: 0;
    //     transition: all 0.3s ease-in-out;
    //     white-space: nowrap;
    //     `;

    // let fcontent = document.createElement('div');
    // fcontent.className = "filter-content";
    // let fcontent = document.querySelector(".filter-content");
    // fcontent.style.cssText = `
    //     display: flex;
    //     align-items: center;
    //     gap: 15px;
    //     width: 100%;
    //     `;

    // fform.appendChild(fcontent);

    // let in1 = document.createElement('input');
    // in1.setAttribute('type', "number");
    // in1.setAttribute('placeholder', "Min Budget")

    // let in2 = document.createElement('input');
    // in2.setAttribute('type', 'number');
    // in2.setAttribute('placeholder', "Max Budget")

    // fform.appendChild(in1);
    // fform.appendChild(in2);
    
    let sel = document.querySelector("#select1");
    sel.style.cssText = `
        padding: 8px 15px;
        border: 1px solid #ddd;
        border-radius: 25px;
        min-width: 160px; 
        color:black; 
        `;
    
    (obj.States).forEach((state)=>{
        let option = document.createElement('option');
        option.textContent = state;
        option.className="optionState";
        option.style.color="black";
        sel.appendChild(option);
    });

    // fcontent.appendChild(sel);           

    // let fibutton = document.createElement('button');
    // fibutton.setAttribute('type', "submit");
    // fibutton.textContent = "Submit";
    // fibutton.style.cssText = `
    //     background-color: #8c8282;
    //     color: white;
    //     border: none;
    //     padding: 8px 20px;
    //     border-radius: 25px;
    //     cursor: pointer;
    //     white-space: nowrap;
    //     `;

    // fcontent.appendChild(fibutton);

    

    // filbutton.addEventListener('click',toggleFilter)





    function toggleFilter() {
        const filterForm = document.getElementById('filterForm');
        filterForm.classList.toggle('active');
      }

    
    // filbutton.addEventListener('click', function() {
    //     fform.classList.toggle('active');
    // });


    let packimg = document.querySelector(".images");
    let imgbox = document.querySelector("#box1");
    let img1 = document.createElement('img');
    img1.src = obj.Statesdata.Rajasthan[0].image;
    img1.alt = obj.Statesdata.Rajasthan[0].Name;
    imgbox.appendChild(img1);

    let fli1 = document.querySelector("#lit1");
    let fli2 = document.querySelector("#lit2");
    fli1.textContent = "7 days";
    let img11 = document.createElement('img');
    img11.src = "star12.png";

    fli2.appendChild(img11);
    img11.style.width = "19px";
    img11.style.height = "19px";
    fli2.textContent = obj.Statesdata.Rajasthan[0].Rating;
    let fli11 = document.querySelector("#lid1");
    let fli22 = document.querySelector("#lid2");
    fli11.textContent = obj.Statesdata.Rajasthan[0].Name;
    fli22.textContent = obj.Statesdata.Rajasthan[0].Price;

    let imgbox2 = document.querySelector("#box2");
    let img2 = document.createElement('img');
    img2.src = obj.Statesdata.Rajasthan[1].image;
    img2.alt = obj.Statesdata.Rajasthan[1].Name;
    imgbox2.appendChild(img2);

    let fli1s = document.querySelector("#lit11");
    let fli2s = document.querySelector("#lit22");
    fli1s.textContent = "5 days";
    fli2s.textContent = obj.Statesdata.Rajasthan[1].Rating;
    let fli11s = document.querySelector("#lid11");
    let fli22s = document.querySelector("#lid22");
    fli11s.textContent = obj.Statesdata.Rajasthan[1].Name;
    fli22s.textContent = obj.Statesdata.Rajasthan[1].Price;

    let imgbox3 = document.querySelector("#box3");
    let img3 = document.createElement('img');
    img3.src = obj.Statesdata.Uttarakhand[1].image;
    img3.alt = obj.Statesdata.Uttarakhand[1].Name;
    imgbox3.appendChild(img3);

    let fli1t = document.querySelector("#lit111");
    let fli2t = document.querySelector("#lit222");
    fli1t.textContent = "3 days";
    fli2t.textContent = obj.Statesdata.Uttarakhand[1].Rating;
    let fli11t = document.querySelector("#lid111");
    let fli22t = document.querySelector("#lid222");
    fli11t.textContent = obj.Statesdata.Uttarakhand[1].Name;
    fli22t.textContent = obj.Statesdata.Uttarakhand[1].Price;














    






























    
    
    

    
    
    
        


})

.catch(error => console.error("Error loading JSON:", error));