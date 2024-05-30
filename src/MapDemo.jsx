import React from 'react'
import {
  APIProvider,
  Marker,
  Map,
} from '@vis.gl/react-google-maps';

const GOOGLE_MAP_API_KEY = '';
const currentLocation = '';
const defaultIcon = '';
const hoverIcon = '';
const Markers = ({ locations, activeItem, handleClick, handleMouseOver }) => {
  const latLngs = [];

  const getCoordinatePosition = (lat, lng) => {
    const posStr = `${lat}_${lng}`;
    if (latLngs.includes(posStr)) {
      return {lat: lat + Math.random()/10000, lng:lng + Math.random()/10000}
    }
    latLngs.push(posStr)
    return {lat, lng}
  }
  console.log(latLngs)
  return <>
      {
      locations.map((point, index) => {
        const { lat, lng } = point.position;
        
                return (
                  <Marker position={getCoordinatePosition(lat,lng)} icon={activeItem === point.id ? defaultIcon : hoverIcon}
                    onClick={() => handleClick(point.id)}
                    key={index} onMouseOver={()=>handleMouseOver(point.id)} />
                )
              })}
  </>
}

const MapDemo = ({ handleBoundChange, myLatLng, refs, locations, handleMouseOver, activeItem}) => {

  const handleClick = id => {
    // let postion = refs[id].current.offsetTop + 300
      // console.log()
      refs[id].current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    
      // window.scrollTo({
      //   top: ,
      //   behavior: "smooth",
      // });
  }
console.log('render map.....')
  return (
    <div className='google-map-container'>
        <APIProvider apiKey={GOOGLE_MAP_API_KEY}>
          <Map
            mapId={'DEMO_MAP_ID'}
            defaultCenter={myLatLng}
            defaultZoom={16}
            minZoom={5}
            maxZoom={18}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
            fullscreenControl={false}
            scrollwheel={false}
            mapTypeControl={false}
              streetViewControl={false}
              onZoomChanged={handleBoundChange}
              onDragend={handleBoundChange}
            style={{
              borderRadius: '0.625rem',
            }}>
            <Marker position={myLatLng} icon={currentLocation} />
            <Markers {...{locations, activeItem, handleClick, handleMouseOver}}/>
          </Map>
        </APIProvider>
      </div>
  )
}

export default MapDemo