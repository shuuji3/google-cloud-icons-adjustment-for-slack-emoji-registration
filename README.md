# google-cloud-icons-adjustment-for-slack-emoji-registration
A zx script simply normalizing names of Google Cloud icon deck and moving them to one place for the registration as Slack (or other chat application) emoji.

## Usage

```shell
yarn install
yarn start
```

This will do the following:
- Download the latest icons zip file from https://cloud.google.com/icons/.
- Extract only png files and put them in one place.
- Rename them by putting the prefix (`google-cloud`) and replacing `_` with `-` (like `cloud_run.png` -> `google-cloud-clound-run.png`).
- That's it!

## Development

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/shuuji3/google-cloud-icons-adjustment-for-slack-emoji-registration)
