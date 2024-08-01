import React from "react";
import "./Form.css";

const Form = (props) => {
  return (
    <div class="whole-form">
      <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
      <form
        action="https://app.convertkit.com/forms/6901290/subscriptions"
        class="seva-form formkit-form"
        method="post"
        data-sv-form="6901290"
        data-uid="3c3caa593c"
        data-format="inline"
        data-version="5"
        data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
        min-width="400 500 600 700 800"
        data-gtm-form-interact-id="1"
      >
        <div class="formkit-background"></div>
        <div data-style="minimal">
          <div class="formkit-header" data-element="header">
            <h2>Join the Newsletter...</h2>
          </div>
          <div class="formkit-subheader" data-element="subheader">
            <p>C'mon it's free!</p>
          </div>
          <ul
            class="formkit-alert formkit-alert-error"
            data-element="errors"
            data-group="alert"
          ></ul>
          <div
            data-element="fields"
            data-stacked="true"
            class="seva-fields formkit-fields"
          >
            <div class="formkit-field">
              <input
                class="formkit-input"
                aria-label="First Name"
                name="fields[first_name]"
                placeholder="First Name"
                type="text"
              />
            </div>
            <div class="formkit-field">
              <input
                class="formkit-input"
                name="email_address"
                aria-label="Email Address"
                placeholder="Email Address"
                required=""
                type="email"
                data-gtm-form-interact-field-id="1"
              />
            </div>
            <button data-element="submit" class="formkit-submit formkit-submit">
              <div class="formkit-spinner">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <span class="">Subscribe</span>
            </button>
          </div>
          <div class="formkit-guarantee" data-element="guarantee">
            <p class="disclosure">We won't send you spam. Unsubscribe at any time.</p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
