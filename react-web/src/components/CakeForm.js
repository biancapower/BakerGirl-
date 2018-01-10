import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

//export default function CakeForm({ onSubmit }) {
//change from basic to state component inorder for redirect to occur
//extends from React
//add state
//helper functions need to be bound
//then put in the render

class CakeForm extends React.Component {
  state = { redirect: false }
  handleFormSubmission = (event) => {
    event.preventDefault();
    const { elements } = event.target;
    const title = elements["title"].value;
    const yearReleased = elements["yearReleased"].value;
    this.setState({ redirect: true });
    this.props.onSubmit({ title, yearReleased });
  }

  render() {
    const { redirect } = this.state
    return (
      <div>
        {redirect && <Redirect to='/thanks' />}
    

        <Form onSubmit={this.handleFormSubmission}>

          <h1>Create Your Cake</h1>

          {/* LAYERS */}
          <FormGroup>
            <Label for="exampleSelect">Layers</Label>
            <Input type="select" name="select" id="exampleSelect">
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
            <Label for="exampleSelect">Tiers</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Input>
          </FormGroup>

          {/* FLAVOURS */}
          <FormGroup>
            <Label for="exampleSelect">Flavours</Label>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                Chocolate
              </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />{' '}
                  Vanilla
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />{' '}
                  Red Velvet
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />{' '}
                  Caramel Mud
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />{' '}
                  Lemon
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />{' '}
                    Carrot
                </Label>
              </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                Banana
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                Chocolate Hazelnut
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                Coconut Pandan
              </Label>
            </FormGroup>
          </FormGroup>

          {/* FILLINGS */}
          <FormGroup>
            <Label for="exampleSelect">Fillings</Label>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                Fresh Fruit
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                Fruit Salsas
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                Fruit Coulis
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                Lemon Curd
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                Oreos
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                Choc Chip Cookies
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                Various Candy
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                Chocolate Ganache
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                Nutella
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                Meringues
              </Label>
            </FormGroup>
          </FormGroup>

          {/* STYLE */}
          <FormGroup>
            <Label for="exampleText">Do you have a style in mind?</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>


          <h1>Your Details</h1>

          <FormGroup>
            <Label for="text">Name</Label>
            <Input type="text" name="title" id="form-field-name" placeholder="Harriet Jones" />
          </FormGroup>

          <FormGroup>
            <Label for="text">Contact Number</Label>
            <Input type="text" name="text" id="exampleEmail" placeholder="0400 000 000" />
          </FormGroup>

          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="harriet@gmail.com" />
          </FormGroup>

          <FormGroup>
            <Label for="text">Event Date</Label>
            <Input type="text" name="text" id="exampleEmail" placeholder="14/01/18" />
          </FormGroup>

          <FormGroup>
            <Label for="text">Event Type</Label>
            <Input type="text" name="text" id="exampleEmail" placeholder="20th Anniversary" />
          </FormGroup>

          <FormGroup>
            <Label for="text">Number of Cake Eaters</Label>
            <Input type="number" name="yearReleased" id="exampleEmail" placeholder="5" />
          </FormGroup>

          <FormGroup tag="fieldset">
            <label>Delivery Required</label>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
                Yes
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
                No
              </Label>
            </FormGroup>
          </FormGroup>

          <FormGroup>
            <Label for="text">Delivery Address (if applicable)</Label>
            <Input type="text" name="text" id="exampleEmail" placeholder="123 Main St, Ultimo" />
          </FormGroup>

          <FormGroup>
            <Label for="exampleText">How did you hear about BakerGirl?</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>

          <Button type="submit">Create Cake! 🍰</Button>
          

        </Form>
      </div>
    )
  }
}

export default CakeForm
