async function  see_group() {
    try {
        const res = await fetch("http://127.0.0.1:3000/tripquest/Groups/see_group")
        const data = await res.json();
        console.log(data);
        showGroup(data.see)
    }
    catch(e){
        console.error("Failed to get group information",e)
    }
}

see_group();

function showGroup(data) {
    let grps = document.querySelector(".grps");

    data.forEach(data=>{
     const g = document.createElement('div');
     g.innerHTML = `
    <h2>${data.GroupName}</h2>
    <p id="de">Destination: ${data.Destination}</p>
    <p id="co">Cost: ${data.Cost}</p>
    <p id="me">Total Members: ${data.Members}</p>
    <p id ="tr">Transport: ${data.Transport}</p>
    <button onclick="delete_group('${data._id}')" id="del">Delete</button>
    <button onclick="update_group('${data._id}')" id="upd">Update</button>
    
    `;
    g.classList.add('Group');
    grps.appendChild(g)
    });
    
}


async function delete_group(id) {
    try{
    console.log(id)
    const res = await fetch(`http://127.0.0.1:3000/tripquest/Groups/delete_group/${id}`,{
       method:"DELETE"
    })

    const data = await res.json();
    console.log(data)
    window.location.reload();

    }catch(err){
        console.log('failed to delete group',err)
    }
}


function update_group(id){
    localStorage.setItem('gid',id);
    window.location.href="/avai_grp/update.html";
}

