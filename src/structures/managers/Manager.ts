import { Manager as ManagerInterface } from "../../types"

class Manager<K, V> implements ManagerInterface<K, V> {
    public cache;

    constructor() {
        this.cache = new Map()
    }
}

export default Manager