#!/bin/sh
cd $HOME/github/Discord-MamaSlimes/
git fetch
git pull
npm i
npm run start &
disown -h
exit

# rm -rf *
# git reset --hard
# chmod +x $HOME/github/Discord-MamaSlimes/config/startup_script.sh
# sh $HOME/github/Discord-MamaSlimes/config/startup_script.sh
# crontab -u pi -e
# @reboot sh $HOME/github/Discord-MamaSlimes/config/startup_script.sh
# exit