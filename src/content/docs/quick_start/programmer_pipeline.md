---
title: AI Coder
description: Install basic Clean Coder feature and start coding with it.
---

Basic Clean Coder functionality - the ability to implement a task into your project. Tasks can be anything from creating a new page to fixing a bug or implementing a logic feature. Relax and watch AI code for you!

## Installation

```
# clone repo
git clone https://github.com/GregorD1A1/Clean-Coder-AI

# go to directory
cd Clean-Coder-AI

# create file with envinronment variables from template
cp .env.template .env

# create virtual environment and activate
python -m venv venv
source venv/bin/activate

# install dependencies
pip install -r requirements.txt
```

## Minimal set up

1. Get your [OpenAI API key](https://help.openai.com/en/articles/4936850-where-do-i-find-my-openai-api-key).
2. Add it to your .env file: `OPENAI_API_KEY=your_api_key_here`.
3. Get [Anthropic API key](https://www.merge.dev/blog/anthropic-api-key).
4. Add it to your .env file: `ANTHROPIC_PROJECT_ID=your_api_key_here`.
5. Create a folder for your programming project if it doesn't exist yet.
6. Provide full path to your project dir in .env file: `WORK_DIR=/path/to/your/project/dir`.

## Run coding pipeline:

```
python single_task_coder.py
```

## Working process

You will be prompted to describe task Clean Coder need to execute. Write the description or enable listening and just say it.

<div style="background-color: #e6f4ea; border-radius: 15px; padding: 25px; margin: 20px 0;">
<strong>🔥 Tips for a Good Task Description:</strong>
The same rules for creating good tasks for human programmers apply here.
<ul>
<li>Describe your task as detailed as you can.</li>
<li>Focus on one feature per task. Break complex features into smaller, manageable tasks.</li>
</ul>
</div>

Your task will be executed by Clean Coder agents in sequence: Researcher, Planner, Executor, and Debugger.


![Agents_pipeline_illustration](../../../assets/Clean_Coder_diagram.png)

#### Researcher Agent

Researcher examines files in the project directory and tries to identify necessary files to work on. It will take a minute.

Once complete, found files will be displayed. Accept them or provide feedback if you think Researcher missed some important files.

#### Planner Agent

Planner drafts code modification plans. Review and request changes until the plan is satisfactory. Don't accept plans you don't understand - debugging will be painful without understanding your code.

#### Executor Agent

Executor implements planned changes to your project files. Being based on a fast model, it completes work relatively quickly.

#### Debugger agent

If the Executor's changes don't fully solve the task, you'll need the Debugger - a more powerful and intelligent agent that can access logs and visual feedback. Use it to polish code after the Executor's work.

For safety, you must approve all changes. Interrupt if you see wrong changes being made. Don't accept changes you don't understand - again, debugging will be painful. Keep your IDE open to monitor code modifications in real-time.

## Demo video

[![Demo video](https://img.youtube.com/vi/LLiABw4gY_w/maxresdefault.jpg)](https://youtu.be/LLiABw4gY_w "Demo video")


---
Happy coding! 😋
