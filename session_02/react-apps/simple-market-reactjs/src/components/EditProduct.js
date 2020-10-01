import React from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Label,
} from 'reactstrap';

class EditProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.data.name,
      brand: props.data.brand,
      category: props.data.category,
      colour: props.data.colour,
      description: props.data.description,
      price: props.data.price,
      stock: props.data.stock,
      images: props.data.images,
      sizeShoes: [38, 39, 40, 41, 42],
      sizeClothing: ['S', 'M', 'L', 'XL', 'XXL'],
      listGambar: ['images1', 'images2', 'images3', 'images4', 'images5'],
    };
  }

  handleChange = (property, value) => {
    this.setState({ [property]: value });
  };

  renderInputStock = () => {
    let { category, stock } = this.state;
    return this.state[`size${category}`].map((item, index) => {
      return (
        <FormGroup className='flex-grow-1' key={index}>
          <Label>{item}</Label>
          <Input
            type='number'
            innerRef={(value) => (this[`code${item}`] = value)}
            defaultValue={stock[index].total}
          />
        </FormGroup>
      );
    });
  };

  render() {
    console.log(this.state.name);
    let {
      name,
      brand,
      category,
      colour,
      description,
      price,
      images,
      listGambar,
    } = this.state;
    return (
      <div>
        <Modal isOpen={this.props.editOpen}>
          <ModalHeader>Edit Product</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label>Name</Label>
                <Input
                  value={name}
                  type='text'
                  onChange={(e) => this.handleChange('name', e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label>Images</Label>
                <div className='d-flex flex-wrap'>
                  {listGambar.map((item, index) => {
                    return (
                      <Input
                        style={{ width: '30%' }}
                        type='text'
                        innerRef={(value) => (this[item] = value)}
                        placeholder={`Images ${index + 1}`}
                        defaultValue={images[index]}
                      />
                    );
                  })}
                </div>
              </FormGroup>
              <div className='row'>
                <FormGroup className='col-md-4'>
                  <Label>Brand</Label>
                  <Input
                    value={brand}
                    type='text'
                    onChange={(e) => this.handleChange('brand', e.target.value)}
                  />
                </FormGroup>
                <FormGroup className='col-md-4'>
                  <Label>Category</Label>
                  <Input
                    value={category}
                    type='select'
                    onChange={(e) =>
                      this.handleChange('category', e.target.value)
                    }
                  >
                    <option>Select ..</option>
                    <option value='Shoes'>Shoes</option>
                    <option value='Clothing'>Clothing</option>
                  </Input>
                </FormGroup>
                <FormGroup className='col-md-4'>
                  <Label>Colour</Label>
                  <Input
                    value={colour}
                    type='text'
                    onChange={(e) =>
                      this.handleChange('colour', e.target.value)
                    }
                  />
                </FormGroup>
              </div>
              <FormGroup>
                <Label>Description</Label>
                <Input
                  value={description}
                  type='textarea'
                  onChange={(e) =>
                    this.handleChange('description', e.target.value)
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label>Stock</Label>
                <div className='d-flex'>{this.renderInputStock()}</div>
              </FormGroup>
              <FormGroup>
                <Label>Price</Label>
                <Input
                  value={price}
                  type='number'
                  onChange={(e) => this.handleChange('price', e.target.value)}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button>Save</Button>
            <Button onClick={this.props.editClose}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default EditProduct;
