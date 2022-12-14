import "./LeftComponent.css";

const LeftComponent = (props) => {
  const submitInfoHandler = (event) => {
    event.preventDefault();
    props.passTheInformation(event);
    event.target.reset();
  };
  return (
    <div className="LeftDiv">
    <form onSubmit={submitInfoHandler}>
      <ul class="form-style-1">
        <li>
          <label>
            Full Name <span class="required">*</span>
          </label>
          <input
            type="text"
            name="field1"
            class="field-divided"
            placeholder="First"
          />{" "}
          <input
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
          <input type="email" name="field3" class="field-long" />
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
            name="field5"
            id="field5"
            class="field-long field-textarea"
          ></textarea>
        </li>
        <li>
          <button type="submit" value="Submit">
            Submit
          </button>
        </li>
      </ul>
    </form>
    </div>
  );
};
export default LeftComponent;
