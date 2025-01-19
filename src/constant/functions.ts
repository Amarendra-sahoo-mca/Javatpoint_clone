export function formatString(input: string): string {
   
    if(input == 'NET_Framework'){
        input = '.NET_Framework'
    }else if(input == 'BTech_MCA'){
        input = 'B.Tech/MCA'
    }

  
    return input.replace(/_/g, ' ');

   
  }