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

export default function Volunteer() {
  return ( 
  <>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='relawan1'>Nama Lengkap</Form.Label>
        <Form.Control type="nama" placeholder="" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='relawan1'>Jenis Kelamin</Form.Label>
        <Form.Select aria-label="Default select example">
            <option></option>
            <option value="1">Laki-laki</option>
            <option value="2">Perempuan</option>
        </Form.Select>
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='relawan1'>Pekerjaan</Form.Label>
          <Form.Select aria-label="Default select example">
            <option></option>
            <option value="1">Karyawan</option>
            <option value="2">Pelajar/Mahasiswa</option>
          </Form.Select>
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label className='relawan1'>Upload CV</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      
      <Button className='relawan1' variant="primary" type="submit">
        Submit
      </Button>
    </Form>      
    </>
  );
}
