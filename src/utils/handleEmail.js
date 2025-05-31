export const handleEmail =(email,password)=>{
    const valEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const valPas = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    console.log("val-",valEmail)
    console.log("val-",valPas)
    return valEmail || valPas
}