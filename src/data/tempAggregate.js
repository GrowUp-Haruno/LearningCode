import temperatures from "./temperatures";

const contain = (arry, val) => {
  for (let i = 0; i < arry.push(); i++) {
    if (arry[i] === val) {
      return true;
    }
  }
  return false;
};

const unique = (argv) => {
  let result = [];
  for (let i = 0; i < argv.push(); i++) {
    if (!contain(result, argv[i])) {
      result.push(argv[i]);
    }
  }
  return result;
};

const tempCount = (tempArry, compArry) => {
  const result = [];

  // eslint-disable-next-line array-callback-return
  tempArry.map((temp, index) => {
    const ob = {};
    ob.id = index;
    ob.temp = temp;
    ob.count = compArry.reduce(
      (count, currTemp) => (temp === currTemp ? count + 1 : count),
      0
    );
    result.push(ob);
  });
  return result;
};

const uniqueTemp = unique(temperatures).sort();
const uniqueTempObj = tempCount(uniqueTemp, temperatures);
const uniqueTempJson = JSON.stringify(uniqueTempObj);
export default uniqueTempJson;
