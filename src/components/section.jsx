import React from "react";
import { Button } from "./button";
import { Card } from "./card";

export function Section({section,recipes}) {
  return <>
        <div className='border-gray-300 border-b-2 mt-16'>
        <h4 className="text-3xl container font-bold pb-2">{section}</h4>
        </div>
        
        <div className="container mt-8 grid md:grid-cols-3 gap-4">
          {/* {recipes.map((recipe)=>  <Card shef="muhammed" recipe="5 Bean Chilli Stew" time={25} imgSrc={"img/1.webp"} /> )} */}
          <Card shef="muhammed" recipe="5 Bean Chilli Stew" time={25} imgSrc={"img/1.webp"} />
          <Card shef="ahmed" recipe="5 Bean Chilli Stew" time={35} imgSrc={"img/2.jpg"} />
          <Card shef="muhammed" recipe="5 Bean Chilli Stew" time={20} imgSrc={"img/3.jpg"} />
          <Card shef="muhammed" recipe="5 Bean Chilli Stew" time={25} imgSrc={"img/4.webp"} />
          <Card shef="ahmed" recipe="5 Bean Chilli Stew" time={35} imgSrc={"img/5.jpg"} />
          <Card shef="muhammed" recipe="5 Bean Chilli Stew" time={20} imgSrc={"img/6.jpg"} />
          <div className='flex justify-center my-5 md:col-span-3'>
            <Button className="px-10 py-3" type="primary">Load More</Button>
          </div>
        </div>
        </>;
}
  