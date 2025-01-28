---
title: Quick Start
description: Install basic Clean Coder features and start coding with it.
---

Start your journey with Clean Coder with a few simple commands!

## Installation

Clone repo:

```
git clone https://github.com/GregorD1A1/Clean-Coder-AI
```
Go to directory:
```
cd Clean-Coder-AI
```
Create virtual environment and activate:

*Linux/Mac:*
```
python3 -m venv venv
source venv/bin/activate
```
*Windows:*
```
python -m venv venv
venv\Scripts\activate
```
Install dependencies:
```
pip install -r requirements.txt
```

## Run:

To run Clean Coder use:
```
python manager.py
```

Optionally, if you want to create a single feature inside your project instead of planning the whole project, run:
```
python single_task_coder.py
```

### First-Time Setup

When running Single Task Coder for the first time, it will prompt you to input a few variables, which are saved in the `.env` file.

1. **API Keys**: Provide at least one API key for [Anthropic](https://www.merge.dev/blog/anthropic-api-key), [OpenAI](https://help.openai.com/en/articles/4936850-where-do-i-find-my-openai-api-key), or OpenRouter. Adding more keys ensures fallback options during LLM shortages.

2. **Directory Path**: Enter the full path to the directory where you want to write or modify code.

3. **Todoist API Key**: Provide your [Todoist API key](https://todoist.com/help/articles/find-your-api-token-Jpzx9IIlB).

4. **Coding Rules (Optional)**: Optionally, provide coding rules for your project and describe what your project is about. Learn more [here](/features/coderrules).

5. **Describe Your Vision**: On the first run, Manager will prompt you to describe your project in detail. Include as much information as possible.

<div style="background-color: #e6f4ea; border-radius: 15px; padding: 25px; margin: 20px 0; color: #111111;">
<strong>🔥 Tips for a Good Project Description:</strong>
<ul>
<li>Provide a clear vision for each future feature</li>
<li>Write how the application should look when ready</li>
<li>Specify if tests and docs should be included</li>
</ul>
</div>
You can update the project vision anytime by editing the `.clean_coder/project_plan.txt` file in your project directory.

The basic setup is done! Go ahead and learn how to use [Manager](/usage/manager) or [Single Task](/usage/single_task_coder) functionalities.

---
Happy coding! 😋
