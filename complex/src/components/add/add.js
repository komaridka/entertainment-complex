import React, {Component} from "react";

import './add.sass'
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import axios from 'axios';

export const Add = ({ children }) => {



    return (
        <div className='maps'>
            <h2 className="text-center">
                Усі наші доступні події
            </h2>
            <DepartureList/>
        </div>



    );
};


class DepartureList extends Component {
    constructor(props) {
        super(props);



        this.state = {event: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/event')
            .then(response => {
                this.setState({ event: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    departureList() {
        const item = this.state.event.map(value =>{
            return <div className="col-md-6 append-news">
                <div className="corners-rounded bg-white news-item text-center">
                    <div className="crop corners-rounded">
                        <img  src={value.img}
                             alt="Игроленд  временно не работает"/>
                    </div>
                    <div className="news-date">Ціна: {value.prise}</div>
                    <a className="news-title h4">{value.name}</a>
                    <p className="news-desc">
                        {value.about.slice(0, 150)}...
                    </p>
                    <Button сlassName = 'headerBtn'
                            variant="contained"
                            color="primary"
                            size="small"
                    >
                        <Link to={`/${value.id}`}>Детальніше</Link>
                    </Button>
                </div>
            </div>
        })

        return item
    }


    render() {
        return (
            <div className='row'>
                { this.departureList() }
            </div>
        )
    }
}
