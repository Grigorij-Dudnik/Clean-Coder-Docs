---
title: Manager Agent
description: Guide how to set up Project Manager (or Scrum Master) agent.
---

The Project Manager agent in Clean Coder automates task management using Todoist integration. It defines tasks, ensures execution, and handles testing based on project specifications. There is no need to run coding pipeline manually for every task any more!

## Set up

1. Get your [Todoist API key](https://todoist.com/help/articles/find-your-api-token-Jpzx9IIlB).
2. Add it to your .env file: `TODOIST_API_KEY=your_api_key_here`
3. Create a new Todoist project and copy its ID (found at the end of the project's URL).
4. Add it to your .env file: `TODOIST_PROJECT_ID=your_project_id_here`

![Todoist project ID](../../../assets/project_id.png)


## Describe your project

Now it's time to write a description of your project. In the project directory open .clean_coder/project_description.txt (.clean_doder catalog with all needed files inside will be created automatically after first run of application). Describe your project here and save.

<div style="background-color: #e6f4ea; border-radius: 15px; padding: 25px; margin: 20px 0;">
<strong>🔥 Tips for a Good Project Description:</strong>
<ul>
<li>Provide a clear vision for each feature</li>
<li>Specify if tests and docs should be included</li>
<li>Add any other relevant details that could help the AI understand your project better</li>
</ul>
</div>

## Run Manager

In your virtual environment, run:
```
python project_manager.py
```

## Working with Manager

The Manager will create well-described tasks, including the Definition of Done, in your Todoist. For safety, you'll need to approve every task creation, modification, and deletion.

Once the Manager created complete list tasks for your project, it use the 'finish_project_planning' tool. First task from top will enter the programming pipeline.

You will collaborate with the Researcher, Planner, and Executor agents on that task. Completed task will be marked as done in Todoist, and you will'be asked to provide feedback to the Manager if task been executed good or needed improvements.

This process executes tasks one after another until the project is complete.

---
Happy coding! 😋
