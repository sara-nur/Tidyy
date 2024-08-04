let SaraListOrg = ["HCI", "MPP"];
let NewListOrg = [];

let HCIListProjects = ["Seminarski", "Zadace", "Izvjestaj"];
let NewListProjects = [];

let Teams = [
  {
    teamName: "Dev",
    members: [
      { name: "Sara Nur", username: "sara.nur", email: "sara.nur@gmail.com" },
      { name: "Admir Pasic", username: "ado", email: "ado@gmail.com" },
    ],
  },
  {
    teamName: "UI",
    members: [
      { name: "Eve Eve", username: "eve", email: "eve@gmail.com" },
      { name: "Aladin Aladin", username: "aladin", email: "aladin@gmail.com" },
      { name: "Monica Geller ", username: "monica", email: "monica" },
    ],
  },
];

let Project1Task = [
  {
    id: "task-1",
    name: "Prva verzija aplikacije",
    priority: "High",
    progress: 33,
    asigneedTeam: "Dev",
    subtasks: [
      {
        id: "subtask-1-1",
        taskId: "task-1",
        name: "Front-end",
        priority: "High",
        progress: 20,
        asignee: "sara.nur",
        finished: false,
        description: "Fix certain parts",
      },
      {
        id: "subtask-1-2",
        taskId: "task-1",
        name: "Back-end",
        priority: "Low",
        progress: 100,
        asignee: "sara.nur",
        finished: false,
        description: "Fix certain parts",
      },
      {
        id: "subtask-1-3",
        taskId: "task-1",
        name: "Editovanje",
        priority: "Medium",
        progress: 90,
        asignee: "ado",
        finished: true,
        description: "Fix certain parts",
      },
    ],
  },

  {
    id: "task-2",
    name: "HTA dijagram",
    priority: "Low",
    progress: 100,
    asigneedTeam: "UI",
    subtasks: [
      {
        id: "subtask-2-1",
        taskId: "task-2",
        name: "sub-task #1",
        priority: "High",
        progress: 20,
        asignee: "sara.nur",
        finished: false,
        description: "Fix certain parts",
      },
      {
        id: "subtask-2-2",
        taskId: "task-2",
        name: "sub-task #2",
        priority: "Low",
        progress: 100,
        asignee: "sara.nur",
        finished: false,
        description: "Fix certain parts",
      },
      {
        id: "subtask-2-3",
        taskId: "task-2",
        name: "sub-task #3",
        priority: "Medium",
        progress: 90,
        asignee: "ado",
        finished: true,
        description: "Fix certain parts",
      },
      {
        id: "subtask-2-4",
        taskId: "task-2",
        name: "sub-task #4",
        priority: "Low",
        progress: 0,
        asignee: "ado",
        finished: true,
        description: "Fix certain parts",
      },
      {
        id: "subtask-2-5",
        taskId: "task-2",
        name: "sub-task #5",
        priority: "High",
        progress: 20,
        asignee: "sara.nur",
        finished: true,
        description: "Fix certain parts",
      },
      {
        id: "subtask-2-6",
        taskId: "task-2",
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
    id: "task-3",
    name: "Finaln App",
    priority: "Medium",
    progress: 80,
    asigneedTeam: "Dev",
    subtasks: [
      {
        id: "subtask-3-1",
        taskId: "task-3",
        name: "sub-task #1",
        priority: "High",
        progress: 20,
        asignee: "sara.nur",
        finished: false,
        description: "Fix certain parts",
      },
      {
        id: "subtask-3-2",
        taskId: "task-3",
        name: "sub-task #2",
        priority: "Low",
        progress: 100,
        asignee: "sara.nur",
        finished: false,
        description: "Fix certain parts",
      },
      {
        id: "subtask-3-3",
        taskId: "task-3",
        name: "sub-task #3",
        priority: "Medium",
        progress: 90,
        asignee: "ado",
        finished: true,
        description: "Fix certain parts",
      },
      {
        id: "subtask-3-4",
        taskId: "task-3",
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
    id: "task-4",
    name: "Use case dijagram",
    priority: "Low",
    progress: 0,
    asigneedTeam: "UI",
    subtasks: [
      {
        id: "subtask-4-1",
        taskId: "task-4",
        name: "sub-task #1",
        priority: "High",
        progress: 0,
        asignee: "sara.nur",
        finished: false,
        description: "Fix certain parts",
      },
      {
        id: "subtask-4-2",
        taskId: "task-4",
        name: "sub-task #2",
        priority: "Low",
        progress: 0,
        asignee: "sara.nur",
        finished: false,
        description: "Fix certain parts",
      },
      {
        id: "subtask-4-3",
        taskId: "task-4",
        name: "sub-task #3",
        priority: "Medium",
        progress: 0,
        asignee: "ado",
        finished: true,
        description: "Fix certain parts",
      },
      {
        id: "subtask-4-4",
        taskId: "task-4",
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
    id: "task-5",
    name: "PMF matrica",
    priority: "High",
    progress: 50,
    asigneedTeam: "Dev",
    subtasks: [
      {
        id: "subtask-5-1",
        taskId: "task-5",
        name: "sub-task #1",
        priority: "High",
        progress: 20,
        asignee: "sara.nur",
        finished: false,
        description: "Fix certain parts",
      },
      {
        id: "subtask-5-2",
        taskId: "task-5",
        name: "sub-task #2",
        priority: "Low",
        progress: 100,
        asignee: "sara.nur",
        finished: false,
        description: "Fix certain parts",
      },
      {
        id: "subtask-5-3",
        taskId: "task-5",
        name: "sub-task #3",
        priority: "Medium",
        progress: 90,
        asignee: "ado",
        finished: true,
        description: "Fix certain parts",
      },
      {
        id: "subtask-5-4",
        taskId: "task-5",
        name: "sub-task #4",
        priority: "Low",
        progress: 0,
        asignee: "ado",
        finished: true,
        description: "Fix certain parts",
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
StringifyList("TeamList", Teams);
