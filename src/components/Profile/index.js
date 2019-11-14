import React, {useState, useRef, useEffect} from 'react';
import ProfileLoader from './ProfileLoader';
import {useParams} from 'react-router-dom';
import {request} from 'axios';
import PageNotExisting from '../SiteUtils/PageNotExisting';
import {URL} from '../../constants';

export default function Profile() {
  const [data, setData] = useState([]);

  let mounted = useRef(null);
  let {userid} = useParams();

  useEffect(() => {
    mounted.current = true;
    runWhenMounted();
    async function runWhenMounted() {
      try {
        const {data: loadedData} = await request.get(
          `${URL}/users/getnamebyid?id=${userid}`
        );
        if (mounted.current) {
          setData(loadedData);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, []);
  console.log('Test: ' + data[0]);
  if (data[0] === false) {
    return <PageNotExisting />;
  }
  return (
    <div>
      <div>{userid}</div>
      <ProfileLoader id={Number(userid)} pictureId='' username={data[1]} />
    </div>
  );
}
