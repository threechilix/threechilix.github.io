#!/usr/bin/env bash

export LC_TIME=en_US.UTF-8

MESSAGE="Site updated $(date)"

msg() {
    printf "\033[1;32m :: %s\n\033[0m" "$1"
}

msg "Building the website"
hugo

msg "Pushing the updated \`origin\` folder to the \`$SOURCE\` branch"
git add --all
git commit -m "$MESSAGE"
git push
hugo server --watch --buildDrafts
