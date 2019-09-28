import React, { useState, useEffect, useRef } from 'react';
// import PropTypes from 'prop-types';
import { css } from 'emotion';
import request from 'axios';

/*
ArticlePage.propTypes = {
    match: PropTypes.object.isRequired
};
*/

// { match: { params: { articleId: initialArticleId } } }
export default function ArticlePage() {
    // const [articleId, setArticleId] = useState(initialArticleId);
    const [data, setData] = useState([]);

    let mounted = useRef(null);

    useEffect(() => {
        mounted.current = true;
        runWhenMounted();
        async function runWhenMounted() {
            try {
                const {data: loadedArticle} = await request.get(`${URL}/articles/getdata?postId='1'`);
                console.log('API:' + loadedArticle);
                if (mounted.current) {
                    setData(loadedArticle);
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
            <h1>{data.name} by Dytro</h1>
            <p>{data.content}</p>
        </div>
    );
}
