import React from 'react';
import { Redirect, Route, Switch, Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Container, Media, Card } from 'reactstrap';
import Logo from '../assets/images/Logo.png';

class CakeForm extends React.Component {
  state = { redirect: false }
  handleFormSubmission = (event) => {
    event.preventDefault();
    const { elements } = event.target;
    const layers = elements["layers"].value;
    const tiers = elements["tiers"].value;
    const flavours = [].slice.call(elements["flavours"]).filter( flavour => flavour.checked ).map( flavour => (flavour.value + "; ") );
    const fillings = [].slice.call(elements["fillings"]).filter( fillings => fillings.checked ).map( fillings => (fillings.value + "; ") );
    const style = elements["style"].value;
    const custName = elements["custName"].value;
    const contactNumber = elements["contactNumber"].value;
    const email = elements["email"].value;
    const eventDate = elements["eventDate"].value;
    const eventType = elements["eventType"].value;
    const servings = elements["servings"].value;
    const delivery = elements["delivery"].value;
    const deliveryAddress = elements["deliveryAddress"].value;
    const referral = elements["referral"].value;
    console.log(flavours);

    this.setState({ redirect: true });
    this.props.onSubmit({ layers, tiers, flavours, fillings, style, custName, contactNumber, email, eventDate, eventType, servings, delivery, deliveryAddress, referral });
  }

  render() {
    const { redirect } = this.state
    return (
      <div>
        {redirect && <Redirect to='/thanks' />}

        <div className="header-background"></div>
        <div className="logo">
          <Media id="logo" object src={Logo} alt="Generic placeholder image" />
        </div>
        <Container>
          <Card id="card" className="pr-5 pl-5 btm-mar">
            <div className="card-content text-left">
              <Form onSubmit={this.handleFormSubmission}>

                <h1 className="m-5 pt-4 text-center">Create Your Cake</h1>

                {/* LAYERS */}
                <FormGroup>
                  <Label for="layers">Layers</Label>
                  <Input type="select" name="layers" id="form-field-layers">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </Input>
                </FormGroup>


                {/* TIERS */}
                <FormGroup>
                  <Label for="tiers">Tiers</Label>
                  <Input type="select" name="tiers" id="form-field-tiers">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </Input>
                </FormGroup>

                {/* FLAVOURS */}
                <FormGroup>
                  <Label for="flavours">Flavours</Label>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" name="flavours" value="chocolate" />{' '}
                      Chocolate
                    </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" name="flavours" value="vanilla" />{' '}
                        Vanilla
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" name="flavours" value="red velvet" />{' '}
                        Red Velvet
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" name="flavours" value="caramel mud" />{' '}
                        Caramel Mud
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" name="flavours" value="lemon" />{' '}
                        Lemon
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" name="flavours" value="carrot" />{' '}
                          Carrot
                      </Label>
                    </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" name="flavours" value="banana" />{' '}
                      Banana
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" name="flavours" value="chocolate hazelnut" />{' '}
                      Chocolate Hazelnut
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" name="flavours" value="coconut pandan" />{' '}
                      Coconut Pandan
                    </Label>
                  </FormGroup>
                </FormGroup>

                {/* FILLINGS */}
                <FormGroup>
                  <Label for="exampleSelect">Fillings</Label>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" name="fillings" value="fresh fruit" />{' '}
                      Fresh Fruit
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" name="fillings" value="fruit salsas" />{' '}
                      Fruit Salsas
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" name="fillings" value="fruit coulis" />{' '}
                      Fruit Coulis
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" name="fillings" value="lemon curd" />{' '}
                      Lemon Curd
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" name="fillings" value="oreos" />{' '}
                      Oreos
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" name="fillings" value="choc chip cookies" />{' '}
                      Choc Chip Cookies
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" name="fillings" value="candy" />{' '}
                      Various Candy
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" name="fillings" value="choc ganache" />{' '}
                      Chocolate Ganache
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" name="fillings" value="nutella" />{' '}
                      Nutella
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" name="fillings" value="meringues" />{' '}
                      Meringues
                    </Label>
                  </FormGroup>
                </FormGroup>

                {/* STYLE */}
                <FormGroup>
                  <Label for="style">Do you have a style in mind?</Label>
                  <Input type="textarea" name="style" id="form-field-style" />
                </FormGroup>


                <h1 className="m-5 pt-4 text-center">Your Details</h1>

                <FormGroup>
                  <Label for="custName">Name</Label>
                  <Input type="text" name="custName" id="form-field-custName" placeholder="Harriet Jones" />
                </FormGroup>

                <FormGroup>
                  <Label for="contactNumber">Contact Number</Label>
                  <Input type="text" name="contactNumber" id="form-field-contactNumber" placeholder="0400 000 000" />
                </FormGroup>

                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="email" name="email" id="form-field-email" placeholder="harriet@gmail.com" />
                </FormGroup>

                <FormGroup>
                  <Label for="eventDate">Event Date</Label>
                  <Input type="text" name="eventDate" id="form-field-eventDate" placeholder="14/01/18" />
                </FormGroup>

                <FormGroup>
                  <Label for="eventType">Event Type</Label>
                  <Input type="text" name="eventType" id="form-field-eventType" placeholder="20th Anniversary" />
                </FormGroup>

                <FormGroup>
                  <Label for="servings">Number of Cake Eaters</Label>
                  <Input type="number" name="servings" id="form-field-servings" placeholder="5" />
                </FormGroup>

                <FormGroup tag="fieldset">
                  <label>Delivery Required</label>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="delivery" value="true" />{' '}
                      Yes
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="radio" name="delivery" value="false" />{' '}
                      No
                    </Label>
                  </FormGroup>
                </FormGroup>

                <FormGroup>
                  <Label for="deliveryAddress">Delivery Address (if applicable)</Label>
                  <Input type="text" name="deliveryAddress" id="form-field-deliveryAddress" placeholder="123 Main St, Ultimo" />
                </FormGroup>

                <FormGroup>
                  <Label for="referral">How did you hear about BakerGirl?</Label>
                  <Input type="textarea" name="referral" id="form-field-referral" />
                </FormGroup>

                <div className="text-center mt-5">
                  <Button type="submit">Create Cake! 🍰</Button>
                </div>
              </Form>

            </div>
          </Card>
        </Container>
      </div>
    )
  }
}

export default CakeForm
