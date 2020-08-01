export class Modal {
  constructor(contentId, fallbackText) {
    this.fallbackText = fallbackText;
    this.contentTemplateEl = document.getElementById(contentId);
    this.modalTemplateEl = document.getElementById('modal-template');
  }

  show(){
    if ('content' in document.createElement('template')) {
      //check if template tag is supported in the browser
      const modalElements = document.importNode(
        this.modalTemplateEl.content,
        true
      );

      this.modalElement = modalElements.querySelector('.modal');
      this.backdropElement = modalElements.querySelector('.backdrop');
      
      const contentElement = document.importNode(
        this.contentTemplateEl.content,
        true
      );

      this.modalElement.appendChild(contentElement);

      document.body.insertAdjacentElement('afterbegin', this.modalElement);
      document.body.insertAdjacentElement("afterbegin", this.backdropElement);
    } else {
      //fallback code
      alert(this.fallbackText);
    }
  }

  hide() {
    if (this.modalElement) {
      this.modalElement.remove(); //document.body.removeChild(this.modalElement);
      this.modalElement = null;
      
      this.backdropElement.remove(); //document.body.removeChild(this.backdropElement);
      this.backdropElement = null;
    }
  }
}