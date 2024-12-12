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

#### Run coding pipeline:

```
docker-compose run single_task_coder
```

#### Run Project Manager

```
docker-compose run manager
```

---

<div style="background-color: #fefbb1; border-radius: 15px; padding: 25px; margin: 20px 0;">
<strong>🎙️ How to use microphone feature inside of Docker:</strong>
<br>
By default, the microphone feature is not available in Docker containers due to hardware limitations. To enable it, configure your audio input device in the docker-compose.yml file. Uncomment the device section and provide the correct path to your microphone. The default path provided is for Linux; other systems require different paths.
</div>
---
Happy coding! 😋
