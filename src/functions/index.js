import Card from "../views/home/Card";
import Option from "../views/home/Option"

export const renderBreeds = (breeds) => {
  console.log(breeds, "aaa");
  return breeds ? breeds.bredds.map((breed) => {
    return <Option key={breed.id} id={breed.id} name={breed.name} />
  }) : <div>cargando...</div>
}


export const renderCards = (breeds) => {
  console.log(breeds, "aaa");
  return breeds ? breeds.random.map((breed) => {
    return <Card key={breed.id} id={breed.id} name={breed.name} img={breed.img.url} />
  }) : <div>cargando...</div>
}