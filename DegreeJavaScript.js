async function jsonFetch(url="https://shrutika-mahurkar.github.io/CS601_HW5_MAHURKAR/Degree.json"){
  
    let response = await fetch(url);
    
    if(response.ok){
        let json = await response.json();
        console.log(json);
    }else{
        document.getElementById("error").innerHTML ="HTTP Error : " + response.status; 


         
    }

}
