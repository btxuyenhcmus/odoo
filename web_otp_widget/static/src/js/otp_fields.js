odoo.define("web_otp_widget.otp_fields", function (require) {
  "use strict";
  var AbstractField = require("web.AbstractField");
  var fieldRegistry = require("web.field_registry");
  var OtpFields = AbstractField.extend({
    template: "otp_fields",
    supportedFieldTypes: ["char"],

    start: function () {
      var self = this;
      return this._super.apply(this, arguments).then(function () {
        const inputs = self.el.querySelectorAll("#otp > *[id]");
        for (let i = 0; i < inputs.length; i++) {
          inputs[i].addEventListener("keydown", function (event) {
            if (event.key === "Backspace") {
              inputs[i].value = "";
              if (i !== 0) {
                inputs[i - 1].focus();
                event.preventDefault();
              }
            } else {
              if (i === inputs.length - 1 && inputs[i].value !== "") {
                return;
              } else if (event.keyCode > 47 && event.keyCode < 58) {
                inputs[i].value = event.key;
                if (i !== inputs.length - 1) inputs[i + 1].focus();
                event.preventDefault();
              } else if (event.keyCode > 64 && event.keyCode < 91) {
                inputs[i].value = String.fromCharCode(event.keyCode);
                if (i !== inputs.length - 1) inputs[i + 1].focus();
                event.preventDefault();
              }
            }
            self._setValue(self._computeValue());
          });
        }
      });
    },

    _computeValue: function () {
      const inputs = this.el.querySelectorAll("#otp > *[id]");
      let values = [];
      for (let i = 0; i < inputs.length; i++) {
        values.push(inputs[i].value);
      }
      return values.join("");
    },
  });

  fieldRegistry.add("otp_fields", OtpFields);
  return OtpFields;
});
