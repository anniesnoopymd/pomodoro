class PomodoroTimer extends React.Component{

    constructor(){
      super();
      this.state = {timeElapsed: 0}
    }

    totalTime(timeOne, timeTwo){
        return timeOne + timeTwo;
    }

    componentDidMount() {
        // console.log(new Date());
        this.setInterval = setInterval(this.elapseTime.bind(this),1000)
        this.setState({start: new Date()});
    }

    elapseTime(){
        //How much time has elapsed?
        var currentTime = new Date();
        // console.log("CURRENT" + currentTime);
        // console.log(this.state.start);
        //var timeElapsed = CURRENT TIME - START TIME
        var timeElapsed = Math.floor((currentTime - this.state.start) / 1000);
        console.log("timeElapsed" + timeElapsed);

        //if timeElapsed = 25 minutes -> then alert
        this.setState({timeElapsed: timeElapsed});
        console.log(this);

    }

    render(){
      return(
        <div>This timer runs for {this.props.workingTime} minutes,
        followed by rest of {this.props.restingTime} minutes.
        <br />
        For a total time of {this.totalTime(this.props.workingTime, this.props.restingTime)} minutes.
        <br />
        There are {this.state.timeElapsed} seconds elapsed.</div>
      )
    }

}

ReactDOM.render(
    <PomodoroTimer workingTime={25} restingTime={5}/>,
    document.getElementById('app')

);
