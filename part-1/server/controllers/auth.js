const bcrypt = require('bcryptjs')
const users = [
//    {
//     username: username.value,
//     email: email.value,
//     firstName: firstName.value,
//     lastName: lastName.value,
//     password: password.value
// }
]

module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        const existingPwd = bcrypt.compareSync(password, users[i].password)
        if (existingPwd) {
          let userToReturn = {...users[i]}
          delete userToReturn.password
          res.status(200).send(userToReturn)
          return
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
      console.log(req.body)
        console.log('Registering User')
        console.log(req.body)
      const {username, email, firstName, lastName, password} = req.body;
      for(let i=0; i<users.length; i++){
        const existingPwd = bcrypt.compareSync(password, users[i].password)
        if(existingPwd) {
          let infoToReturn = {...users[i]}
          delete infoToReturn.password
          res.status(200).send(infoToReturn)
          return
        }
      }
      const salt = bcrypt.genSaltSync(5)
      const hash= bcrypt.hashSync(password, salt)
      console.log(hash)

      let userObj= {
        username,
        email,
        firstName,
        lastName,
        password: hash
      }

        users.push(userObj)
        let infoToReturn = {...userObj}
        delete infoToReturn.password
        res.status(200).send(infoToReturn)
    }
}