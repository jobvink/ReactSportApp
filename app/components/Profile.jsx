var React = require('react');
var DOM = require('react-dom');
var {connect} = require('react-redux');
var actions = require('actions');
var moment = require('moment');

import Page from 'Page';
import Panel from 'Panel';
import Image from 'react-image';

var Profile = React.createClass({
    handleStateChange: function (e) {
        e.preventDefault();

        var {naam, geboortedatum, woonplaats, werk, file} = this.refs;

        if(file !== undefined) {

            var profielfoto = file.files[0];

            if (profielfoto !== undefined) {
                this.props.dispatch(actions.startUploadingPhoto(profielfoto));
            }
        }
        if (naam !== undefined && geboortedatum !== undefined && woonplaats !== undefined && werk !== undefined) {
            if (naam.value.length > 0 && geboortedatum.value.length > 0 && woonplaats.value.length > 0 && werk.value.length > 0) {
                switch (this.state.profileState) {
                    case 'EDIT_MODE':
                    case 'CREATE_MODE':
                        this.setState({
                            profileState: null
                        });
                        this.props.dispatch(actions.startUpdateProfile(naam.value, geboortedatum.value, woonplaats.value, werk.value));
                        break;
                    default:
                        this.setState({
                            profileState: 'EDIT_MODE'
                        });
                }
            }
        } else {
            this.setState({
                profileState: 'EDIT_MODE'
            })
        }

    },


    getInitialState: function () {
        return {
            profileState: this.props.profile.naam === undefined ? 'CREATE_MODE' : null
        }
    },
    render: function () {
        var {trophys, profile} = this.props;
        var trophyType = function (trophy) {
            if (trophy.finished) {
                return (
                <div key={trophy.id} className="col-xs-12 col-md-3 finished">
                    <i className="fa fa-trophy" />
                    <h5>{trophy.title}</h5>
                    <p>{trophy.description}</p>
                </div>
                )
            } else {
                return (
                    <div key={trophy.id} className="col-xs-12 col-md-3">
                        <i className="fa fa-trophy" />
                        <h5>{trophy.title}</h5>
                        <p>{trophy.description}</p>
                    </div>
                )
            }
        };
        var renderTrophys = () => {
            return (
                <div id="achievements_wrapper" className="col-md-9 col-xs-12">
                <div id="achievements">
                    {trophys.map((trophy) => {
                        return (
                            trophyType(trophy)
                        )
                    })}
                </div>
            </div>
            )
        };

        const myComponent = () => {
            return <Image className="img-thumbnail" src={profile.url} />
        };

        var renderProfile = () => {
            var mode = this.state.profileState;
            switch (mode) {
                case 'EDIT_MODE':
                    return (<div>
                        {myComponent()}
                        <form onSubmit={this.handleStateChange}>
                            <input accept="image/*" ref="file" className="form-control" type="file"/>
                            <label>Naam:</label>
                            <input required ref="naam" type="text" className="form-control" defaultValue={profile.naam}/>
                            <label>Geboortedatum:</label>
                            <input required ref="geboortedatum" type="date" className="form-control"/>
                            <label>woonplaars:</label>
                            <input required ref="woonplaats" type="text" className="form-control" defaultValue={profile.woonplaats}/>
                            <label>werk:</label>
                            <input required ref="werk" type="text" className="form-control" defaultValue={profile.werk}/>
                            <br/>
                            <input type="submit" className="btn btn-success"/>
                        </form>
                    </div>);
                    break;
                case 'CREATE_MODE':
                    return (<div>
                        {myComponent()}
                        <form onSubmit={this.handleStateChange}>
                            <input accept="image/*" ref="file" className="form-control" type="file"/>
                            <label>Naam:</label>
                            <input required ref="naam" type="text" className="form-control"/>
                            <label>Geboortedatum:</label>
                            <input required ref="geboortedatum" type="date" className="form-control"/>
                            <label>woonplaats:</label>
                            <input required ref="woonplaats" type="text" className="form-control"/>
                            <label>werk:</label>
                            <input ref="werk" type="text" className="form-control"/>
                            <br/>
                            <input required type="submit" className="btn btn-success"/>
                        </form>
                    </div>);
                    break;
                default:
                    return (
                        <div>
                            {myComponent()}
                            <h1>{profile.naam}</h1>
                            <br />
                            <table className="h6">
                                <tbody>
                                <tr>
                                    <th><i className="fa fa-birthday-cake" /></th>
                                    {console.log(profile.geboortedatum)}
                                    <td>{moment().diff(profile.geboortedatum, 'years') + " jaar"}</td>
                                </tr>
                                <tr>
                                    <th><i className="fa fa-map-marker" /></th>
                                    <td>{profile.woonplaats}</td>
                                </tr>
                                <tr>
                                    <th><i className="fa fa-briefcase" /></th>
                                    <td>{profile.werk}</td>
                                </tr>
                                </tbody>
                            </table>
                            <br />
                            <button className="btn btn-success" onClick={this.handleStateChange}>Wijzig</button>
                        </div>
                    )
            }

        };
        return (
            <Page title="Profiel">
                <Panel largeTitle="Job Vink">
                    <div id="profile_page" className="container">
                        <div className="row">
                            <div className="col-md-3 col-xs-12">
                                {renderProfile()}
                            </div>
                                {renderTrophys()}
                        </div>
                    </div>
                </Panel>
            </Page>

        )
    }
});

export default connect(
    (state) => {
        return {
            trophys: state.trophys,
            profile: state.profile
        }
    }
)(Profile);