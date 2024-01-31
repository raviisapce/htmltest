function App() {
  return (
    <div>
      <h1>Dispatch Form</h1>
      <div class="container">
        <form>
          <div class="row">
            <div class="col-25">
              <label for="fname">First Name</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="mname">Middle Name</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="mname"
                name="middlename"
                placeholder="Your middle name.."
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="lname">Last Name</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="hno">House No</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="hno"
                name="houseno"
                placeholder="Your house number.."
              />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="preDir">Prefix Directional</label>
            </div>
            <div class="col-75">
              <input type="text" id="preDir" name="prefixDirectional" />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="sName">Street name</label>
            </div>
            <div class="col-75">
              <input type="text" id="sName" name="streetName" />
            </div>
          </div>
          <div class="row">
            <div class="col-25">
              <label for="sSuffix">Street Suffix</label>
            </div>
            <div class="col-75">
              <input type="text" id="sSuffix" name="streetSuffix" />
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label for="cty">City</label>
            </div>
            <div class="col-75">
              <input type="text" id="cty" name="city" />
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label for="stae">State</label>
            </div>
            <div class="col-75">
              <input type="text" id="stae" name="state" />
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label for="zp">Zip</label>
            </div>
            <div class="col-75">
              <input type="text" id="zp" name="zip" />
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label for="cty">County</label>
            </div>
            <div class="col-75">
              <input type="text" id="cty" name="county" />
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label for="assigDispatcher">Assigned Dispatcher</label>
            </div>
            <div class="col-75">
              <input
                type="text"
                id="assigDispatcher"
                name="assignedDispatcher"
              />
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label for="dTime">Dispatch Time</label>
            </div>
            <div class="col-75">
              <input type="text" id="dTime" name="dispatchTime" />
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label for="aTime">Accept Time</label>
            </div>
            <div class="col-75">
              <input type="text" id="aTime" name="acceptTime" />
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label for="arrTime">Arrival Time</label>
            </div>
            <div class="col-75">
              <input type="datetime-local" id="arrTime" name="arrivalTime" />
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label for="cTime">Completion Time</label>
            </div>
            <div class="col-75">
              <input type="text" id="arrTime" name="completionTime" />
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label for="sevr">Severity</label>
            </div>
            <div class="col-75">
              <select name="severity" id="sevr">
                <option value="emergency">Emergency</option>
                <option value="rapid">Rapid</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label for="age">Age Category</label>
            </div>
            <div class="col-75">
              <select name="ageCategory" id="age">
                <option value="adult">Adult</option>
                <option value="time">Time</option>
              </select>
            </div>
          </div>

          {/* <div class="row">
      <div class="col-25">
      <label for="sx">Sex:</label>
      </div>
      <div class="col-75">
        <select name="sex" id="sx">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    </div>  */}

          <div class="row">
            <div class="col-25">
              <label for="gnder">Gender</label>
            </div>
            <div class="col-75">
              {/* <!-- <input type="text" id="gnder" name="gender"> --> */}
              <select name="gender" id="gnder">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label for="ctgy">Category</label>
            </div>
            <div class="col-75">
              <select name="category" id="ctgy">
                <option value="substanceUse">Substance Use</option>
                <option value="sucidal">Sucidal</option>
                <option value="otherBehaviour">Other Behaviour</option>
              </select>
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label for="nts">Notes</label>
            </div>
            <div class="col-75">
              <input type="text" id="nts" name="notes" />
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label for="lnks">Links</label>
            </div>
            <div class="col-75">
              <input type="text" id="lnks" name="links" />
            </div>
          </div>

          <div class="row">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
