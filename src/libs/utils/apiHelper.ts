export function logger(...rest: unknown[]): void {
  console.error('LOG --- ', ...rest);
}
