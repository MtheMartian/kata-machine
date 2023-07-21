export default function two_crystal_balls(breaks: boolean[]): number {
  const square: number = Math.floor(Math.sqrt(breaks.length));
  let i: number = square;
  
  for(; i < breaks.length; i += square){
    if(breaks[i]){
      break;
    }
  }

  i -= square;
  
  for(let j: number = 0; j < square && i < breaks.length; ++j, ++i){
    if(breaks[i]){
      return i;
    }
  }
  
  return -1;
}