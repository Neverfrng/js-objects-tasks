import _ from 'lodash';

// BEGIN
export default function fill(obj, keys, data) {
    if (keys.length === 0) {
        Object.assign(obj, data);
    } else {
        for (const key of keys) {
            if (key in data) {
                obj[key] = data[key];
            }
        }
    }
    return obj;
}
// END