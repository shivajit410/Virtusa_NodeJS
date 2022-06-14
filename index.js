const https = require('https');

https.get("https://reqres.in/api/users/1", resp => {
    let data = "";
    resp.on("data", chunk => {
        data += chunk
    })

    resp.on("end", () => {
        let response = JSON.parse(data)
        console.log(response['data']['email'])
    })
})

https.get("https://reqres.in/api/users/3", resp => {
    let data = "";
    resp.on("data", chunk => {
        data += chunk
    })

    resp.on("end", () => {
        let response = JSON.parse(data)
        console.log(response['data']['email'])
    })
})

https.get("https://reqres.in/api/users/10", resp => {
    let data = "";
    resp.on("data", chunk => {
        data += chunk
    })
    
    resp.on("end", () => {
        let response = JSON.parse(data)
        console.log(response['data']['email'])
    })
})