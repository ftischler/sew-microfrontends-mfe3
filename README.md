# sew-microfrontends-mfe3

Micro frontend for [sew-microfrontends](https://github.com/ftischler/sew-microfrontends),
deliberately on a different Angular major (21) than the shell (22).

It ships its own Angular runtime and shares nothing with the host. Native Federation
exposes it as a web component, so the shell only depends on the contract below.

## Contract

Exposed module: `./web-component` from `http://<host>/remoteEntry.json`

```ts
registerMfe3Element(): Promise<void>; // defines <sew-mfe3>, safe to call more than once
```

Element `<sew-mfe3>`:

| Kind     | Name            | Type     | Meaning                                       |
| -------- | --------------- | -------- | --------------------------------------------- |
| property | `path`          | `string` | Sub path below the host route, e.g. `details` |
| event    | `mfe3-navigate` | `string` | Requested sub path; the host updates the URL  |

The host owns the URL. The element never navigates itself; it renders `path` and asks
the host to navigate.

Rendering is zoneless and styles are isolated with Shadow DOM.

## Development

```sh
pnpm install
pnpm start   # http://localhost:4203, standalone
pnpm test
pnpm build
```
