const searchFood = () => {
  const searchInput = document.getElementById('search-input')
  const searchInputText = searchInput.value
  console.log(searchInputText)
  // clear serachinput
  searchInput.value = '';

  const noResultFound = document.getElementById('no-result')
  noResultFound.innerHTML=''
  if (searchInputText == '') {
    // console.log(alert('enter a valid input'))
  
  
    const div = document.createElement('div')
    div.innerHTML = `<h3 class="mt-5 text-center text-danger"> Sorry No Result Found!!!</h3>`
    noResultFound.appendChild(div)
  }
  else if(searchInput.length==0){
  }
  else {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputText}`
    fetch(url)
      .then(res => res.json())
      .then(data => displaySearchFood(data.meals))
  }


}
const displaySearchFood = meals => {
  const searchResult = document.getElementById('search-result')
  //  clear previous data 
  searchResult.innerHTML = ''
  meals.forEach(meal => {
    const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML = `<div onclick="loodMealDetails(${meal.idMeal})" class="card h-100">
                     <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
           <div class="card-body">
                     <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
          </div>
  </div>`
    searchResult.appendChild(div)
  })

}
const loodMealDetails = mealId => {
  console.log(mealId)
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))
}
const displayMealDetails = meal => {
  console.log(meal)
  const displayMeal = document.getElementById('displayMeal')
  displayMeal.textContent = ''
  const div = document.createElement('div')
  div.classList.add('col')
  div.innerHTML = `<div class="card" style="width: 18rem;">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
       <div class="card-body">
               <h5 class="card-title">${meal.strMeal}</h5>
               <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
             <a href="${meal.strSource}" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
  displayMeal.appendChild(div)
}