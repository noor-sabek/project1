module.exports={


 signUp:(req, res) => {
     res.status(200).json({
      message:'SignUp'
    })
},
 logIn:(req, res) => {
    res.status(200).json({
     message:'login'
    })
 }

}
