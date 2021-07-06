import React from 'react'
import ImageGridItem, { ImageGridItemProps } from './ImageGridItem';

export interface ImageGridProps {
  gridItems: ImageGridItemProps[];
}
const ImageGrid = ({ gridItems }: ImageGridProps) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-14 justify-items-center items-center px-14'>
      {gridItems.map(({ title, image, url, category }) => <ImageGridItem key={title} title={title} image={image} url={url} category={category} />)}
    </div>
  );
}

export default ImageGrid;
