import React from 'react';

const menuItems = [
    { name: 'アヒージョ', img: '/resources/ajillo.jpg' },
    { name: 'お通しのパンとオリーブオイル', img: '/resources/bread.jpg' },
    { name: 'トマトとモッツァレラチーズ', img: '/resources/tomato.jpg' },
    { name: 'パテドカンパーニュ', img: '/resources/Pate_de_campagne.jpg' },
    { name: 'フレッシュなサラダ', img: '/resources/salad.jpg' },
    { name: '鴨むね肉のローストオレンジソース', img: '/resources/Roasted_chicken_breast.jpg' },
    { name: '国産牛ステーキ', img: '/resources/国産牛ステーキ.jpg' },
    { name: '国産牛ステーキ(イチボ)', img: '/resources/aitchbone.jpg' },
    { name: '国産牛ローストビーフオニオンソース', img: '/resources/Roast_beef_with_onion_sauce.jpg' },
    { name: '生ハム', img: '/resources/生ハム.jpg' },
    { name: '絶品アヒージョ人気メニュー', img: '/resources/ajillo2.jpg' },
    { name: '豚カシラ肉の柔らかグリル', img: '/resources/pork-grill.jpg' },
];

const Menu = () => {
    return (
        <>
            <div className="page-header" style={{ backgroundImage: "url('/resources/room1.jpg')" }}>
                <h1>Menu</h1>
            </div>

            <section>
                <div className="container">
                    <div className="grid">
                        {menuItems.map((item, index) => (
                            <div className="card" key={index}>
                                <img src={item.img} alt={item.name} />
                                <div className="card-content">
                                    <h3>{item.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Menu;
