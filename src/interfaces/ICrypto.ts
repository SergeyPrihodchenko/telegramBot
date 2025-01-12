
export interface ICrypto {
    hash(): string
    setAlgoritm<T = number>(algorithm: T): boolean;
}