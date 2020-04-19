import {Fetch} from './../Fetch'
import Routes from './../Routes'
import {jsonResponse} from './../../tools/JsonResponse'
class LoginService {

    async login(payload) {
        return Fetch('get', Routes.login, payload)
        .then( res => {
            console.log(res)
            return jsonResponse(res.status, res.data)
        })
        .catch( err => {
            return jsonResponse(500, err)
        })
    }

}

export default new LoginService()