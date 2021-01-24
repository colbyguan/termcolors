import React, { useState } from 'react';

class Notifs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: {}
        }
    }

    addNotif = (msg) => {
        const now = Date.now()
        this.state.messages[now] = msg
        this.setState({ messages: this.state.messages })
        setTimeout(() => {
            delete this.state.messages[now]
            this.setState({ messages: this.state.messages })
        }, 2000)
    }

    render() {
        return (
            <div className="absolute top-0 right-0" >
                {
                    Object.entries(this.state.messages).sort((a, b) => a[0] - b[0]).map(([date, message]) => (
                        <div className="bg-white border rounded-md w-32 p-6 shadow-lg">
                            {message}
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default Notifs