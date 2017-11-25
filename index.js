import mapValuesWithValueKey from "@unction/mapvalueswithvaluekey"

export default function mapValues (unction: MapFunctionType): UnaryFunctionType {
  return function mapValuesUnction (functor: FunctorType): FunctorType {
    if (functor.map instanceof Function) {
      return functor.map((value: ValueType): ValueType => unction(value))
    }

    return mapValuesWithValueKey((value: ValueType): UnaryFunctionType => (): ValueType => unction(value))(functor)
  }
}
