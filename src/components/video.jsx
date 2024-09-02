

const Video = ({ url }) =>{
    return (
        <div>
            <iframe width="450" height="250" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h4 style={{margin:"0"}}>This is youtube video</h4>
            <p style={{margin:"0"}}>ChannelName</p>
        </div>  
    );
}

export default Video;