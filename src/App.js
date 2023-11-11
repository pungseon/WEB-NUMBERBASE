import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './App.css';

class NumberBase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      fromBase: '',
      toBase: '',
      output: '',
    };
  }

  convertBase = () => {
    try {
      const { input, fromBase, toBase } = this.state;
      const parsedValue = parseInt(input, fromBase);
      if (isNaN(parsedValue)) {
        throw new Error('Invalid input');
      }
      const convertedValue = parsedValue.toString(toBase);
      this.setState({ output: convertedValue });
    } catch (error) {
      this.setState({ output: 'Error' });
    }
  };

  handleInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleBaseChange = (baseType, e) => {
    this.setState({ [baseType]: parseInt(e.target.value, 10) });
  };

  render() {
    const { input, fromBase, toBase, output } = this.state;

    return (
      <Container className="text-center">
        <h1>ระบบแปลงเลขฐาน</h1>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form className="form-container">
              <Form.Group controlId="inputNumber" className="mb-4 form-group">
                <Form.Label className="mb-2 label-mb-2">ใส่ตัวเลข</Form.Label>
                <Form.Control
                  type="text"
                  value={input}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="fromBase">
                <Form.Label className="mb-3 label-mb-3">แปลงเลขฐาน</Form.Label>
                <Form.Control
                  as="select"
                  value={fromBase}
                  onChange={(e) => this.handleBaseChange('fromBase', e)}
                >
                  {[2, 8, 10, 16].map((base) => (
                    <option key={base} value={base}>
                      {base}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="toBase">
                <Form.Label className="mb-4 label-mb-4">เป็นเลขฐาน</Form.Label>
                <Form.Control
                  as="select"
                  value={toBase}
                  onChange={(e) => this.handleBaseChange('toBase', e)}
                >
                  {[2, 8, 10, 16].map((base) => (
                    <option key={base} value={base}>
                      {base}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Button variant="primary" onClick={this.convertBase}>
                คำนวณ
              </Button>
            </Form>
            <div className="mt-3">
              <strong>คำตอบ: </strong> {output}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NumberBase;
