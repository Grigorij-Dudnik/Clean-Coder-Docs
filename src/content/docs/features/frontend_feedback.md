---
title: Let Clean Coder See Your Frontend
description: Frontend Feedback - allow Clean Coder to see your frontend
---

Ever tried to write a frontend app without looking at the monitor? Don't make AI do that then. Let's allow agents to see how your frontend looks by automatically providing screenshots of it.

## Prerequisites

You need to have your frontend app running on localhost. 

## Activation

#### Provide local frontend url 
To enable frontend feedback, provide the url under which your app is running locally in questionnaire during project initialization. Or, provide `FRONTEND_URL=` variable to `.env` file with value of that url. Your url will probably look like `http://localhost:3000` or `http://myapp.test`.

#### Edit `frontend_feedback_story.txt`
Feedback story file is needed to provide your Frontend Feedback agent with context; for example, explain how to log in to your app.

During initial questionnaire you'll be asked to edit `frontend_feedback_story.txt` file based on provided template. Feel free to remove or change anything in it. Just provide to your agent enough info to make him login into your app.

## How it works

When designing new frontend elements, frontend feedback agent writes playwright code allowing to open it and make screenshots. Screenshots are made when Debugger agent starts its work and every time it wants to finish it. Screenshots are provided to the context of debugger agent.