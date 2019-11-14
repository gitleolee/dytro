import React, { useState, useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';
import { css } from 'emotion';
import request from 'axios';
import { URL } from '../../constants/URL';
import { useParams } from 'react-router';

// { match: { params: { articleId: initialArticleId } } }
export default function ArticlePage() {
  // const [articleId, setArticleId] = useState(initialArticleId);
  const [dataArticle, setDataArticle] = useState({});

  let mounted = useRef(null);
  let { articleId } = useParams();

  useEffect(() => {
    mounted.current = true;
    runWhenMounted();
    async function runWhenMounted() {
      try {
        const { data: loadedArticle } = await request.get(
          `${URL}/articles/getdata?postId=${articleId}`
        );
        if (mounted.current) {
          setDataArticle(loadedArticle);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, []);
  const { name, content } = dataArticle;
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}
    >
      <div>
        <h1>{name} by Dytro</h1>
        <p>{content}</p>
      </div>
    </div>
  );
}
