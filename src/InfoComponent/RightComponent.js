import "./RightComponent.css";

const RightComponent = (props) => {
  return (
  <div className="RightDiv">
    <form>
      <ul class="form-style-1">
        <li>
          <label>
            Full Name <span class="required">*</span>
          </label>
         
          <input
            value={props.send.firstName}
            type="text"
            name="field1"
            class="field-divided"
            placeholder="First"
          />{" "}
          <input
            value={props.send.lastName}
            type="text"
            name="field2"
            class="field-divided"
            placeholder="Last"
          />
        </li>
        <li>
          <label>
            Email <span class="required">*</span>
          </label>
          <input value={props.send.email} type="email" name="field3" class="field-long" />
        </li>
        <li>
          <label>Subject</label>
          <select name="field4" class="field-select">
            <option value="Advertise">Advertise</option>
            <option value="Partnership">Partnership</option>
            <option value="General Question">General</option>
          </select>
        </li>
        <li>
          <label>
            Your Message <span class="required">*</span>
          </label>
          <textarea
            value={props.send.Message}
            name="field5"
            id="field5"
            class="field-long field-textarea"
          ></textarea>
        </li>
        <li>
        </li>
      </ul>
    </form>
  </div>
)};

export default RightComponent;
