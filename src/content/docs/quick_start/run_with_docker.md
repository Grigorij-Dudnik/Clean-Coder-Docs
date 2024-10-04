---
title: Run with Docker
description: Run Clean Coder inside of Docker Container.
---

You can run Clean Coder inside a Docker container as well!

## Installation


Clone repo:
```
git clone https://github.com/GregorD1A1/Clean-Coder-AI
```
```
cd Clean-Coder-AI
```
create file with envinronment variables from template:
```
cp .env.template .env

```

#### Set up Coding pipeline

1. Get your [OpenAI API key](https://help.openai.com/en/articles/4936850-where-do-i-find-my-openai-api-key).
2. Add it to your .env file: `OPENAI_API_KEY=your_api_key_here`.
3. Create a folder for your programming project if it doesn't exist yet.
4. Provide full path to your project dir in .env file: `WORK_DIR=/path/to/your/project/dir`.

Optional, but recommnded:

5. Get [Anthropic API key](https://www.merge.dev/blog/anthropic-api-key).
6. Add it to your .env file: `ANTHROPIC_PROJECT_ID=your_api_key_here`.

#### Run coding pipeline:

```
docker-compose run clean_coder_pipeline
```

#### Set up Project Manager

1. Get your [Todoist API key](https://todoist.com/help/articles/find-your-api-token-Jpzx9IIlB).
2. Add it to your .env file: `TODOIST_API_KEY=your_api_key_here`
3. Create a new Todoist project and copy its ID (found at the end of the project's URL).
4. Add it to your .env file: `TODOIST_PROJECT_ID=your_project_id_here`

![Todoist project ID](../../../assets/project_id.png)

Now it's time to write a description of your project. In the project directory, open .clean_coder/project_description.txt (start Clean Coder for a few seconds and then close to create the .clean_coder directory). Describe your project here and save.

<div style="background-color: #e6f4ea; border-radius: 15px; padding: 25px; margin: 20px 0;">
<strong>🔥 Tips for a Good Project Description:</strong>
<ul>
<li>Provide a clear vision for each feature</li>
<li>Specify if tests and docs should be included</li>
<li>Add any other relevant details that could help the AI understand your project better</li>
</ul>
</div>

#### Run Project Manager

```
docker-compose run project_manager
```

---
Happy coding! 😋
