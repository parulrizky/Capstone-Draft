import React, { useState, useEffect } from 'react';
import { Container, Figure } from "react-bootstrap"
import { useParams } from "react-router-dom";
import '../../App.css';
import { supabase } from '../../supabaseClient'


function Berita(props) {
  const { id } = useParams()

  const [berita, setBerita] = useState(null);
  const [loading, setLoading] = useState(true);

  const getBerita = async () => {
    try {
      setLoading(true);
      let { data, error, status } = await supabase
        .from("berita")
        .select(`id, title, description, image_url`)
        .eq("id", id)
        .single();
      if (error && status !== 406) {
        throw error;
      }
  
      if (data) {
        setBerita(data);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getBerita()
  }, [])
  if (loading) {
    return <div>loading</div>
  }
  if (!berita) {
    return <div>not found atau redirect</div>
  }
  return (
    <Figure className='berita1'>
      <Figure.Image
        width={500}
        height={250}
        alt="171x180"
        src={berita.image_url}
      />
      <br></br>
      <Figure.Caption>
      <h2>{berita.title}</h2>
      <p>{berita.description}</p>  
      </Figure.Caption>
    </Figure>
  );
}

export default Berita;
    {/*<Container className='descrip'>
    <h1>{berita.title}</h1>
    <p><small>{berita.description}</small></p>
    </Container>*/}