function loadData(){
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => {
        showData(data);
    })
}

const loadBtn = document.getElementById('load-btn');
loadBtn.addEventListener('click', function(){
    loadData();
})



function showData(data){

    const section = document.getElementById('country-info-section');
    section.style.display = 'grid';

    const extraSection = document.getElementById('extra-info-section');
    extraSection.style.display = 'none';

    for(let i=0; i<data.length; i++){
        const div = document.createElement('div');
        const name = data[i].name;
        let capital = "";
        if (data[i].capital){
            capital = data[i].capital;
        }
        div.innerHTML = `
            <h1>${name}</h1>
            <h4>${capital}</h4>
        `
        section.appendChild(div);
        div.className = 'country-info';
        //For showing extra info
        div.addEventListener('click', function(){
            section.style.display = 'none';
            showExtra(data[i]);
        })
    }

}

function showExtra(country){
    const section = document.getElementById('extra-info-section');
    section.style.display = 'block';
    section.innerText = "";
    const div = document.createElement('div');
    const name = country.name;
    const region = country.region;
    const subregion = country.subregion;
    const area = country.area;
    const population = country.population;
    div.innerHTML = `
        <h1>Name: ${name}</h1>
        <h3>Region: ${region}</h3>
        <h3>Subregion: ${subregion}</h3>
        <h3>Area: ${area} sq km</h3>
        <h3>Population: ${population}</h3>
    `
    section.appendChild(div);
}