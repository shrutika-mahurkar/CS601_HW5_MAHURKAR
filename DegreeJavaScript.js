async function jsonFetch(url="https://shrutika-mahurkar.github.io/CS601_HW5_MAHURKAR/Degree.json"){
  
    let response = await fetch(url);
    
    if(response.ok){
        let jsonVariable = await response.json();
        
        var data='<thead><tr><th>School</th><th>Major</th><th>Type</th><th>Year-Conferred</th></tr></thead><tbody>';
       
        for(let i = 0; i<jsonVariable["my_degree_program"].length;i++){
         
        var row = "<tr><td>"+jsonVariable["my_degree_program"][i]["school"]+"</td>"+
        "<td>"+jsonVariable["my_degree_program"][i]["major"]+"</td>"+"<td>"+jsonVariable["my_degree_program"][i]["type"]+"</td>"+
        "<td>"+ jsonVariable["my_degree_program"][i]["year-conferred"]+"</td></tr> ";
        data=data+row;
         
        }
      
    }else{
        document.getElementById("error").innerHTML ="HTTP Error found : " + response.status; 
    }

    document.getElementById("table").innerHTML = data +"</tbody>";
    
    document.getElementById("clickme").style.visibility = 'hidden';
    document.getElementById("description").style.visibility = 'hidden'; 
   /* document.getElementsByClassName("hiddenClass").style.visibility = 'hidden';
   if deleted remove class name from html
   */

    
}
