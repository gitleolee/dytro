import React, { useState } from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import request from 'axios';
import { URL } from '../../constants/URL';
import PageNotExisting from '../../components/SiteUtils/PageNotExisting';

CreateArticle.propTypes = {
  userId: PropTypes.number
};

export default function CreateArticle({ userId }) {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  let contentLen = 0;
  for (let i = 0; i < content.length; i++) {
    if (content[i] !== ' ') {
      contentLen++;
    }
  }
  let nameError = name.length < 5;
  let contentError = contentLen < 10;
  if (!userId) {
    return <PageNotExisting />;
  }

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        input {
          width: 32rem;
          height: 2rem;
          font-size: 1.5rem;
        }
        textarea {
          width: 85rem;
          height: 30rem;
          font-size: 1.2rem;
          margin-top: 0.3rem;
        }
        button {
          background: orange;
          color: white;
          width: 9rem;
          height: 3rem;
          font-size: 1.2rem;
          margin-top: 0.3rem;
        }
        .invalid-feedback {
          color: red;
          font-size: 1.2rem;
        }
      `}
    >
      <h1>Create Articles</h1>
      <input
        value={name}
        onChange={event =>
          event.target.value.length <= 36 && setName(event.target.value)
        }
        placeholder="Insert Article Title Here!"
      />
      <textarea
        value={content}
        onChange={event => setContent(event.target.value)}
        placeholder="Insert Contents Here!"
      ></textarea>
      <div
        style={{
          color: 'grey'
        }}
      >
        Genre:{' '}
        <select>
          <option value="Science">Science</option>
          <option value="Math">Math</option>
          <option value="Travel & Food">Travel & Food</option>
          <option value="Music">Music</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button onClick={submitArticle}>Submit Article</button>
      <Fade bottom collapse when={nameError}>
        <div className="invalid-feedback" style={{ display: 'block' }}>
          Title too short!
        </div>
      </Fade>
      <Fade bottom collapse when={contentError}>
        <div className="invalid-feedback" style={{ display: 'block' }}>
          Content too short!
        </div>
      </Fade>
    </div>
  );

  async function submitArticle() {
    if (!contentError && !nameError) {
      await request.post(`${URL}/articles`, {
        name: name,
        userId: userId,
        content: content
      });
      window.location = '/articles';
    }
  }
}
