async function testApi () {
    const test = await fetch('/api') 
    const res = await test.json()
    console.log(res)
}

testApi()