import React, { useState, useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';
import { css } from 'emotion';
import request from 'axios';
import { URL } from '../../constants';

/*
ArticlePage.propTypes = {
    match: PropTypes.object.isRequired
};
*/

// { match: { params: { articleId: initialArticleId } } }
export default function ArticlePage() {
    // const [articleId, setArticleId] = useState(initialArticleId);
    const [dataArticle, setDataArticle] = useState([]);

    let mounted = useRef(null);

    useEffect(() => {
        mounted.current = true;
        runWhenMounted();
        async function runWhenMounted() {
            try {
                const {data: loadedArticle} = await request.get(`${URL}/articles/getdata?postId=1`);
                console.log('API:' + loadedArticle);
                if (mounted.current) {
                    setDataArticle(loadedArticle);
                }
            } catch (error) {
                console.error(error);
            }
        }
    }, []);

    return (
        <div className={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        `}>
            <h1>{dataArticle.name} by Dytro</h1>
            <h1>{dataArticle.id} by Dytro</h1>
            <p>{dataArticle.content}</p>
        </div>
    );
}
