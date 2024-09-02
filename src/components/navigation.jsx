import './navigation.css';

function Navigation() {
    return (
        <div className='navigation'>
            <div className="side-navigation">
                <div>
                    <i class="fa-solid fa-bars" style={{ marginBottom: "30px"}}></i>
                </div>
                <div>
                    <i class="fa-solid fa-house"></i>
                    <p>Home</p>
                </div>
                <div>
                    <i class="fa-solid fa-fire-flame-curved"></i>
                    <p>Shorts</p>
                </div>
                <div>
                    <i class="fa-solid fa-circle-dollar-to-slot"></i>
                    <p>Subscriptions</p>
                </div>
                <div>
                    <i class="fa-solid fa-play"></i>
                    <p>You</p>
                </div>
            </div>  
            <div className='top-navigation'>
                <div id='icon'>
                    <div style={{display:"flex", alignItems:"center"}}>
                        <i class="fa-brands fa-youtube" style={{ fontSize: "30px", color: "red",  }}></i>
                    </div>
                    <h2>YouTube</h2>
                </div>
                <div  className='searchbar'>
                    <input type="text" />
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <i class="fa-solid fa-microphone"></i>
                </div>
                <div>
                    <i class="fa-solid fa-video"></i>
                    <i class="fa-solid fa-bell"></i>
                    <i class="fa-regular fa-user"></i>
                </div>
            </div>

        </div>
    );
}

export default Navigation;