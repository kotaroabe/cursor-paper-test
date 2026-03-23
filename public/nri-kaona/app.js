(function () {
  var railButtons = document.querySelectorAll(".rail-btn[data-panel]");
  var panels = document.querySelectorAll(".panel");
  var crumbCurrent = document.getElementById("crumb-current");
  var crumbShinjoshoActions = document.getElementById("crumb-shinjosho-actions");
  var crumbBackActions = document.getElementById("crumb-back-actions");
  var skillSubtabs = document.getElementById("skill-subtabs");
  var subtabs = document.querySelectorAll(".subtab");

  var PANEL_LABELS = {
    basic: "基本情報",
    shinjosho: "身上書",
    skills: "スキル",
    career: "キャリア履歴",
    jiko: "自己申告書",
  };

  function showPanel(id) {
    panels.forEach(function (p) {
      p.classList.toggle("is-visible", p.id === "panel-" + id);
    });
    railButtons.forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-panel") === id);
    });
    if (crumbCurrent) {
      crumbCurrent.textContent = PANEL_LABELS[id] || id;
    }
    if (skillSubtabs) {
      var onSkills = id === "skills";
      skillSubtabs.classList.toggle("hidden", !onSkills);
      skillSubtabs.setAttribute("aria-hidden", onSkills ? "false" : "true");
    }
    if (crumbShinjoshoActions) {
      crumbShinjoshoActions.classList.toggle("hidden", id !== "shinjosho");
    }
    if (crumbBackActions) {
      crumbBackActions.classList.toggle("hidden", id !== "career" && id !== "jiko");
    }
  }

  railButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var id = btn.getAttribute("data-panel");
      if (id) showPanel(id);
    });
  });

  subtabs.forEach(function (t) {
    t.addEventListener("click", function () {
      subtabs.forEach(function (x) {
        x.classList.remove("is-active");
      });
      t.classList.add("is-active");
    });
  });

  showPanel("basic");
})();
