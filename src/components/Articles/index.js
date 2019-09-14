import React, { useState, useEffect, useRef } from 'react';
import { css } from 'emotion';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import request from 'axios';

Articles.propTypes = {
    userId: PropTypes.number
};

export default function Articles({ userId }) {
    const [articles, setArticles] = useState([]);
    let mounted = useRef(null);

    useEffect(() => {
        mounted.current = true;
        runWhenMounted();
        async function runWhenMounted() {
            try {
                const {data: loadedArticle} = await request.get(`${URL}/articles`);
                if (mounted.current) {
                    setArticles({ articles: loadedArticle });
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
            .CreateAr {
                background: lime;
                color: white;
                font-size: 1.2rem;
                width: 9rem;
                height: 3rem;
                text-align: center;
                text-decoration: none;
            }
        `}>
            <h1>Articles</h1>
            {userId && <Link to="/articles/create" className="CreateAr">Create Article</Link>}
            <div id="chatlogs">
                <div>
                    {articles.map((article, index) => (
                        <div key={article.id}>
                        {article.name} by {article.username}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
