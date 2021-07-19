$(() =>{
    $(".social").hover(function(){  
        $(this).toggle({
            width:"70px",
            height:"75px"
        }, "fast") 
        });
    });


function gitInfo(){
    
    const gitRepo = new XMLHttpRequest();
    gitRepo.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
        let repoArray = JSON.parse(this.responseText);
            let response = "";
            for(var i = 0; i < repoArray.length; i++){
                
                response += `<li><a href="${repoArray[i].html_url}" target="_blank">${repoArray[i].name}</a></li>`

        
                
                
            }
            document.getElementById('gitHere').innerHTML = response;
            
           }
        }
    gitRepo.open("GET","https://api.github.com/users/Ajninreaper/repos", true);
    gitRepo.send();
    }
    

