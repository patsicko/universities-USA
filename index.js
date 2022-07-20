const main=document.getElementById("main");
// const universities=document.getElementById("universities");


const displayData=(name,country,webpage)=>{

const univerities=`

<div class="universities" id="universities">
    
    <div class="card" id="card">
    Name:${name} <br>
    Country:${country} <br>
    webpage:${webpage} <br>
    </div>
</div>
`

main.innerHTML+=univerities;

}


displayData();

const fetchData= async()=>{

    const fetched=await (await fetch("http://universities.hipolabs.com/search?country=United+States")).json();

    console.log(fetched);

     


      fetched.map(item=>{
        
        console.log(item.web_pages)
      
        displayData(item.name,item.country,`<a href=${item.web_pages}>${item.web_pages}</a>`)
     });



     
}


fetchData();