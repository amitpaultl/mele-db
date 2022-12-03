const jeson = ()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
}

// jeson()

const asny = async() => {
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';
    const res = await fetch(url);
    const data = await res.json();
    dispaly(data);
}

const dispaly = data =>{
    const ol = document.getElementById('ol')
    ol.innerText = data.meals[0].strMeal
    data.meals.forEach(element => {
        const h2 = document.createElement('h2')
        h2.innerText = element.strMeal
        ol.appendChild(h2)
    });
}

asny()
