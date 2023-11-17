/*global chrome*/

export const saveData = (key, data) => {
    if (isChromeExtension()){
        try {
            return chrome.storage.local.set({ [key]: data})
        }
        catch(error) {
            console.log("Error saving to local state")
            console.log(error)

        }
    } else {
        return Promise.resolve(localStorage.setItem(key, JSON.stringify(data)))
    }
}

export const loadData = (key) => {
    if (isChromeExtension()) {
        try {
            return chrome.storage.local.get(key).then((data)=> data[key])
        }
        catch(error){
            console.log("Error loading from local state")
            console.log(error)
        }
    }
    else {
        return Promise.resolve(JSON.parse(localStorage.getItem(key)))
    }
}

const isChromeExtension = () => {
    return !!chrome?.storage
}