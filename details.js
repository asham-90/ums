async function getDetails (){

    try{

    const params = new URLSearchParams ( window.location.search);

    const userId = params.get("id");
    
    const {data} = await axios.get(`https://node-react-10.onrender.com/users/${userId}`);

document. querySelector(".user-id").textContent=data.user._id;
document. querySelector(".user-name").textContent=data.user.userName;
document. querySelector(".user-email").textContent=data.user.email;
document. querySelector(" .user-phone"). textContent=data.user.phone

document.querySelector(".loader-container").classList.add("d-none")


}catch(e){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    document.querySelector(".loader-container").classList.add("d-none")
}

}

getDetails();

