let SaraListOrg = ["HCI","MPP"];
let NewListOrg = [];

let HCIListProjects = ["Project #1","Project #2","Project #3"];
let NewListProjects = [];


let Project1Task =[{name:"task #1",priority: "High",progress:20,asignee:"sara.nur" },
                   {name:"task #2",priority: "Low",progress:100,asignee:"sara.nur" },
                   {name:"task #3",priority: "Medium",progress:80,asignee:"ado" },
                   {name:"task #4",priority: "Low",progress:0,asignee:"ado" },
                   {name:"task #5",priority: "High",progress:50,asignee:"sara.nur" },
                   {name:"task #6",priority: "High",progress:10,asignee:"ado" },
];

let NewTasks = [];



function StringifyList( name, list){
    console.log(list);
    let newList = JSON.stringify(list);
    console.log(newList);
    sessionStorage.setItem(name,newList);
}

function GetList(name){
    let newList = sessionStorage.getItem(name);
    console.log(newList);
    return JSON.parse(newList);
}

StringifyList("NewProject", NewListProjects)
StringifyList("HCIProject", HCIListProjects)
StringifyList("saraOrg",SaraListOrg);
StringifyList("newOrg",NewListOrg);
StringifyList("Project1Tasks",Project1Task);
StringifyList("NewTasks",NewTasks);
