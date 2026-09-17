console.log("Intern Sprint Planner loaded");

let  tasks=[
    {
      id:1,
      title:"create Login page",
      description:"Build and style the login form",
      assignee:"Ankit",
      priority:"High",
      category: "Development",
      estimatedHours:5,
      dueDate:"2026-09-20",
      completed:false,
        
    },
    {
      id:2,
      title:"Test Registration Flow",
      description:"Test user registration and validation",
      assignee:"Sam",
      priority:"Medium",
      category: "Testing",
      estimatedHours:4,
      dueDate:"2026-09-18",
      completed:true,
    },
    {
      id:3,
      title:"Research API Testing",
      description:"Research basic API testing concepts",
      assignee:"Jones",
      priority:"Low",
      category: "Research",
      estimatedHours:3,
      dueDate:"2026-09-10",
      completed:false,
    },
    {
      id:4,
      title:"Prepare Project Documentation",
      description:"Create documentation for the sprint project",
      assignee:"Jabeer",
      priority:"Medium",
      category: "Documentation",
      estimatedHours:6,
      dueDate:"2026-09-22",
      completed:false,
    },
    {
      id:5,
      title:"Fix Checkout Bugs",
      description:"Identify and fix checkout-related issues",
      assignee:"Saurav",
      priority:"High",
      category: "Development",
      estimatedHours:5,
      dueDate:"2026-09-20",
      completed:false,
    }

];

let currentFilter ="all";
function getFilteredTasks(){
    if(currentFilter ==="pending"){
        return tasks.filter(function(task){
            return task.completed === false;
        });
    }

    if(currentFilter ==="completed"){
        return tasks.filter(function(task){
            return task.completed ===true;
        });
    }

    if(currentFilter ==="high"){
        return tasks.filter(function(task){
            return task.priority ==="High";
        });
    }
    if(currentFilter ==="overdue"){

        const today = new Date().toISOString().split("T")[0];

        return tasks.filter(function(task){
            return task.completed === false && task.dueDate<today;
        });
    }

    return tasks;
}

function updateDashboard(){

    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(function(task){
        return task.completed === true;
    }).length;

    const pendingTasks = tasks.filter(function(task){
        return task.completed === false;
    }).length;

    const totalHours = tasks.reduce(function(total, task){
        return total + task.estimatedHours;
    },0);

    document.querySelector("#totalTasks").textContent = totalTasks;

    document.querySelector("#pendingTasks").textContent = pendingTasks;

    document.querySelector("#completedTasks").textContent = completedTasks;

    document.querySelector("#totalHours").textContent = totalHours;
    
}

function generateWorkloadReport(){

    const workload = {};

    tasks.forEach(function(task){

        if(workload[task.assignee]){
            workload[task.assignee] += task.estimatedHours;
        } else {
            workload[task.assignee] = task.estimatedHours;
        }

    });

    const workloadReport = document.querySelector("#workloadReport");

    workloadReport.innerHTML = "";

    for(let assignee in workload){

        const reportItem = document.createElement("div");

        reportItem.classList.add("workload-card");

        const name = document.createElement("h3");
        name.textContent = assignee;

        const hours = document.createElement("p");
        hours.textContent = workload[assignee] + " hours";

        reportItem.appendChild(name);
        reportItem.appendChild(hours);

        workloadReport.appendChild(reportItem);
    }
}

function searchTasks(){
    renderTasks();

}

