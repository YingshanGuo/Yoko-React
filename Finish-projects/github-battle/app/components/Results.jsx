var React = require('react');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var MainContainer = require('./MainContainer');
var Link=require('react-router').Link;
var Loading = require('./Loading');

function puke(obj) {
    return <pre>{JSON.stringify(obj, 2, '') }</pre>
}
function StartOver() {
    return (
        <div className='col-sm-12' style={styles.space}>
            <Link to='/playerOne'>
                <button type='button' className='btn btn-lg btn-danger'>Start Over</button>
            </Link>
        </div>
    )
}
function Results(props) {
    if(props.isloading===true){
        return(
            <Loading text='One Moment' speed={100}/>
        )
    }
    if (props.scores[0] === props.scores[1]) {
        return (
            <MainContainer>
                <h1>It is a tie!</h1>
                <StartOver/>
            </MainContainer>
        )
    }

    var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
    var losingIndex = winningIndex === 0 ? 1 : 0;
    return (
        <MainContainer>
            <h1>Results</h1>
            <div className='col-sm-8 col-sm-offset-2'>
                <UserDetailsWrapper header='Winner'>
                    <UserDetails score={props.scores[winningIndex]} info={props.scores[winningIndex]}/>
                </UserDetailsWrapper>
                <UserDetailsWrapper header='Loser'>
                    <UserDetails score={props.scores[losingIndex]} info={props.scores[losingIndex]}/>
                </UserDetailsWrapper>
            </div>
            <StartOver/>
        </MainContainer>
    )
}

Results.PropTypes = {
    isloading: PropTypes.bool.isrequired,
    playersInfo: PropTypes.array.isrequired,
    scores: PropTypes.array.isrequired
}
module.exports = Results;