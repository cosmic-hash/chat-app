const users=[]

// adduser, removeUser, getuser, getusersInRoom

const addUser=({ id, username, room }) =>{
   // Clean the data
               
    username=username.trim().toLowerCase()
    room=room. trim().toLowerCase()
    // Validate the data
   if (!username || !room){
         return{
             error: 'Username and room are required!'
        }
    }
   // Check for existing user
    const existingUser = users.find((user) =>{
         return user.room === room && user.username === username
    })


    // Validate username
if (existingUser){
    return{
      error: 'Username is in use!'
    }
}
  // Store user
  const user={id, username, room}
  users.push(user)
  return{user}
}


const removeUser=(id) =>{
  const index=users.findIndex((user) => user.id === id)
  if (index !== -1){
        return users.splice(index, 1)[0]
  }
}

const getUser=(id) =>{
    return users.find((user) => user.id === id)
}

const getUsersInRoom=(room) =>{
  room=room.trim().toLowerCase()
  return users.filter((user) => user.room === room)
}


module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}


// adduser({
//     id: 22,
//     username: 'Andrew',
//     room: 'South Philly'
// })
// console. log(users)

// const res=adduser({
//   id: 33,
//   username: 'andrew',
//   room: 'south philly'
// })
// console. log(res)

// adduser({
//   id: 22,
//   username: 'Andrew',
//   room:  'South Philly'
// })
// adduser({
//   id: 42,
//   username: 'Mike',
//   room: 'South Philly'
// })
// adduser({
//   id: 32,
//   username: 'Andrew',
//   room: 'Center City'
// })

// const removedUser=removeUser(22)
// console. log(removedUser)
// console. log(users)

// const user =    getuser(22);
// console. log(user);

// const userInRoom = getusersInRoom('South Philly');
// console. log(userInRoom);

