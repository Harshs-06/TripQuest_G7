let logoImg = document.querySelector('#imagelogo')
logoImg.setAttribute('src', jsonobj.logo);  
logoImg.setAttribute('width', '78');
logoImg.setAttribute('height', '88');

let logoname = document.querySelector('#tripquest')
logoname.textContent = jsonobj.name;

let homeicon = document.querySelector('.nav-icons');
homeicon.setAttribute('src', jsonobj.homeicon);  
homeicon.setAttribute('width', '31');
homeicon.setAttribute('height', '30');

let homeicon_text = document.querySelector('.icon-text');
homeicon_text.textContent=jsonobj.home;

letgroupimg = document.querySelector('#6754groupimg');
groupimg.setAttribute('src', jsonobj.Groupimage);  
groupimg.setAttribute('width', '786');
groupimg.setAttribute('height', '491');


let heading3 = document.querySelector('#h3');
heading3.textContent = jsonobj.h3;
let heading4 = document.querySelector('#h4');
heading4.textContent = jsonobj.name;
let group = document.querySelector('#Grp');
group.setAttribute('src', jsonobj.Groupimage2);  
 group.setAttribute('width', '24');
 group.setAttribute('height', '24');
let Heading5 = document.querySelector('#H5');

let destimg = document.querySelector('#img1');
destimg.setAttribute('src', jsonobj.destination);
destimg.setAttribute('width', '24');
destimg.setAttribute('height', '24');


let dest_heading = document.querySelector('#h51');
dest_heading.textContent = jsonobj.h5_1;

let dataList = document.querySelector('#places');
for (let i = 0; i < 83; i++) {
    let Options = document.createElement('option');
    Options.value = jsonobj.Value[i];
    Options.textContent = jsonobj.Place[i];
    dataList.appendChild(Options);
}

let cost = document.querySelector('#rupeeimg');
let heading_cost = document.querySelector('#rupee_text');
heading_cost.textContent = jsonobj.h5_2;
cost.setAttribute('src', jsonobj.rupee);
cost.setAttribute('width', '24');
cost.setAttribute('height', '24');

let max = document.querySelector('#filter_img');
max.setAttribute('src', jsonobj.filter);
 max.setAttribute('width', '24');
max.setAttribute('height', '24');
let max_heading = document.querySelector('#max');
max_heading.textContent = jsonobj.h5_3;


let transport = document.querySelector('#transimg');
transport.setAttribute('src', jsonobj.transportImg);
transport.setAttribute('width','24');
transport.setAttribute('height','24');
let transport_text = document.querySelector('#trantext');
transport_text.textContent = jsonobj.transport[0];

let DataList = document.querySelector('#transportation');
for (let i = 0; i < jsonobj.OVT.length; i++) {
    let Options_trans = document.createElement('option');
    Options_trans.value = jsonobj.OVT[i];
    DataList_trans.appendChild(Options_trans);
}
let button = document.querySelector('#createButton');
button.textContent=jsonobj.button_text;



