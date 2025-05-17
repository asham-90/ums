async function getUsers (){

    try{
    const {data} = await axios.get("https://node-react-10.onrender.com/users")

    console.log(data)

    let html = ''

    for(let i = 0;i<data.users.length;i++){


       html+= `

        <tr>



        <td>

        ${data.users[i]._id}

        </td>


        <td>

        ${data.users[i].userName}

        </td>


        <td>

        ${data.users[i].email}

        </td>


        <td class='d-flex gap-10 justify-center '>

        

        <a  href="./details.html?id=${data.users[i]._id}" class='btn btn-primary' >details</a>
        <button onclick="deleteUser('${data.users[i]._id}')" class='btn btn-danger'>delete</button>
        <a  href="./edit.html?id=${data.users[i]._id}" class='btn btn-primary' >edit</a>
        
        
        </td>
        
        
        
        
        </tr>


            
        `

        document.querySelector(".users-data").innerHTML=html

    
        document.querySelector(".loader-container").classList.add("d-none")
 


        console.log(html)
    }




    }catch(e){

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        document.querySelector(".loader-container").classList.add("d-none")

    }}


getUsers();


getUsers();

async function deleteUser(id) {

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then( async(result) => {
    if (result.isConfirmed) {
      const response = await axios.delete(`https://node-react-10.onrender.com/users/${id}`);
    
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  });
location.reload
}