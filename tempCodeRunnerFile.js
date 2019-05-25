console.log('this far ', directions[i +1]);
        if (orientation % 4 == 0) {
            //y positive
            y += directions[i+1];
            console.log('up: ', directions[i+1]);
        }
        else if (orientation % 4 == 2) {
            y -= directions[i+1];
            console.log('down: ', directions[i+1]);
        }
        else if (orientation % 4 == 1 || -3) {
            x += directions[i+1];
            console.log('right: ', directions[i+1]);
        }
        else if (orientation % 4 == 3 || -1) {
            x -= directions[i+1];
            console.log('left: ', directions[i +1]);
        }
        else {
            console.log('99 problems')
        }