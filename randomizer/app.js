const random = require('random')
const seasonEpisode = [1,17,2,23,3,23,4,24,5,24,6,24,7,24,8,24,9,24,10,24,11,24,12,24]

console.log(seasonEpisode.length/2)

for (let index = 0; index < 3; index++) {
    let tempSeason = random.int(1,seasonEpisode.length/2);
    let tempEpisode = random.int(1,seasonEpisode[tempSeason*2-1])
    // console.log(tempSeason,seasonEpisode[tempSeason*2-1])
    console.log("Season  ",tempSeason,"Episode ", tempEpisode)
}