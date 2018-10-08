## How to run test environment from localhost

- Open terminal
- `cd` to dytro folder
- `yarn start`
- Open a new tab in your terminal
- `cd` to dytro folder
- `yarn api-start`

## How to pull the source code from your server

- Open terminal
- If you haven't done this yet, run this command first `chmod 400 dytro.pem`
- `ssh -i "dytro.pem" ec2-user@www.dytro.net`
- `cd server`
- `git pull origin master`
- `yarn stop-server`
- `yarn build`
- `yarn start-server`
- `yarn stop-api-server`
- `yarn start-api-server`
- done!
