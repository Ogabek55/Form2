var oyna = document.getElementById(`oyna`);
      var Name = document.getElementById(`Name`);
      var Surname = document.getElementById(`Surname`);
      var Numberr = document.getElementById(`Numberr`);
      var oyna2 = document.getElementById(`oyna2`);
      var texs = document.getElementById(`tex`);

      function btn() {
        oyna.style.display = "none";
        oyna.style.display = "flex";
        texs.innerHTML = " Name " + Name.value + " Surname " + Surname.value + "va  telefon raqami";
      }
      function btn() {
        if (Name.value === "") {
          alert("Ismingizni kiriting");
        } else if (Surname.value === "") {
            alert("Familyangizni kiriting");
              alert("Ishonchingiz komilmi to'g'ri yozganizga");
        } else if (Numberr.value === "") {
            alert("Telefon raqaminigzni kiriting");
        } else if (Name.value !=="", Surname.value !=="", Numberr.value !==""){
            oyna.style.display = "none";
            oyna2.style.display = "flex";
            texs.innerHTML = " Name " + Name.value + " Surname " + Surname.value + "  Number of " + Numberr.value;
        }
        else{
            alert("Xatolik mavjud!!!")
        }
      }
