import React, { useState } from 'react'
import data from '../data.js'

const Gallery = () => {
  const [images, setImages] = useState(data)

  return (
    <>
      <h2 className="text-center font-bold tracking-widest text-3xl text-white pt-10 bg-red-500">
        Gallery
      </h2>

      <section className="gallery grid grid-cols-1 gap-2 px-5 py-6 bg-red-500 md:grid-cols-2 lg:grid-cols-3 lg:gap-1 xl:grid-cols-5">
        {images.map((image) => {
          return (
            <div key={image.id}>
              <img src={image.path} alt="gallery grid" />
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Gallery
