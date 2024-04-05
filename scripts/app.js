function saveTask()
{
    console.log("saving tasks");
    //get values
    const title = $("#inputTitle").val();
    const desc = $("#inputDescription").val();
    const color = $("#inputColor").val();
    const date = $("#inputDate").val();
    const status = $("#inputStatus").val();
    const budget = $("#inputBudget").val();    
    //build an object
    
    let taskToSave = new Task(title,desc,color,date,status,budget);
    console.log(taskToSave);

    //save to the sever
    $.ajax({
        type: "POST",
        url: "http://fsdiapi.azurewebsites.net/api/tasks/",
        data: JSON.stringify(taskToSave),
        contentType: "application/json",
        success: function(res){
            console.log(res);
        },
        error: function(error) {
            console.log(error);
            alert("Unexpected error");
        }
    })

    //display the task
    displayTask(taskToSave);
  
}
function loadTask()//this to read
{
    //get http://fsdiapi.azurewebsites.net/api/tasks
    //console.log the response
    $.ajax({
        type: "GET",
        url: "http://fsdiapi.azurewebsites.net/api/tasks",
       

        success: function(res){
            let data = JSON.parse(res);
            
            for(let i=0;i<data.length;i++)
            {
                let task = data[i];  
                if(task.title=="adrian")
                {
                  displayTask(task);
                }
                //minichallenge bring only the ones that have the
                //title = adrian
            }
            console.log(res);
            console.log(data);
        },
        error: function(error) {
            console.log(error);
            alert("Unexpected error");
        }
    })

}

function displayTask(task)
{
    let syntax = `<div class="task"
    <h5>${task.title}</h5>
    <h5>${task.description}</h5>
    </div>
    <label class="status">${task.status}</label>
    <div class="date-budget">
    <label>${task.startDate}</label>
    <label>${task.budget}</label>
    </div>`    
    $(".pending-task").append(syntax);
}

function testRequest(){
    $.ajax({
        type: "delete",//read
        url:"http://fsdiapi.azurewebsites.net",
        //exceptions
        success: function(response){
            console.log(response)
        },
        error: function(error)
        {
            console.log(error)
        }
    });
}


function init() {
    //load data  
    //retrive data
    //hook events
    $("#btnSave").click(saveTask);//this is usign jQuery
    loadTask();
    //document.getElementById("btnSave"); old fashion
}

window.onload = init;


//try to specify the order of the arguments excecution