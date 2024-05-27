const roleAccess = (userRole, endpoint) => {
    if (endpoint === '/admin' || endpoint === '/product') {
        return true
    } else {
        return false
    }
}

export default roleAccess