const teamData = () => {
  axios.get("http://localhost:4000/api/teamData").then((response) => {
    const team = response.data.data;
    console.log(team);
    let data = "";
    for (const i in team) {
      data += `
        <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="member">
                <img style="height: 295px; width: 293px;" src=${team[i].picture}
                  class="img-fluid" alt="">
                <div class="member-info">
                  <div class="member-info-content">
                    <h4>${team[i].name}</h4>
                    <span>${team[i].posission}</span>
                  </div>
                  <div class="social">
                    <a href=${team[i].twitter}><i class="bi bi-twitter"></i></a>
                    <a
                      href=${team[i].facebook}><i class="bi bi-facebook"></i></a>
                    <a href=${team[i].instagram}><i class="bi bi-instagram"></i></a>
                    <a href=${team[i].linkedin}><i class="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
        `;
        document.getElementById("team-container").innerHTML = data;
    }
  })
  .catch((error) => console.error(error));
};

teamData();
