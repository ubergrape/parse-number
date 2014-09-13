# parse-number

Parse out the first number in a string.

## Install

With [component(1)](https://github.com/component/component):

```bash
$ component install darsain/parse-number
```

## Usage

```js
parseNumber('1');        // 1
parseNumber('1.5');      // 1.5
parseNumber('-1.5');     // -1.5
parseNumber('fo 1 ba');  // 1
parseNumber('-5.22em');  // -5.22
parseNumber('as-1.5em'); // -1.5
parseNumber('5 or 10');  // 5
```

## API

### parseNumber(str)

Parses out the first number in a string.

- **str** `String` String to parse a number from.

##### *Returns*

First found number, `0` otherwise.

## License

MIT