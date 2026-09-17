# 🚀 Intern Sprint Planner

Intern Sprint Planner is a responsive task management web application built using **HTML, CSS, and Vanilla JavaScript**.

The application helps interns or small teams create, manage, track, and organize sprint tasks. It provides task statistics, filtering, searching, workload information, and task management actions such as edit, delete, complete, and reopen.

---

## 📌 Project Overview

The purpose of this project is to practice JavaScript fundamentals by building a functional task management application without using frameworks, libraries, backend services, or databases.

The application stores tasks as JavaScript objects inside an array and dynamically updates the user interface using DOM manipulation.

---

## ✨ Features

### 📊 Dashboard

The dashboard displays:

- Total Tasks
- Pending Tasks
- Completed Tasks
- Total Estimated Hours

The dashboard automatically updates when tasks are:

- Added
- Edited
- Completed
- Reopened
- Deleted

---

### ➕ Add New Task

Users can create a new task by providing:

- Task Title
- Description
- Assignee
- Priority
- Category
- Estimated Hours
- Due Date

Each task is stored as a JavaScript object inside the tasks array.

---

### ✅ Task Validation

The application validates task information before creating a task.

Validation includes:

- Task title cannot be empty
- Assignee cannot be empty
- Estimated hours must be greater than 0
- Estimated hours must be a valid number
- Due date is required
- Due date cannot be in the past

Validation messages are displayed on the page.

---

### 📝 Task Management

Each task provides the following actions:

- **Mark Complete** – Changes a pending task to completed
- **Reopen** – Changes a completed task back to pending
- **Edit** – Allows updating task information
- **Delete** – Removes the selected task

---

### 🔍 Search

Users can search tasks by:

- Task Title
- Assignee
- Category

Search is case-insensitive.

Example:

Searching for:

`development`

will find tasks belonging to the Development category.

---

### 🔎 Task Filters

The application provides the following filters:

- All
- Pending
- Completed
- High Priority
- Overdue

The **Overdue** filter displays incomplete tasks whose due date has already passed.

---

### 👥 Workload Report

The Workload Report calculates the total estimated hours assigned to each person.

For example:

```text
Ankit   → 5 hours
Sam     → 4 hours
Jones   → 3 hours
Jabeer  → 6 hours
Saurav  → 5 hours

### 🌙 Light / Dark Mode

The application includes a theme toggle that allows users to switch between:

Light Mode
Dark Mode

The theme can be changed using the button in the header.


📱 Responsive Design

The application is designed to work on:

Desktop
Laptop
Tablet
Mobile devices

CSS media queries are used to adjust the layout for smaller screens.


🛠️ Technologies Used

This project was created using:

HTML5
CSS3
JavaScript
DOM Manipulation
Array Methods
JavaScript Objects

No external frameworks or libraries were used.


📂 Project Structure
intern-sprint-planner/
│
├── index.html
├── style.css
├── script.js
└── README.md

index.html

Contains the structure of the application, including:

Header
Dashboard
Task form
Search and filters
Task list
Workload report
Footer
style.css

Contains:

Page layout
Colors
Cards
Buttons
Forms
Responsive design
Light/Dark mode styling
Hover effects
script.js

Contains the application logic, including:

Task data
Adding tasks
Editing tasks
Deleting tasks
Completing/reopening tasks
Searching
Filtering
Dashboard calculations
Workload calculations
Theme switching