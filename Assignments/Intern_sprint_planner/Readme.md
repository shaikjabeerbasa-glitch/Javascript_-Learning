# Intern Sprint Planner

Intern Sprint Planner is a responsive task management dashboard built using HTML, CSS, and Vanilla JavaScript.

The application allows interns or small teams to create, manage, search, filter, and track sprint tasks while viewing task statistics and workload information for each assignee.

## 🚀 Features

### 1. Dashboard Summary

The dashboard displays:

- Total Tasks
- Pending Tasks
- Completed Tasks
- Total Estimated Hours

These values are calculated dynamically from the JavaScript task array and update when tasks are added, edited, completed, reopened, or deleted.

### 2. Add New Task

Users can create a new task with:

- Task Title
- Description
- Assignee
- Priority
- Category
- Estimated Hours
- Due Date

### 3. Task Validation

The application validates task input before creating a task.

Validation includes:

- Task title cannot be empty
- Assignee cannot be empty
- Estimated hours must be a valid number
- Estimated hours must be greater than zero
- Due date is required
- Due date cannot be in the past

### 4. Dynamic Task List

Tasks are stored in a JavaScript array and displayed dynamically using DOM manipulation.

Each task displays:

- Title
- Description
- Assignee
- Priority
- Category
- Estimated Hours
- Due Date
- Current Status

Task cards are created using `document.createElement()`.

### 5. Task Actions

Each task provides the following actions:

- Mark Complete
- Reopen
- Edit
- Delete

Editing allows the user to update:

- Task Title
- Priority
- Estimated Hours
- Due Date

### 6. Task Filters

Tasks can be filtered using:

- All
- Pending
- Completed
- High Priority
- Overdue

The Overdue filter displays incomplete tasks whose due date has already passed.

### 7. Search

Users can search tasks by:

- Title
- Assignee
- Category

Search is case-insensitive.

A message is displayed when no matching tasks are found.

### 8. Workload Report

The Workload Report calculates the total estimated hours assigned to each person.

For example:

- Ankit - 5 hours
- Sam - 4 hours
- Jones - 3 hours
- Jabeer - 6 hours
- Saurav - 5 hours

The report is generated dynamically from the task array.

### 9. Light and Dark Mode

The application includes a theme toggle that allows users to switch between:

- Light Mode
- Dark Mode

The theme is changed using JavaScript by adding and removing a CSS class from the body.

### 10. Responsive Design

The application is designed to work on:

- Desktop
- Tablet
- Mobile

CSS media queries are used to adjust the layout for smaller screen sizes.

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- DOM Manipulation

No frameworks or external JavaScript libraries are used.

---

## 📚 JavaScript Concepts Used

This project was built using JavaScript concepts covered during the learning process.

### Arrays

Tasks are stored in an array:

```javascript
let tasks = [];