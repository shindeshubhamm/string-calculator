# string-calculator

This is a simple CLI based string calculator that demonstrates test driven development (TDD).

## Install dependencies

This project uses `pnpm` as its package manager.

```bash
pnpm install
```

## Run tests

```bash
pnpm test
```

## Build and run the program

```bash
pnpm build
pnpm start
```

To enter new line characters, press `Enter`. Multiline input is supported. When done entering input, press `Ctrl+D` on a new line.

To use a custom delimiter, start the input with `//` followed by the delimiter and a new line. For example:

```
//;\n1;2
```

This will use `;` as the delimiter.
When using a custom delimiter, the default delimiters `,` and `\n` are still supported.
