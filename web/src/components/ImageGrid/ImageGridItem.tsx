import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react'

export interface ImageGridItemProps {
  image: any,
  title: string,
  url: string,
  category: string,
}

function ImageGridItem({ image, title, url, category }: ImageGridItemProps) {
  return (
    <figure>
      {/* <div> */}
      <GatsbyImage
        image={image}
        alt=""
      // style={{ height: "100%", width: "100%" }}
      />
      {/* </div> */}
      <figcaption className="mt-4">
        <h3 className="text-3xl">{category} // {title}</h3>
      </figcaption>
    </figure>
  );
}

export default ImageGridItem
