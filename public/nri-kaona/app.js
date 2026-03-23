(function () {
  var railButtons = document.querySelectorAll(".rail-btn[data-panel]");
  var panels = document.querySelectorAll(".panel");
  var crumbCurrent = document.getElementById("crumb-current");
  var crumbShinjoshoActions = document.getElementById("crumb-shinjosho-actions");
  var skillSubtabs = document.getElementById("skill-subtabs");
  var subtabs = document.querySelectorAll(".subtab");

  function showPanel(id) {
    panels.forEach(function (p) {
      p.classList.toggle("is-visible", p.id === "panel-" + id);
    });
    railButtons.forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-panel") === id);
    });
    if (crumbCurrent) {
      var labels = { basic: "基本情報", shinjosho: "身上書", skills: "スキル" };
      crumbCurrent.textContent = labels[id] || id;
    }
    if (skillSubtabs) {
      skillSubtabs.classList.toggle("hidden", id !== "skills");
    }
    if (crumbShinjoshoActions) {
      crumbShinjoshoActions.classList.toggle("hidden", id !== "shinjosho");
    }
  }

  railButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var id = btn.getAttribute("data-panel");
      if (id) showPanel(id);
    });
  });

  subtabs.forEach(function (t, i) {
    t.addEventListener("click", function () {
      subtabs.forEach(function (x) {
        x.classList.remove("is-active");
      });
      t.classList.add("is-active");
    });
  });

  showPanel("basic");
})();
