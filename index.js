document.addEventListener("DOMContentLoaded", () => {
  const teamsContainer = document.getElementById("teams");
  const commentForm = document.getElementById("comment-form");
  const commentInput = document.getElementById("comment-input");

  fetch("https://www.balldontlie.io/api/v1/teams")
    .then(res => res.json())
    .then(data => {
      data.data.forEach(team => {
        let infoDiv = document.createElement("div");
        infoDiv.className = "infoDiv";
        infoDiv.innerHTML = `
          <h2 class="team-name">${team.full_name}</h2>
          <div class="team-details" style="display: none;">
            <p>City: ${team.city}</p>
            <p>Abbreviation: ${team.abbreviation}</p>
            <p>Conference: ${team.conference}</p>
            <p>Division: ${team.division}</p>
            <div class="comments">
              <!-- Display comments for each team here -->
            </div>
          </div>
        `;
        teamsContainer.appendChild(infoDiv);        
        const teamName = infoDiv.querySelector(".team-name");
        const teamDetails = infoDiv.querySelector(".team-details");
        teamName.addEventListener("click", () => {
          if (teamDetails.style.display === "none") {
            teamDetails.style.display = "block";
          } else {
            teamDetails.style.display = "none";
          }
        });
      });
commentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const commentText = commentInput.value;
        if (commentText) {
          const teamsDetails = document.querySelectorAll(".team-details");
          teamsDetails.forEach(teamDetails => {
            if (teamDetails.style.display === "block") {
              const commentsSection = teamDetails.querySelector(".comments");
              const commentElement = document.createElement("div");
              commentElement.className = "comment";
              commentElement.textContent = commentText;
              commentsSection.appendChild(commentElement);
            }
          });
          commentInput.value = "";
        }
      });
    });
});




document.addEventListener("DOMContentLoaded", () => {
  const teamsContainer = document.getElementById("teams");
  const commentForm = document.getElementById("comment-form");
  const commentInput = document.getElementById("comment-input");

  fetch("https://www.balldontlie.io/api/v1/teams")
    .then(res => res.json())
    .then(data => {
      data.data.forEach(team => {
        let infoDiv = document.createElement("div");
        infoDiv.className = "infoDiv";
        infoDiv.innerHTML = `
          <h2 class="team-name">${team.full_name}</h2>
          <div class="team-details" style="display: none;">
            <p>City: ${team.city}</p>
            <p>Abbreviation: ${team.abbreviation}</p>
            <p>Conference: ${team.conference}</p>
            <p>Division: ${team.division}</p>
            <div class="comments">
              <!-- Display comments for each team here -->
            </div>
          </div>
        `;
        teamsContainer.appendChild(infoDiv);        
        const teamName = infoDiv.querySelector(".team-name");
        const teamDetails = infoDiv.querySelector(".team-details");
        teamName.addEventListener("click", () => {
          if (teamDetails.style.display === "none") {
            teamDetails.style.display = "block";
          } else {
            teamDetails.style.display = "none";
          }
        });
      });
commentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const commentText = commentInput.value;
        if (commentText) {
          const teamsDetails = document.querySelectorAll(".team-details");
          teamsDetails.forEach(teamDetails => {
            if (teamDetails.style.display === "block") {
              const commentsSection = teamDetails.querySelector(".comments");
              const commentElement = document.createElement("div");
              commentElement.className = "comment";
              commentElement.textContent = commentText;
              commentsSection.appendChild(commentElement);
            }
          });
          commentInput.value = "";
        }
      });
    });
});




