let SaraListOrg = ["HCI","MPP"];
let NewListOrg = [];

let HCIListProjects = ["Project #1","Project #2","Project #3"];
let NewListProjects = [];


let Project1Task =[{name:"task #1",priority: "High",progress:20,asignee:"sara.nur",
          subtasks:[{name:"sub-task #1",priority: "High",progress:20,asignee:"sara.nur",finished: false },
                    {name:"sub-task #2",priority: "Low",progress:100,asignee:"sara.nur",finished: false },
                    {name:"sub-task #3",priority: "Medium",progress:90,asignee:"ado",finished: true },
                    {name:"sub-task #4",priority: "Low",progress:0,asignee:"ado",finished: true },
                    {name:"sub-task #5",priority: "High",progress:20,asignee:"sara.nur",finished: true },
                    {name:"sub-task #6",priority: "High",progress:10,asignee:"ado",finished: false }] },


                   {name:"task #2",priority: "Low",progress:100,asignee:"sara.nur",subtasks:[{name:"sub-task #1",priority: "High",progress:20,asignee:"sara.nur",finished: false },
                    {name:"sub-task #2",priority: "Low",progress:100,asignee:"sara.nur",finished: false },
                    {name:"sub-task #3",priority: "Medium",progress:90,asignee:"ado",finished: true },
                    {name:"sub-task #4",priority: "Low",progress:0,asignee:"ado",finished: true },
                    {name:"sub-task #5",priority: "High",progress:20,asignee:"sara.nur",finished: true },
                    {name:"sub-task #6",priority: "High",progress:10,asignee:"ado",finished: true }] },

                   {name:"task #3",priority: "Medium",progress:80,asignee:"ado",subtasks:[{name:"sub-task #1",priority: "High",progress:20,asignee:"sara.nur", finished: false},
                    {name:"sub-task #2",priority: "Low",progress:100,asignee:"sara.nur",finished: false },
                    {name:"sub-task #3",priority: "Medium",progress:90,asignee:"ado",finished: true },
                    {name:"sub-task #4",priority: "Low",progress:0,asignee:"ado",finished: true }] },

                   {name:"task #4",priority: "Low",progress:0,asignee:"ado",subtasks:[{name:"sub-task #1",priority: "High",progress:20,asignee:"sara.nur",finished: false },
                    {name:"sub-task #2",priority: "Low",progress:100,asignee:"sara.nur",finished: false },
                    {name:"sub-task #3",priority: "Medium",progress:90,asignee:"ado",finished: true },
                    {name:"sub-task #4",priority: "Low",progress:0,asignee:"ado",finished: true }] },

                   {name:"task #5",priority: "High",progress:50,asignee:"sara.nur",subtasks:[{name:"sub-task #1",priority: "High",progress:20,asignee:"sara.nur", finished: false},
                    {name:"sub-task #2",priority: "Low",progress:100,asignee:"sara.nur",finished: false },
                    {name:"sub-task #3",priority: "Medium",progress:90,asignee:"ado",finished: true },
                    {name:"sub-task #4",priority: "Low",progress:0,asignee:"ado",finished: true }] },

                   {name:"task #6",priority: "High",progress:10,asignee:"ado",subtasks:[{name:"sub-task #1",priority: "High",progress:20,asignee:"sara.nur", finished: false},
                    {name:"sub-task #2",priority: "Low",progress:100,asignee:"sara.nur",finished: false },
                    {name:"sub-task #3",priority: "Medium",progress:90,asignee:"ado",finished: true },
                    {name:"sub-task #4",priority: "Low",progress:0,asignee:"ado",finished: true }] }];

let NewTasks = [];


function StringifyList( name, list){
    let newList = JSON.stringify(list);
    sessionStorage.setItem(name,newList);
}

function GetList(name){
    let newList = sessionStorage.getItem(name);
    return JSON.parse(newList);
}



let temp = JSON.stringify(Project1Task);
console.log(temp);



let temp2 = JSON.parse(temp)
console.log(temp2);


console.log(GetList("Project1Tasks"))


StringifyList("NewProject", NewListProjects)
StringifyList("HCIProject", HCIListProjects)
StringifyList("saraOrg",SaraListOrg);
StringifyList("newOrg",NewListOrg);
StringifyList("Project1Tasks",Project1Task);
StringifyList("NewTasks",NewTasks);

