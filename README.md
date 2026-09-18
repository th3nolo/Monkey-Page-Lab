# Monkey Page Lab

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment and storage credentials

The historical mint page (`pages/mint-page-data/[tokenId].jsx`) uses
`NEXT_PUBLIC_WEB3_TOKEN` to create a Web3.Storage client in the browser and upload
a PNG with `client.put`. Next.js exposes `NEXT_PUBLIC_` values in browser bundles.
The prefix does not make a credential safe to publish.

`.env.example` records the variable with a blank value. Local `.env` files are
ignored. Leave the value blank when inspecting this project; storage uploads
require a separate credential design before the app is used again. Do not put a
shared account token in this variable or deploy a build containing one.

The legacy provider documents these tokens as account credentials, not public
application identifiers. Its [browser example](https://old.web3.storage/docs/examples/image-gallery/#token-management)
uses each visitor's own token or recommends a backend proxy. Before restoring
uploads, use an authenticated backend with server-only credentials and upload
limits, or a reviewed per-user authorization flow. This hygiene change preserves
the historical upload code; it does not implement that replacement.

The previously tracked value has a JWT structure, but its validity, current
account permissions, and provider-side restrictions have not been verified.
Removing `.env` from the current tree does not remove it from Git history or
previous browser bundles. The account owner should check its status and revoke
it if it remains active, following the [legacy token guidance](https://old.web3.storage/docs/how-tos/generate-api-token/).
No credential rotation or history rewrite is included here.
