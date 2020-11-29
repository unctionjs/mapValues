import mapValuesWithValueKey from "@unction/mapvalueswithvaluekey";
import {MapperFunctionType} from "./types";

export default function mapValues<A, B> (mapper: MapperFunctionType<A, B>) {
  return function mapValuesUnction (enumerable: Array<A> | Set<A> | RecordType<unknown, A> | string): Array<B> | Set<B> | RecordType<B, unknown> | string {
    if (enumerable.map instanceof Function) {
      return enumerable.map((value: A) => mapper(value));
    }

    return mapValuesWithValueKey((value: A) => () => mapper(value))(enumerable);
  };
}
