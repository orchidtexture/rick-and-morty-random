export const genRandomId = ({ prefix, min = 0, max = 494 }: { prefix: string; min: number, max: number }) => {
  // find diff
  let difference = max - min;
  // generate random number 
  let rand = Math.random();
  // multiply with difference 
  rand = Math.floor( rand * difference);
  // add with min value 
  rand = rand + min;

  const idSuffix = rand.toString().length == 2 ? `e${rand}` : rand.toString()

  return idSuffix;
}