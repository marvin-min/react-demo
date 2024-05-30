import React, { ReactDOM, useCallback, useEffect, useRef, useState } from 'react'

import './App.css';
import MapDemo from './MapDemo';
import debounce from 'lodash/debounce';
import truncate from 'lodash/truncate';
const App = () => {
  const myLatLng = { lat: -33.91722, lng: 151.23064 };
  const points = [
    {
      id: '1',
      position: { lat: -33.91721, lng: 151.2263 },
      active: false,
    },
    {
      id: '2',
      position: { lat: -33.91721, lng: 151.2263 },
      active: false,
    },
    {
      id: 'a',
      position: { lat: -33.91721, lng: 151.2263 },
      active: false,
    },
    {
      id: 'b',
      position: { lat: -33.91539, lng: 151.2282 },
      active: false,
    },
    {
      id: 'c',
      position: { lat: -33.91747, lng: 151.22912 },
      active: false,
    },
    {
      id: 'd',
      position: { lat: -33.9191, lng: 151.22907 },
      active: false,
    },
    {
      id: 'e',
      position: { lat: -33.91725, lng: 151.23011 },
      active: false,
    },
    {
      id: 'f',
      position: { lat: -33.91872, lng: 151.23089 },
      active: false,
    },
    {
      id: 'g',
      position: { lat: -33.91784, lng: 151.23094 },
      active: false,
    },
    {
      id: 'h',
      position: { lat: -33.91682, lng: 151.23149 },
      active: false,
    },
    {
      id: 'i',
      position: { lat: -33.9179, lng: 151.23463 },
      active: false,
    }
  ];
  const [locations, setLocations] = useState(points);
  const [activeItem, setActiveItem] = useState('');

  const handleMouseLeave = () => {
    setActiveItem('');
  }
  const handleMouseOver = (id) => {
    setActiveItem(id);
  }
  const handleHightItem = (id) => {
    console.log('ooo')
    console.log(id)
  }
  const ref = useRef();
  const scroll = () =>
    ref?.current?.scrollIntoView({ behavior: "smooth" });

  const refs = locations.reduce((acc, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});
  console.log(refs)

  const debouncedRef = useRef(null);

  function updateData() {
    points[3].id = 'dddd'
    setLocations(points);
    console.log('............')
  }

  const handleBoundChange = useCallback((data) => {
    if (debouncedRef.current && debouncedRef.current.cancel) {
      console.log('Canceling previous debounce...');
      debouncedRef.current.cancel();
    }
    debouncedRef.current = debounce(updateData, 1000);
    debouncedRef.current(data); // 调用debounced函数
  }, []);
  // const counter = {}

  // locations.forEach(function (obj) {
  //   var key = `key_${obj.position.lat}_${obj.position.lng}`
  //   if (counter[key]) {
  //     counter[key].push(obj.id)
  //   } else {
  //     counter[key] = [obj.id]
  //   }
  // })
  // console.log(counter)
  return (
    <div className='body'>
      <div className='header'>
        Header
      </div>
      <div className='content-container '>

        <ul>
          {locations.map((point, index) => {
            return (
              <li ref={refs[point.id]} key={point.id} className={activeItem === point.id ? 'active' : ''} onMouseEnter={() => handleMouseOver(point.id)} onMouseLeave={handleMouseLeave}>
                <p>{truncate(point.id + '  Note that the development build is not optimized',{
              length: 10,
              separator: ' ',
            })}</p>
              </li>
            )
          })}
        </ul>
        <MapDemo {...{ handleBoundChange, myLatLng, refs, locations, handleMouseOver, activeItem }} />
      </div>
    </div>
  )
}

export default App