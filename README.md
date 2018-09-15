## How to pull the source code from your server - For Leo

- Open terminal
- If you haven't done this yet, run this command first `chmod 400 dytro.pem`
- `ssh -i "dytro.pem" ec2-user@www.dytro.net`
- `cd server`
- `git pull origin master`
- `yarn stopserver`
- `yarn build`
- `yarn server`
- done!
