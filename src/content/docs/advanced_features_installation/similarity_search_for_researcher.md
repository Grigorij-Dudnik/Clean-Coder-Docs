---
title: Similarity search tool for Researcher
description: Enable similarity search (RAG) tool n arsenal of the researcher agnt to boost his performance.
---

Want to have the Researcher agent find needed files even better? Provide it with a Semantic Search (RAG) tool!

This tool allows the agent to search files by text query (similar to how you find articles in Google), which is compared with file descriptions.


## Set up

1. Create a vector database with descriptions of your project files by running:

`python rag/write_descriptions.py`


2. Get [api key for Cohere](https://docs.aicontentlabs.com/articles/cohere-api-key/)

3. Add it to your .env file: `COHERE_API_KEY=your_api_key_here`


That's all! Now your Researcher agent is equipped in additional tool and will be able to navigate big project better.