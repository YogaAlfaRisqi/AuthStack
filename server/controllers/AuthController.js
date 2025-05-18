

class AuthController {
    static register(req, res){
        res.json({
            message:"Silahkan Register"
        })
    }
    static login(req, res){
        res.json({
            message:"silahkan login"
        })
    }
    static google(req, res){
        res.json({
            message:"silahakan login dengan Google"
        })
    }
}


module.exports = AuthController;