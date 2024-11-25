import React, { Component } from "react";
class Transaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            from: "",
            to: "",
            amount: "",
        };
    }
    getData = () => {
        fetch("https://acb-api.algoritmika.org/api/transaction")
            .then((res) => res.json())
            .then((data) => {
                if (data && data.length > 0) {
                    this.setState({
                        from: data[0].from,
                        to: data[0].to,
                        amount: data[0].amount,
                    });
                }
            })
            .catch((error) => console.error(error));
    };

    componentDidMount() {
        this.getData();
    }

    render() {
        const { from, to, amount } = this.state;

        return (
            <div>
                <h2>Transaction</h2>
                <div>
                    <label>From: </label>
                    <input value={from} readOnly />
                </div>
                <div>
                    <label>To: </label>
                    <input value={to} readOnly />
                </div>
                <div>
                    <label>Amount: </label>
                    <input value={amount} readOnly />
                </div>
            </div>
        );
    }
}

export default Transaction;
