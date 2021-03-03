// filters the first level of keys to what is allowed in the keys array
// function filteredObject(obj(type obj), allowed(type arr))
function filteredObject(obj, allowed) {
  const filtered = Object.keys(obj)
    .filter(key => allowed.includes(key))
    .reduce((obj, key) => {
      return {
        ...obj,
        [key]: obj[key]
      };
    }, {});

}

export function filteredObject