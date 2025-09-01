export async function fetchData() {
    try {
        await new Promise(resolve => setTimeout(resolve, 2000));

        let response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        let data = await response.json()

        if(!response.ok) {
            throw new Error("Response status: false")
        }

        return data
    } catch (error) {
        console.error(error)
    }
}