async function josef (arr){
    for(let i = 0; i<arr.length();i++){
        await setTimeout(()=>{
            console.log(arr[i])
        },1000)
    }
    
}

async function call (){
    try {
        const result = await fetch('https://covid-19-data.p.rapidapi.com/country/code?format=json&code=it')
        return result 
    } catch (err) {
        console.log(err)
    }
} 


async function eliyji(){
    try {
        const [res1,res2] = await Promise.all([fetch('https://covid-19-data.p.rapidapi.com/country/code?format=json&code=it'),
            fetch('https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1')])
        return [res1,res2]
    } catch (error) {
        console.log(err)
    }
}