export async function checkAuth() {
  try {
    const res = await fetch("/api/auth/me")

    if (!res.ok) {
      console.log("error fetching auth", res.status)
      return false
    }

    const user = await res.json()
    if (!user.isLoggedIn) {
      return false
    }
    return user.name
    
  } catch (err) {
    console.log("error fetching auth", err);
  }
}

export function renderGreet(name) {
const user = name ? name : 'Guest'
document.getElementById('greeting').textContent = `Welcome, ${user}!`
}

export function renderLogout(name) {
const isLoggedIn = name 

document.getElementById('logout-btn').style.display = isLoggedIn ? 'block' : 'none'
}