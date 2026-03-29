const html = document.querySelector(".html");
    const htmlInfo = document.querySelector(".one");
    const htmlArr = document.querySelector(".htmlArr");
    const css = document.querySelector(".css");
    const cssInfo = document.querySelector(".two");
    const cssArr = document.querySelector(".cssArr");
    
    const js = document.querySelector(".js");
    const jsInfo = document.querySelector(".three");
    const jsArr = document.querySelector(".jsArr");
    
    const react = document.querySelector(".react");
    const reactInfo = document.querySelector(".four");
    const reactArr = document.querySelector(".reactArr");
    
    const sql = document.querySelector(".sql");
    const sqlInfo = document.querySelector(".five");
    const sqlArr = document.querySelector(".sqlArr");
    
    const express = document.querySelector(".express");
    const expressInfo = document.querySelector(".six");
    const expressArr = document.querySelector(".expressArr");
    
    const rn = document.querySelector(".rn");
    const rnInfo = document.querySelector(".seven");
    const rnArr = document.querySelector(".rnArr");
    
    
  const skills = [
  { btn: html, info: htmlInfo, arr: htmlArr },
  { btn: css, info: cssInfo, arr: cssArr },
  { btn: js, info: jsInfo, arr: jsArr },
  { btn: react, info: reactInfo, arr: reactArr },
  { btn: sql, info: sqlInfo, arr: sqlArr },
  { btn: express, info: expressInfo, arr: expressArr },
  { btn: rn, info: rnInfo, arr: rnArr },
];


htmlInfo.classList.add("expandInfo");
htmlArr.classList.add("rotate");

let isAnimating = false;

skills.forEach(skill => {
  skill.btn.addEventListener("click", () => {
    if (isAnimating) return;

    const currentlyExpanded = skills.find(s => s.info.classList.contains("expandInfo"));

    if (currentlyExpanded === skill) {
      
      isAnimating = true;
      currentlyExpanded.info.classList.remove("expandInfo");
      currentlyExpanded.arr.classList.remove("rotate");
      currentlyExpanded.info.addEventListener(
        "transitionend",
        function handler() {
          isAnimating = false;
          currentlyExpanded.info.removeEventListener("transitionend", handler);
        }
      );
    } else {
      if (currentlyExpanded) {
        
        isAnimating = true;
        currentlyExpanded.info.classList.remove("expandInfo");
        currentlyExpanded.arr.classList.remove("rotate");

        currentlyExpanded.info.addEventListener(
          "transitionend",
          function handler() {
            currentlyExpanded.info.removeEventListener("transitionend", handler);

            
            skill.info.classList.add("expandInfo");
            skill.arr.classList.add("rotate");

            skill.info.addEventListener(
              "transitionend",
              function handler2() {
                isAnimating = false;
                skill.info.removeEventListener("transitionend", handler2);
              }
            );
          }
        );
      } else {
        skill.info.classList.add("expandInfo");
        skill.arr.classList.add("rotate");
      }
    }
  });
});