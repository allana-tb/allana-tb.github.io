(function () {
  // TODO: replace with your real ORCID iD (e.g. "0000-0002-1825-0097")
  var ORCID_ID = "0000-0003-1710-5469";
  var MAX_PUBLICATIONS = 5;
  var container = document.getElementById("pub-list");

  var MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  function formatDate(pubDate) {
    var year = pubDate && pubDate.year && pubDate.year.value;
    if (!year) return "";
    var month = pubDate.month && pubDate.month.value;
    return month ? MONTHS[parseInt(month, 10) - 1] + " " + year : year;
  }

  function sortableValue(pubDate) {
    if (!pubDate || !pubDate.year) return 0;
    var y = parseInt(pubDate.year.value, 10) || 0;
    var m = pubDate.month ? parseInt(pubDate.month.value, 10) || 1 : 1;
    var d = pubDate.day ? parseInt(pubDate.day.value, 10) || 1 : 1;
    return y * 10000 + m * 100 + d;
  }

  function doiUrl(externalIds) {
    var ids = externalIds && externalIds["external-id"];
    if (!ids) return null;
    for (var i = 0; i < ids.length; i++) {
      if (ids[i]["external-id-type"] === "doi") {
        return "https://doi.org/" + ids[i]["external-id-value"];
      }
    }
    return null;
  }

  function normalizedTitle(work) {
    var raw = (work.title && work.title.title && work.title.title.value) || "";
    return raw.toLowerCase().trim().replace(/\s+/g, " ");
  }

  function dedupeByTitle(works) {
    var seen = {};
    return works.filter(function (work) {
      var key = normalizedTitle(work);
      if (!key || seen[key]) return false;
      seen[key] = true;
      return true;
    });
  }

  function showFallback() {
    container.innerHTML =
      '<p class="pub-status">Publications are listed on my ' +
      '<a href="https://orcid.org/' + ORCID_ID + '" target="_blank" style="color: inherit;">ORCID profile</a>.</p>';
  }

  function render(works) {
    if (!works.length) {
      showFallback();
      return;
    }

    container.innerHTML = "";
    works.forEach(function (work) {
      var item = document.createElement("div");
      item.className = "pub-item";

      var titleEl = document.createElement("p");
      titleEl.className = "pub-title";
      var titleText = (work.title && work.title.title && work.title.title.value) || "Untitled";
      var link = doiUrl(work["external-ids"]);
      if (link) {
        var a = document.createElement("a");
        a.href = link;
        a.target = "_blank";
        a.style.color = "inherit";
        a.textContent = titleText;
        titleEl.appendChild(a);
      } else {
        titleEl.textContent = titleText;
      }

      var metaEl = document.createElement("p");
      metaEl.className = "pub-meta";
      var venue = work["journal-title"] && work["journal-title"].value;
      metaEl.textContent = [venue, formatDate(work["publication-date"])].filter(Boolean).join(" · ");

      item.appendChild(titleEl);
      item.appendChild(metaEl);
      container.appendChild(item);
    });
  }

  fetch("https://pub.orcid.org/v3.0/" + ORCID_ID + "/works", {
    headers: { Accept: "application/json" }
  })
    .then(function (res) {
      if (!res.ok) throw new Error("ORCID request failed: " + res.status);
      return res.json();
    })
    .then(function (data) {
      var works = (data.group || [])
        .map(function (g) { return g["work-summary"] && g["work-summary"][0]; })
        .filter(Boolean)
        .sort(function (a, b) {
          return sortableValue(b["publication-date"]) - sortableValue(a["publication-date"]);
        });
      works = dedupeByTitle(works).slice(0, MAX_PUBLICATIONS);
      render(works);
    })
    .catch(showFallback);
})();