import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

const VideoArticle = ({ article }) => {
    const { video } = article
    return (
        <>
            <Video loop muted
                controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}>
                <source src={URL.createObjectURL(video)} />
            </Video>
        </>
    );
}

export default VideoArticle;
