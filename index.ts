import mapValuesWithValueKey from "@unction/mapvalueswithvaluekey";
import type {MapperFunctionType} from "./types";

export default function mapValues<A, B, C> (mapper: MapperFunctionType<B, C>) {
  return function mapValuesUnction (enumerable: A<B>): A<C> {
    if (enumerable.map instanceof Function) {
      return enumerable.map((value: B): C => mapper(value));
    }

    return mapValuesWithValueKey((value: B) => (): C => mapper(value))(enumerable);
  };
}
