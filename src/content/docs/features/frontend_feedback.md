---
title: Let Clean Coder See Your Frontend
description: Frontend Feedback - allow Clean Coder to see your frontend
---

Ever tried to write a frontend app without looking at the monitor? Don't make AI do that then. Let's allow agents to see how your frontend looks by automatically providing screenshots of it.

## Prerequisites

You need to have your frontend app running on localhost. 

## Activation

To enable frontend feedback, provide the port on which your app is running during initial questionnaire during project initialization. Or, provide `FRONTEND_PORT=` variable to `.env` file with value of that port.

## How it works

When designing new frontend elements, frontend feedback agent writes playwright code allowing to open it and make screenshots. Screenshots are made when debugger agent starts its work and every time it wants to finish it. Screenshots are provided to the context of debugger agent.