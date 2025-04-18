export const loginWithTempAccount = () => {
  return {
    username: 'tempUser',
    email: 'tempuser@example.com',
    role: 'guest'
  }

  localStorage.setItem('user', JSON.stringify(user))

  return user
}

export function getCurrentUser(){
  const storedUser = localStorage.getItem('user')
  return storedUser ? JSON.parse(storedUser) : null
}
