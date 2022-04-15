const AsyncStorage = window.localStorage

export async function getStorageAsync(key) {
    try {
        const result = await AsyncStorage.getItem(key)
        if (!result || result.length < 1) return undefined
        return ['{', '[', 'true', 'false', 'null', '""',].some(el => result.includes(el)) ? JSON.parse(result) : result
    } catch (err) {
        console.log(err);
    }
}

export function setStorageAsync(key, val = '', isRemove = true) {
    if (!global.storageKeyList) global.storageKeyList = {}
    isRemove && (global.storageKeyList[key] = true, AsyncStorage.setItem('storageKeyList', JSON.stringify(global.storageKeyList)))
    if (!val) return AsyncStorage.setItem(key, '')

    return AsyncStorage.setItem(key, val && ['string', 'number'].includes(typeof val) ? `${val}` : JSON.stringify(val))
} 
