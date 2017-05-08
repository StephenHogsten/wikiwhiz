export const EXAMPLE_ACTION = 'EXAMPLE_ACTION'

export function exampleAction(value) {
  return {
    type: EXAMPLE_ACTION,
    value: value
  };
}