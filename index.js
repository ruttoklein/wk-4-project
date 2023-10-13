document.addEventListener("DOMContentLoaded", () => {
  fetch("https://www.balldontlie.io/api/v1/teams")
    .then(res => res.json())
    .then(data => {
      const teamsContainer = document.getElementById("teams");
      data.data.forEach(team => {
        let infoDiv = document.createElement("div");
        infoDiv.className = "infoDiv";
        infoDiv.innerHTML = `
          <h2>${team.full_name}</h2>
          <p>City: ${team.city}</p>
          <p>Abbreviation: ${team.abbreviation}</p>
          <p>Conference: ${team.conference}</p>
          <p>Division: ${team.division}</p>
        `;
        console.log(team);
        teamsContainer.appendChild(infoDiv);
     });
   });
});
