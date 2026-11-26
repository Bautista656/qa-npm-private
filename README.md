# qa-npm-private

Example repository for an app that installs a private npm package:
`@bautista656/qa-private-greeting`, in GitHub Packages.

- `.npmrc` sends the `@bautista656` scope to GitHub Packages, with the token in
  `${NPM_TOKEN}`. The token is never in the repository: it is the app's build secret
  `NPM_TOKEN`, a token that can only read packages.
- An Express server: no build step, starts with `npm run start` (`node index.js`) on `PORT`.
- `/api/status` answers with the private package's greeting.
