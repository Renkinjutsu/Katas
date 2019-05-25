const blocksAway = function(directions) {
    var orientation = directions[0] == "left" ? 1 : 0; //determine direction on x/y axis
    var x = 0; //result on grid
    var y = 0;

    for (let i = 0; i < directions.length; i+=2) {
      
        //cycle through directions
        if (directions[i] == "right") {
            orientation += 1;
        }
        else if (directions[i] == "left") {
            orientation -= 1;
        }
        else {
            console.log('99 problems');
        }
        ;
        //determine direction
        
        
        if (orientation % 4 === 0) {
            //y positive
            y += directions[i+1];   
        }
        else if (orientation % 4 === 2) {
            y -= directions[i+1];       
        }
        else if (orientation % 4 === 1 || orientation % 4 === -3) {
            x += directions[i+1];      
        }
        else if (orientation % 4 === 3 || orientation % 4 === -1) {
            x -= directions[i+1];    
        }
        else {
            console.log('99 problems')
        }    
    } 
    return (`east: ${x}, north: ${y}`);
  };
  
  console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
  console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
  console.log(blocksAway(["left", 8, "right", 11, "right", 33, "right", 120]));