async function getanimequote(){
    let url="https://animechan.vercel.app/api/quotes"
    let data= await fetch(url ,{
        method: 'GET',
        headers: {
            content: 'application/json'
        }
    })
    let animeqoute=await data.json();
    console.log(animeqoute)

}
async function getNeko(){
    const response= await fetch("https://nekos.best/api/v2/endpoints")
    let pic = await response.json();
    console.log(pic)
}
getNeko();