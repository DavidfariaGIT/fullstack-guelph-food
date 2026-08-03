
const loginForm = document.querySelector('.login-form')

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const formData = new FormData(loginForm)

    const username = formData.get('username').trim()
    const password = formData.get('password').trim()

    try {
        const res = await fetch('api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ username, password })
        })
    
        const data = await res.json()

        if(res.ok) {
           window.location.href = "/"
        } else {
         console.log('error fethcing login', res.status)
        }

    } catch (err){
        console.error('Network error:', err)
    }
})