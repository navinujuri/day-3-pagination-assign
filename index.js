const prev = document.getElementById("load_prev");
const next = document.getElementById("load_next");
const pagenumberdisplayer = document.getElementById("pagenumberdisplayer");
const ol = document.getElementById("ol");

let pageNumberHere = 1;

async function apicaller() {
  try {
    ol.innerHTML = "";
    const res = await fetch(
      `https://api.github.com/repositories/1296269/issues?page=${pageNumberHere}&per_page=5`
    );
    const data = await res.json();
    data.forEach((obj) => {
      ol.innerHTML += `<li><div>Issue: ${obj.number}</div>
      <div>Title: ${obj.title}</div></li>`;
    });
  } catch (e) {
    console.log(e);
  }
}
function prevpageviewer() {
  if (pageNumberHere > 1) {
    prev.disabled = false;
    pageNumberHere--;
    pagenumberdisplayer.innerText = pageNumberHere;
    apicaller();
  } else prev.disabled = true;
}

function nextpageviewer() {
  pageNumberHere++;
  pagenumberdisplayer.innerText = pageNumberHere;
  apicaller();
}
