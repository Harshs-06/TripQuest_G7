class TripQuest_CreatingGroup {
    constructor(){
        this.name = "TripQuest";
        this.home="Home";
        this.h3 = "Making traveling groups easier using";
        this.h3_web = "TripQuest";
        this.labels = {
            grouplabel :"Group Name",
            destlabel : "Destination",
            costlabel : "Cost of Travel",
            translabel:"Transport",
            memlabel:"Max.Members"

        };
        this.transportOptions = ["Private Transport", "Cab Sharing", "Shuttle Services", "Railways", "Flight"];
        this.values = ["Agra", "New-Delhi","Jaipur","Mumbai","Goa","Varanasi","Alleppey","Leh-Ladakh","Rishikesh","Shimla","Manali","Jodhpur",
            "Udaipur","Amritsar","Chennai","Kolkata","Mysore","Bengaluru","Hyderabad","Pondicherry","Darjeeling","Nainital","Mussoorie", "Coorg"  ,
            "Port-Blair" , "Jaisalmer" ,"Ranthambore" , "McLeod-Ganj" , "Ooty"  ,"Mahabalipuram"  ,"Kodaikanal"  ,"Lonavala"  ,"Ajanta-Ellora"  ,
            "Nashik"  ,"Bhopal"  , "Khajuraho"  ,"Pushkar"   ,"Mount-Abu" ,"Haridwar"  ,"Dehradun"  ,"Dalhousie"   , "Kullu"  , "Ranchi"  ,
            "Gangtok"  ,"Guwahati"  ,"Mahabaleshwar"  ,"Kumarakom"  ,"Tirupati"  ,"Puri"  , "Kanchipuram" ,"Madurai"   ,"Srinagar"  ,
            "Kanyakumari" ,"Rameswaram"  ,"Auli"  ,"Gulmarg" ,"Dharamshala" ,"Havelock-Island" ,"Shillong" ,"Cherrapunjee" ,"Patna" ,"Bodh-Gaya",
            "Tsomgo-Lake","Gokarna","Rann-Of-Kutch","Dwarka" ,"Sundarbans","Kalimpong" ,"Patan","Udaigiri-Caves","Kailash-Mansarovar","Bhubaneswar",
            "Silvassa","Lavasa","Pachmarhi","Bikaner","Nagarhole", "Nanda-Devi","Spiti-Valley","Zanskar-Valley","Bundi","Jhansi","Tiruvannamalai",
            "Bijapur","Alwar","Lonar"];
        this.Place = ["Agra, Uttar Pradesh "  ,"New Delhi, Delhi "  ,"Jaipur, Rajasthan "  ,"Mumbai, Maharashtra "  ,"Goa "  ,"Varanasi, Uttar Pradesh "  ,
            "Alleppey, Kerala "  ,"Leh-Ladakh, Jammu & Kashmir " ,"Rishikesh, Uttarakhand " ," Shimla, Himachal Pradesh" ,"Manali, Himachal Pradesh " ,
            "Jodhpur, Rajasthan " ,"Udaipur, Rajasthan " ,"Amritsar, Punjab " ,"Chennai, Tamil Nadu " ,"Kolkata, West Bengal " ,"Mysore, Karnataka " ,
            "Bengaluru, Karnataka " ,"Hyderabad, Telangana " ,"Pondicherry, Puducherry " ,"Darjeeling, West Bengal " ,"Nainital, Uttarakhand " ,"Mussoorie, Uttarakhand " ,
            "Coorg, Karnataka " ,"Port Blair, Andaman & Nicobar Islands " ,"Jaisalmer, Rajasthan " ,"Ranthambore, Rajasthan " ,"McLeod Ganj, Himachal Pradesh " ,"Ooty, Tamil Nadu " ,
            "Mahabalipuram, Tamil Nadu " ,"Kodaikanal, Tamil Nadu " ,"Lonavala, Maharashtra " ,"Ajanta & Ellora, Maharashtra " ," Nashik, Maharashtra" ,
            "Bhopal, Madhya Pradesh " , "Khajuraho, Madhya Pradesh " , "Pushkar, Rajasthan " , "Mount Abu, Rajasthan " , "Haridwar, Uttarakhand " , "Dehradun, Uttarakhand " ,
            "Dalhousie, Himachal Pradesh " ,"Kullu, Himachal Pradesh " ,"Ranchi, Jharkhand " ,"Gangtok, Sikkim " ,"Guwahati, Assam " ,"Mahabaleshwar, Maharashtra " ,
            "Kumarakom, Kerala " ,"Tirupati, Andhra Pradesh " ,"Puri, Odisha " ,"Kanchipuram, Tamil Nadu " ,"Madurai, Tamil Nadu " ," Srinagar, Jammu & Kashmir" ,"Kanyakumari, Tamil Nadu " ,
            "Rameswaram, Tamil Nadu " ," Auli, Uttarakhand" ,"Gulmarg, Jammu & Kashmir " ,"Dharamshala, Himachal Pradesh " ," Havelock Island, Andaman" ,
            "Shillong, Meghalaya" ,"Cherrapunjee, Meghalaya " ,"Patna, Bihar " ,"Bodh Gaya, Bihar " ,"Tsomgo Lake, Sikkim " , "Gokarna, Karn","Rann of Kutch, Gujarat " ,
            "Dwarka, Gujarat " ,"Sundarbans, West Bengal " ,"Kalimpong, West Bengal " ,"Patan, Gujarat " ,"Udaigiri Caves, Madhya Pradesh " ,"Kailash Mansarovar, Uttarakhand " ,
            "Bhubaneswar, Odisha " ,"Silvassa, Dadra & Nagar Haveli " ,"Lavasa, Maharashtra " ,"Pachmarhi, Madhya Pradesh " ,"Bikaner, Rajasthan " ,
            "Nagarhole, Karnataka " ,"Nanda Devi, Uttarakhand " ,"Spiti Valley, Himachal Pradesh " ,"Zanskar Valley, Jammu & Kashmir " ,"Bundi, Rajasthan " ,
            "Jhansi, Uttar Pradesh " ,"Tiruvannamalai, Tamil Nadu " ,"Bijapur, Karnataka " ,"Alwar, Rajasthan " ,"Lonar, Maharashtra " ];
        
        this.button = "Create Group";
        this.icons = {
            homeIcon:"/createGroup/home-icon.png",
            groupImage:"/createGroup/group.png",
            groupImage2:"/createGroup/G.png",
            dest:"/createGroup/dest.png",
            rupee:"/createGroup/rupee.png",
            filter:"/createGroup/filter.png",
            transImage:"/createGroup/trans.png",

        }
        

    }
}


