export default {
    getItem(key) {
        let userInfoStr = localStorage.getItem('user_info')
        if (userInfoStr && key !== 'lang' && key !== 'user_info' && !key.includes('ftth')&& !key.includes('appCode')) {
            let userInfo = JSON.parse(userInfoStr)
            let fullKey = key + '_' + userInfo['isdn']
            return localStorage.getItem(fullKey)
        }

        return localStorage.getItem(key)
    },
    setItem(key, value) {
        let userInfoStr = localStorage.getItem('user_info')
        if (userInfoStr && key !== 'lang' && key !== 'user_info' && !key.includes('ftth')&& !key.includes('appCode')) {
            let userInfo = JSON.parse(userInfoStr)
            let fullKey = key + '_' + userInfo['isdn']
            localStorage.setItem(fullKey, value)
        } else {
            localStorage.setItem(key, value)
        }
    },
    removeItem(key) {
        let userInfoStr = localStorage.getItem('user_info')
        if (userInfoStr) {
            let userInfo = JSON.parse(userInfoStr)
            let fullKey = key + '_' + userInfo['isdn']
            localStorage.removeItem(fullKey)
        }
        if (localStorage.getItem(key)) {
            localStorage.removeItem(key)
        }
    }
}