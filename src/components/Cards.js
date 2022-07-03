import React, { useState, useEffect} from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { supabase } from '../supabaseClient'

function Cards() {
  const [berita, setBerita] = useState(null);
  const [loading, setLoading] = useState(true);

  const getBerita = async () => {
    try {
      setLoading(true);
      let { data, error, status } = await supabase
        .from("berita")
        .select(`id, title, description, image_url`)
        .order('id', { ascending: false });
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
  return (
    <div className='cards'>
      <h1>HOTLINE</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {berita.map(item => <CardItem
              src={item.image_url}
              text={item.title}
              path={`/berita/${item.id}`}
            />
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
