import React from 'react'
import {GoogleMap,withScriptjs,withGoogleMap,Marker, InfoWindow} from 'react-google-maps'
import './map.scss'
import logo from '../../../../assets/marker.png'
 
class MapObject extends React.Component{
    constructor(props){
        super(props)
        this.state={
            markers:[],
            selectedMarker:null
        }
    }

    componentDidMount(){
        
        setTimeout(()=>{
              this.setState({markers:[{lat:35.149532,lng:-90.048981,name:'Downtown'},{lat:35.1378429,lng:-90.0480183,name:'Cordova'}]})
        },2000)
    }

    render(){
         const {markers,selectedMarker} = this.state

         return <GoogleMap defaultZoom={10} defaultCenter={{lat:35.149532,lng:-90.048981}} >
                   { 
                       markers.map((marker,index)=> <Marker onClick={()=> this.setState({selectedMarker:marker})} 
                                                            key={index} 
                                                            position={{lat:marker.lat,lng:marker.lng}}
                                                            icon={{url:logo,scaledSize: new window.google.maps.Size(25,25)}}   />)
                   }

                   {selectedMarker && <InfoWindow position={{lat:selectedMarker.lat,lng:selectedMarker.lng}} onCloseClick={()=>this.setState({selectedMarker:null})}>
                                            <span>{selectedMarker.name}</span>
                                      </InfoWindow>
                   }

                </GoogleMap>
    }
}

const WrappedMap = withScriptjs(withGoogleMap(MapObject))

export default class Map extends React.Component
{ 
    render(){
       return <div className="map">
            <WrappedMap googleMapURL = {`https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places&key=AIzaSyD8S97eBvrPdiXP9VFLNYLxVeWZSgkUjmA`} 
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />} 
            />
       </div>
    }
}