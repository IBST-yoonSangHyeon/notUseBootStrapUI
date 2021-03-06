import { Table, TableBody, TableCell, TableHead, TableRow, Paper, CircularProgress } from '@material-ui/core';
import React, { Component } from 'react';
import './app.css';
import Customer from './components/customer';
import { withStyles } from '@material-ui/core/styles';
import CustomerAdd from './components/customerAdd';

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  talbe: {
    minWidth: 1080
  },
  progress: {
      margin: theme.spacing.unit * 2
  }
})


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customers: '',
      completed: 0,
    }
    this.stateRefresh = this.stateRefresh.bind(this);
  }

  stateRefresh() {
    this.setState({
      customers: '',
      completed:0,
    })
    this.callApi()
      .then(res => this.setState({ customers: res }))
      .catch(err => console.log(err));
  }


  componentDidMount() {
    //this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({ customers: res }))
      .catch(err => console.log(err));
  }

  componentWillUnmount() {
    //clearInterval(this.timer)
  }

  callApi = async () => {
    const reponse = await fetch('/api/customers');
    const body = await reponse.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  }



  render() {
    const { classes } = this.props;
    console.log(this.state.customers);
    return (
      <div>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.customers ?
              this.state.customers.map(c => {
                return <Customer
                          stateRefresh={this.stateRefresh}
                          key={c.id}
                          id={c.id}
                          image={c.image}
                          name={c.name}
                          birthday={c.birthday }
                          gender={c.gender }
                          job={c.job }
                        />
              }) :
                <TableRow>
                  <TableCell colSpan="6" align="center">
                    <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
                  </TableCell>
                </TableRow>
            }
          </TableBody>
          </Table>
      </Paper>
        <CustomerAdd stateRefresh={this.stateRefresh}/>
      </div>
    );
}
}

export default withStyles(styles)(App);


