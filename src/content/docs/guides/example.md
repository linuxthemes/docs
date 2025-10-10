---
title: Install Themes
description: Install themes on your system.
---

Installing themes is easy. 
```sh
echo "
alias themes-install    ="git init $HOME; git remote add origin https://github.com/linuxthemes/base; git pull;"
alias themes-update     ="git pull"
alias themes-save       ="git update"
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

## Contribute

- Contribute to [Themes](https://diataxis.fr/how-to-guides/) !
