const UpDateUserForm = document.querySelector(".update-form")

UpDateUserForm.onsubmit = async function (e) {

    try{


        const params = new URLSearchParams ( window.location.search);

        const userId = params.get("id");

    e.preventDefault();
    //console.log(e)

    //console.log(e.target.userName.value)

    const user = {

        userName:e.target.userName.value,

    }

   

    //console.log(user)



    const response = await axios.put(`https://node-react-10.onrender.com/users/${userId}`,user)

    

   

    window.location.href="./index.html"



   
}catch(e){

    document.querySelector(".text-danger").textContent="error pleaas try again ........"


  

}}
