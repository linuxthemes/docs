---
title: Install Themes
description: Install themes on your system.
---

Installing themes is easy. 
```sh
echo "
alias themes-install    ="git init $HOME; git remote add origin https://github.com/linuxthemes/base"
alias themes-update     ="git pull"
alias themes-switch     ="git checkout "
alias themes-create     ="git -b checkout "
alias themes-remote     ="git remote set-url "
" >> ./bashrc
```

```sh
themes-install
```

Or run the following command
```sh
git init $HOME; git remote add origin https://github.com/linuxthemes/base; git pull
```

This will create a git repository in your user home directory and sync the following file tree from the themes `base` repository.

Themes base keeps your current configuratin as default. All changes to the listed files in `.gitignore` are tracked, and can be reviewed before saving.

To switch themes
```sh
themes-switch 
```
Or 
```sh
git checkout 
```
Or create your own theme

```sh
git checkout -b 
```
Back up to your personal repository

```sh
themes-remote  
```
Or 
```sh
git remote set-url origin
```
## Contribute

- Contribute to the [Docs](https://github.com/linuxthemes/base) 
- Contribute to the [Base Themes](https://github.com/linuxthemes/docs) 
