# charge-LND-control
NextJS web UI to edit the config of charge-lnd and control the cron scheduling

Designed to be used as an app with Umbrel

## To run locally

Set up a `.env` with: 
- `CRON_LOCATION`
- `CONFIG_LOCATION` (directory)
- `LOG_LOCATION`

I've been using a folder that will be used by this app and the `cron-watcher`

Start the app:
```
yarn install
yarn dev
```