function renderTasks(){
    const taskList = document.querySelector("#taskList");
    taskList.innerHTML="";

    const searchText = document.querySelector("#searchInput").value
    .trim()
    .toLowerCase();

    let  filteredTasks = getFilteredTasks();
    if(searchText !== ""){
        filteredTasks = filteredTasks.filter(function(task){
            return(
                task.title.toLocaleLowerCase().includes(searchText)||
                task.assignee.toLocaleLowerCase().includes(searchText)||
                task.category.toLocaleLowerCase().includes(searchText)

            );
        });
    }

    const emptyMessage = document.querySelector("#emptyMessage");

    if(filteredTasks.length === 0){
        emptyMessage.textContent ="No tasks found.";
        emptyMessage.style.display ="block";
        return;
    }

    emptyMessage.style.display ="none";

    filteredTasks.forEach(function(task){
        const taskCard = document.createElement("div");
        taskCard.classList.add("task-card");

        const title =document.createElement("h3");
        title.textContent = task.title;

        const description = document.createElement("p");
        description.textContent = task.description;

        const assignee = document.createElement("p");
        assignee.textContent = "Assignee:" + task.assignee;

        const priority = document.createElement("p");
        priority.textContent ="Priority:" + task.priority;

        priority.classList.add(
            "task-badge",
            "priority-" + task.priority.toLocaleLowerCase()
        );

        const category = document.createElement("p");
        category.textContent ="Category:" + task.category;

        category.classList.add("task-badge", "category-badge");

        const hours = document.createElement("p");
        hours.textContent = "Estimated Hours:" + task.estimatedHours;

        const duedate = document.createElement("p");
        duedate.textContent = "Due Date:" +task.dueDate;

        const status = document.createElement("p");

        if(task.completed){
            status.textContent =" status: Completed";

            status.classList.add(
                "task-badge",
                "status-completed"
            );
        } else{
            status.textContent =" status: pending";
            status.classList.add(
                "task-badge",
                "status-pending"

            );
        }

        taskCard.appendChild(title);
        taskCard.appendChild(description);
        taskCard.appendChild(assignee);
        taskCard.appendChild(priority);
        taskCard.appendChild(category);
        taskCard.appendChild(hours);
        taskCard.appendChild(duedate);
        taskCard.appendChild(status);

        const today = new Date().toISOString().split("T")[0];

        if(!task.completed && task.dueDate < today){

        const overdue = document.createElement("p");

        overdue.textContent = "⚠️ Overdue";

        overdue.classList.add(
          "task-badge",
          "overdue-badge"
         );

        taskCard.appendChild(overdue);
        }

        const actions = document.createElement("div");
          actions.classList.add("task-actions");

        const completeButton =document.createElement("button");

        if(task.completed){
            completeButton.textContent ="Reopen";
        } else{
            completeButton.textContent = "Mark complete"
        }

        completeButton.classList.add("complete-btn");

        completeButton.addEventListener("click",function(){
            task.completed = !task.completed;
            renderTasks();
            updateDashboard();
            generateWorkloadReport();
        });

        const editButton = document.createElement("button");
        editButton.textContent ="Edit";
        editButton.classList.add("edit-btn")

        editButton.addEventListener("click", function () {

         const newTitle = prompt(
            "Enter new task title:",
             task.title
           );

         if (newTitle === null) {
             return;
          }

          const newPriority = prompt(
            "Enter priority (Low, Medium, High):",
            task.priority
          );

          if (newPriority === null) {
              return;
          }

          const newHours = prompt(
           "Enter estimated hours:",
            task.estimatedHours
          );

          if (newHours === null) {
              return;
          }

          const newDueDate = prompt(
           "Enter due date (YYYY-MM-DD):",
            task.dueDate
          );

          if (newDueDate === null) {
             return;
         }


          if (newTitle.trim() === "") {
             alert("Task title cannot be empty.");
               return;
         }


          if (
             newHours.trim() === "" ||
             isNaN(Number(newHours)) ||
             Number(newHours) <= 0
            ) {
              alert("Estimated hours must be a valid number greater than 0.");
              return;
          }


          if (newDueDate === "") {
             alert("Due date is required.");
             return;
          }


           const today = new Date().toISOString().split("T")[0];

          if (newDueDate < today) {
             alert("Due date cannot be in the past.");
             return;
          }


          if (
             newPriority !== "Low" &&
             newPriority !== "Medium" &&
             newPriority !== "High"
         ) {
             alert("Priority must be Low, Medium, or High.");
              return;
         }  
          task.title = newTitle.trim();
          task.priority = newPriority;
          task.estimatedHours = Number(newHours);
          task.dueDate = newDueDate;

          renderTasks();
          updateDashboard();
          generateWorkloadReport();
          });

        const deleteButton = document.createElement("button");
        deleteButton.textContent ="Delete";

        deleteButton.classList.add("delete-btn");

        deleteButton.addEventListener("click",function(){
            tasks = tasks.filter(function(item){
                return item.id !== task.id;
            });
            renderTasks();
            updateDashboard();
            generateWorkloadReport();
        });

        actions.appendChild(completeButton);
        actions.appendChild(editButton);
        actions.appendChild(deleteButton)

        taskCard.appendChild(actions);

        taskList.appendChild(taskCard);

    });
}
renderTasks();
updateDashboard();
generateWorkloadReport();


function validateTask(title, assignee, estimatedHours, dueDate){

    if(title.trim()===""){
        return "Task title is required."
    }
    if(assignee.trim()===""){
        return "Assignee name is required."
    }
     if(
        estimatedHours.trim()==="" ||
        isNaN(Number(estimatedHours))||
        Number(estimatedHours)<=0
        ){
        return "Estimated hours must be a vaild number more than 0. "
    }
     if(dueDate ===""){
        return "Due date is required"
    }

    const today = new Date().toISOString().split("T")[0];
    
    if(dueDate<today){
        return"Due date cannot be in the past.";
    }
    return"";

}

function addTask(event){
    event.preventDefault();

    const title = document.querySelector("#taskTitle").value;
    const description = document.querySelector("#taskDescription").value;
    const assignee = document.querySelector("#assignee").value;
    const priority = document.querySelector("#priority").value;
    const category = document.querySelector("#category").value;
    const estimatedHours = document.querySelector("#estimatedHours").value;
    const dueDate = document.querySelector("#dueDate").value;

    const validationMessage = document.querySelector("#validationMessage");
    
    const errorMessage = validateTask(
        title,
        assignee,
        estimatedHours,
        dueDate
    );

    if(errorMessage !== ""){
        validationMessage.textContent =errorMessage;
        return;
    }

    const newTask ={
        id: Date.now(),
        title: title,
        description: description,
        assignee: assignee,
        priority: priority,
        category: category,
        estimatedHours: Number(estimatedHours),
        dueDate:dueDate,
        completed: false
    };

    tasks.push(newTask);

    validationMessage.textContent ="";
    renderTasks();
    updateDashboard();
    generateWorkloadReport();
    document.querySelector("#taskForm").reset();

}

document.querySelector("#taskForm").addEventListener("submit",addTask);

const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach(function(button){
    button.addEventListener("click",function(){
        currentFilter = button.dataset.filter;

        filterButtons.forEach(function(btn){
            btn.classList.remove("active");
        });

        button.classList.add("active");

        renderTasks();
    });
});

document.querySelector("#searchButton").addEventListener("click",searchTasks);


const themeToggle = document.querySelector("#themeToggle");

themeToggle.addEventListener("click",function(){
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeToggle.textContent ="☀️ Light Mode";
    } else {
        themeToggle.textContent ="🌙 Dark Mode";
    }
})