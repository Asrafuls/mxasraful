import React from 'react';
import workData from '../../workData';
import WorkSection from '../WorkSection/WorkSection';

const Portfolio = () => {

    const data = workData;

    return (
        <section style={{ paddingTop: '150px', marginBottom: '-8px' }} id="portfolio" className='portfolioMain bg_dark_blue'>
            <div className="container">
                <h2 style={{ background: '#232a38', display: 'inline-block', paddingRight: '20px' }} className='text-info workHeader'>My Portfolio</h2>
                <div className='sectionTitlesBackLine'></div>
                <br />
                <div className="row">
                    <div className="card-deck workContentMain">
                        {
                            data.map(wk =>
                                <WorkSection work={wk} />
                            )
                        }

                    </div>
                </div>
                <a href='/portfolio' style={{ float: 'right' }} className="btn btn-outline-danger btn-sm">View All</a>
                <br />
                <br />
                <br />
            </div>
        </section>
    );
};

export default Portfolio;