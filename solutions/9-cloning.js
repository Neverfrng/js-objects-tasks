// BEGIN
const cloneShallow = (obj) => {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }

    const newObj = {};

    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        newObj[key] = obj[key];
      }
    }

    return newObj;
  }
  export default cloneShallow;
// END
