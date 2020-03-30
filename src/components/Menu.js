import React, { useState } from "react";
import { Form, Collapse, Dropdown, SplitButton } from "react-bootstrap";
import { GrabFoodIcon, GoFoodIcon, WhatsappIcon } from "../assets/js/resource";
import { pizza_repo, burger_repo, complementary_repo } from "../constant";
import { Footer } from "./index";

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

const BaseItem = ({ details, active, handleClick, children }) => (
  <div className="container my-1 pizza-item-wrapper">
    <h5 onClick={handleClick} className={active ? "active" : ""}>
      {`${details.name}`}
    </h5>
    <Collapse in={active}>
      <div>
        <p>{details.desc}</p>
        {children}
        <div className="pizza-item-footer">
          <span>Rp. {details.price}</span>
          <SplitButton
            size="sm"
            variant="primary"
            title={
              <span>
                <i className="icon-button">
                  <GoFoodIcon />
                </i>
                {" Order in GoFood"}
              </span>
            }
          >
            <Dropdown.Item eventKey="1" active>
              <GoFoodIcon /> Order in GoFood
            </Dropdown.Item>
            <Dropdown.Item eventKey="2">
              <GrabFoodIcon /> Order in GrabFood
            </Dropdown.Item>
            <Dropdown.Item eventKey="3">
              <WhatsappIcon /> Order in WhatsApp
            </Dropdown.Item>
          </SplitButton>
        </div>
        <hr />
      </div>
    </Collapse>
  </div>
);

const PizzaItem = props => (
  <BaseItem {...props}>
    <Form>
      <Form.Group controlId="formGridState">
        <Form.Label className="pizza-option-label">Size</Form.Label>
        <Form.Control size="sm" as="select">
          <option>Medium</option>
          <option>Large</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formGridState">
        <Form.Label className="pizza-option-label">Cheese</Form.Label>
        <Form.Control size="sm" as="select">
          <option>Extra</option>
          <option>Normal</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formGridState">
        <Form.Label className="pizza-option-label">Crust</Form.Label>
        <Form.Control size="sm" as="select">
          <option>Sosis Bites</option>
          <option>Cheese Bites</option>
          <option>Thin</option>
          <option>Normal</option>
        </Form.Control>
      </Form.Group>
    </Form>
  </BaseItem>
);

const BurgerItem = props => (
  <BaseItem {...props}>
    <Form>
      <Form.Group controlId="formGridState">
        <Form.Label className="pizza-option-label">Pattie</Form.Label>
        <Form.Control size="sm" as="select">
          <option>Beef</option>
          <option>Chicken</option>
          <option>Double Beef</option>
          <option>Double Chicken</option>
        </Form.Control>
      </Form.Group>
    </Form>
  </BaseItem>
);

const MenuWrapper = ({ children }) => {
  const [active, setActive] = useState(0);

  let elements = React.Children.toArray(children);

  const isActive = index => index === active;

  const handleClick = index => setActive(index);

  for (let index = 0; index < elements.length; index++) {
    elements[index] = React.cloneElement(elements[index], {
      active: isActive(index),
      handleClick: () => handleClick(index)
    });
  }

  return elements;
};

export default function Menu() {
  return (
    <>
      <h4 className="text-dark text-center my-5 font-weight-bold">THE MENU</h4>
      <Legend />
      <MenuTitle title="Handcrafted Pizza" />
      <MenuWrapper>
        {pizza_repo.map(data => (
          <PizzaItem key={data.name} details={data} />
        ))}
      </MenuWrapper>

      <MenuTitle title="Legendary Recipes of Burger" />

      <MenuWrapper>
        {burger_repo.map(data => (
          <BurgerItem key={data.name} details={data} />
        ))}
      </MenuWrapper>

      <MenuTitle title="Essential Compementaries" />

      <MenuWrapper>
        {complementary_repo.map(data => (
          <BaseItem key={data.name} details={data} />
        ))}
      </MenuWrapper>

      <Footer />
    </>
  );
}
