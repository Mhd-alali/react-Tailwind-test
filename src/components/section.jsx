import React from "react";
import { Button } from "./button";
import { Card } from "./card";

export function Section({section,recipes}) {


  return (
  <>
    <section>
      <div className='border-gray-300 border-b-2'>
        <h4 className="text-3xl container font-bold py-2">{section}</h4>
      </div>
      <div className="container mt-8 grid md:grid-cols-3 gap-5">
        {recipes && recipes.map((recipe)=>  <Card ID={recipe.id} key={recipe.id} dishTypes={recipe.dishTypes} recipe={recipe.title} time={recipe.readyInMinutes} imgSrc={recipe.image} /> )}
         <Card ID={23} dishTypes={["Type1","Type2","Type3"]} recipe={"recipe.title"} time={45} imgSrc={"./img/1.webp"} />
         <Card ID={23} dishTypes={["Type1","Type2","Type3"]} recipe={"recipe.title"} time={45} imgSrc={"./img/2.jpg"} />
         <Card ID={23} dishTypes={["Type1","Type2","Type3"]} recipe={"recipe.title"} time={45} imgSrc={"./img/3.jpg"} />
         <Card ID={23} dishTypes={["Type1","Type2","Type3"]} recipe={"recipe.title"} time={45} imgSrc={"./img/4.webp"} />
         <Card ID={23} dishTypes={["Type1","Type2","Type3"]} recipe={"recipe.title"} time={45} imgSrc={"./img/5.jpg"} />
         <Card ID={23} dishTypes={["Type1","Type2","Type3"]} recipe={"recipe.title"} time={45} imgSrc={"./img/6.jpg"} />
        <div className='flex justify-center my-5 md:col-span-3'>
          <Button className="px-10 py-3" type="primary">Load More</Button>
        </div>
      </div>
    </section>
  </>
  )
}
