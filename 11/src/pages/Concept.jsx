import React from 'react';

const Concept = () => {
    return (
        <>
            <div className="page-header" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}resources/room2.jpg')` }}>
                <h1>Concept</h1>
            </div>

            <section>
                <div className="container">
                    <div className="section-title-wrapper">
                        <h2>Our Philosophy</h2>
                    </div>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <p>『普段使いの気取らない贅沢しませんか？』</p>
                        <p>ワインの専門家はいません。自分達が美味しいと思ったワインだけをご用意しております。</p>
                        <p>幸せを呼ぶ…ワインと国産牛肉とチーズの美味しいお店です。</p>
                    </div>

                    <div className="section-title-wrapper">
                        <h2>こだわりポイント</h2>
                    </div>

                    {/* Point 1 */}
                    <div className="kodawari-item">
                        <div className="kodawari-img">
                            <img src={`${import.meta.env.BASE_URL}resources/kodawari1.jpg`} alt="こだわり1" />
                        </div>
                        <div className="kodawari-text">
                            <h3>こだわり１：日替わりメニュー</h3>
                            <p>豊富な日替わりメニュー！！</p>
                            <p>旬の美味しいお野菜、魚、お肉で美味しい料理を提供しております。</p>
                            <p>毎日変わるおすすめメニューも大人気です。ワインと一緒にお楽しみ下さい。</p>
                        </div>
                    </div>

                    {/* Point 2 */}
                    <div className="kodawari-item">
                        <div className="kodawari-img">
                            <img src={`${import.meta.env.BASE_URL}resources/kodawari2.jpg`} alt="こだわり2" />
                        </div>
                        <div className="kodawari-text">
                            <h3>こだわり２：気軽に立ち寄れる</h3>
                            <p>気軽に立ち寄れるワイン酒場</p>
                            <p>ワインに合わせたリーズナブルで美味しいアラカルトメニューも豊富です！！</p>
                            <p>オーナーが美味しいと思うワインを取り揃えてます。お気軽にふらっとお立ち寄り下さいね</p>
                        </div>
                    </div>

                    {/* Point 3 */}
                    <div className="kodawari-item">
                        <div className="kodawari-img">
                            <img src={`${import.meta.env.BASE_URL}resources/kodawari3.jpg`} alt="こだわり3" />
                        </div>
                        <div className="kodawari-text">
                            <h3>こだわり３：パーティーコース</h3>
                            <p>美味しいパーティーコース</p>
                        </div>
                    </div>

                    {/* Point 4 */}
                    <div className="kodawari-item">
                        <div className="kodawari-img">
                            <img src={`${import.meta.env.BASE_URL}resources/kodawari4.jpg`} alt="こだわり4" />
                        </div>
                        <div className="kodawari-text">
                            <h3>こだわり４：グラスワイン</h3>
                            <p>リーズナブルな日替わりグラスワイン</p>
                            <p>コスパ最高の美味しいワインを取り揃えております。</p>
                            <p>日替わりグラスワインは 580 円〜美味しいワインを気軽にお楽しみください。</p>
                        </div>
                    </div>

                    {/* Point 5 */}
                    <div className="kodawari-item">
                        <div className="kodawari-img">
                            <img src={`${import.meta.env.BASE_URL}resources/kodawari5.jpg`} alt="こだわり5" />
                        </div>
                        <div className="kodawari-text">
                            <h3>こだわり５：チーズ</h3>
                            <p>絶品！！CHEESE</p>
                            <p>ワインとチーズをお楽しみください。</p>
                            <p>オーナーシェフが厳選した絶品チーズを使ったメニューも人気です。</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Concept;
