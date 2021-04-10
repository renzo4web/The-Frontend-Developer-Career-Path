document.getElementById("x").addEventListener("click", ()=>{
    
    const userApi = 'https://randomuser.me/apii'
    
    fetch(userApi).then(response=>response.json()).then(json=>{
      console.log('promise chaining:', json.results[0].name.first)
    }).catch(console.warn)
    
    
})
    
document.getElementById("y").addEventListener("click", async ()=>{

    const userApi = 'htttps://randomuser.me/api/'

    try {
      const response = await fetch(userApi)
      const json = await response.json()
      console.log('async/await:', json.results[0].name.first)
    } catch (error) {
      console.warn(error);
    }



})
    
    