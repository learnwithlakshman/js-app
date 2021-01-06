
idShowTeams = document.querySelector("#idShowTeams");
idShowTeamLabels = document.querySelector("#idShowTeamLabels");


showTeams = function (teams) {
    
    let str = ""; 
    for (let i = 0; i < teams.length; i++) {
        let team = teams[i];
        let card = `<div class="card mt-2 bg-secondary text-white">
         <div class="card-body">
          <h5 class="card-title">${team.team}</h5>
          <p class="card-text">
           ${team.label} - ${team.coach} - ${team.city}
          </p>
        </div>
      </div>` 
      str += card;
    }
    idShowTeams.innerHTML = str;
}

loadTeams = function () {

     fetch('https://ipl2020-stat.herokuapp.com/ipl2020/team/all')
    .then(data => data.json())
    .then(res => {
            let teams = res;
            showTeams(teams);
    }).catch(error => {
            console.log(error);
    });

}
showPlayersData = function(players){
    let str = ""; 
    for (let i = 0; i < players.length; i++) {
        let player = players[i];
    
        let card = `<div class="col-sm-6">
        <div class="card mt-2 bg-secondary text-white">
         <div class="card-body">
          <h5 class="card-title">${player.name}</h5>
          <p class="card-text">
           ${player.label} - ${player.role} - ${player.price}
          </p>
        </div>
      </div></div>` 
      str += card;
    }
    document.querySelector("#idPlayerData").innerHTML = str;
}
showPlayers = function(){
        let label = document.querySelector("#idLabel").value;
        if(label){
           fetch(`https://ipl2020-stat.herokuapp.com/ipl2020/team/${label}`).then(data=>data.json())
           .then(res=>{
                let players = res;
                showPlayersData(players);
           })
        }
}

showTeamLabels = function(labels){
        let str = "<select id='idLabel' class='form-select' onchange='showPlayers()'> ";
        str +="<option value=''>Select team label</option>";
        labels.forEach(ele => {
            str += `<option value=${ele}>${ele}</option>`;
        });
        str += "</str>";
        idShowTeamLabels.innerHTML = str; 
     
}
loadTeamLabels = function(){
    fetch('https://ipl2020-stat.herokuapp.com/ipl2020/team/labels').then(data=>data.json()).then(res=>{
            let labels = res.labels;
            showTeamLabels(labels);
    })
}




loadTeams();
loadTeamLabels();



