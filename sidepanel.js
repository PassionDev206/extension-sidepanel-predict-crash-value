document.getElementById('real_predict').addEventListener('click', async () => {
    prev_crash = '0';
    next_carsh = '0';    
    while(true){
        try {
            const response = await fetch('http://64.188.8.69:8080/api/data');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            crash = data.crash;
            let dotPostion = crash.indexOf(".");
            crash = crash.slice(0, dotPostion + 3);
            if(next_carsh != crash){
                prev_crash = data.rate;
                document.getElementById("prev_crash").innerHTML = "Previous crash value: <b class='color-blue'>" + prev_crash + "</b>";
                next_carsh = crash;
                console.log("Prev: ", prev_crash);
                console.log("Next: ", next_carsh);
                document.getElementById("next_crash").innerHTML = "The next crash value: <b class='color-red'>" + next_carsh + "</b>";
            } else {
                continue;
            }
        
        } catch(error) {
            console.error("Error occured: ", error);
        }

    }    
    
});
