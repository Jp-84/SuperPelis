
const VideoArticle = ({ article }) => {
    const { photographs } = article
    return (
        <>
            {photographs.map(i => (
                <img key={i} src={i} alt="" />
            ))};
        </>
    );
}

export default VideoArticle;
