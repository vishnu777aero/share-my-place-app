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
  }

  findAddressHandler() {
    
  }
}