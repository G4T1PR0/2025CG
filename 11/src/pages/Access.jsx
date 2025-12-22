import React from 'react';

const Access = () => {
    return (
        <>
            <div className="page-header" style={{ backgroundImage: "url('/resources/外観.jpg')" }}>
                <h1>Access</h1>
            </div>

            <section>
                <div className="container">
                    <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', alignItems: 'center' }}>
                        <div>
                            <h2>Shop Info</h2>
                            <ul style={{ listStyle: 'none', fontSize: '1.2rem', lineHeight: '2' }}>
                                <li><strong>店名:</strong> イタリアン Wine Bar ChibaTech</li>
                                <li><strong>住所:</strong> 〒 999-999 奈良氏之市都田沼１２３</li>
                                <li><strong>電話:</strong> ０００－１２３４－５６７８</li>
                                <li><strong>アクセス:</strong> 都田沼駅より徒歩 2 分</li>
                            </ul>
                        </div>
                        <div>
                            <img src={`${import.meta.env.BASE_URL}resources/外観.jpg`} alt="外観" style={{ width: '100%', borderRadius: '8px' }} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Access;
