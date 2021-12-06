/* jsonFetch function is used to create a fetch request */ 
var jsonFetch;
async function jsonFetch(url="https://shrutika-mahurkar.github.io/CS601_HW5_MAHURKAR/Degree.json"){
  

/*Create response object*/ 
let response = new Response();
/*fetch request */
     response = await fetch(url);
    
     /*check response status*/ 
    if(response.ok){
      /*Process the returned JSON data  */
        let jsonVariable = await response.json();
        
        /* create table  */
        var data='<thead><tr><th>School</th><th>Major</th><th>Type</th><th>Year-Conferred</th></tr></thead><tbody>';
       
        for(let i = 0; i<jsonVariable["my_degree_program"].length;i++){
         
        var row = "<tr><td>"+jsonVariable["my_degree_program"][i]["school"]+"</td>"+
        "<td>"+jsonVariable["my_degree_program"][i]["major"]+"</td>"+"<td>"+jsonVariable["my_degree_program"][i]["type"]+"</td>"+
        "<td>"+ jsonVariable["my_degree_program"][i]["year-conferred"]+"</td></tr> ";
        data=data+row;
         
        }
      
    }else{
        /* display error */
     
        document.getElementById("error").innerHTML ="HTTP Error found : " + response.status; 
        document.getElementById("table").remove();
        document.getElementById("container").remove();
        // var element =  document.body;
        // element.style.backgroundColor="white";
        document.body.style.backgroundImage.remove();
    }

    /* display table */
    document.getElementById("table").innerHTML = data +"</tbody>";
    /* remove container on clicking*/
    document.getElementById("container").remove();
  

    
}

