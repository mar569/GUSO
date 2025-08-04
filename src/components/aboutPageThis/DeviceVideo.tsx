import { useEffect, useRef } from "react";
import video_3 from '../../assets/IMG_5683.mp4';

const DeviceVideo: React.FC = () => {
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
        <div className="overflow-hidden relative w-full ">
            <video
                ref={videoRef}
                src={video_3}
                muted
                className="w-full h-full object-cover"
                style={{
                    borderRadius: "0 45px 45px 0",
                }}
            />
        </div>
    );
}

export default DeviceVideo;
