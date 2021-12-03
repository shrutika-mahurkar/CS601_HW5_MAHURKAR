async function jsonFetch(url){
   
    let response = await fetch(url);
    if(response.ok){
        let json = await response.json();
    }else{
        alert("HTTP Error : " + response.status);
    }

}

jsonFetch("./Degree.json");