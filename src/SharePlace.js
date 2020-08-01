class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector('form');
    const locateUserButton = document.getElementById('locate-btn');

    locateUserButton.addEventListener('click', this.locateUserHandler);
    addressForm.addEventListener('submit', this.findAddressHandler);
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert('Location feature not available, please enter an address manually');
      return;
    }

    navigator.geolocation.getCurrentPosition(successResult => {
      const coordinates = {
        lat: successResult.coords.latitude,
        lng: successResult.coords.longitude,
      };

      console.info('Successfully located user!');
      console.table(coordinates);
    }, error => {
      alert('Could not locate you, please enter an address manually!')
      console.error(error);
    })
  }

  findAddressHandler() {
    
  }
}

new PlaceFinder();