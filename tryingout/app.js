async function numberPlayer(num) {
    console.log("Trying " + num)
    setTimeout(console.log,5000,num)
}

for(let x = 0; x< 5; x++) {
    numberPlayer(x)
}