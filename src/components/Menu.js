import React, { useState } from "react";
import { Form, Collapse, Dropdown, SplitButton } from "react-bootstrap";

const pizza_repo = [
  {
    name: "Beef Lover 🐮❤",
    desc:
      "Domino's Pizza Sauce, Beef Pepperoni, Beef Sausage Cut, Beef Crumble, Beef Rasher, Marinated Chicken, Mozzarella Cheese",
    price: "60.000"
  },
  { name: "Pepperoni", price: "70.000" }
];

const Legend = () => (
  <div id="legend">
    <ul>
      <li>❤ Favorite</li>
      <li>🌶 Hot spicy</li>
      <li>🐮 Beef</li>
      <li>🐔 Chicken meat</li>
    </ul>
  </div>
);

const MenuTitle = ({ title }) => (
  <h6 className="menu-title text-center my-5">{title}</h6>
);

const PizzaItem = ({ details }) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="container my-4 pizza-item-wrapper">
      <h5 onClick={handleClick}>{details.name}</h5>
      <Collapse in={open}>
        <div>
          <p>{details.desc}</p>
          <Form>
            <Form.Group controlId="formGridState">
              <Form.Label className="pizza-option-label">Size</Form.Label>
              <Form.Control size="sm" as="select" value="Medium">
                <option>Medium</option>
                <option>Large</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formGridState">
              <Form.Label className="pizza-option-label">Cheese</Form.Label>
              <Form.Control size="sm" as="select" value="Extra">
                <option>Extra</option>
                <option>Normal</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formGridState">
              <Form.Label className="pizza-option-label">Crust</Form.Label>
              <Form.Control size="sm" as="select" value="Sosis Bites">
                <option>Sosis Bites</option>
                <option>Cheese Bites</option>
                <option>Thin</option>
                <option>Normal</option>
              </Form.Control>
            </Form.Group>
          </Form>
          <div className="pizza-item-footer">
            <span>Rp. {details.price}</span>
            <SplitButton size="sm" variant="primary" title="❤ Order in GoFood">
              <Dropdown.Item eventKey="1" active>
                Order in GoFood
              </Dropdown.Item>
              <Dropdown.Item eventKey="2">Order in GrabFood</Dropdown.Item>
              <Dropdown.Item eventKey="3">Order in WhatsApp</Dropdown.Item>
            </SplitButton>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default function Menu() {
  return (
    <>
      <h4 className="text-dark text-center my-5 font-weight-bold">THE MENU</h4>
      <Legend />
      <MenuTitle title="Handcrafted Pizza" />
      <PizzaItem details={pizza_repo[0]} />
    </>
  );
}
