---
title: Install Themes
description: Install themes on your system.
---

Installing themes is easy. Run the following command to install.
```sh
source <(curl https://linuxthemes.org/install)
```

This will create a git repository in your user home directory and sync the following file tree from the themes `base` repository.

Themes base keeps your current configuratin as default. All changes to the listed files in `.gitignore` are tracked, and can be reviewed before saving.

No programs are installed, only configurations for the programs. 

Any tracked configurations will be applied when the program are installed and used.


To update themes
```sh
themes-update
```

To install all supported programs
```sh
themes-programs
```

To switch themes
```sh
themes-switch 
```

Or create your own theme
```sh
themes-create 
```

Back up to your personal repository with
```sh
themes-remote  
```

## Contribute

- Contribute to the [Docs](https://github.com/linuxthemes/base) 
- Contribute to the [Base Themes](https://github.com/linuxthemes/docs) 
