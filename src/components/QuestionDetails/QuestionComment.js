import React, { Component } from 'react';
import LikeReplay from './LikeReplay';

class QuestionComment extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                            <ol type="none" style={{ padding: 0 }}>
                                <li type="none">
                                    <div className="commentBox">
                                    <div className="btn btn-group">
                                        <div className="avaComment">
                                            <img src="https://tophinhanhdep.com/wp-content/uploads/2017/07/luffy-dep-nhat-300x300.jpg" style={{ borderRadius: '50%' }} alt="true" />
                                        </div>
                                        <div className="usernameComment"><a href="true">Mokey D.Luffy</a></div>
                                            </div>
                                            <hr className="non-margin" />
                                            <div className="contentComment">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore veritatis doloremque dicta tempore quis cum magnam. Veritatis atque placeat exercitationem, ab hic debitis omnis nobis vero cum amet saepe perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nostrum voluptatibus, pariatur explicabo placeat illum, maiores, similique recusandae quisquam corrupti dolores iusto ea? Est, provident. Odit velit necessitatibus inventore eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptates quasi dolores quisquam impedit sit harum fugit consectetur perferendis ullam ipsum, earum autem dignissimos quam repellat optio. Ad, libero impedit.</p>
                                            </div>
                                            <hr className="non-margin" />
                                            <div className="btn btn-group non-padding">
                                        <a name="like" id="thumd-up" className="btn" href="true" role="button">
                                            <i className="fa fa-thumbs-o-up" aria-hidden="true"> Like</i>
                                        </a>
                                        <div className="btn" role="button">
                                            <i className="fa fa-reply-all" aria-hidden="true"> Replay</i>
                                        </div>
                                    </div>
                                    </div>
                                </li>
                                <ul type="none">
                                    <li type="none" className="mt-3">
                                    <div className="commentBox">
                                    <div className="btn btn-group">
                                        <div className="avaComment">
                                            <img src="https://tophinhanhdep.com/wp-content/uploads/2017/07/luffy-dep-nhat-300x300.jpg" style={{ borderRadius: '50%' }} alt="true" />
                                        </div>
                                        <div className="usernameComment"><a href="true">Mokey D.Luffy</a></div>
                                            </div>
                                            <hr className="non-margin" />
                                            <div className="contentComment">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore veritatis doloremque dicta tempore quis cum magnam. Veritatis atque placeat exercitationem, ab hic debitis omnis nobis vero cum amet saepe perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nostrum voluptatibus, pariatur explicabo placeat illum, maiores, similique recusandae quisquam corrupti dolores iusto ea? Est, provident. Odit velit necessitatibus inventore eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptates quasi dolores quisquam impedit sit harum fugit consectetur perferendis ullam ipsum, earum autem dignissimos quam repellat optio. Ad, libero impedit.</p>
                                            </div>
                                            <hr className="non-margin" />
                                            <LikeReplay/>
                                    </div>
                                    </li>
                                    <li type="none" className="mt-3">
                                    <div className="commentBox">
                                    <div className="btn btn-group">
                                        <div className="avaComment">
                                            <img src="https://tophinhanhdep.com/wp-content/uploads/2017/07/luffy-dep-nhat-300x300.jpg" style={{ borderRadius: '50%' }} alt="true" />
                                        </div>
                                        <div className="usernameComment"><a href="true">Mokey D.Luffy</a></div>
                                            </div>
                                            <hr className="non-margin" />
                                            <div className="contentComment">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore veritatis doloremque dicta tempore quis cum magnam. Veritatis atque placeat exercitationem, ab hic debitis omnis nobis vero cum amet saepe perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nostrum voluptatibus, pariatur explicabo placeat illum, maiores, similique recusandae quisquam corrupti dolores iusto ea? Est, provident. Odit velit necessitatibus inventore eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptates quasi dolores quisquam impedit sit harum fugit consectetur perferendis ullam ipsum, earum autem dignissimos quam repellat optio. Ad, libero impedit.</p>
                                            </div>
                                            <hr className="non-margin" />
                                           <LikeReplay/>
                                    </div>
                                    </li>
                                </ul>
                            </ol>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuestionComment;