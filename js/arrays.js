var names = ["Krish", "Manoj"];

var flag = false;
var editName = "";
idAddUser = document.querySelector("#idAddUser");
idSearch = document.querySelector("#idSearch");

show = (namesArr) => {
    if (namesArr.length != 0) {
        str = `<ul class="list-group">`
        for (let i = 0; i < namesArr.length; i++) {
            let name = namesArr[i];
            str += `<li class="list-group-item d-flex justify-content-between align-items-right">
            ${name}
         <span>   
            <i class="fa fa-edit" onclick="edit('${name}')"> </i> &nbsp;<i class="fa fa-trash" onclick="remove('${name}')"></i>
        </span>
      </li>`
        }
        str += `</ul>`;
    } else {
        str = "No data found"
    }
    document.querySelector("#idShowResult").innerHTML = str;
}
update = (name, uname) => {
    let index = names.indexOf(name);
    if (index != -1) {
        names[index] = uname;
    }
}
add = (name) => {
    if(!flag && editName ==""){
        names.push(name);
    }else{
        update(editName,name);
        flag = false;
        editName = "";
    }
    console.log(names);
    show(names);

}

remove = (name) => {
    if (confirm("Are you sure do you want to delete :" + name + "?")) {
        let index = names.indexOf(name);
        if (index != -1) {
            names.splice(index, 1);

            show(names);
        }
    }
}

update = (name, uname) => {
    let index = names.indexOf(name);
    if (index != -1) {
        names[index] = uname;
    }
}

search = (name) => {
    temp = [];
    for (let i = 0; i < names.length; i++) {
        let uname = names[i];
        if (uname.includes(name)) {
            temp.push(uname);
        }
    }
    return temp;
}


edit = (name)=>{
    idAddUser.value = name;
    editName = name;
    flag = true;
}

idSearch.addEventListener('keyup', (event) => {
    let name = event.target.value;
    let searchArr = search(name);
    show(searchArr);
})

idAddUser.addEventListener('keyup', (event) => {
    let name = event.target.value;
    if (event.keyCode == 13) {
        if (name.length > 0 && name.trim().length > 0) {
            add(name);
            idAddUser.value = "";
        }
    }
})

show(names);