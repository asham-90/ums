const addUserForm = document.querySelector(".create-form")

addUserForm.onsubmit = async function (e) {

    try{
    e.preventDefault();
    //console.log(e)

    //console.log(e.target.userName.value)

    const user = {

        userName:e.target.userName.value,
        email:e.target.email.value,
        password:e.target.password.value,
        phone:e.target.phone.value


    }

   

    console.log(user)

    

    const response = await axios.post("https://node-react-10.onrender.com/users",user)

    

   

    window.location.href="./index.html"



   
}catch(e){

    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });

}}

