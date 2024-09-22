<h1 align="center">Welcome to saga pattern demo 👋</h1>

> Saga pattern demo with Temporal

[![IT Man - Simplifying the Saga Pattern: A Easy Guide](https://i.ytimg.com/vi/V3dBUizAo3w/hqdefault.jpg)](https://www.youtube.com/watch?v=V3dBUizAo3w)

## Pre-requisites

- [Temporal CLI](https://temporal.io)
- [Bun](https://bun.sh) or [Node.js](https://nodejs.org/en/download/)

## Install

```sh
bun install
```

## Usage

```sh
bun run dev
```

## Saga Pattern

![Saga Pattern](https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7ead610b-d0c7-41a6-aa16-4ad86534f65f_1503x1600.png)

## Development

### To begin development, install the Temporal CLI:

Mac: `brew install temporal`
Other: Download and extract the latest release from https://github.com/temporalio/cli/releases/latest

### Start Temporal Server:

```
temporal server start:dev
```

### Start the Temporal Web UI:

Open browser to http://localhost:8233 to see the Temporal Web UI.

## Then, in the project directory, using two other shells, run these commands:

```sh
bun run start:worker
bun run start:workflow
```

[![Demo](https://i.gyazo.com/bba64c9034d3187d366160537e8501f7.gif)](https://gyazo.com/bba64c9034d3187d366160537e8501f7)

[Here is an example output with `bun run dev`.](https://app.warp.dev/block/wjvnUWFaLj41XulMLsH2J7)

More detail on [saga](./saga.md).

## Resources

- [Saga pattern made easy](https://pages.temporal.io/rs/250-WIU-007/images/tech-guide-saga-pattern-made-easy.pdf)
- [Saga pattern - Azure Design Patterns | Microsoft Learn](https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/saga/saga)
- [Pattern: Saga](https://microservices.io/patterns/data/saga.html)
- [The Saga Pattern - ByteByteGo Newsletter](https://blog.bytebytego.com/p/the-saga-pattern)

## Author

👤 **Dung Huynh**

- Website: https://productsway.com/
- Twitter: [@jellydn](https://twitter.com/jellydn)
- Github: [@jellydn](https://github.com/jellydn)

## Show your support

Give a ⭐️ if this project helped you!

[![kofi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/dunghd)
[![paypal](https://img.shields.io/badge/PayPal-00457C?style=for-the-badge&logo=paypal&logoColor=white)](https://paypal.me/dunghd)
[![buymeacoffee](https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/dunghd)
