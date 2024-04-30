for (let i = 1; i <= 2; i++) {
    for (let j = i; j <= 3; j++) {
        for (let k = 1; k <= 2; k++) {
            if ((i % 2 == 1) && (j % 2 == 1) && (k % 2 == 1)) {

                console.log(i, j, k);
            }
        }
    }
}