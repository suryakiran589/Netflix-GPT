export const handleEmail =(email,password)=>{
    const valEmail = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    console.log("val-",valEmail)
    if(!valEmail){
        return "invalid Email"
    }
    const valPas = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    console.log("val-",valPas)
    if(!valPas){
        return "invalid password"
    }
    return null
    
}