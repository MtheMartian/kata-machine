export default function bs_list(haystack: number[], needle: number): boolean {
  let low: number = 0;
  let high: number = haystack.length;
  

  while(high > low){
    const middle: number = Math.floor(low + (high - low) / 2);
    if(needle === haystack[middle]){
      return true;
    }
    else if(needle > haystack[middle]){
      low = middle + 1;
    }
    else{
      high = middle - 1 ;
    }
  }
  return false;
}