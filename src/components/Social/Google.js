import React, { Component } from "react";

import CustomIcon from "../../components/Cores/button/CustomIcon";
import config from "../../config/configSocial";

class GoogleLogin extends Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        (function() {
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.async = true;
            e.src = "https://apis.google.com/js/client:platform.js?onload=gPOnLoad";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t);
        })();
    }

    //Triggering login for google
    googleLogin = () => {
        // let response = null;
        window.gapi.auth.signIn({
            callback: function(authResponse) {
                this.googleSignInCallback(authResponse);
            }.bind(this),
            clientid: config.google, //Google client Id
            cookiepolicy: "single_host_origin",
            requestvisibleactions: "http://schema.org/AddAction",
            scope: "public_profile,email"
        });
    };

    googleSignInCallback = e => {
        console.log(e);
        if (e["status"]["signed_in"]) {
            window.gapi.client.load(
                "plus",
                "v1",
                function() {
                    if (e["access_token"]) {
                        this.getUserGoogleProfile(e["access_token"]);
                    } else if (e["error"]) {
                        console.log("Import error", "Error occured while importing data");
                    }
                }.bind(this)
            );
        } else {
            console.log("Oops... Error occured while importing data");
        }
    };

    getUserGoogleProfile = accesstoken => {
        var e = window.gapi.client.plus.people.get({
            userId: "me"
        });
        e.execute(function(e) {
            if (e.error) {
                console.log(e.message);
                console.log("Import error - Error occured while importing data");
                return;
            } else if (e.id) {
                //Profile data
                alert("Successfull login from google : " + e.displayName);
                console.log(e);
                return;
            }
        });
    };

    render() {
        const { content, match } = this.props;
        return (
            <div className="btn-social">
                <button
                    type="button"
                    className={content === "Facebook" ? `btn btn-fb` : `btn btn-gg`}
                    style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                    onClick={() => this.googleLogin()}
                >
                    <CustomIcon icon={content} />
                    {match ? `Login with ${content}` : `Sign up with ${content}`}
                </button>
            </div>
        );
    }
}

export default GoogleLogin;
