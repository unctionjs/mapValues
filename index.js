import mapValuesWithValueKey from "@unction/mapvalueswithvaluekey";
export default function mapValues (unction) {
  return function mapValuesUnction (functor) {
    if (functor.map instanceof Function) {
      return functor.map((value) => unction(value));
    }

    return mapValuesWithValueKey((value) => () => unction(value))(functor);
  };
}
