import type { UserEntity } from "typings/entity/user"

declare module '@/utils/storage' {
    type storageKeys = {
        userCurrent: UserEntity
    }

    export function getStorageAsync<T extends keyof storageKeys>(key: T): Promise<storageKeys[T]>
    export function setStorageAsync<T extends keyof storageKeys>(key: T, val: storageKeys[T], isRemove?: boolean): void
}

