import React from "react";
import '../component/Movie.css';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if(location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if(location.state) {
            return <span className="movie__name">{location.state.title}</span>;
        }else {
            return null;
        }
    }
}

export default Detail;