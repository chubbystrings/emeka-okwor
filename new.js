const convertedObjectsHelper = (obj) => {
    const newObj = {};

    // loop and flatten using recursive.
    for (const key in obj) {
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            const newObj = convertedObjectsHelper(obj[key]);
            for (const newKey in newObj) {
                newObj[`${key}.${newKey}`] = newObj[newKey]
            }
        }
        else {
            newObj[key] = obj[key]
        }
    }
    
    return newObj
}

const pathGet = (object, k) => {
   
    const convertedObject = convertedObjectsHelper(object)
    const newArr = []
    for (const key in convertedObject) {
        if (convertedObject[key] === k) {
            newArr.push(key)
    
        }
    }

    return newArr.length > 0 ? newArr[0] : 'oops! could not find'
}

const a = {
   user: {
     id: 1,
     name: {
       firstName: "James",
       lastName: "Ibori"
     },
     location: {
       city: "Ikoyi",
       state: "Lagos",
       address: "One expensive house like that"
     }
   }
}

console.log(pathGet(a, 'One expensive house like that'))