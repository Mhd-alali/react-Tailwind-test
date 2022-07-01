import * as React from 'react'
import { Nav } from './components/Nav';
import { Card } from './components/Card';
import { Header } from './components/Header';
import { Button } from './components/Button';

function App() {

  return (
    <>
      <div>
        <Nav/>
      </div>
      <main className='bg-[#ededed] rounded-t-3xl pb-10'>
        <header className='container pt-5 '>
          <Header type="h2" className=" md:text-center font-semibold">Resipes</Header>
          <Header type="h3" className=" md:text-center mt-2 text-gray-600 font-semibold">For ninjas</Header>
        </header>
        <div className='border-gray-300 border-b mt-10'>
          <Header type="h4" className=" container font-bold  pb-2 ">Latest Recipes</Header>
        </div>

        <div className="container mt-8 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 ">
          <Card shef="muhammed" recipe="5 Bean Chilli Stew" time={25} imgSrc={"img/1.webp"}/>
          <Card shef="ahmed" recipe="5 Bean Chilli Stew" time={35} imgSrc={"img/2.jpg"}/>
          <Card shef="muhammed" recipe="5 Bean Chilli Stew" time={20} imgSrc={"img/3.jpg"}/>
          <Card shef="muhammed" recipe="5 Bean Chilli Stew" time={25} imgSrc={"img/4.webp"}/>
          <Card shef="ahmed" recipe="5 Bean Chilli Stew" time={35} imgSrc={"img/5.jpg"}/>
          <Card shef="muhammed" recipe="5 Bean Chilli Stew" time={20} imgSrc={"img/6.jpg"}/>
        </div>

        <div className='border-gray-300 border-b mt-16'>
        <Header type="h4" className="container font-bold pb-2 ">Most Populer</Header>
        </div>

        <div className="container mt-8 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4">
          <Card shef="muhammed" recipe="5 Bean Chilli Stew" time={25} imgSrc={"img/1.webp"}/>
          <Card shef="ahmed" recipe="5 Bean Chilli Stew" time={35} imgSrc={"img/2.jpg"}/>
          <Card shef="muhammed" recipe="5 Bean Chilli Stew" time={20} imgSrc={"img/3.jpg"}/>
          <Card shef="muhammed" recipe="5 Bean Chilli Stew" time={25} imgSrc={"img/4.webp"}/>
          <Card shef="ahmed" recipe="5 Bean Chilli Stew" time={35} imgSrc={"img/5.jpg"}/>
          <Card shef="muhammed" recipe="5 Bean Chilli Stew" time={20} imgSrc={"img/6.jpg"}/>
        </div>

        <div className='flex justify-center'>
          <Button className=" px-10 py-3 mt-10" type="primary">Load More</Button>
        </div>
      </main>
    </>
  )
}

export default App