"use client";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

/* eslint-disable @next/next/no-img-element */
export default function MustSeen() {
    const attractions = [
        {
            title: "La Catedral de Toledo",
            description: "La catedral de Santa María, llamada también catedral primada de España, es un templo católico de arquitectura gótica en Toledo, considerado por algunos como el opus magnum de este estilo en España...",
            image: "./test.jpg",
        },
        {
            title: "Alcázar de Toledo",
            description: "Encaramado en la cima de la colina en la ciudad de Toledo, España, el Alcázar de Toledo es un palacio fortificado con paredes de granito...",
            image: "./alcazar.webp",
        },
        {
            title: "La Judería",
            description: "El barrio de la judería fue uno de los más importantes y destacados de Castilla...",
            image: "./ronda.jpeg",
        },
        {
            title: "San Juan de los Reyes",
            description: "El convento de San Juan de los Reyes es un cenobio de la ciudad española de Toledo perteneciente a la Orden Franciscana...",
            image: "./san-juan.png",
        },
        {
            title: "Museo de El Greco",
            description: "En su interior se encuentra parte de la obra de El Greco...",
            image: "./museogreco.jpg",
        },
        {
            title: "Museo de El Greco",
            description: "En su interior se encuentra parte de la obra de El Greco...",
            image: "./museogreco.jpg",
        },
        {
            title: "Museo de El Greco",
            description: "En su interior se encuentra parte de la obra de El Greco...",
            image: "./museogreco.jpg",
        },
        {
            title: "Museo de El Greco",
            description: "En su interior se encuentra parte de la obra de El Greco...",
            image: "./museogreco.jpg",
        },
        {
            title: "Museo de El Greco",
            description: "En su interior se encuentra parte de la obra de El Greco...",
            image: "./museogreco.jpg",
        },
        {
            title: "Museo de El Greco",
            description: "En su interior se encuentra parte de la obra de El Greco...",
            image: "./museogreco.jpg",
        },
        {
            title: "Museo de El Greco",
            description: "En su interior se encuentra parte de la obra de El Greco...",
            image: "./museogreco.jpg",
        },
        {
            title: "Museo de El Greco",
            description: "En su interior se encuentra parte de la obra de El Greco...",
            image: "./museogreco.jpg",
        },
        {
            title: "Museo de El Greco",
            description: "En su interior se encuentra parte de la obra de El Greco...",
            image: "./museogreco.jpg",
        },
        {
            title: "Museo de El Greco",
            description: "En su interior se encuentra parte de la obra de El Greco...",
            image: "./museogreco.jpg",
        },
        {
            title: "Museo de El Greco",
            description: "En su interior se encuentra parte de la obra de El Greco...",
            image: "./museogreco.jpg",
        },
        {
            title: "Museo de El Greco",
            description: "En su interior se encuentra parte de la obra de El Greco...",
            image: "./museogreco.jpg",
        },
        {
            title: "Museo de El Greco",
            description: "En su interior se encuentra parte de la obra de El Greco...",
            image: "./museogreco.jpg",
        },
        {
            title: "Museo de El Greco",
            description: "En su interior se encuentra parte de la obra de El Greco...",
            image: "./museogreco.jpg",
        },
        {
            title: "Museo de El Greco",
            description: "En su interior se encuentra parte de la obra de El Greco...",
            image: "./museogreco.jpg",
        },
        {
            title: "Museo de El Greco",
            description: "En su interior se encuentra parte de la obra de El Greco...",
            image: "./museogreco.jpg",
        },
        {
            title: "Museo de El Greco",
            description: "En su interior se encuentra parte de la obra de El Greco...",
            image: "./museogreco.jpg",
        },
        {
            title: "Museo de El Greco",
            description: "En su interior se encuentra parte de la obra de El Greco...",
            image: "./museogreco.jpg",
        },
        {
            title: "Museo de El Greco",
            description: "En su interior se encuentra parte de la obra de El Greco...",
            image: "./museogreco.jpg",
        },
        {
            title: "Museo de El Greco",
            description: "En su interior se encuentra parte de la obra de El Greco...",
            image: "./museogreco.jpg",
        },
        {
            title: "Museo de El Greco",
            description: "En su interior se encuentra parte de la obra de El Greco...",
            image: "./museogreco.jpg",
        },
        {
            title: "Museo de El Greco",
            description: "En su interior se encuentra parte de la obra de El Greco...",
            image: "./museogreco.jpg",
        },
        {
            title: "Museo de El Greco",
            description: "En su interior se encuentra parte de la obra de El Greco...",
            image: "./museogreco.jpg",
        }
    ];
    
    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1440 }, items: 5 },
        desktop: { breakpoint: { max: 1440, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
        mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
      };
    
      return (
        <section id="importante" className="flex flex-col gap-4">
          <h1 className="font-bold text-xl">¿Los sitios más importantes?</h1>
          <div className="h-auto sm:h-64 xl:h-80 2xl:h-96">
            <Carousel 
              responsive={responsive} 
              infinite={true} 
              swipeable={true}
              draggable={true}
            >
              {attractions.map(({ image, title }, i) => (
                <div
                  key={i}
                  className="hover:scale-105 transition-all h-48 w-full text-center"
                >
                  <img
                    src={image}
                    alt={title}
                    
                    className="rounded-xl object-cover lg:w-[95%] h-40"
                  />
                  <h3 className="font-medium text-base mt-2">{title}</h3>
                </div>
              ))}
            </Carousel>
          </div>
        </section>
      );
}