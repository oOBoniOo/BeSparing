export const unique = (arr:any[]) => {
  const data:any[] = [];
  arr.forEach((mod)=>{
    data.includes(mod) ? false : data.push(mod);
  });
  return data;
};
