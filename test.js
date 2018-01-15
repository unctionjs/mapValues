/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, flowtype/require-variable-type, no-magic-numbers */
import {test} from "tap"
import {of} from "most"
import streamSatisfies from "@unction/streamsatisfies"

import mapValues from "./index"

test("String", ({equal, end}) => {
  equal(
    mapValues(
      (value) => `a${value}`
    )(
      "abc"
    ),
    "aaabac"
  )

  end()
})

test("Set", ({same, end}) => {
  same(
    mapValues(
      (value) => value + 1
    )(
      new Set([1, 2, 3])
    ),
    new Set([2, 3, 4])
  )

  end()
})

test("Map", ({same, end}) => {
  same(
    mapValues(
      (value) => value + 1
    )(
      new Map([[1, 1], [2, 2], [3, 3]])
    ),
    new Map([[1, 2], [2, 3], [3, 4]])
  )

  end()
})


test("Array", ({same, end}) => {
  same(
    mapValues(
      (value) => value + 1
    )(
      [1, 2, 3]
    ),
    [2, 3, 4]
  )

  end()
})

test("Object", ({same, end}) => {
  same(
    mapValues(
      (value) => value + 1
    )(
      {
        age: 29,
        interval: 10,
      }

    ),
    {
      age: 30,
      interval: 11,
    }
  )

  end()
})

test("Stream", ({same, doesNotThrow, equal, end}) => {
  streamSatisfies(
    "30---|"
  )(
    (given) => (expected) => same(given, expected)
  )(
    doesNotThrow
  )(
    ({length}) => (size) => {
      equal(length, size)

      end()
    }
  )(
    mapValues(
      (value) => value + 1
    )(
      of(29)
    )
  )
})
