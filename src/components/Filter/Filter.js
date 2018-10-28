import React,{Component} from 'react'
import './Filter.css'

import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Icon from '@material-ui/core/Icon';

import Button from '@material-ui/core/Button';
import Factor from '../factor/factor';

class Filter extends Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  state = {
    visible:false
  }

  showSimulationVars = () =>{
    this.setState({
      visible:true,
    })
  }

  render(){
    return(
        <Card>
            <CardHeader title="Variables a modificar" className="center" />
            <p className="center">
                Con las siguientes variables podremos simulos como afectarian
                la calidad del aire en el pais seleccionado
            </p>
            <CardContent className="content">
                    <Grid container spacing={16}>
                        <Grid item xs={12} sm={4}>
                            <FormControl className="input">
                              <InputLabel htmlFor="age-simple">Ciudad</InputLabel>
                              <Select
                                onChange = { this.props.onChangeCity }
                                value = {this.props.citySelected.id}
                                inputProps={{
                                  name: 'age',
                                  id: 'age-simple',
                                }}
                              >
                                <MenuItem value="">
                                  <em>Ninguna</em>
                                </MenuItem>
                                {
                                    this.props.cities.map(item=>{
                                        return <MenuItem key={item.id} value={item.id}>{item.city}</MenuItem>
                                    })
                                }
                              </Select>
                            </FormControl>
                        </Grid>
                        {
                            this.state.visible &&
                            this.props.factors.map(item=>{
                                return (<Grid item xs={12} sm={4}>
                                    <Factor key={item.id} title={item.name} type={item.type} value={item.value}/>
                                </Grid>)
                            })
                        }
                    </Grid>
            <Grid item xs={12} className="center action-container">
                <Button variant="extendedFab" color="primary" aria-label="Delete" onClick={this.showSimulationVars}>
                    Simular <Icon>play_for_work</Icon>
                </Button>
            </Grid>
            </CardContent>
        </Card>
        )
    }
}

export default Filter
