const roleAccess = (userRole, endpoint) => {
    // const allowedRoles = {
    //     '/admin': ['admin', 'superadmin'],
    //     '/product': ['admin', 'superadmin', 'user']
    // }

    // const allowedRolesForRoute = allowedRoles[route]

    // return allowedRolesForRoute && allowedRolesForRoute.includes(userRole)
    if (endpoint === '/product' || endpoint === '/content' || endpoint === '/testimony') {
        return true
    } else {
        return false
    }
}

export default roleAccess