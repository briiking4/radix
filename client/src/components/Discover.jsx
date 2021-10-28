import React from "react";
import './Discover.css';
import yt_logo from './assets/imgs/disc/yt.png';
import insta_logo from './assets/imgs/disc/insta.png';
import Loader from 'react-loader-spinner';




class Discover extends React.Component {

  constructor(){
    super();

    this.state = {
      youtubeOn:true,
      instaOn: false,
      youtubeLink: [],
      loading: true
    }

    this.handleYoutubeOn = this.handleYoutubeOn.bind(this);
    this.handleInstaOn = this.handleInstaOn.bind(this);
    this.hideLoader = this.hideLoader.bind(this);
    this.getYoutubeUrl = this.getYoutubeUrl.bind(this);


  }

  hideLoader= () => {
    this.setState({
      loading: false
    });
  };

  getYoutubeUrl(pagetoken) {
    var pt = (typeof pagetoken === "undefined") ? "" :`&pageToken=${pagetoken}`,
        mykey = "AIzaSyBiu-UsV_bow63-_iY-Zx9_aJ4sx6vYSNs",
        playListID = "PLY34r1ysYKFHpbk9bhHac1iXY0AdVt4dG",
        URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playListID}&key=${mykey}${pt}`;
    return URL;
  }

  async componentWillMount(){
    var url = this.getYoutubeUrl();
    console.log(url);

    let r = await fetch(url);
    let playlistInfo = await r.json();

    var playlistIDList = [];

    for(const i of playlistInfo.items){
      playlistIDList.push(i.snippet.resourceId.videoId);
    }
    console.log(playlistIDList);


    console.log(playlistInfo);

    this.setState({youtubeLink: playlistIDList});
    console.log(this.state.youtubeLinks);
  }

  handleYoutubeOn(){
    this.setState({
      youtubeOn: true,
      instaOn: false,
    });

  }

  handleInstaOn(){
    this.setState({
      youtubeOn: false,
      instaOn: true,
    });
  }

  handleSoundcloudOn(){
    this.setState({
      youtubeOn: false,
      instaOn: false,
    });
  }




  render(){

    const showVideos = () =>
      this.state.youtubeLink.map(function(video_id){
        console.log(`https://www.youtube.com/watch?v=${video_id}`);
        return (
          <div className="col-6 col-sm-4 col-md-3 m-3 embed-responsive embed-responsive-16by9" key={video_id}>
            <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${video_id}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          );
      });


    return (
        <div className="container-fluid justify-content-center text-center page-container">
            <h1 className="text-resp-3 font-weight-bold text-center text-pink">DISCOVER</h1>
          <div className="row justify-content-center text-center pt-5 mx-auto">

            <div className="col-3 m-3" >
              <h2 className={this.state.youtubeOn ? `media-cat roster-active` : "member-cat"} onClick={this.handleYoutubeOn}>
                <img className="mb-2" src={yt_logo} style= {{width:"35%"}}/>
              </h2>
            </div>
            <div className="col-3 m-3">
              <h2 className={this.state.instaOn ? `media-cat roster-active` : "member-cat"} onClick={this.handleInstaOn}>
                <img className="mb-2 img-fluid" src={insta_logo} style= {{width:"25%"}}/>
              </h2>
            </div>

            <div className="row justify-content-center">

              {this.state.youtubeOn ?
                showVideos()
                :
                <div></div>
              }
              {this.state.instaOn ?
                <div className="mx-auto mt-3 embed-responsive ">
                  {this.state.loading? (
                    <Loader className="text-center mt-5"
                       type="Oval"
                       color="pink"
                       height={100}
                       width={100}
                     />
                  ) : null}
                    <iframe className="embed-responsive rounded" onLoad={this.hideLoader} width="750" height="400" src="https://open.insta.com/embed/playlist/4KNVe1iJs7k8zNsmFpIwjb" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
                :
                <div></div>
              }

            </div>

        </div>

        </div>

    );

  }

}

export default Discover;
