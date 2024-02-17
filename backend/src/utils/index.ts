export function validateEmailOrDomain(inputValue: string): boolean {
  const pattern: RegExp =
    /^(?:(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})|(?:[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}))$/;
  const match: RegExpMatchArray | null = inputValue.match(pattern);
  return !!match;
}
