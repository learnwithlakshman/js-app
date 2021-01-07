
idShowTeams = document.querySelector("#idShowTeams");
idShowTeamLabels = document.querySelector("#idShowTeamLabels");

// Load the Visualization API and the corechart package.
google.charts.load('current', { 'packages': ['corechart'] });

// Set a callback to run when the Google Visualization API is loaded.

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
showPlayersData = function (players) {
    let str = "";
    for (let i = 0; i < players.length; i++) {
        let player = players[i];

        let card = `<div class="col-sm-4">
        <div class="card mt-2 bg-secondary text-white md-6">
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
showPlayers = function () {
    let label = document.querySelector("#idLabel").value;
    if (label) {
        fetch(`https://ipl2020-stat.herokuapp.com/ipl2020/team/${label}`).then(data => data.json())
            .then(res => {
                let players = res;
                showPlayersData(players);
            })
    }
}

showTeamLabels = function (labels) {
    let str = "<select id='idLabel' class='form-select' onchange='showPlayers()'> ";
    str += "<option value=''>Select team label</option>";
    labels.forEach(ele => {
        str += `<option value=${ele}>${ele}</option>`;
    });
    str += "</str>";
    idShowTeamLabels.innerHTML = str;

}
loadTeamLabels = function () {
    fetch('https://ipl2020-stat.herokuapp.com/ipl2020/team/labels').then(data => data.json()).then(res => {
        let labels = res.labels;
        showTeamLabels(labels);
    })
}

showTeamAmount = function () {
    fetch('https://ipl2020-stat.herokuapp.com/ipl2020/team/totalamount').then(data => data.json()).then(res => {
        let teamAmount = res;
        console.log(teamAmount);
        google.charts.setOnLoadCallback(drawChart(teamAmount));
    })
}



loadTeams();
loadTeamLabels();
showTeamAmount();

showAmountByByRole = function(team){
    fetch(`https://ipl2020-stat.herokuapp.com/ipl2020/team/amountbyrole/${team}`).then(data => data.json()).then(res => {
        let teamAmountByRole = res;
        console.log(teamAmountByRole);
        google.charts.setOnLoadCallback(drawPieChart(teamAmountByRole,team));
    })
}
function drawPieChart(teamAmountByRole,teamName){
     // Create the data table.
     var data = new google.visualization.DataTable();
     data.addColumn('string', 'Role');
     data.addColumn('number', 'Amount');
     teamData = [];
     teamAmountByRole.forEach(team => {
         teamData.push([team.roleName, team.amount]);
     });
     data.addRows(teamData);
     // Set chart options
     var options = {
         'title': `The amount spent by ${teamName} on each role`,
         'width': 500,
         'height': 400
     };
 
   
     // Instantiate and draw our chart, passing in some options.
     var chart = new google.visualization.PieChart(document.getElementById('idPieChart'));
   
     chart.draw(data, options);
 
}
function drawChart(teamAmount) {
    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Team');
    data.addColumn('number', 'Amount');
    teamData = [];
    teamAmount.forEach(team => {
        teamData.push([team.teamName, team.amount]);
    });
    data.addRows(teamData);
    // Set chart options
    var options = {
        'title': 'The amoutn spent by each Team',
        'width': 500,
        'height': 400
    };

  
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById('showTeamAmount'));
    google.visualization.events.addListener(chart, 'select', function() {
         team = data.getValue(chart.getSelection()[0].row, 0);
         showAmountByByRole(team);
      });
    chart.draw(data, options);

}


