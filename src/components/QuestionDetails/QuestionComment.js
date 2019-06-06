import React, { Component } from 'react';

class QuestionComment extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 commentBox">
                        <div className="btn btn-group">
                            <div className="avaComment">
                                <img src="https://tophinhanhdep.com/wp-content/uploads/2017/07/luffy-dep-nhat-300x300.jpg" style={{borderRadius: '50%'}} alt="true"/>
                            </div>
                            <div className="usernameComment"><a href="">Michle Scofield</a></div>
                        </div>
                        <hr class="non-margin"/>
                        <div class="contentComment">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore veritatis doloremque dicta tempore quis cum magnam. Veritatis atque placeat exercitationem, ab hic debitis omnis nobis vero cum amet saepe perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nostrum voluptatibus, pariatur explicabo placeat illum, maiores, similique recusandae quisquam corrupti dolores iusto ea? Est, provident. Odit velit necessitatibus inventore eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptates quasi dolores quisquam impedit sit harum fugit consectetur perferendis ullam ipsum, earum autem dignissimos quam repellat optio. Ad, libero impedit.</p>
                        </div>
                        <hr class="non-margin"/>
                        <div class="btn btn-group non-padding">
                            <a name="" id="" class="btn" href="#" role="button">
                                <i class="fa fa-thumbs-o-up" aria-hidden="true"> Like</i>
                            </a>
                            <a name="" id="" class="btn" href="#" role="button">
                                <i class="fa fa-reply-all" aria-hidden="true"> Replay</i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuestionComment;