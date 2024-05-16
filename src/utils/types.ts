export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type DeepNonNullable<T> = {
  [K in keyof T]: NonNullable<T[K]>;
};
