# README

## Steps

```sh
https://github.com/juanrgm/edgedb-ts-bug.git
cd edgedb-ts-bug
pnpm i
edgedb project init --non-interactive
edgedb migration create
edgedb migration apply
npx edgedb
code .
```

Go to this [line](https://github.com/juanrgm/edgedb-ts-bug/blob/main/src/index.ts#L8) in VSCode and...

![alt text](code.gif)
