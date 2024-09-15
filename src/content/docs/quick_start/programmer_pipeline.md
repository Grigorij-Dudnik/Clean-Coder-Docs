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
python clean_coder_pipeline.py
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

Your task will be executed by Clean Coder agents in sequence: Researcher, Planner, and then Executor.

#### Researcher Agent

Researcher examines files in the project directory and tries to identify necessary files to work on. It will take a minute.

Once complete, found files will be displayed. Accept them or provide feedback if you think Researcher missed some important files.

#### Planner Agent

Planner drafts the plan for code modifications. Review the proposed plan and request changes until it's satisfactory.

#### Executor Agent

This is where the actual magic happens. Executor implements the planned changes to your project files. You'll need to accept proposed changes for safety reasons. If you feel Executor wants to introduce a wrong change, you can interrupt by writing (or telling) your feedback.

When the job is done, Executor calls the "final_response" tool and asks you to check if the feature works. You can connect feedback from the log file to automate eventual bug corrections.

## Demo video

[![Demo video](https://img.youtube.com/vi/LLiABw4gY_w/maxresdefault.jpg)](https://youtu.be/LLiABw4gY_w "Demo video")


---
Happy coding! 😋
