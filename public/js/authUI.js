export async function checkAuth() {

    try {
        const res = await fetch('/api/auth/me')

        if (!res.ok) {
            console.log('error fetching auth', res.status)
            return false
        }

        const user = res.json()
        if(!user.isloggedIn) {
            return false
        }

        return user.name
    } catch (err) {
        console.log('error fetching auth', err)
    }
}

export function renderGreet(name) {
    const logInEl = document.querySelector('.log-in-wrapper')
    const greeting = document.createElement('p')
    greeting.classList.add('greet-text')
    logInEl.prepend(greeting)
  
    name ?  greeting.textContent = 'Welcome guest' : greeting.textContent = `welcome guest`
}