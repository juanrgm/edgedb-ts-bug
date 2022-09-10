# README

## install

```sh
git clone git@github.com:juanrgm/edgedb-ts-bug.git
cd edgedb-ts-bug
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