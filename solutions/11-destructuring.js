// BEGIN
const getSortedNames = (users) => {
    const names = users.map(({ name }) => name);

    names.sort();

    return names;
  }
  export default getSortedNames;
// END