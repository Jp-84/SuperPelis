import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

const VideoArticle = ({ article }) => {
    const { trailer } = article
    return (
        <>
            <Video loop muted
                controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}>
                <source src={URL.createObjectURL(trailer)} />
            </Video>
        </>
    );
}

export default VideoArticle;
