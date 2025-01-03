---
title: Provide AI with project context
description: Provide AI with info what your project is about, how does files are organized here.
---

The more AI knows about your project, the faster it will do tasks. Tell Clean Coder about rules of how to write code in your project and remove layer of misunderstanding from human-AI relation.

## What it does?

`.coderrules` content will be included to the prompts of your coding agents to prevent common mistakes and provide them with project coding practices.

## Set up `.coderrules` file

During project setup, describe how your project is organized, file/folder responsibilities, and coding practices to use or avoid.

<div style="background-color: #e6f4ea; border-radius: 15px; padding: 25px; margin: 20px 0;">
<strong>🤔 Did you known?</strong>

If you have project documentation describing rules of you project, you can paste it into `.coderignore`. Both text and markdown acceptable.
</div>

If you used earlier Cursor as your AI coder, and decided to switch to a better one, you can just rename `.cursorrules` file to `.coderrules`.

## Example of `.coderrules`

Here's a sample from one of my projects:
```
TakZyli.pl is a platform for memorizing best moments in the lives of our passed away relatives.
TakŻyli allows user to create beautiful-looking memorial profiles containing photos 
and descriptions showing life stories.

Frontend: NextJS + Tailwind
- Use last version of NextJS (13+) syntax
- File-based routing required
- Common styles in app/styles/
- UI components in uiElements.tsx
- Backend requests via NEXT_PUBLIC_API_URL env variable
```

Let's go through it. First paragraph provides AI with general context of the application, allowing it to understand what it's creating.

Next paragraph address common issues I noticed. For example, I had to specify using only file-based routing in NextJS (not the old way) to keep consistency. I also point Clean Coder to where common UI elements live to prevent duplication, and how to properly handle backend requests.

This is a basic example - you'll likely expand yours as you notice where AI needs more guidance. Just keep an eye on where it makes mistakes and add clarifications!
