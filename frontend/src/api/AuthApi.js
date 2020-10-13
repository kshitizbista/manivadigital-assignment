import Api from "./Api";

class AuthApi {
    signIn({email, password}) {
        return Api.post('/auth/signin', {email, password});
    }
}

export default new AuthApi();
