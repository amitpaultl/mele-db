
const searchValu = () =>{
    const value = document.getElementById('search-name')
    foodUrl(value.value)
}



const foodUrl = (name)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => foodDispaly(data.meals))
}

const foodDispaly = data =>{
    const prantTsg = document.getElementById('prant');
    prantTsg.innerHTML = '';
    data.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        
          <div class="card" onclick="foodId(${element.idMeal})">
            <img src=${element.strMealThumb} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${element.strMeal}</h5>
              <p class="card-text">${element.strInstructions.slice(0, 100)}</p>
            </div>
          </div>
        
        `
        prantTsg.appendChild(div);
    }); 
}

const foodId = (id) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => disFood(data))
}

const disFood = (datas) =>{
    const sigleFood = document.getElementById('single-meal');
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="card" >
        <img src=${datas.meals[0].strMealThumb} class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${datas.meals[0].strMeal}</h5>
            <p class="card-text">${datas.meals[0].strInstructions.slice(0,200)}</p>
        </div>
    </div>
    
    `
    sigleFood.appendChild(div)
    console.log(datas.meals[0]);
}



foodUrl('')
