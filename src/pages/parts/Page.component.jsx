// ./src/index.jsx
import React from 'react';

import { connect } from 'react-redux'
import { fauxLoading } from '../../AppActions.js'

import LoadingBar from './LoadingBar.component.jsx'

class Page extends React.Component {
	constructor(props) {
		super(props);

	}
    componentDidMount() {
        this.props.fauxLoading();
    }
	render() {
        return (<div>
                    <LoadingBar loading={this.props.loading} loaded={this.props.loaded}/>
                    { this.props.children }
        		</div>);
    }
}

const mapStateToProps = (state, ownProps) =>{
    return {
        loading: state.app.meta.loading,
        loaded: state.app.meta.loaded
    };
}

const mapDispatchToProps = {
    fauxLoading
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
