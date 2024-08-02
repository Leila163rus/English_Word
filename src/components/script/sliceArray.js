export function sliceArray(arr) {
  let arr1 = []
  let size = 2;
  for (let i = 0; i < Math.ceil(arr.length/size); i++) {
    arr1[i] = arr.slice((i*size), (i*size) + size);
  }
  return arr1;
}
