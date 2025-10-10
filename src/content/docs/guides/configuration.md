---
title: Configure Themes
description: Configure themes on your system.
---

Root configuration file.
```sh
# base 
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

!.config/Code - OSS
!.config/Code - OSS/User
!.config/Code - OSS/User/settings.json
!.config/Code - OSS/User/keybindings.json

!.config/Thunar
!.config/Thunar/*

!.config/gtk-3.0
!.config/gtk-3.0/*
!.config/gtk-4.0
!.config/gtk-4.0/*



!.config/Trolltech.conf
!.config/konsolerc
!.config/ksplashrc
!.config/kdeglobals
!.config/kdedefaults
!.config/kdedefaults/*

!.config/xsettingsd
!.config/xsettingsd/xsettingsd.conf

```

Base file tree

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

Base programs list
```sh
fzf
eza
rofi
micro
vscode
ghostty
google-chrome
github-desktop
ksystemlog
ksystemdgenie
```


## Contribute

- Contribute to the [Docs](https://github.com/linuxthemes/base) 
- Contribute to the [Base Themes](https://github.com/linuxthemes/docs) 
