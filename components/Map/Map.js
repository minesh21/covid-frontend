import MarkerClusterGroup from 'react-leaflet-markercluster';
import React from 'react'
import { MapContainer, TileLayer, Marker} from 'react-leaflet'
import L from 'leaflet';
import { Constants } from '../../constants';
const Map = ({location, cases}) => {
    return (
        <MapContainer 
            zoom={3}
            scrollWheelZoom={false} 
            center={location ? [56.1304, -106.3468] : Constants.centerLatLng[location] }>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {
                
                cases && cases.length > 0 ? 
                            Constants.provinces.map((province, index) => {
                                const provCase = cases.find(g => g.province === province.slug);
                                const short = province.short;
                            
                                return !Constants.centerLatLng[short]  ? null : 
                                            <Marker 
                                                key={index+'-map-key'} 
                                                position={Constants.centerLatLng[short]} 
                                                icon={ L.divIcon({
                                                    html: `<span>
                                                            <span>${short.toUpperCase()}</span>
                                                            <span>${parseInt(provCase.cases).toLocaleString()}</span>
                                                        </span>`,
                                                    className: 'custom-marker',
                                                    iconSize: [80, 80]
                                                })}/>
                                      
                                        
                    
                            })
                                            
                : null
            }
        </MapContainer>
    )
}



export default Map
