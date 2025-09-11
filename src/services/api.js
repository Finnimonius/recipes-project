export async function fetchDataRandom() {
    try {

        let response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        let data = await response.json()

        if (!response.ok) {
            throw new Error("Response status: false")
        }

        return data
    } catch (error) {
        console.error(error)
    }
}

export async function fetchDataMealCategories() {
    try {
        let response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        let data = await response.json()

        if (!response.ok) {
            throw new Error("Response status: false")
        }

        return data
    } catch (error) {
        console.error(error)
    }
}

export async function fetchDataMealCategorie(category) {
    try {
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
        let data = await response.json()

        if (!response.ok) {
            throw new Error("Response status: false")
        }

        return data
    } catch (error) {
        console.error(error)
    }
}

export async function fetchDataMealId() {
    try {
        let response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef')
        let data = await response.json()

        if (!response.ok) {
            throw new Error("Response status: false")
        }

        return data
    } catch (error) {
        console.error('Ошибка', error)
    }
}