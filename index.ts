import mapValuesWithValueKey from "@unction/mapvalueswithvaluekey";
import {MapperFunctionType} from "./types";
import {EnumerableType} from "./types";

export default function mapValues<A, B> (mapper: MapperFunctionType<A, B>) {
  return function mapValuesUnction (enumerable: EnumerableType<A>): EnumerableType<B> {
    if (enumerable.map instanceof Function) {
      return enumerable.map((value: A) => mapper(value));
    }

    return mapValuesWithValueKey((value: A) => () => mapper(value))(enumerable);
  };
}
