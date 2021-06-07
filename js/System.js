class System{

    constructor(){}

    // Add code to authenticate the given code and the access codes.
    
    authenticate(actual,entered){
        if (actual === entered) {
            return true;
        }
        else{
            return false;
        }
    }
    

}
