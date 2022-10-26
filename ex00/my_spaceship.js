function my_spaceship (command){
    let x =0;
    let y=0;
    let gyroscope = 0;
    let direction = "up";

    command.split("").forEach(element => {
        if (element ==="A"){
            if(gyroscope === 0){
                y--;
            }else if(gyroscope === 1){
                x++;
            }else if(gyroscope === 2){
                y++;
            }else if(gyroscope === -1){
                x--;
            }else{
                y++;
            }
        }

        if(element ==="R"){
            gyroscope +=1;
        }

        if(element === "L"){
            gyroscope -=1;
        }
    });

    if(gyroscope ===0){
        direction = "up";
    }else if(gyroscope=== -1){
        direction ="left";
    }else if(gyroscope === -2){
        direction = "down";
    }else if(gyroscope === 1){
        direction="right";
    }else{
        direction = "down";
    }

    result = "{x: "+ x+", y: "+y+", direction: '"+direction+"'}";
    return result;
}