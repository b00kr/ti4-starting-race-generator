function generatePackages(){

  let raceList = [
    "Emirates of Hacan",
    "Universities of Jol-Nar",
    "L1Z1X Mindnet",
    "Naalu Collective",
    "Federation of Sol",
    "Barony of Letnev",
    "Mentak Coalition",
    "The Arborec",
    "Yssaril Tribes",
    "Sardakk N’or",
    "Xxcha Kingdom",
    "Clan of Saar",
    "Brotherhood of Yin",
    "The Winnu",
    "Embers of Muatt",
    "Ghosts of Creuss",
    "Nekro Virus"
  ];

    var players = Number(document.getElementById("playerCount").value);
    var races = Number(document.getElementById("raceCount").value);

    document.getElementById("output").innerHTML = "";

    if (players>6 || (players*races>17) || players < 3) {
      var newP = document.createElement("p").innerText = ("Invalid configuration.  There must be 3 - 6 players and no more than 17 races, total");
      document.getElementById("output").append(newP);
    } else {
      for (var i = 0; i < players; i++) {

          var newUl = document.createElement("ul");
          var newH3 = document.createElement("h3");

          newH3.innerText = ("Player " + (i+1));

          document.getElementById("output").append(newH3);
          document.getElementById("output").append(newUl);

              for (var v = 0; v < races; v++) {

                  var num = Math.floor((Math.random() * (raceList.length)))
                  var NewLi = document.createElement("li");
                  var ulList = document.getElementsByTagName("ul");
                  var currentUl = ulList[ulList.length - 1]

                  NewLi.innerText = (raceList[num]);

                  currentUl.append(NewLi);

                  raceList.splice(num, 1);
              }
      };
    }
  };
