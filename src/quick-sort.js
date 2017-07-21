'use strict';

function quickSort(input) {

          if(! (Array.isArray(input)))
			  throw Error('input is not an array ');
          if(input.length == 0)
			 throw Error('the array has no elements');
		  else if( input.length == 1)
			 return input;
   		  else if(input.length > 1){
			  
			  for(var i=0;i<input.length;i++){
				  
				  for(var j=0;j<input.length-1;j++){
					  
					    if(input[j] > input[j+1]){
							
							    var temp = input[j];
								input[j] = input[j+1];
								input[j+1]= temp;
						}
					  
				  }
			  }
			  return input;
		  }
			  

       
	   
		
};
module.exports = quickSort;