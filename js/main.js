class CustomFeedbackElement extends HTMLElement {
  constructor() {
    super();
    // It is not strictly required but recommended to contain the custom
    // element in a shadow root.
    this.renderRoot = this.attachShadow({mode: 'open'});
  }

  // Web component Lifecycle method.
  connectedCallback() {
    const wrapper = document.createElement('div');

    // Build the component as required.
    const button = document.createElement('button');
    button.innerText = 'Submit';
    button.addEventListener('click', () => {
      this._onSubmitClick();
    });
    wrapper.appendChild(button);

    this.renderRoot.appendChild(wrapper);
  }

  // Called when Submit button is clicked.
  _onSubmitClick() {
    const event = new CustomEvent("df-custom-submit-feedback-clicked", {
      // `detail` may be any string,
      // this will be sent to the backend to be stored.
      detail: JSON.stringify({
        "usefulness": 2,
        "accuracy": 3,
      }),
      // Required to propagate up the DOM tree
      // https://developer.mozilla.org/en-US/docs/Web/API/Event/bubbles
      bubbles: true,
      // Required to propagate across ShadowDOM
      // https://developer.mozilla.org/en-US/docs/Web/API/Event/composed
      composed: true,
   });
   this.dispatchEvent(event);
  }
}

(function() {
  // Registers the element. This name must be "df-external-custom-feedback".
  customElements.define('df-external-custom-feedback', CustomFeedbackElement);
})();
