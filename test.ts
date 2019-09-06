/* eslint-disable flowtype/require-variable-type, no-magic-numbers */
import { of } from "most";
import streamSatisfies from "@unction/streamsatisfies";

import mapValues from "./index";

test("String", () => {
  expect(mapValues(
    (value) => `a${value}`
  )(
    "abc"
  )).toBe("aaabac");
});

test("Set", () => {
  expect(mapValues(
    (value) => value + 1
  )(
    new Set([1, 2, 3])
  )).toEqual(new Set([2, 3, 4]));
});

test("Map", () => {
  expect(mapValues(
    (value) => value + 1
  )(
    new Map([[1, 1], [2, 2], [3, 3]])
  )).toEqual(new Map([[1, 2], [2, 3], [3, 4]]));
});


test("Array", () => {
  expect(mapValues(
    (value) => value + 1
  )(
    [1, 2, 3]
  )).toEqual([2, 3, 4]);
});

test("Object", () => {
  expect(mapValues(
    (value) => value + 1
  )(
    {
      age: 29,
      interval: 10,
    }

  )).toEqual({
    age: 30,
    interval: 11,
  });
});

test("Stream", done => {
  streamSatisfies(
    "30---|"
  )(
    (given) => (expected) => expect(given).toEqual(expected)
  )(
    doesNotThrow
  )(
    ({length}) => (size) => {
      expect(length).toBe(size);

      done();
    }
  )(
    mapValues(
      (value) => value + 1
    )(
      of(29)
    )
  );
});
