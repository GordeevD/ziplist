const zipList = (list1, list2) => {
  const zippedList = [];
  for (let i = 0; i < list1.length; i++) {
    zippedList.push(list1[i], list2[i]);
  }
  return zippedList;
};
const zipListTheSimpleWay = (list1, list2) => _.flatten(_.zip(list1, list2));
console.log(zipList([1, 2, 3], ['a', 'b', 'c']));
console.log(zipListTheSimpleWay([1, 2, 3], ['a', 'b', 'c']));
