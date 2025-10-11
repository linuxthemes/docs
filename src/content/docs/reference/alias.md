---
title: Aliases
description: Shell aliases
---

themes base
```sh
echo "
alias themes-install    ="git init $HOME; git remote add origin https://github.com/linuxthemes/base; git pull;"
alias themes-update     ="git pull"
alias themes-switch     ="git checkout "
alias themes-create     ="git -b checkout "
alias themes-remote     ="git remote set-url "
" >> ./bashrc
```

shell prompts
```sh
# CentOS or Fedora Prompt
# [ "$PS1" = "\\s-\\v\\\$ " ] && PS1="[\u@\h \W]\\$ "

# Debian Prompt
# PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w\$ '

# Gentoo Prompt
if [[ ${EUID} == 0 ]] ; then
    PS1='\[\033[01;31m\]\h\[\033[01;34m\] \W \$\[\033[00m\] '
else
    PS1='\[\033[01;32m\]\u@\h\[\033[01;34m\] \w \$\[\033[00m\] '
fi
```


package managers

apt
```sh
alias clean=""
alias update="" 
alias install=""
alias remove=""
alias listall=""
```


nala
```sh
alias clean=""
alias update="" 
alias install=""
alias remove=""
alias listall=""
```


emerge
```sh
alias clean=""
alias update="" 
alias install=""
alias remove=""
alias listall=""
```


pacman
```sh
alias clean=""
alias update="" 
alias install=""
alias remove=""
alias listall=""
```


rpm
```sh
alias clean=""
alias update="" 
alias install=""
alias remove=""
alias listall=""
```


dnf
```sh
alias clean=""
alias update="" 
alias install=""
alias remove=""
alias listall=""
```


xdg portals
```sh
alias testportal="/usr/libexec/xdg-desktop-portal -vr"
alias testportal-gtk="/usr/libexec/xdg-desktop-portal-gtk -vr"
alias testportal-gnome="/usr/libexec/xdg-desktop-portal-gnome -vr"
alias testportal-kde="/usr/libexec/xdg-desktop-portal-kde -vr"
alias testportal-xapp="/usr/libexec/xdg-desktop-portal-xapp -vr"
```

fzf
```sh
alias fzfa='fzf --style full \
    --border --padding 1,2 \
    --border-label " Demo " --input-label " Input " --header-label " File Type " \
    --preview "fzf-preview.sh {}" \
    --bind "result:transform-list-label: if [[ -z \$FZF_QUERY ]]; then echo \" \$FZF_MATCH_COUNT items \"; else echo \" \$FZF_MATCH_COUNT matches for [\$FZF_QUERY] \"; fi" \
    --bind "focus:transform-preview-label:[[ -n {} ]] && printf \" Previewing [%s] \" {}" \
    --bind "focus:+transform-header:file --brief {} || echo \"No file selected\"" \
    --bind "ctrl-r:change-list-label( Reloading the list )+reload(sleep 2; git ls-files)" \
    --color "border:#aaaaaa,label:#cccccc" \
    --color "preview-border:#9999cc,preview-label:#ccccff" \
    --color "list-border:#669966,list-label:#99cc99" \
    --color "input-border:#996666,input-label:#ffcccc" \
    --color "header-border:#6699cc,header-label:#99ccff"'
```



## Contribute

- Contribute to the [Docs](https://github.com/linuxthemes/base) 
- Contribute to the [Base Themes](https://github.com/linuxthemes/docs) 
