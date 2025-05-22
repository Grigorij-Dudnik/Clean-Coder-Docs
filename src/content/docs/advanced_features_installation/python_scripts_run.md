---
title: Running Pythin Scripts
description: Make Clean Coder run scripts he created for self-debug.
---

Make Clean Coder find all errors in the scripts he creates on the fly by running them!

# Set up

Add `EXECUTE_FILE_NAME=` variable to your `.env` file with name of the script to run (probably the main script of your application). If that script is not located in the main directory of yur project, provide the path related to `WORK_DIR`.

# Usage

Every time Executor or Researcher agents say their job is done, they'll automatically run the script and see the logs. If there are any mistakes, they'll repair them autonomously.

