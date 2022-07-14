import React from 'react';
import {
  Button,
  Form,
  Container,
} from "react-bootstrap";
import "./Volunteer.css";

export default function Volunteer() {
  return ( 
  <>
  <h1>DAFTAR</h1>
  <div className='volimg'>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='relawan1'>Nama Lengkap</Form.Label>
        <Form.Control type="nama" placeholder="" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='relawan1'>Email</Form.Label>
        <Form.Control type="email" placeholder="user@example.com" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='relawan1'>No. HP</Form.Label>
        <Form.Control type="nomorhp" placeholder="08.." />
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
            <option value="2">Lainnya</option>
          </Form.Select>
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='relawan1'>Alamat</Form.Label>
        <Form.Control type="alamat" placeholder="" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='relawan1'>Alasan ingin Menjadi Relawan</Form.Label>
        <Form.Control as="textarea" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Button variant="primary">Submit</Button>
    </Form>
    </div>   
    </>
  );
}

