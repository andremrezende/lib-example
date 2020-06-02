export interface Field {
  name: string;
  path: string;
}

export interface Errors {
  [key: string]: string;
}

export interface Context {
  initialData: object;
  errors: Errors;
  scopePath: string;
  registerField: (field: Field) => void;
  unregisterField: (name: string) => void;
}

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
