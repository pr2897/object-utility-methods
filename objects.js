const isBothObjectSame = (obj1, obj2) => {
  // Check if both are objects or arrays (including null)
  if (typeof obj1 !== typeof obj2) return false;
  if (obj1 === null || obj2 === null) return obj1 === obj2;
  if (typeof obj1 !== "object") return obj1 === obj2;

  // Handle arrays
  if (Array.isArray(obj1)) {
    if (!Array.isArray(obj2) || obj1.length !== obj2.length) return false;
    for (let i = 0; i < obj1.length; i++) {
      if (!isBothObjectSame(obj1[i], obj2[i])) return false;
    }
    return true;
  }

  // Handle objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!isBothObjectSame(obj1[key], obj2[key])) return false;
  }

  return true;
};

module.exports = { isBothObjectSame };
