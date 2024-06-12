# compare two payload, if they are equal or not recursively and return true or false.

# How to use.

pass the two payloads to the method and it will return true and false.

## Examples:

`
**#case 1:**
const payload1 = {a:{k:"v"}, b:{c:{d:"test",e:[{c:1,d:2, e:[1,2]}]}}}
const payload2 = {a:{k:"v"}, b:{c:{d:"test",e:[{c:1, e:[1,2], d:2}]}}}

// const {isBothObjectSame} = require('isbothobjectsame')
console.log(isBothObjectSame(payload1, payload2)) // true

**#case 2:**
const payload1 = {a:{k:"v"}, b:{c:{d:"test",e:[{c:1,d:2, e:[1,2]}],l:3}}}
const payload2 = {a:{k:"v"}, b:{c:{d:"test",e:[{c:1, e:[1,2], d:2}]}}}
console.log(isBothObjectSame(payload1, payload2)) // false
`
