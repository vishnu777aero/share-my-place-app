import { Modal } from './UI/Modal';
import { Map } from './UI/Map';

class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector('form');
    const locateUserButton = document.getElementById('locate-btn');

    locateUserButton.addEventListener('click', this.locateUserHandler);
    locateUserButton.showSharableLink = this.showSharableLink;
    addressForm.addEventListener('submit', this.findAddressHandler);
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert('Location feature not available, please enter an address manually');
      return;
    }

    const modal = new Modal('loading-modal-content', 'Please wait! Loading user location...');
    modal.show();

    navigator.geolocation.getCurrentPosition(successResult => {
      setTimeout(() => modal.hide(), 1000); //just to enjoy the spinner
      
      const coordinates = {
        lat: successResult.coords.latitude,
        lng: successResult.coords.longitude,
      };

      console.info('Successfully located user!');
      console.table(coordinates);

      new Map(coordinates);
      this.showSharableLink(coordinates);
    }, error => {
      modal.hide();
      alert('Could not locate you, please enter an address manually!');
      console.error(error);
    });
  }

  showSharableLink(coordinates) {
    const link = `https://www.google.com/maps/@${coordinates.lat},${coordinates.lng}`;
    const sharableLink = document.getElementById('share-link');
    sharableLink.value = link;
  }

  findAddressHandler() {
    
  }
}

new PlaceFinder();