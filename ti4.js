
document.querySelector("button").addEventListener("click", function(){

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
    ]

    var players = Number(document.getElementById("playerCount").value);
    var races = Number(document.getElementById("raceCount").value);

    document.getElementById("output").innerHTML = "";

    if (players>6 || (players*races>17) || players < 3) {

      var newp = document.createElement("p").innerText = ("invalid configuration.  There must be 3 - 6 players and no more than 17 races, total");
      document.getElementById("output").append(newp);

    } else {

      for (var i = 0; i < players; i++) {

          var newul = document.createElement("ul");
          var newh3 = document.createElement("h3");

          newh3.innerText = ("Player " + (i+1));

          document.getElementById("output").append(newh3);
          document.getElementById("output").append(newul);

              for (var v = 0; v < races; v++) {

                  var num = Math.floor((Math.random() * (raceList.length)))
                  var newli = document.createElement("li");
                  var ulList = document.getElementsByTagName("ul");
                  var currentUl = ulList[ulList.length - 1]

                  newli.innerText = (raceList[num]);

                  currentUl.append(newli);

                  raceList.splice(num, 1);
              }
      };
    }
  });
