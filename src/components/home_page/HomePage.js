import React from 'react';
import {Link} from "react-router-dom";

export default () => {
    return (
        <div className="container mt-5">
            <h1>Home page</h1>
            <div className="alert-info alert">This page is accessible to everyone. &nbsp;
                <Link to="/login">Login here</Link>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacinia iaculis facilisis. Mauris pharetra
                accumsan tincidunt. Ut nec neque a nisl tristique varius vel ac risus. Praesent vel pulvinar nisi, vitae
                aliquam magna. Cras egestas consectetur fringilla. Cras egestas, neque id porta vestibulum, nibh dui
                porttitor velit, eget efficitur felis enim feugiat justo. Ut vitae lacus rutrum, posuere enim in,
                feugiat risus. Duis ex justo, consequat sed arcu et, molestie lobortis arcu.</p>
            <p>Maecenas semper erat eget aliquet ultrices. Sed in pharetra eros. Fusce blandit elementum imperdiet.
                Suspendisse bibendum ante at ullamcorper fringilla. Donec dictum ipsum quis facilisis accumsan. Nam elit
                augue, malesuada a feugiat ut, aliquet bibendum massa.</p>
            <p>Pellentesque blandit, nulla vel gravida euismod, lorem lorem tempor mi, in venenatis velit velit sit amet
                lectus. Nulla et mi sit amet risus bibendum eleifend. Nullam lorem tortor, aliquet nec lectus id,
                lobortis sagittis nunc. Praesent metus tortor, porta sed odio at, finibus porttitor diam.</p>
        </div>
    );
};
