// import React, {useRef, useEffect} from 'react'
// import './Map.css'

// function Map(props) {
//     const mapRef = useRef();

// const {center, zoom} = props
//     useEffect(() => {
//         const map = new window.google.maps.Map(mapRef.current, {
//             center: center,
//             zoom : zoom
//         });
    
//         new window.google.maps.Marker({position: center, map: map})
//     }, [center, zoom]);


    
//   return (
//     <>
//     <div className={`map ${props.className}`} ref={mapRef} style={props.style} ></div>
//     </>
//   )
// }

// export default Map  