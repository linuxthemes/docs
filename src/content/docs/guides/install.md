---
title: Install Themes
description: Install themes on your system.
---

Installing themes is easy. Run the following command to install.
```sh
source <(curl https://linuxthemes.org/install)
```

This will create a git repository in your user home directory and sync the following file tree from the themes `base` repository.

Themes will sync and commit your current state to either `:main` or `:master` branches, whichever is listed in your global git configuration. Your current configuration state will be saved on this branch. You can revert back to your previous state at any time. 

The `Base` theme contains the configurations for all of the `Themes` branches. Each branch is a theme and `Base` contains each theme. This branch will constantly change in state as the `Themes` Organization administrator uses it. For now it is considered a development branch, while other `Themes` will remain static and branded. 

No programs are installed, only configurations for the programs. 
Any tracked configurations will be applied when the program are installed and used.

Programs can optionally be installed with the following command.

```sh
themes-programs
```

To update themes
```sh
themes-update
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

Since `Themes` uses git. You can also use any git command to update and edit your local repository.

# Notes
Themes relies on git. This provides many benefits compared to other solutions.
- Free file compression, when downloading and for files not in use.
- The ability to select specific files and folders with a single file.
- The ability to execute hooks on checkout.
- The ability to instantly configure any user, including root.
- The ability to track any changes in configuration state - security configurations coming in the future, please contribute.
- Handful of required commands are easily wrapped in .bashrc with out conflicts.
- git is required a dependency on every system, nothing is installed besides configurations.
- Many different gui solutions to view file information, a custom solution may be created in the future.
- For those concerned about memory and disk usage, can clone off the specific branch they want for a minimal install.

Negatives
- git history disk usage. This could be a non issue and likely is. There is a solution if the size beomes unsatisfactory.
- Likely a user will lose track of files or have trouble moving them to another branch. Can be solved within the command solutions

## Contribute

- Contribute to the [Docs](https://github.com/linuxthemes/base) 
- Contribute to the [Base Themes](https://github.com/linuxthemes/docs) 
