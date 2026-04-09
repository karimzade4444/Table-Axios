let api = "https://69d2798a5043d95be971eb73.mockapi.io/api/data"

let container = document.querySelector(".container")
let tbody = document.querySelector(".tbody")

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
});

}

