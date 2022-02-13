
// You should implement your task here.

module.exports = function towelSort (matrix1) {
  const matrix2 = [];
		if (matrix1==null) {return [];}

		for (i = 0; i < matrix1.length; i++) {
			
			if (i%2 == 0) {
				
				let j = matrix1[i].length;
				
				for (j = 0; j < matrix1[i].length; j++) {
					
          matrix2.push(matrix1[i][j]);
    				
  				}
		
			}
			else {
				for (j =  matrix1[i].length-1; 0 <=j; j--) {
    			matrix2.push(matrix1[i][j]);
    
  				}
  			}
		}
		return matrix2;
}
