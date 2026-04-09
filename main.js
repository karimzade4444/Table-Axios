let api = "https://69d2798a5043d95be971eb73.mockapi.io/api/data"

let container = document.querySelector(".container")
let tbody = document.querySelector(".tbody")
let creatmodal = document.querySelector(".creatmodal")
let addtag = document.querySelector(".addtag")
let Closeml = document.querySelector(".Closeml")
let CreatForm = document.querySelector(".CreatForm")
let editForm =document.querySelector(".editForm")
let Closem = document.querySelector(".Closem")
let editmodal = document.querySelector(".editmodal")

const getData = async (params) => {
  try {
    const response = await axios.get(api, {
      params,
    });
    render(response.data);
  } catch (error) {
    console.error(error);
    container.innerHTML = "404";
  }
};

getData()

const deleteData = async (id) => {
  try {
    await axios.delete(`${api}/${id}`);
    getData();
  } catch (error) {
    console.error(error);
  }
};

const creatData = async (data) => {
  try {
    await axios.post(api, data);
    getData();
  } catch (error) {
    console.error(error);
  }
};


const editData = async (data, id) => {
  try {
    await axios.put(`${api}/${id}`, data);
    getData();
  } catch (error) {
    console.error(error);
  }
};



function render (data){
tbody.innerHTML="";
data.forEach(element => {
    let tr = document.createElement("tr")
    tr.style.background="white"
    tr.style.color="black"
    tr.style.textAlign="center"
    let name = document.createElement("td")
    let title = document.createElement("td")
    let email = document.createElement("td")
    let role = document.createElement("td")
    let action = document.createElement("td")
    let div = document.createElement("div")
    let editbtn = document.createElement("button")
    editbtn.textContent="Edit"
    editbtn.style.background="blue"
    editbtn.style.color="white"
    editbtn.style.cursor="pointer"
    let deletebtn=document.createElement("button")
    deletebtn.textContent="Delete"
    deletebtn.style.background="red"
    deletebtn.style.color="white"
    deletebtn.style.cursor="pointer"
    div.append(editbtn,deletebtn)
    action.append(div)
     name.textContent = element.name;
    title.textContent=element.title;
    email.textContent=element.email;
    role.textContent=element.role
    tr.append(name,title,email,role,action)
    tbody.append(tr)
    editbtn.onclick=()=>{
    editmodal.style.display="block"
    editForm.id.value=element.id
    editForm.name.value = element.name;
    editForm.title.value=element.title
    editForm.email.value=element.email
    editForm.role.value=element.role
    Closem.onclick=()=>{
       editmodal.style.display="none" 
    }
    }


       deletebtn.onclick = () => {
      deleteData(element.id);
    };
});

}


addtag.onclick=()=>{
    creatmodal.style.display="block"
    Closeml.onclick=()=>{
        creatmodal.style.display="none"
    }
}


CreatForm.onsubmit = (event) => {
  event.preventDefault();
  let formcrData = Object.fromEntries(new FormData(CreatForm));
  creatData(formcrData);
  creatmodal.style.display="none"
  CreatForm.reset();
};


  editForm.onsubmit = (event) => {
        event.preventDefault();
        let formedData = Object.fromEntries(new FormData(editForm));
        editData(formedData, editForm.id.value);
         editmodal.style.display="none" 
      };


      search.oninput = () => {
  getData({ name: searchname.value });
};