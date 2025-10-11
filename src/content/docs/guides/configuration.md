---
title: Configure Themes
description: Configure themes on your system.
---

Linux themes creates a git repository in your home directory. 
All files are ignored by default on the `main` and `master` branches.
Only explicity selected files are tracked.
Themes are branchs of the `base` repository and state can easily and quickly be `checkout` to `themes-switch` or `themes-create` new themes.
Any changes you make to to your system, or other programs do, are tracked and can easily be reviewed to accept or regect changes.
To back up your theme in a personal repository, only the url needs to be changes and can be accomplished by using `themes-remote`, `git remote url-set origin `, or manually editiing the `.git/config` file.  


Base `.gitignore`
```sh
*
!.gitignore

!README.md
!CONTRIBUTING.md # https://github.com/linuxthemes/base

!.bashrc
!.themes
!.themes/**
!.icons
!.icons/**
!.config

!Pictures
!Pictures/*

!.config/eza
!.config/eza/*

!.config/rofi
!.config/rofi/*

!.config/fastfetch
!.config/fastfetch/*

!.config/ghostty
!.config/ghostty/*

!.config/Code
!.config/Code/User
!.config/Code/User/settings.json
!.config/Code/User/keybindings.json

!.config/gtk-3.0
!.config/gtk-3.0/*
!.config/gtk-4.0
!.config/gtk-4.0/*

!.config/konsolerc
!.config/ksplashrc
!.config/kdeglobals
!.config/kdedefaults
!.config/kdedefaults/*

!.config/xsettingsd
!.config/xsettingsd/xsettingsd.conf

```

Base `tree`

```sh
user1@computer1 ~$ tree -a
.
├── .bashrc
├── .config
├── .git
├── .gitignore
├── .icons
├── Pictures
├── README.md
└── .themes
6 directories, 3 files
```

Base `programs` list
```sh
fzf
eza
rofi
vim
nvim
micro
vscode
ghostty
firefox
github-desktop
ksystemlog
ksystemdgenie

kde
# gnome
# xfce4
# hyprland
```


## Contribute

- Contribute to the [Docs](https://github.com/linuxthemes/base) 
- Contribute to the [Base Themes](https://github.com/linuxthemes/docs) 
