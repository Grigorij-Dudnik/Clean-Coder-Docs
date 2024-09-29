---
title: Protect Sensitive Files
description: Prevent AI from accessing files and folders containing API keys or other sensitive information.
---

Sometimes we don't want AI to be able to see certain files or directories that contain API keys or other sensitive information. This is where the file protection feature of Clean Coder becomes handy.


## How to use

1. Locate the `.coderignore` file in the `.clean_coder` directory (created after the first launch of the application).
2. Add files and folders you want to protect using the `.gitignore` format. By default, the `.env` file and `.clean_coder` folder are already protected.


## Example
Your .coderignore file might look like this:

```
# Default protected files
.env
.clean_coder/

# Additional sensitive files or directories
secrets/
config.json
api_keys.txt
```

Once configured, Clean Coder agents will not be able to access or view the specified files and folders, even if they attempt to do so.


---
Enjoy your enhanced privacy! 😊


