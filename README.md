# README

## install

```sh
pnpm i
edgedb project init --non-interactive
edgedb migration create
edgedb migration apply
npx edgedb
```

## clean

```sh
edgedb project unlink
rm -rf dbschema/edgedb dbschema/migrations
```