const cg = new TripQuest_CreatingGroup();

    // document.querySelector("#tripquest").textContent = jsObject.name;

    // let places = document.querySelector("#places");
    // for(let i=0;i<jsObject.Value.length;i++){
    //     let option = document.createElement('option');
    //     option.value=jsObject.Value[i];
    //     option.textContent=jsObject.Place[i];
    //     places.appendChild(option);
    // }

    // let transportation = document.querySelector("#transportation");
    // for(let i=0;i<jsObject.OVT.length;i++){
    //     let option = document.createElement("option");
    //     option.value=jsObject.OVT[i];
    //     transportation.appendChild(option);
    // }

    // document.querySelector(".vec").src=jsObject.Groupimage;






let button = document.querySelector("#submitButton");
button.addEventListener("click", async function() {



    

    // Create a container for ripple and text
    const contentContainer = document.createElement("div");
    contentContainer.style.cssText = `
        display: flex;
        flex-direction: column; /* Stack ripple and text vertically */
        align-items: center; /* Center-align ripple and text */
    `;

    // Create the ripple loader
    const loader = document.createElement("div");
    loader.className = "lds-ripple";
    loader.innerHTML = "<div></div><div></div>";
    loader.style.cssText = `
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    `;

    const rippleStyles = document.createElement("style");
    rippleStyles.textContent = `
        @keyframes lds-ripple {
            0% {
                top: 36px;
                left: 36px;
                width: 8px;
                height: 8px;
                opacity: 0;
            }
            4.9% {
                top: 36px;
                left: 36px;
                width: 8px;
                height: 8px;
                opacity: 0;
            }
            5% {
                top: 36px;
                left: 36px;
                width: 8px;
                height: 8px;
                opacity: 1;
            }
            100% {
                top: 0;
                left: 0;
                width: 80px;
                height: 80px;
                opacity: 0;
            }
        }

        .lds-ripple div {
            position: absolute;
            border: 4px solid white;
            opacity: 1;
            border-radius: 50%;
            animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
        }

        .lds-ripple div:nth-child(2) {
            animation-delay: -0.5s;
        }
    `;

    // Create the text
    const text = document.createElement("h4");
    text.textContent = "Creating your group...";
    text.style.cssText = `
        font-family: kameron;
        font-size: 25px;
        font-weight: 400;
        color: white;
        margin-top: 30px;
    `;

    // Append loader and text to the content container
    contentContainer.appendChild(loader);
    contentContainer.appendChild(text);

    // Create the overlay
    const overlay = document.createElement("div");
    overlay.id = "loadingOverlay";
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center; /* Center the content container */
        align-items: center; /* Center the content container */
        z-index: 1000;
    `;

    // Append the content container to the overlay
    overlay.appendChild(contentContainer);

    // Append overlay and styles to the document
    document.body.appendChild(overlay);
    document.head.appendChild(rippleStyles);

 


    




       

    
    console.log(parseInt(document.querySelector("#costOfTravel").value))
 
    let name=document.querySelector("#name").value;
    let destination = document.querySelector("#dest").value; 
    let cost = document.querySelector("#costOfTravel").value;
    let maximum = document.querySelector("#maxNum").value;
    let transport = document.querySelector("#modeOfTransport").value;
    
    
    const groupData = {
        GroupName: name,
        Destination: destination,
        Cost: cost,
        Members: maximum,
        Transport: transport
    };

    try{
        
        console.log(groupData);

        const response = await fetch("http://127.0.0.1:3000/tripquest/Groups/create_group",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(groupData)
        });
        if(!response.ok){
            throw new Error("Failed to create group");
        }

        const data = await response.json();
        console.log(data);

        setTimeout(()=>{
            window.location.href = "/avai_grp/avail_grp.html";
        },3000);
        

    }catch(error){
        console.log("Error:",error.message);
        alert("Failed to create group. Please try again.")
        overlay.remove();
    }

    



});








