# Tidyy App
Tidyy is a project management and task-tracking tool designed to simplify and streamline the organization of IT tickets and tasks. It focuses on intuitive user interaction, providing an easy way to track progress and manage both individual and team tasks. The app is built with a user-centered design approach, ensuring a user-friendly and accessible interface.

## Into
Checkout this video to see how Tidyy works, in this video there is an explanation for how the app works and is used. 


https://github.com/user-attachments/assets/8c5c9861-0406-49b2-bc54-deaab17ee28b



## Features

- **Organization Management**: 
  - Create, view, and manage organizations.
  - Switch between organizations using a dropdown menu in the sidebar.

- **Project Management**:
  - Create new projects, set start and end dates, and optionally link a GitHub URL.
  - View and manage all projects within an organization.

- **Task Management**:
  - Create tasks and assign them to team members with priority and due dates.
  - Drag-and-drop functionality for tasks and subtasks to update their progress.
  - Filter tasks by team or individual assignments.

- **Subtask Management**:
  - Create subtasks under each task, assign members, and track progress using a drag-and-drop system.
  - Automatic progress updates based on subtask completion.

- **Kanban Board**: 
  - Visualize tasks across various stages such as “To Do,” “In Progress,” and “Completed.”
  - Track task progress with a percentage completion meter.

- **Team and Member Management**:
  - Create and manage teams within organizations.
  - Assign tasks and projects to team members.

- **Calendar View**: 
  - Visualize tasks and deadlines using a calendar.

- **Guided Tours**: 
  - Onboarding tooltips and tutorials to help users navigate the system.

- **Consistent Design**:
  - Standardized forms, buttons, and navigation for seamless interaction.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Version Control**: GitHub integration for project management.

## Installation

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/tidyy.git
   cd tidyy
   ```

2. Install dependencies (if applicable):
   ```bash
   npm install
   ```

3. Run the application (adjust the command based on your environment):
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. **Create an Organization**: After logging in, navigate to the "Organizations" tab and click "Create New Organization". Enter the organization name and click "Create".

2. **Create a Project**: In the "Projects" section, click "Create New Project". Provide the project details and submit.

3. **Assign Tasks and Subtasks**: In the task view, click "New Task" to add tasks. For each task, subtasks can be added and managed using drag-and-drop functionality.

4. **Monitor Progress**: View the Kanban board for an overview of all tasks, their statuses, and progress.

## Contribution

We welcome contributions from the community! Feel free to fork the repository, create a feature branch, and submit a pull request. Ensure to write descriptive commit messages and document any new features.

### Contribution Guidelines

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request, and describe what changes you've made.

## License

Tidyy is licensed under the MIT License.
