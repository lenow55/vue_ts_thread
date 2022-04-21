export const getNthFobonacciNumber = (n: number): number => {
  return n <= 1
    ? n
    : getNthFobonacciNumber(n - 1) + getNthFobonacciNumber(n - 2);
};
