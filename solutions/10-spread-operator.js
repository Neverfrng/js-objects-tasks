// BEGIN
export default function make(name, additional = {}) {
    return {
        name,
        state: 'state' in additional ? additional.state : 'moderating',
        createdAt: 'createdAt' in additional ? additional.createdAt : Date.now(),
        ...additional,
        name,
    };
}
// END