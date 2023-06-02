//we can use this class to show a google map with markers on any project


//instruction for every class on how they can be an argument to 'addMarker'.  to be mappable, to be an argument to addMarker, you need a location property that is an object that has a lat property that's a number and an lng property that's a number
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

//google.maps.Map is an instance of customMap
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divID: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divID) as HTMLElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  //to be an argument to addMarker you have to satisfy the Mappable interface above       ....
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      } 
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });

        infoWindow.open(this.googleMap, marker);

    });

  }
}