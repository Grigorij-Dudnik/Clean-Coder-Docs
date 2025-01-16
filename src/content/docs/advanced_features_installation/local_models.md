---
title: Run Clean Coder on local model
description: Run Clean Coder offline using local LLMs
---

Want privacy? Local LLMs are the answer.

## Getting started

You can run Clean Coder with local LLMs in two ways:

#### Using Ollama:

1. In your `.env` file, ensure there are no `ANTHROPIC_API_KEY`, `OPENAI_API_KEY` or `OPENROUTER_API_KEY`. If starting Clean Coder for the first time, skip the API key questions.
2. Add `OLLAMA_MODEL` variable with your local LLM name. Example: `OLLAMA_MODEL=quen2.5-coder:32b`

#### Using local server (as LM Studio):

1. Remove any external API keys from `.env` as mentioned above
2. Add `LOCAL_MODEL_API_BASE` with your server URL. For LM Studio: `LOCAL_MODEL_API_BASE=http://localhost:1234/api/v0`
3. Add `LOCAL_MODEL_NAME` with your model name. Example: `LOCAL_MODEL_NAME=phi-4`

Congratulations! Now you can enjoy autonomous code writing with full control and privacy.

<div style="background-color: #fefbb1; border-radius: 15px; padding: 25px; margin: 20px 0; color: #111111;">
<strong>🧠 Please keep in mind</strong>

Local models are still an experimental feature and might perform worse than top-tier commercial models.
</div>