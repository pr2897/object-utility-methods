const isBothObjectSame = (obj1, obj2) => {
  if (typeof obj1 != typeof obj2) return false;

  if (typeof obj1 === "object") {
    if (!obj1 && !obj2) return true;
    else if ((!obj1 && obj2) || (obj1 && !obj2)) return false;

    // if the payload is an array
    if (Array.isArray(obj1)) {
      if (!Array.isArray(obj2)) return false;
      if (obj1.length != obj2.length) return false;

      obj1.sort();
      obj2.sort();

      for (let i = 0; i < obj1.length; i++) {
        if (!isBothObjectSame(obj1[i], obj2[i])) return false;
      }

      return true;
    } else {
      if (Array.isArray(obj2)) return false;
      if (!(obj1 && obj2)) return false;

      const entries_first = Object.entries(obj1);
      const entries_second = Object.entries(obj2);

      if (entries_first.length != entries_second.length) return false;

      for (let [key, value] of entries_first) {
        if (!isBothObjectSame(obj1[key], obj2[key])) return false;
      }

      return true;
    }
  }

  return obj1 === obj2;
};

module.exports = isBothObjectSame;
