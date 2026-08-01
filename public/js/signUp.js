const formEl = document.querySelector('form')

formEl.addEventListener('submit', async (e) => {
    e.preventDefault()
    const formData = new FormData(formEl)

    const name = formData.get('name').trim()
    const email = formData.get('email').trim()
    const username = formData.get('username').trim()
    const password = formData.get('password').trim()
    const submitBtn = document.querySelector('.form-btn')

    submitBtn.disable = true
   
    try {
        const res = await fetch('api/auth/register', {
            method: "Post",
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({ name, email, username, password }) 
        }) 

    const data = await res.json()

    if (res.ok) {
      window.location.href = '/'
    } else {
      errorMessage.textContent = data.error || 'Registration failed. Please try again.'
    }} catch (err) {
        console.error('network error', err)     
    } finally {
        submitBtn.disable = false
    }
})