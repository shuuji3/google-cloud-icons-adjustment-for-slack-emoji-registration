# google-cloud-icons-adjustment-for-slack-emoji-registration
A zx script simply normalizing names of Google Cloud icon deck and moving them to one place for the registration as Slack (or other chat application) emoji.

## Usage

[Fauntleroy/neutral-face-emoji-tools](https://github.com/Fauntleroy/neutral-face-emoji-tools) is very helpful to register many emoji to Slack quickly.

### With zx without yarn

After installing [`zx`](https://github.com/google/zx) command,

```shell
zx main.mjs
```

### With yarn

```shell
yarn install
yarn start
```

## What this script does

- Download the latest icons zip file from https://cloud.google.com/icons/.
- Extract only png files and put them in one place at `emoji/` directory.
- Rename them by putting the prefix (`google-cloud-`) and replacing `_` with `-` (like `cloud_run.png` -> `google-cloud-clound-run.png`).
- That's it!

## Development

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/shuuji3/google-cloud-icons-adjustment-for-slack-emoji-registration)
