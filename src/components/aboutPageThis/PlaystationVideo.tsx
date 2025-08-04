import { useEffect, useRef } from "react";
import video_2 from '../../assets/IMG_5676.mp4';

const PlayStationVideo: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (videoRef.current) {
                    if (entry.isIntersecting) {
                        videoRef.current.play();
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
                src={video_2}
                muted
                className="w-full h-full object-cover"
                style={{
                    borderRadius: "0 45px 45px 0",
                }}
            />
        </div>
    );
}

export default PlayStationVideo;
