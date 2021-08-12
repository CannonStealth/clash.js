export interface Client {

}

export interface Manager<K, V> {
    cache: Map<K, V>
}

export interface Player {
    
}

export namespace utils {
    export type Key = string | number | symbol
    export type Awaited<T> = T | Promise<T>
}