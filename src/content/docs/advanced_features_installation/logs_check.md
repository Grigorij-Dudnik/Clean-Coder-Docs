---
title: Self-correcting Bugs
description: Learn how to set up Clean Coder to automatically review and fix project logs.
---

Enable AI to correct its own mistakes by setting up an automatic feedback loop with your project logs. This feature is particularly useful for projects running in the background during code editing, such as backend or frontend servers.

With this setup, the Executor agent will automatically receive application logs after finishing making changes, allowing it to identify and instantly repair any bugs that may have appeared.

## Setup

1. Configure your project to write application logs to a file.
2. Add the log file path to your .env file:  `LOG_FILE=/path/to/log.file`

---
All done! Enjoy doing nothing while AI writes code for you and even corrects itself 😋 