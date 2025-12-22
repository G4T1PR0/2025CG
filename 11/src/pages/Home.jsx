import React, { useEffect, useRef } from 'react';

const Home = () => {
    const videoRef = useRef(null);
    const videos = ['/resources/pasta.mp4', '/resources/wine.mp4'];
    // We use a ref to track index across renders if needed, but here simple var inside effect might suffice 
    // if we don't change dependencies. However, to be safe:
    const currentVideoIndex = useRef(0);

    useEffect(() => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        const handleEnded = () => {
            currentVideoIndex.current = (currentVideoIndex.current + 1) % videos.length;
            videoElement.src = videos[currentVideoIndex.current];
            videoElement.play().catch(e => console.error("Autoplay failed", e));
        };

        videoElement.addEventListener('ended', handleEnded);
        videoElement.removeAttribute('loop');

        return () => {
            videoElement.removeEventListener('ended', handleEnded);
        };
    }, []);

    return (
        <>
            <div className="hero">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    className="video-background"
                >
                    <source src="/resources/pasta.mp4" type="video/mp4" />
                </video>
                <div className="hero-content">
                    <h1>Italian Wine Bar ChibaTech</h1>
                    <p>普段使いの気取らない贅沢しませんか？</p>
                </div>
            </div>

            <section id="concept" style={{ background: "url('/resources/room1.jpg') center/cover fixed", position: 'relative' }}>
                <div style={{ background: 'rgba(0,0,0,0.7)', padding: '4rem 0' }}>
                    <div className="container">
                        <div className="section-title-wrapper">
                            <h2>Concept</h2>
                        </div>
                        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                            <p>ワインの専門家はいません。</p>
                            <p>自分達が美味しいと思ったワインだけをご用意しております。</p>
                            <p>幸せを呼ぶ…ワインと国産牛肉とチーズの美味しいお店です。</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="recommend">
                <div className="container">
                    <div className="section-title-wrapper">
                        <h2>Recommended</h2>
                    </div>
                    <div className="grid">
                        <div className="card">
                            <img src={`${import.meta.env.BASE_URL}resources/国産牛ステーキ.jpg`} alt="国産牛ステーキ" />
                            <div className="card-content">
                                <h3>国産牛ステーキ</h3>
                                <p>厳選された国産牛を使用した贅沢な一品。</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={`${import.meta.env.BASE_URL}resources/絶品アヒージョ人気メニュー.jpg`} alt="絶品アヒージョ" />
                            <div className="card-content">
                                <h3>絶品アヒージョ</h3>
                                <p>ワインとの相性抜群の人気メニュー。</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={`${import.meta.env.BASE_URL}resources/tomato.jpg`} alt="トマトとモッツァレラチーズ" />
                            <div className="card-content">
                                <h3>トマトとモッツァレラチーズ</h3>
                                <p>フレッシュなトマトとチーズのハーモニー。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
