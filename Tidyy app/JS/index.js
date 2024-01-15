class User
{
    constructor(id,name,email,password){
        this.id = id;
        this.name = name;
        this.email = email;
        this.organisations = [];
        this.password=password;
    }

    addOrganisation(org) {
        this.organisations.push(org);
    }

    removeOrganisation(orgId) {
        this.organisations = this.organisations.filter(org => org.id !== orgId);
    }

}

class Organisation{
    constructor(id,name,owner)
    {
        this.id = id;
        this.name = name;
        this.owner = owner;
        this.users = [];
        this.projects = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    removeUser(userId) {
        this.users = this.users.filter(user => user.id !== userId);
    }

    addProject(project){
        this.projects.push(project);
    }
    removeProject(projectId)
    {
        this.projects = this.projects.filter(prj => prj.id !== projectId);
    }
}

class Task{
    constructor(id,name,startDate,endDate,priority,progress,type){
        this.id = id;
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.users = [];
        this.subTasks = [];
        this.priority = priority;
        this.progress = progress;
        this.type = type;
    }

    addUser(user) {
        this.users.push(user);
      }

    removeUser(userId) {
        this.users = this.users.filter(user => user.id !== userId);
      }

    addSubTask(subTask) {
        this.subTasks.push(subTask);
      }

    removeSubTask(subTaskId) {
        this.subTasks = this.subTasks.filter(sbTsk => sbTsk.id !== subTaskId);
    }

}

class SubTask{
    constructor(id,name,startDate,endDate,priority,note,isFinished){
        this.id = id;
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.users = [];
        this.priority = priority;
        this.note = note;
        this.isFinished = isFinished;
    }

    addUser(user) {
        this.users.push(user);
    }

    removeUser(userId) {
        this.users = this.users.filter(user => user.id !== userId);
    }
}

class Project{
    constructor(id,name,startDate,endDate){
        this.id = id;
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.tasks = [];
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    removeUser(userId) {
        this.users = this.users.filter(user => user.id !== userId);
    }

    addTask(task) {
        this.tasks.push(task);
    }

    removeTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
}

class Team{
    constructor(id,name)
    {
        this.id = id;
        this.name = name;
        this.users = [];
        this.typesOfTasks = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    removeUser(userId) {
        this.users = this.users.filter(user => user.id !== userId);
    }

    addType(taskType) {
        this.users.push(taskType);
    }

    removeType(taskTypeId) {
        this.typesOfTasks = this.typesOfTasks.filter(type => type.id !== taskTypeId);
    }
}

class Type{
    constructor(id,name)
    {
        this.id = id;
        this.name = name;
    }
}

class InMemoryDB{
    constructor()
    {
        this.users = [];
    }

    CreateUser(id,name,email,pasword)
    {
        const user = new User (id,name,email,pasword);
        this.users.push(user);
        return user;
    }


}

const dataBase = new InMemoryDB();


// login screen

const logInPassword=document.getElementById("Username");
const logInUsername=document.getElementById("Password");

function LogIn(pass,urnm)
{
    
}

function TeamLoad()
        {
            location.href="file:///C:/Users/Admir/Desktop/Tidyy%20app/Teams.html"
        }




// login screen


const user = dataBase.CreateUser(1,'Admir','Ado@fit.ba');
user.addOrganisation(new Organisation (1,'TestOrg',user.name));
user.addOrganisation(new Organisation (2,'AdmirsOrg',user.name));



