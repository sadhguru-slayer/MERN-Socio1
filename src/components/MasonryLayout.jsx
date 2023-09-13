import React from 'react';
import Masonry from 'react-masonry-css';
import Pin from './Pin';

const breakpointColumnsObj = {
  default: 4,
  3000: 7,
  2000: 5,
  1200: 4,
  1000: 3,
  500: 2,
};

const MasonryLayout = ({ pins }) => (
  <Masonry className="flex animate-slide-fwd" breakpointCols={breakpointColumnsObj}>
    {pins?.map((pin) => <Pin key={pin._id} pin={pin} className="w-max" />)}
  </Masonry>
);

export default MasonryLayout;