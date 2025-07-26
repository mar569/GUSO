import { useEffect, useRef, useState } from "react";

const PlayStationVideo: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (videoRef.current) {
                    if (entry.isIntersecting) {
                        videoRef.current.play().catch(() => {
                            setError("Не удалось воспроизвести видео. Пожалуйста, обновите страницу или проверьте настройки браузера.");
                        });
                    } else {
                        videoRef.current.pause();
                    }
                }
            });
        }, { threshold: 0.8 });

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    return (
        <div className="overflow-hidden relative w-full p-4 md:p-0">
            <video
                ref={videoRef}
                src="/videos/IMG_5683.MP4"
                muted
                className="w-full h-[70vh] md:min-h-[517px] object-cover"
                style={{
                    borderRadius: "0 45px 45px 0",
                }}
            />
            {error && (
                <div className="absolute bottom-10 left-0 w-full flex justify-center">
                    <p className="bg-red-500 text-white p-2 rounded-lg">{error}</p>
                </div>
            )}
        </div>
    );
}

export default PlayStationVideo;
