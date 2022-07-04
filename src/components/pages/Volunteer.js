import React from 'react';
import '../../App.css';
import {
  FormControl,
  FormLabel,
  Button,
  Col,
  Row,
  Form,
} from "react-bootstrap";
import "./Volunteer.css";

// export default function Volunteer() {
//   return <h1 className='relawan'>WE CARE</h1>;
// }
export default function Volunteer() {
  return  ( <>
  {/* <div className="donasi"> */}
    <Form>Pendaftaran Volunteer</Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Nama</Form.Label>
    <Form.Control type="name" />
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email"  placeholder="name@example.com" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
    <Form.Label>No Telepon</Form.Label>
    <Form.Control type="no-telepon" placeholder="+62" />
    </Form.Group>    
            
    <Form.Group className="mb-" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Alasan kamu mau jadi Relawan</Form.Label>
    <br></br>
    <Form.Control as="textarea" rows={4} />
    </Form.Group>
            
            <Button className="button">
              Daftar
            </Button>            
    </>
  );
}
