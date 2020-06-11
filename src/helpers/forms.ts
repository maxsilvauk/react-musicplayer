const ILiterals = <T extends string>(arr: T[]) => {
  const literal = <K extends string>(array: K[]): K[] => array;
  return literal(arr);
};

export const formInputsToNameValueObject = <T extends string>({ elements }: HTMLFormElement, names: T[]) => {
  const L = ILiterals(names);

  return names.reduce((prev, curr) => {
    const input = elements.namedItem(curr) as HTMLInputElement;
    prev[curr] = input ? input.value : '';
    return prev;
  }, {} as {[K in (typeof L)[number]]: string});
};
