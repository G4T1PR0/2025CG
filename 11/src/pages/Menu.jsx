import React from 'react';

const menuItems = [
    { name: 'アヒージョ', img: `${import.meta.env.BASE_URL}resources/ajillo.jpg` },
    { name: 'お通しのパンとオリーブオイル', img: `${import.meta.env.BASE_URL}resources/bread.jpg` },
    { name: 'トマトとモッツァレラチーズ', img: `${import.meta.env.BASE_URL}resources/tomato.jpg` },
    { name: 'パテドカンパーニュ', img: `${import.meta.env.BASE_URL}resources/Pate_de_campagne.jpg` },
    { name: 'フレッシュなサラダ', img: `${import.meta.env.BASE_URL}resources/salad.jpg` },
    { name: '鴨むね肉のローストオレンジソース', img: `${import.meta.env.BASE_URL}resources/Roasted_chicken_breast.jpg` },
    { name: '国産牛ステーキ', img: `${import.meta.env.BASE_URL}resources/国産牛ステーキ.jpg` },
    { name: '国産牛ステーキ(イチボ)', img: `${import.meta.env.BASE_URL}resources/aitchbone.jpg` },
    { name: '国産牛ローストビーフオニオンソース', img: `${import.meta.env.BASE_URL}resources/Roast_beef_with_onion_sauce.jpg` },
    { name: '生ハム', img: `${import.meta.env.BASE_URL}resources/生ハム.jpg` },
    { name: '絶品アヒージョ人気メニュー', img: `${import.meta.env.BASE_URL}resources/ajillo2.jpg` },
    { name: '豚カシラ肉の柔らかグリル', img: `${import.meta.env.BASE_URL}resources/pork-grill.jpg` },
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
