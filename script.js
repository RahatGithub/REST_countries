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
        const h1 = document.createElement('h1');
        const h4 = document.createElement('h4');
        h1.innerText = data[i].name;
        if (data[i].capital){
            h4.innerText = data[i].capital;
        }
        div.appendChild(h1);
        div.appendChild(h4);
        section.appendChild(div);
        div.className = 'country-info';
        div.style.cursor = 'pointer';
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
    const name = document.createElement('h1');
    const region = document.createElement('h3');
    const subregion = document.createElement('h3');
    const area = document.createElement('h3');
    const population = document.createElement('h3');
    name.innerText = "Name: " + country.name;
    region.innerText = "Region: " + country.region;
    subregion.innerText = "Subregion: " + country.subregion;
    area.innerText = "Area: " + country.area + " sq km";
    population.innerText = "Population: " + country.population;
    div.appendChild(name);
    div.appendChild(region);
    div.appendChild(subregion);
    div.appendChild(area);
    div.appendChild(population);
    section.appendChild(div);
    // console.log(country);
    //region, subregion, area, population
}