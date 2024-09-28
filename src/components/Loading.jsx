import React from 'react'
import logo from './assets/imgs/logo.png'
import Spin from 'react-reveal/Spin';
import Zoom from 'react-reveal/Zoom';



const Loading = () => {
    return (
        <div className="container text-center justify-content-center w-100 page-centered">
            <Zoom>
              <Spin>
                <img id="rotate" src={logo} width="50%"/>
              </Spin>
            </Zoom>
        </div>
    )
}

export default Loading
