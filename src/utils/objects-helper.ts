export const updateObjectInArray = (items:any, itemId:any, objPropName:any, newObjProps:any):any => {
    items.map((u:any) => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps};
        }
        return u;
    })
}