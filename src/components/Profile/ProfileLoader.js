import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { request } from 'axios';

ProfileLoader.propTypes = {
    id: PropTypes.number,
    pictureId: PropTypes.string
};

export default function ProfileLoader({ id, pictureId }) {
    const mounted = useRef(null);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        mounted.current = true;
        runWhenMounted();
        async function runWhenMounted() {
            mounted.current = true;
            try {
              const { data: dataOfUser } = await request.get(`${URL}/users`);
              if (this.mounted) {
                setUserData({userData: dataOfUser});
              }
            } catch (error) {
              console.error(error);
            }
        }
    }, []);

    return (
        <div>
            <div>Name: {userData.username}</div>
        </div>
    );
}
