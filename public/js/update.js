
async function updateHandler(event){
    try{
        event.preventDefault();
        const id = localStorage.getItem('gid');
        const formData = new FormData(event.target)
        const res = await fetch(`http://127.0.0.1:3000/tripquest/Groups/update_group/${id}`,{
            method:'PUT',
            body:formData
        })
        const data = await res.json();
        console.log('response',data);
        window.location.href="/avai_grp/avail_grp.html";
        localStorage.clear('gid');
    }catch(err){
        console.error('Error in updating group:',err.message);
    }
}