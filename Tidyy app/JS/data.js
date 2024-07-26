let SaraListOrg = ["HCI", "MPP"];
let NewListOrg = [];

let HCIListProjects = ["Project #1", "Project #2", "Project #3"];
let NewListProjects = [];

let Teams = [{teamName: "Dev", members: 
  [
    {name: "sara.nur", email:"sara.nur@gmail.com"},
    {name: "ado",email: "ado@gmail.com"},
    {name: "jason", email: "jason@gmail.com"},
  ]},
  {teamName: "UI", members:
  [
    {name: "eve",email:"eve@gmail.com"},
    {name: "aladin",email:"aladin@gmail.com"},
    {name: "monica",email: "monica"}
  ]}]


let Project1Task = [
  {
    name: "task #1",
    priority: "High",
    progress: 20,
    asigneedTeam: "Dev",
    subtasks: [
      {
        name: "sub-task #1",
        priority: "High",
        progress: 20,
        asignee: "sara.nur",
        finished: false,
        description: "Fix certain parts",
      },
      {
        name: "sub-task #2",
        priority: "Low",
        progress: 100,
        asignee: "sara.nur",
        finished: false,
        description: "Fix certain parts",
      },
      {
        name: "sub-task #3",
        priority: "Medium",
        progress: 90,
        asignee: "ado",
        finished: true,
        description: "Fix certain parts",
      },
      {
        name: "sub-task #4",
        priority: "Low",
        progress: 0,
        asignee: "ado",
        finished: true,
        description: "Fix certain parts",
      },
      {
        name: "sub-task #5",
        priority: "High",
        progress: 20,
        asignee: "sara.nur",
        finished: true,
        description: "Fix certain parts",
      },
      {
        name: "sub-task #6",
        priority: "High",
        progress: 10,
        asignee: "ado",
        finished: false,
        description: "Fix certain parts",
      },
    ],
  },

  {
    name: "task #2",
    priority: "Low",
    progress: 100,
    asigneedTeam: "UI",
    subtasks: [
      {
        name: "sub-task #1",
        priority: "High",
        progress: 20,
        asignee: "sara.nur",
        finished: false,
        description: "Fix certain parts",
      },
      {
        name: "sub-task #2",
        priority: "Low",
        progress: 100,
        asignee: "sara.nur",
        finished: false,
        description: "Fix certain parts",
      },
      {
        name: "sub-task #3",
        priority: "Medium",
        progress: 90,
        asignee: "ado",
        finished: true,
        description: "Fix certain parts",
      },
      {
        name: "sub-task #4",
        priority: "Low",
        progress: 0,
        asignee: "ado",
        finished: true,
        description: "Fix certain parts",
      },
      {
        name: "sub-task #5",
        priority: "High",
        progress: 20,
        asignee: "sara.nur",
        finished: true,
        description: "Fix certain parts",
      },
      {
        name: "sub-task #6",
        priority: "High",
        progress: 10,
        asignee: "ado",
        finished: true,
        description: "Fix certain parts",
      },
    ],
  },

  {
    name: "task #3",
    priority: "Medium",
    progress: 80,
    asigneedTeam: "Dev",
    subtasks: [
      {
        name: "sub-task #1",
        priority: "High",
        progress: 20,
        asignee: "sara.nur",
        finished: false,
        description: "Fix certain parts",
      },
      {
        name: "sub-task #2",
        priority: "Low",
        progress: 100,
        asignee: "sara.nur",
        finished: false,
        description: "Fix certain parts",
      },
      {
        name: "sub-task #3",
        priority: "Medium",
        progress: 90,
        asignee: "ado",
        finished: true,
        description: "Fix certain parts",
      },
      {
        name: "sub-task #4",
        priority: "Low",
        progress: 0,
        asignee: "ado",
        finished: true,
        description: "Fix certain parts",
      },
    ],
  },

  {
    name: "task #4",
    priority: "Low",
    progress: 0,
    asigneedTeam: "UI",
    subtasks: [
      {
        name: "sub-task #1",
        priority: "High",
        progress: 20,
        asignee: "sara.nur",
        finished: false,
        description: "Fix certain parts",
      },
      {
        name: "sub-task #2",
        priority: "Low",
        progress: 100,
        asignee: "sara.nur",
        finished: false,
        description: "Fix certain parts",
      },
      {
        name: "sub-task #3",
        priority: "Medium",
        progress: 90,
        asignee: "ado",
        finished: true,
        description: "Fix certain parts",
      },
      {
        name: "sub-task #4",
        priority: "Low",
        progress: 0,
        asignee: "ado",
        finished: true,
        description: "Fix certain parts",
      },
    ],
  },

  {
    name: "task #5",
    priority: "High",
    progress: 50,
    asigneedTeam: "Dev",
    subtasks: [
      {
        name: "sub-task #1",
        priority: "High",
        progress: 20,
        asignee: "sara.nur",
        finished: false,
        description: "Fix certain parts",
      },
      {
        name: "sub-task #2",
        priority: "Low",
        progress: 100,
        asignee: "sara.nur",
        finished: false,
        description: "Fix certain parts",
      },
      {
        name: "sub-task #3",
        priority: "Medium",
        progress: 90,
        asignee: "ado",
        finished: true,
        description: "Fix certain parts",
      },
      {
        name: "sub-task #4",
        priority: "Low",
        progress: 0,
        asignee: "ado",
        finished: true,
        description: "Fix certain parts",
      },
    ],
  },

  {
    name: "task #6",
    priority: "High",
    progress: 10,
    asigneedTeam: "Dev",
    subtasks: [
      {
        name: "sub-task #1",
        priority: "High",
        progress: 20,
        asignee: "sara.nur",
        finished: false,
        description: "Fix certain parts",
      },
      {
        name: "sub-task #2",
        priority: "Low",
        progress: 100,
        asignee: "sara.nur",
        finished: false,
        description: "Fix certain parts",
      },
      {
        name: "sub-task #3",
        priority: "Medium",
        progress: 90,
        asignee: "ado",
        finished: true,
        description: "Fix certain parts",
      },
      {
        name: "sub-task #4",
        priority: "Low",
        progress: 0,
        asignee: "ado",
        finished: true,
      },
    ],
  },
];

let NewTasks = [];

function StringifyList(name, list) {
  let newList = JSON.stringify(list);
  sessionStorage.setItem(name, newList);
}

function GetList(name) {
  let newList = sessionStorage.getItem(name);
  return JSON.parse(newList);
}

let temp = JSON.stringify(Project1Task);
console.log(temp);

let temp2 = JSON.parse(temp);
console.log(temp2);

console.log(GetList("Project1Tasks"));

StringifyList("NewProject", NewListProjects);
StringifyList("HCIProject", HCIListProjects);
StringifyList("saraOrg", SaraListOrg);
StringifyList("newOrg", NewListOrg);
StringifyList("Project1Tasks", Project1Task);
StringifyList("NewTasks", NewTasks);
StringifyList("TeamList", Teams)
