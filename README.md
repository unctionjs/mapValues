# @unction/mapValues

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

``` typescript
MapperFunctionType<A, B> => Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string => Array<B> | Set<B> | Record<string | number | symbol, unknown> | Map<B, unknown> | string
```

A pretty standard `mapValues()`, but with enforced unary currying.

``` javascript
mapValues(
  (value) => value + 1
)(
  [1, 2, 3]
)
```

Which will return:

``` javascript
[2, 3, 4]
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/mapValues.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/mapValues.svg?maxAge=2592000&style=flat-square
