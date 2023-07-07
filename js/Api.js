export async function getData(URL,POKEMON){

    try{
        const response = await fetch(URL+POKEMON);
        const data = await response.json();
        return data

    }catch(e){
        alert("Ingresa un nombre vàlido.")
        return console.log(e)
    }

}