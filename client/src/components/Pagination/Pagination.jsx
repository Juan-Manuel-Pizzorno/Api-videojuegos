import React from 'react';

export default function Pagination() {
    const pageLinkStyle = {
        fontSize: '2vw',
        fontFamily: 'cursive'
    };

    return (
        <div>
            <nav aria-label="Page navigation example" style={{ fontSize: '6vw', fontFamily: 'cursive' }}>
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <a className="page-link" style={pageLinkStyle}>Previous</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#" style={pageLinkStyle}>1</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#" style={pageLinkStyle}>2</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#" style={pageLinkStyle}>3</a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#" style={pageLinkStyle}>Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
